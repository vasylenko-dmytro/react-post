import mongoose from 'mongoose';

const UserCollectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  productId: {
    type: String,
    ref: 'Product',
    required: true
  },
  quantity: { type: Number, default: 1 },
  addedAt: { type: Date, default: Date.now }
});

// unique index
UserCollectionSchema.index({ userId: 1, productId: 1 }, { unique: true });