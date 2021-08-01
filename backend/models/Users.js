const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase:true,
        trim:true
    },
    name:{
        type: String,
        required: 'Agrega Tu Nombre'
    },
    password:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Users',UserSchema);