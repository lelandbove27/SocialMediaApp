const express = require('express');
const Joi = require('joi');
const fileUpload = require('express-fileupload');
const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));

app.get('/images', (req, res) => {
    res.send("hi");
});

app.post('/uploadImage', (req, res) => {
    const { image } = req.files;

    if(!image) return res.sendStatus(400);
    image.mv('/Users/lelan/OneDrive/Desktop/Meme-App/server' + '/uploadImage/' + image.name);

    res.sendStatus(200);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));