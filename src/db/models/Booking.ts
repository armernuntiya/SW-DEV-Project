import mongoose,{mongo} from "mongoose";

const BookingSchema = new mongoose.Schema({
  bookingDate: {
    type: Date,
    required: true,
  },
  numOfGuests: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.models.Booking || mongoose.model("Booking",BookingSchema)
export default Booking
