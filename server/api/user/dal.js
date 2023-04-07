
// user model
const UserModel = require("./model");

const AppError = require("../../utils/appError");
// Bcrytpt
const bcrypt = require("bcryptjs");
class User{
    static async createUser(data){
        try{
            const user = await UserModel.insertMany(data);

            if (!user){
                throw new AppError("There is a field missing", 400)
            };

            return user;
        }catch(err){
            throw err;
        }
    }
     // all number of users
     static async usersCount(){
        try {
            
            const users = await UserModel.countDocuments()
            return users;

        } catch (error) {
            throw error;
        }
    }
    // get all users
    static async fetchUsers(){
        
        try {
            
            const users = await UserModel.find();
            return users;
        } catch (error) {
            throw error;
        }
    }
      // filter user
      static async filterUser(filters){
        try {
            // get all users
            const user = await UserModel.find()
            // filter users
            const filteredUser = await user.filter( u=>{
           
                let isValid = true;
                for (let key in filters) {
             
                    isValid = isValid && u[key] == filters[key];
                }
                return isValid;
            })
            return filteredUser;
        } catch (error) {
            throw error
        }
    }
    // get user by ID
    static async getUserById(id){
        try {
            const user = await UserModel.findById(id);
            return user;

        } catch (error) {
            throw error;
        }
    }
        // delete Users
    static async deleteUser(id){
        try {
            await UserModel.findByIdAndDelete(id);

        } catch (error) {
          throw error;   
        }
    }
    static async updateUser(id, data){
        try {
            const user = await UserModel.findByIdAndUpdate(id,data);
            return user;
        } catch (error) {
            throw error;
        }
    }
    static async login(phoneNumber, password){
        try {

            const user = await UserModel.findOne({phoneNumber});
   
            if(!user){
                throw new AppError("User does not exist", 400)
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                throw new AppError("Incorrect password", 400)
            }
            
            
            return user;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = User;