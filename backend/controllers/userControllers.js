require('dotenv').config();
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {SECRETKEY}= process.env;

exports.createNewUser = async(req,res) =>{
//leer los datos 
const user = new Users(req.body);
user.password = await bcrypt.hash(req.body.password, 10);
try {
    await user.save();
    res.json({
        msg:'Usuarion Creado Correctamente',
        user
    });
} catch (error) {
    console.log(error);
    res.status(400).json({msg:'Hubo un error'});
}
};

exports.authUser =async(req,res,next) =>{
const {email,password} = req.body;
const user = await Users.findOne({email});
if(!user){
    //si el usuario no existe
    await res.status(401).json({msg:'Ese usuario no existe'});
    next();
}else{
    //el usuario existe verificar si el password es correcto
    if(!bcrypt.compareSync(password,user.password)){
        //si el password es incorrecto
        await res.status(401).json({msg:'Password Incorrecto'});
        next();
    }else{
        //password correcto ,firmar el token
        const token = jwt.sign({
            email:user.email,
            name:user.name,
            id:user._id
        },
        `${SECRETKEY}`,{
            expiresIn: '2h'
        });
        //retornar el token
        res.json({token})
    }
}
};