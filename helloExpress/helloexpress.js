var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.status(200).json({message: 'hola mundo'});
});

app.listen(3000, function() {
    console.log('Esta funcionando');
})