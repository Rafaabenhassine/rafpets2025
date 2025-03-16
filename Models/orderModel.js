//importation
const mongoose=require("mongoose")

//create schema
const schema = mongoose.Schema;

const orderSchema = new schema({
      
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
    ],
    totalPrice: {
        type: Number,
    }
});

//export
module.exports = mongoose.model("order", orderSchema);
