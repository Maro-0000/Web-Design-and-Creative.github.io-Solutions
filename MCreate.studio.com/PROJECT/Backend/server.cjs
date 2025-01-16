const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./userroute");

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/contact-form", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
app.use("/api", userRoute);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
