const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.json(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
