// 
const User = require('./dal');
// Bcrytpt
const bcrypt = require("bcryptjs");

// jwt
const jwt = require("jsonwebtoken");


const AppError = require("../../utils/appError");

exports.createUser = async (req, res, next) => {
    try {
        const data = req.body
        if (!data.phoneNumber || !data.password){
            return next(new AppError("Please fill all the reqiured fields.", 400));
       
        }
        
        // const data = {name, email, password };
        data.password =await bcrypt.hash(data.password, 10);
       
        const user = await User.createUser(data);
        
        res.status(201).json({
            status: 'success',
            data: {
                user
            },
            message:"New user created."
        });
        
    } catch (error) {
        next(error)
    }
};
exports.fetchUsers = async (req,res, next)=>{
    try {
       
       
        const users = await User.fetchUsers();
        
        // number of all users in db
        const userCount = await User.usersCount();

        // check if user exist
        if(!users){
            return (new AppError("There is no users", 400));
        }
        // response
        res.status(200).json({
            status: "Success",
            data: {users},
            
        });
        
    } catch (error) {
        next(error)
    }
}

// get user by id
exports.getUserById = async (req,res,next) =>{
    try {
        const user = await User.getUserById(req.params.id);
        if(!user){
            return next(
                new AppError("There is no user with the specified id", 400)
              );
        }
        // response
        res.status(200).json({
            status:"Success",
            data:{user}
        })
    } catch (error) {
        next(error)
    }
}
// update user info
exports.updateUser = async (req,res,next) =>{
    try {
        const data = req.body;
        const user = await User.getUserById(req.params.id);
        // check if user exists
        if(!user){
            return next (new AppError("There is no user by this id.", 400));
        }
        await User.updateUser(req.params.id, data);
     
        // response
        res.status(200).json({
            status:"Success",
            message: "User updated successfull."
        })
        
    } catch (error) {
        next(error)
    }
}
// delete user
exports.deleteUser = async (req,res,next) =>{
    try {
        const id = req.params.id
        const user = await User.getUserById(id);
        // check if user exists
        if(!user){
            return next(new AppError("There is no user by this id.", 400));
        }

        await User.deleteUser(id);
     
        // response
        res.status(200).json({
            status:"Success",
            message: "User successfully deleted."
        })
    } catch (error) {
        next(error)
    }
}
exports.filterUser = async (req,res, next) =>{
    try {
        // queries
        const filters = req.query;
        
        const user = await User.filterUser(filters);
        // response
        res.status(200).json({
            status:"Success",
            data:{user}
        })
    } catch (error) {
     next(error)   
    }
}
// login

exports.login = async(req,res,next) => {
    try {
        const {phoneNumber, password} = req.body;

        if(!phoneNumber || !password){
            return next(
                new AppError("The required fields can not be empty", 400)
              );
        }
        // Login
      const user = await User.login(phoneNumber, password );
      
      // Create token
      const token = jwt.sign({ id: user.id, type: user.role}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
  
      // Respond
      res.status(200).json({
        success:true,
        message: "Successfully loggedIn.",
        data: {
            user,
        },
        token,
      });
        
    } catch (error) {
        next(error)
    }
}
