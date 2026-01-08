import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true, index: true },
  description: String,
  itemNumber: Number,
  meta: {
    denomination: String,
    series: String,
    designer: String,
    issueYear: Number,
    stampsPerPane: Number,
    perforation: Boolean,
  },
  releaseDate: { type: Date, index: true },
  isAvailable: { type: Boolean, default: true },
  printQuantity: {
    type: Number,
    default: null
  },
  isMassProduction: {
    type: Boolean,
    default: false
  },
  images: {
    original: String,
    small: String,
    pane: String
  }
});

export const ProductModel = mongoose.model('Product', ProductSchema);