const express = require('express');
//const Joi = require('joi');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));
app.use(bodyParser.json());
app.options('*', cors());

//let jsonParser = bodyParser.json();

app.get('/images', (req, res) => {
    res.send("hi");
});

app.post('/uploadImage', (req, res) => {
    const { image } = req.files;
    if(!image) return res.sendStatus(400);
    image.mv('/Users/lelan/OneDrive/Desktop/Meme-App/server' + '/uploadImage/' + image.name);
    res.set('Access-Control-Allow-Origin', '*');
    return res.sendStatus(200);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));