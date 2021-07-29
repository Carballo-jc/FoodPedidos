const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = Schema({
    name:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    available:{
        type:Boolean,
        trim:true
    },
    image:{
        type:String,
        trim:true
    },
    sublevel:{
        type:String,
        trim:true
    }
});

module.exports = mongoose.model('Products',ProductSchema);