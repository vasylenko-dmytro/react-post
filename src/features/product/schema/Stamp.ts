import mongoose from 'mongoose';

const StampSchema = new mongoose.Schema({
  stamp_id: { type: String, required: true },
  name: { type: String, required: true, index: true },
  description: String,
  stampSKU: Number,
  meta: {
    denomination: String,
    series: String,
    designer: String,
    year: Number,
    stampsPerPane: Number,
    perforation: Boolean,
  },
  releaseDate: { type: Date, index: true },
  isAvailable: { type: Boolean, default: true },
  printQuantity: { type: Number, default: null },
  isMassProduction: { type: Boolean, default: false },
  images: {
    original: String,
    small: String,
    pane: String
  }
});

export const ProductModel = mongoose.model('Product', StampSchema);