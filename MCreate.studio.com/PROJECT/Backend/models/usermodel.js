const mongoose = require("mongoose");

// Define the schema for the user data
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        service: {
            type: String,
            required: true,
        },
        budget: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the User model
const User = mongoose.model("User", userSchema);
module.exports = User;
