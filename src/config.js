import dotenv from 'dotenv';

// inicializamos variable de entorno
dotenv.config();

// inicializamos en el puerto 3000
export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.DB_CONNECTION_STRING;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
