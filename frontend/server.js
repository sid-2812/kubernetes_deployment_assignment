const express = require('express');
const app = express();
const PORT = 3000;
const BACKEND_URL = 'http://3.94.8.42:5000';
app.use(express.static('public'));
app.get('/api/backend-data', async (req, res) => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/data`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Could not connect to Flask backend' });
    }
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});