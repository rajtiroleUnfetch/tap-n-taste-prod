import mongoose from "mongoose";

// Define the OpenHours schema
const openHoursSchema = new mongoose.Schema(
  {
    restaurantId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Restaurant', 
      required: true 
    }, // Reference to the restaurant this open hour schedule belongs to

    days: { 
      type: [String], 
      required: true, 
      enum: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
        'Saturday', 'Sunday'
      ] 
    }, // Days the restaurant is open

    openingTime: { 
      type: String, 
      required: true, 
      match: [/^(0?[1-9]|1[0-2]):([0-5][0-9])\s?(AM|PM)$/i, 'Invalid opening time format'] 
    }, // Opening time in 12-hour format (e.g., 9:00 AM)

    closingTime: { 
      type: String, 
      required: true, 
      match: [/^(0?[1-9]|1[0-2]):([0-5][0-9])\s?(AM|PM)$/i, 'Invalid closing time format'] 
    }, // Closing time in 12-hour format (e.g., 9:00 PM)

    duration: { 
      type: Number, 
      required: true, 
      min: 0 
    }, // Duration in minutes (e.g., the number of minutes the restaurant is open)

    isHoliday: { 
      type: Boolean, 
      default: false 
    }, // Flag to mark holidays or closed days

    timeZone: { 
      type: String, 
      default: 'UTC' 
    }, // The time zone of the restaurant (e.g., 'America/New_York')
    
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Model creation
const OpenHours = mongoose.model('OpenHours', openHoursSchema);
export default OpenHours;
