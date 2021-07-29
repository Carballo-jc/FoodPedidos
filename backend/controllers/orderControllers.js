const Orders = require("../models/Oders");

//nuevo pedido
exports.newOrder = async (req, res, next) => {
  const order = new Orders(req.body);
  try {
    await order.save();
    res.json({
      msg: "Se agrego un nuevo pedido",
      order,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

//mostrar los pedido
exports.getAllOrden = async (req, res, next) => {
  try {
    const allOrders = await Orders.find({}).populate("client").populate({
      path: "order.product",
      model: "Products",
    });
    res.json(allOrders);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showOrderById = async (req, res, next) => {
  const order = await Orders.findById(req.params.id)
    .populate("client")
    .populate({
      path: "order.product",
      model: "Products",
    });
  if (!order) {
    res.json({ msg: "Ese pedido no existe" });
    return next();
  }
  res.json(order);
};
exports.updateOrderById = async (req, res, next) => {
  try {
    let order = await Orders.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    )
      .populate("client")
      .populate({
        path: "order.product",
        model: "Products",
      });
    res.json(order);
  } catch (error) {
    console.log(error);
    next();
  }
};
//eliminar un pedido
exports.deleteOrderById = async(req,res,next)=>{
    try {
        await Orders.findOneAndDelete({_id: req.params.id});
        res.json({msg:'El pedido fue eliminado'});
    } catch (error) {
        cosole.log(error);
        next();
        
    }
}