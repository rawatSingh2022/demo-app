const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic route
dapp.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});