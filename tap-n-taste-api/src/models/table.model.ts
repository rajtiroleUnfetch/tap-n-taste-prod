import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, // e.g., "Table 1"
  number: { type: Number, required: true, unique: true }, // e.g., 1
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  
  // QR Code for menu/digital interaction
  qrCode: { type: String, trim: true }, // URL or string for QR code

  // Table Features
  capacity: { type: Number, required: true, min: 1 }, // Number of people it can seat
  isOutdoor: { type: Boolean, default: false }, // Indoor or outdoor seating
  hasPowerOutlet: { type: Boolean, default: false }, // Indicates if it has a power outlet for charging
  hasPrivacyPartition: { type: Boolean, default: false }, // For semi-private or private dining
  isAccessible: { type: Boolean, default: false }, // Wheelchair accessibility

  // Status and Availability
  isAvailable: { type: Boolean, default: true }, // Whether the table is currently available
  reservationStatus: {
    type: String,
    enum: ["Reserved", "Occupied", "Available", "Maintenance"],
    default: "Available",
  },
  
  // Location Details
  location: {
    area: { type: String, trim: true }, // e.g., "Main Hall", "Rooftop"
    position: { type: String, trim: true }, // e.g., "Near Window", "Corner"
    floor: { type: Number, default: 1 }, // Floor number
  },

  // Booking Information
  bookings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      bookingTime: { type: Date },
      duration: { type: Number, min: 1 }, // Duration in minutes
      specialRequests: { type: String, trim: true }, // e.g., "High Chair", "Birthday Setup"
    },
  ],

  // Additional Features
  ambianceTags: [
    {
      type: String, // e.g., "Romantic", "Family-Friendly", "Quiet"
      trim: true,
    },
  ],
  lastCleanedAt: { type: Date, default: Date.now }, // Timestamp for last cleaning
  maintenanceNotes: { type: String, trim: true }, // Notes for maintenance issues

  // For analytics or dynamic management
  popularityScore: { type: Number, default: 0 }, // Derived from usage frequency
  preferredUsageTime: [
    {
      startTime: { type: String }, // e.g., "18:00"
      endTime: { type: String }, // e.g., "22:00"
    },
  ],

  // Admin and Operational Tracking
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
}, { timestamps: true });

const Table = mongoose.model("Table", tableSchema);
export default Table;
