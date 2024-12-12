const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static('public'));

// API endpoint
app.get('/api/mail-content', async (req, res) => {
    try {
        const response = await axios.get();
        res.send(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
