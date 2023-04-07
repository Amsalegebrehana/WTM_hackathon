
const AppError = require("../../utils/appError");
const Resource = require("./dal");

exports.createResource = async (req, res, next) => {
    try {
        const data = req.body
        if (!data.name || !data.description){
            return next(new AppError("Please fill all the reqiured fields.", 400));
       
        }
        const resource = await Resource.createResource(data);
        
        res.status(201).json({
            status: 'success',
            data: {
                resource
            },
            message:"New resource added."
        });
        
    } catch (error) {
        next(error)
    }
};
exports.fetchResources = async (req,res, next)=>{
    try {
        const resources = await Resource.fetchResources();
        
        // number of all users in db
        const rescourcesCount = await Resource.rescourcesCount();

        // check if user exist
        if(!resources){
            return (new AppError("There are no resources found", 400));
        }
        // response
        res.status(200).json({
            status: "Success",
            data: {resources},
            
        });
        
    } catch (error) {
        next(error)
    }
}

// get user by id
exports.getResourceById = async (req,res,next) =>{
    try {
        const resource = await Resource.getResourceById(req.params.id);
        if(!resource){
            return next(
                new AppError("There is no resource with the specified id", 400)
              );
        }
        // response
        res.status(200).json({
            status:"Success",
            data:{resource}
        })
    } catch (error) {
        next(error)
    }
}
// update user info
exports.updateResource = async (req,res,next) =>{
    try {
        const data = req.body;
        const resource = await Resource.getResourceById(req.params.id);
        // check if user exists
        if(!resource){
            return next (new AppError("There is no resource by this id.", 400));
        }
        await Resource.updateResource(req.params.id, data);
     
        // response
        res.status(200).json({
            status:"Success",
            message: "Resource updated successfully!"
        })
        
    } catch (error) {
        next(error)
    }
}
// delete user
exports.deleteResource = async (req,res,next) =>{
    try {
        const id = req.params.id
        const resource = await Resource.getResourceById(id);
        // check if user exists
        if(!resource){
            return next(new AppError("There is no resource by this id.", 400));
        }

        await Resource.deleteResource(id);
     
        // response
        res.status(200).json({
            status:"Success",
            message: "Resource successfully deleted!"
        })
    } catch (error) {
        next(error)
    }
}
exports.filterResoucre = async (req,res, next) =>{
    try {
        // queries
        const filters = req.query;
        
        const resources = await Resource.filterResoucre(filters);
        // response
        res.status(200).json({
            status:"Success",
            data:{resources}
        })
    } catch (error) {
     next(error)   
    }
}