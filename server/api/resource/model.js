
// Mongoose
const mongoose = require("mongoose");
// 
const validator = require("validator");
// Students Schema
const resourceSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter the name of the material"],
        maxlength: [500, "Please shorten the name of the material title"],
        minlength: [10, "Please enter a more detailed title"],
      },
      description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: [2000, "Description can not exceed 2000 characters"],
        minlength: [50, "Description can not be less than 50 character"],
      },
      
      url: {
        type: String,
        validate: { 
          validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
          message: 'Must be a Valid URL' 
        },
        required: true,
        unique: false,
      },
      
      login_status:{
        type: Boolean,
        required: true
      },
    }
  );

// Create and export User model
const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;