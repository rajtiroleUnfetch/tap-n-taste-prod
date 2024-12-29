import Order from '../models/order.model'; // Assuming you have a Mongoose model for the order
// import { io } from '../main'; // Importing the socket instance

// Create Order
export const createOrder = async (req, res) => {
  try {
    // Create the order from the request body
    const order = await Order.create(req.body);

    // Notify clients about the new order (via Socket.IO)
    // io.emit('new-order', order);  // This will emit a 'new-order' event to all connected clients

    // Return the created order as a response
    res.status(201).json(order);
  } catch (error) {
    // If there's an error, send a 500 response
    res.status(500).json({ message: error.message });
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    // Find the order by ID and update the status
    const order = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus },
      { new: true }
    );

    if (!order) return res.status(404).json({ message: 'Order not found' });

    res.json(order);  // Send the updated order as a response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
