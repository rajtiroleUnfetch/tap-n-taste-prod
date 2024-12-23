import mongoose from 'mongoose';

// Define the location schema with restaurant and user association
const locationSchema = new mongoose.Schema(
  {
    placeName: { 
      type: String, 
      required: true, 
      trim: true 
    }, // Name of the location (e.g., "Restaurant Name")

    longitude: { 
      type: Number, 
      required: true 
    }, // Longitude of the location

    latitude: { 
      type: Number, 
      required: true 
    }, // Latitude of the location

    street: { 
      type: String, 
      required: true, 
      trim: true 
    }, // Street address

    city: { 
      type: String, 
      required: true, 
      trim: true 
    }, // City name

    state: { 
      type: String, 
      required: true, 
      trim: true 
    }, // State or region name

    country: { 
      type: String, 
      required: true, 
      trim: true 
    }, // Country name

    countryCode: { 
      type: String, 
      required: true, 
      trim: true 
    }, // Country code (e.g., 'US', 'IN', 'UK')

    zipCode: { 
      type: String, 
      trim: true 
    }, // ZIP code or postal code

    region: { 
      type: String, 
      trim: true 
    }, // Region like a county or province

    timeZone: { 
      type: String, 
      default: 'UTC' 
    }, // Time zone of the location

    formattedAddress: { 
      type: String, 
      trim: true 
    }, // Full formatted address as a string

    locationType: { 
      type: String, 
      enum: ['restaurant', 'office', 'warehouse', 'other'],
      default: 'restaurant' 
    }, // Type of location (e.g., restaurant, office, etc.)

    isPrimary: { 
      type: Boolean, 
      default: false 
    }, // Flag for marking primary location (e.g., main branch)

    isActive: { 
      type: Boolean, 
      default: true 
    }, // Flag to indicate if location is active

    geoCoordinates: { 
      type: {
        lat: { type: Number, required: true }, 
        lng: { type: Number, required: true }
      }, 
      required: true 
    }, // Storing coordinates in a nested object for more clarity

    // References to related collections
    restaurantId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Restaurant', 
      required: true 
    }, // Associated restaurant

    createdBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    }, // User who created this location

    updatedBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    }, // User who last updated this location

  },
  { timestamps: true }
);

// Create the Location model
const Location = mongoose.model('Location', locationSchema);
export default Location;
