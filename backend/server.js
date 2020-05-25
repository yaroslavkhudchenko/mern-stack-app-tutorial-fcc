const express = require('express');
const cors = require('cors');

require('dotenv').config(); // to have variables in dotenv file

const app = express(); // create express server
const port = process.env.PORT || 5000; // specify the port

app.use(cors()); // app to use cors
app.use(express.json()); // allow to parse json

// listen to the server(start server on port)
app.listen(port,() => {
    console.log(`SERVER ON PORT ${port}`);
})
