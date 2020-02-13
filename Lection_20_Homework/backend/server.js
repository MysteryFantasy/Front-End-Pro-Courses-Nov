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
  const users = getDataFromDataBase();
  console.log(users, 'users');

  res.send(users);
});

function getDataFromDataBase() {
  return users = [
    {name: 'Valera'},
    {name: 'Ihor'},
    {name: 'Andrey'},
    {name: 'Maxim'},
    {name: 'Ivan'},
    {name: 'Yura'}
  ];
};

getDataFromDataBase();

app.get('/user', function (req, res) {
  const lastUserName = getLastUser(users);
  console.log(lastUserName, 'lastUserName');

  res.send(lastUserName);
});

function getLastUser(users) {
  var lastUser = users[users.length - 1];
  return lastUser;
};

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000/');
});