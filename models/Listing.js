import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rent: { type: Number, required: true },
  address: { type: String, required: true },
  numberOfRooms: { type: Number, required: true },
  contactInfo: { type: String, required: true },
}, { timestamps: true });

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;


