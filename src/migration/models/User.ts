import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures the username is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// If there's an email field in the database schema that you don't use, remove it
// email: {
//   type: String,
//   unique: true,
//   sparse: true, // Optional: allows null or undefined emails to be saved
// }

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
