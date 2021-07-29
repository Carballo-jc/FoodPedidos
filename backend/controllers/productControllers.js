const Products = require('../models/Products');
//crear productos
exports.newProduct = async(req,res,next)=>{
    const product = new Products(req.body);
    try {
        await product.save();
        res.json({msg:'Se agrego un nuevo producto',product})
    } catch (error) {
        console.log(error);
        return next();
    }
};
//traer todos los productos de la db
exports.getProducts = async(req,res,next)=>{
    try {
        const products = await Products.find({});
        res.json(products)
    } catch (error) {
        console.log(error);
        return next();
    }
};

//mostrar un producto 
exports.showProduct = async(req,res,next)=>{
    const product = await Products.findById(req.params.id);
    if(!product){
        res.status(400).json({msg:'Ese producto no existe'});
        return next();
    }
    res.json({msg:'Producto encontrado',product})
};
exports.updateProduct = async(req,res,next)=>{
    try {
        let product = await Products.findOneAndUpdate({_id:req.params.id},
            req.body,{
                new:true
            });
            res.json(product);
    } catch (error) {
        console.log(error);
        return next();
    }

};

exports.deleteProduct = async(req,res,next)=>{
    try {
        await Products.findOneAndDelete({_id: req.params.id});
        res.json({msg:'Producto eliminado'});
    } catch (error) {
        console.log(error);
        return next();
    }
};