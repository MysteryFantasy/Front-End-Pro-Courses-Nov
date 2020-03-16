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

app.post('/', function (req, res) {
    var obj = req.body;
    console.log(obj, 'obj');
    var parsedUsers = JSON.parse(obj);
    console.log(parsedUsers, 'parsedUsers');
    readUsersFile(parsedUsers, res);
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

function readUsersFile(parsedUsers, res){
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
}

app.post('/newUser', function (req, res) {
    var newObj = req.body;
    console.log(newObj, 'newObj');
    var parsedNewUser = JSON.parse(newObj);
    console.log(parsedNewUser, 'parsedNewUser');
    readNewUserFile(parsedNewUser, res);

});

function createNewUserID(newParsedData, parsedNewUser) {
    parsedNewUser.id = JSON.stringify(newParsedData.length + 1);
    console.log(parsedNewUser.id, 'newID');

    newParsedData.push(parsedNewUser);
    console.log(newParsedData, 'newParsedData');
    return newParsedData;  
};

function readNewUserFile(parsedNewUser, res){
    fs.readFile('users.json', 'utf8', function(err, users) {
        console.log('users', users);
        var newParsedData = JSON.parse(users)
        console.log(newParsedData, 'newParsedData');
        var resNewUser = createNewUserID(newParsedData, parsedNewUser);
        console.log(resNewUser, 'resNewUser');
        if(resNewUser) {
            result = JSON.stringify(resNewUser);
            fs.writeFile('users.json',result, function(err){
            });
            return res.status(200).send(JSON.stringify(resNewUser));
        }
    });
};

app.post('/products', function (req, res) {
    fs.readFile('products/product.json', 'utf8', function(err, productList) { 
        var parsedProductList = JSON.parse(productList);
        console.log(parsedProductList, 'parsedProductList');  
        return res.send(JSON.stringify(parsedProductList));
    });

});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000/');
});