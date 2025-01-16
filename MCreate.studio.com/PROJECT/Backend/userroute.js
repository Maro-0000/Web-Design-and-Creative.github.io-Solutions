const express = require("express");
const User = require("./models/usermodel"); // Import the user model
const router = express.Router();

// Route for handling form submission
router.post("/contact", async (req, res) => {
    try {
        // Log the request body to make sure all fields are there
        console.log(req.body);

        const { name, phoneNumber, email, service, budget, message } = req.body;

        // Validate required fields
        if (!name || !phoneNumber || !email || !service || !budget || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Create a new user entry in the database
        const newUser = new User({
            name,
            phoneNumber,
            email,
            service,
            budget,
            message,
        });

        // Log the user to be saved
        console.log("Saving new user:", newUser);

        // Save the new user to the database
        await newUser.save();

        // Log success
        console.log("User saved successfully!");

        res.status(201).json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while submitting the form." });
    }
});


module.exports = router;
