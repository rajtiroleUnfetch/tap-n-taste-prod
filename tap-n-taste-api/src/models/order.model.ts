import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    items: [
      {
        menuItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'MenuItem',
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed'],
      default: 'Pending',
    },
    orderStatus: {
      type: String,
      enum: [
        'Placed',
        'Confirmed',
        'In Preparation',
        'Ready for Pickup',
        'Out for Delivery',
        'Completed',
        'Cancelled',
      ],
      default: 'Placed',
    },
    customerNote: { type: String },
    adminNote: { type: String },
    deliveryAddress: {
      street: { type: String },
      city: { type: String },
      zipCode: { type: String },
      country: { type: String },
    },
    deliveryMethod: { type: String, enum: ['Pickup', 'Delivery'], default: 'Delivery' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
