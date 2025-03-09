const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Server is running! Use POST /generate-image to fetch an image.");
});

// Route to fetch image from Pixabay
app.post("/generate-image", async (req, res) => {
    try {
        const { prompt } = req.body;

        // Fix per_page value to be within 3-200
        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: PIXABAY_API_KEY,
                q: prompt,
                image_type: "photo",
                per_page: 3, // Fix: per_page should be at least 3
            },
        });

        if (response.data.hits.length > 0) {
            res.json({ imageUrl: response.data.hits[0].webformatURL });
        } else {
            res.status(404).json({ error: "No image found!" });
        }
    } catch (error) {
        console.error("Error fetching image:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Image retrieval failed!" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
