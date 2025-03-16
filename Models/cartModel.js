//importation
const mongoose=require("mongoose")

//create schema
const schema = mongoose.Schema;

const cartSchema = new schema({
      
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"product"
            },
            quntity:{
                type: Number,
            }
        }
    ]
    
});

//export
module.exports = mongoose.model("cart", cartSchema);
