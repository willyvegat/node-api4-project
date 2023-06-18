require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();

const port = process.env.PORT || 9000;

server.use(express.json());
server.use(cors());

server.get('/api', (req, res) => {
    res.json({ message: 'Api On!'});
});

server.use('*', (req, res) => {
    res.send(`<h1>Good to Meet You!</h1>`);
});

server.listen(port, () => {
    console.log(`Server Running on ${port}`);
});

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message
    });
})