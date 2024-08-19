import { productModel } from '../models/products.models.js';
import { uploadImages, deleteImage } from '../utils/cloud.js';
import fs from 'fs/promises';
export const productsControllers = {};

productsControllers.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const createProduct = await productModel.create({
      name,
      description,
      price,
    });
    if (req.files?.image) {
      const result = await uploadImages(req.files.image.tempFilePath);
      createProduct.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      createProduct.save();
      await fs.unlink(req.files.image.tempFilePath);
    }
    return res
      .status(201)
      .json({ msg: 'producto creado con exito', createProduct });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

productsControllers.readProducts = async (req, res) => {
  try {
    const readProducts = await productModel.find();
    return res.status(200).json(readProducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

productsControllers.readProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const readProduct = await productModel.findById(id);
    return res.status(200).json({ msg: 'Producto encontrado', readProduct });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

productsControllers.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: 'producto actualizado con exito', updateProduct });
  } catch (error) {
    console.log();
    return res.status(500).json({ msg: error.message });
  }
};

productsControllers.deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await productModel.findByIdAndDelete(id);
    if (deleteProduct.image.public_id) {
      await deleteImage(deleteProduct.image.public_id);
    }
    return res
      .status(200)
      .json({ msg: 'Producto eliminado con exito', deleteProduct });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
