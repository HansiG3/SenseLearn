// filepath: /home/kartik/Desktop/SenseLearn/server/index.js
const express = require('express');
const app = express();
const port = 3001; // You can choose any port you prefer

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});