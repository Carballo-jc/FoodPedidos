const Clients = require('../models/Clients');


//crear un nuevo cliente
exports.newClients = async(req,res,next)=>{
//  console.log(req.body)
const client = new Clients(req.body);
try {
    await client.save();
    res.json({
        msg:'Se agrego un nuevo cliente',
        client
    })
} catch (error) {
    console.log(error);
   return next();
}
};
//mostrar todos los clientes
exports.getClients = async(req,res,next)=>{
    try {
        const clients = await Clients.find({});
        res.json(clients);
    } catch (error) {
        console.log(error);
       return next();
        
    }
};
//muestra el cliente por id
exports.showClient = async(req,res,next)=>{
    const client = await Clients.findById(req.params.id);
    if(!client){
        res.status(400).json({msg:'Ese cliente no existe'});
      return  next();
    }
    res.json(client)
};

//actualizar un cliente por su id
exports.updateClient = async(req,res,next)=>{
    try {
        const client = await Clients.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true
        });
        res.json({
            msg:'cliente actualizado',
            client});
    } catch (error) {
        console.log(error);
        return next();
    }
};

//elimiar un cliente
exports.deleteClient = async(req,res,next)=>{
    try {
        await Clients.findOneAndDelete({_id: req.params.id});
        res.json({msg:'Cliente eliminado'});
    } catch (error) {
        console.log(error);
        return next();
    }
};