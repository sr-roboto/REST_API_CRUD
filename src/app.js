import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import cors from 'cors';
import { indexRoutes } from './routes/index.routes.js';
import { productsRoutes } from './routes/products.routes.js';

// inicializamos app
export const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
  })
);

// rutas
app.use(indexRoutes);
app.use('/api', productsRoutes);
