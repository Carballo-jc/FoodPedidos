const express = require('express');
const clientControllers = require('../controllers/clientControllers');
const productControllers = require('../controllers/productControllers');
const orderControllers = require('../controllers/orderControllers');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

module.exports = ()=>{

 //agregar nuevos clietes vias post
 router.post('/food/api/clientes',clientControllers.newClients);
 //obtener los clientes
 router.get('/food/api/clientes',clientControllers.getClients);
 //obtener ciente por id
 router.get('/food/api/clientes/:id',clientControllers.showClient);
 //actualizar el cliente
 router.put('/food/api/clientes/:id',clientControllers.updateClient);
 //eliminar un cliente
 router.delete('/food/api/clientes/:id',clientControllers.deleteClient);

 // creacion de productos en la db
 router.post('/food/api/productos',productControllers.newProduct);
 //mostrar todo los productos
 router.get('/food/api/productos',productControllers.getProducts);
//mostrar un producto 
router.get('/food/api/productos/:id',productControllers.showProduct);
//actualizar un producto
router.put('/food/api/productos/:id',productControllers.updateProduct);
//eliminar un producto
router.delete('/food/api/productos/:id',productControllers.deleteProduct);

/***pedidos */
//agregar una orden
router.post('/food/api/pedidos',orderControllers.newOrder);
//obtener todas las ordenes
router.get('/food/api/pedidos',orderControllers.getAllOrden);
//mostrar pedido por id
router.get('/food/api/pedidos/:id',orderControllers.showOrderById);
//actualizar pedido por id
router.put('/food/api/pedidos/:id', orderControllers.updateOrderById);
//eliminar un pedido
router.delete('/food/api/pedidos/:id', orderControllers.deleteOrderById)

//Users
router.post('/food/api/crear-cuenta', userControllers.createNewUser);
router.post('/food/api/iniciar-sesion', userControllers.authUser);


    return router
}