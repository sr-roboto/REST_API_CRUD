import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
  }
);

export const productModel = model('product', productSchema);
