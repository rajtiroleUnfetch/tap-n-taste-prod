import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    }, // Event name

    location: { 
      type: String, 
      required: true, 
      trim: true 
    }, // Event location

    date: { 
      type: Date, 
      required: true 
    }, // Event date

    time: { 
      type: String, 
      required: true 
    }, // Event time

    description: { 
      type: String, 
      maxlength: 1000 
    }, // Event description

    price: { 
      type: Number, 
      default: 0 
    }, // Event price (could be 0 for free events)

    type: { 
      type: String, 
      enum: ['Upcoming', 'Previous'],
      required: true 
    }, // Event type: upcoming or previous

    tags: { 
      type: [String] 
    }, // Tags related to the event (e.g., music, workshop, food)

    media: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Media' 
    }, // Associated media for the event (images, videos, etc.)

    restaurant: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Restaurant' 
    }, // Reference to the restaurant hosting the event

    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    }, // User who created the event

    likedBy: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    }], // Users who liked the event

    registeredUsers: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    }], // Users who have registered for the event

    status: { 
      type: String, 
      enum: ['active', 'archived', 'completed'],
      default: 'active' 
    }, // Event status (active, archived, or completed)

    attendingCount: { 
      type: Number, 
      default: 0 
    }, // Number of users attending the event

    comments: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Comment' 
    }], // User comments about the event

    category: {
      type: String,
      enum: ['Music', 'Food', 'Workshop', 'Conference', 'Other'],
      default: 'Other'
    }, // Category of the event

    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    }, // Average rating for the event (out of 5)

    socialLinks: {
      facebook: { type: String },
      instagram: { type: String },
      twitter: { type: String },
      linkedin: { type: String }
    }, // Social media links related to the event

  },
  { timestamps: true }
);

// Create and export the Event model
const Event = mongoose.model('Event', eventSchema);
export default Event;