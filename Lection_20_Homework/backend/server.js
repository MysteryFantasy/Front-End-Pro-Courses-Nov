var express = require('express');
var fs = require('fs');
var app = express();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  
  res.send('ok');

});

app.get('/users', function (req, res) {
  const users = getDataFromDataBasse(); 

  res.send(users);
});

function getDataFromDataBasse() {
  return users = [
    {name: 'Valera'},
    {name: 'Ihor'},
    {name: 'Andrey'},
    {name: 'Maxim'},
    {name: 'Ivan'},
    {name: 'Yura'}
  ];
}

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000/');
});