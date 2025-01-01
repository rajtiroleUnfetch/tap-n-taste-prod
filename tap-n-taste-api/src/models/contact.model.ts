import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    phone: { 
      type: String, 
      required: true, 
      trim: true 
    }, // Contact phone number

    email: { 
      type: String, 
      unique: true, 
      lowercase: true, 
      trim: true,
      required: true 
    }, // Contact email address

    restaurant: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Restaurant', 
      required: true 
    }, // Reference to the restaurant the contact information belongs to

    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    }, // User who created or owns this contact information

    contactType: {
      type: String, 
      enum: ['General', 'Support', 'Sales', 'Marketing', 'Other'],
      default: 'General' 
    }, // Type of contact (e.g., general inquiries, support, sales, etc.)

    status: {
      type: String, 
      enum: ['active', 'inactive', 'archived'], 
      default: 'active' 
    }, // Status of the contact information

    preferredContactMethod: {
      type: String, 
      enum: ['Email', 'Phone', 'SMS', 'WhatsApp', 'Other'], 
      default: 'Email' 
    }, // Preferred contact method for communication

    createdAt: { 
      type: Date, 
      default: Date.now 
    }, // Date when the contact was created

    updatedAt: { 
      type: Date 
    }, // Last updated date

  },
  { timestamps: true }
);

// Create and export the Contact model
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
