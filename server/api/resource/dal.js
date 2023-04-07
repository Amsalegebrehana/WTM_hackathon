
// resource model
const ResourceModel = require("./model");

const AppError = require("../../utils/appError");

class Resource{
    static async createResource(data){
        try{
            const resource = await ResourceModel.insertMany(data);

            if (!resource){
                throw new AppError("There is a field missing", 400)
            };

            return resource;
        }catch(err){
            throw err;
        }
    }
     // all number of users
     static async resourcesCount(){
        try {
            
            const resources = await ResourceModel.countDocuments();
            return resources;

        } catch (error) {
            throw error;
        }
    }
    // get all resources
    static async fetchResources(){
        
        try {
            
            const resources = await ResourceModel.find();
            return resources;

        } catch (error) {
            throw error;
        }
    }
      // filter resource
      static async filterResource(filters){
        try {
            // get all resources
            const resource = await ResourceModel.find()
            // filter resources
            const filteredResource = await resource.filter( u=>{
           
                let isValid = true;
                for (let key in filters) {
             
                    isValid = isValid && u[key] == filters[key];
                }
                return isValid;
            })
            return filteredResource;
        } catch (error) {
            throw error
        }
    }
    // get resource by ID
    static async getResourceById(id){
        try {
            const resource = await ResourceModel.findById(id);
            return resource;

        } catch (error) {
            throw error;
        }
    }
        // delete resource
    static async deleteResource(id){
        try {
            await ResourceModel.findByIdAndDelete(id);

        } catch (error) {
          throw error;   
        }
    }

    // update resource
    static async updateResource(id, data){
        try {
            const resource = await ResourceModel.findByIdAndUpdate(id,data);
            return resource;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Resource;