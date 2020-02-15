var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'aplication/json'}));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentails", true);
    next();
});

app.get('/', function (req, res) {
    console.log('123');
    res.send('ok');
});

app.post('/users', function (req, res) {
    var resUsers = req.body;
    // console.log(resUsers, 'resUsers');
    var parsedUsers = JSON.parse(resUsers);
    console.log(parsedUsers, 'parsedUsers');
    
    fs.readFile('users.json', 'utf8', function(err, users) {
        console.log('users', users);
        var parsedData = JSON.parse(users)
        console.log(parsedData, 'parsedData');
        var resUserID = checkUsersID(parsedData, parsedUsers);
        console.log(resUserID, 'resUserID');
        if(resUserID) {
            return res.status(200).send(JSON.stringify(resUserID));
        } else {
            return res.status(401).send(JSON.stringify('Not found'));
        }
    });
});

function checkUsersID(parsedData, parsedUsers) {
    for(let i = 0; i < parsedData.length; i++){
        if (parsedData[i].login == parsedUsers.login && parsedData[i].password == parsedUsers.password) {
            console.log('find');
            return parsedData[i].id;
        }
    }
    console.log('not found');
    return false;
};

app.post('/goods', function (req, res) {
    let id = JSON.parse(req.body);
    console.log(id,'id');
    let urlToJson = 'goods/' + id + '.json';
    console.log(urlToJson, 'urlToJson');
  
    fs.readFile(urlToJson, 'utf8', function(err, goodsList) { 
      console.log('goodsList', goodsList);
      var parsedGoodsList = JSON.parse(goodsList)
      console.log(parsedGoodsList, 'parsedGoodsList');  
      res.send(parsedGoodsList);
    });
    
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000/');
});