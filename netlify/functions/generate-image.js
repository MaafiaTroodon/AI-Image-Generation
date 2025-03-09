const axios = require("axios");

exports.handler = async (event) => {
    try {
        const { prompt } = JSON.parse(event.body);
        const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: PIXABAY_API_KEY,
                q: prompt,
                image_type: "photo",
                per_page: 3,
            },
        });

        if (response.data.hits.length > 0) {
            return {
                statusCode: 200,
                body: JSON.stringify({ imageUrl: response.data.hits[0].webformatURL }),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: "No image found!" }),
            };
        }
    } catch (error) {
        console.error("Error fetching image:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Image retrieval failed!" }),
        };
    }
};
