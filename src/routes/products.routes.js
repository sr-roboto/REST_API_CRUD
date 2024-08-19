import { Router } from 'express';
import { productsControllers } from '../controllers/products.controllers.js';
export const productsRoutes = Router();

productsRoutes.post('/products', productsControllers.createProduct);
productsRoutes.get('/products', productsControllers.readProducts);
productsRoutes.get('/products/:id', productsControllers.readProduct);
productsRoutes.put('/products/:id', productsControllers.updateProduct);
productsRoutes.delete('/products/:id', productsControllers.deleteProducts);
