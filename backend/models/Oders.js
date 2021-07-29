const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = Schema({
    client:{
        type:Schema.ObjectId,
        ref:'Clients'
    },
    order:[{
        product:{
            type:Schema.ObjectId,
            ref:'Products'
        },
        amount:Number
    }],
    total:{
        type:Number
    }
});
module.exports = mongoose.model('Orders',OrderSchema);