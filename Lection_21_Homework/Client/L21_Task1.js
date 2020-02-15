window.onload = function(){
    var login = document.querySelector('.login');
    console.log(login, 'login');
    var password = document.querySelector('.password');
    console.log(password, 'password');
    var button = document.querySelector('.btn');
    console.log(button, 'button');
    var goods = document.querySelector('.goods');
    console.log(goods, 'goods');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState, 'xhttp.readyState');
        if (xhttp.readyState == 4) {
            let userID = xhttp.responseText;
            let parsedUserID = JSON.parse(userID);
            console.log(parsedUserID, 'user id');
            if (xhttp.status == 200) {
                getUserGoogs(parsedUserID);
            } else {
                goods.innerHTML = "Status: " + xhttp.status + " " + xhttp.statusText + "<br>" + "User: " + parsedUserID;
            }
        }
    };
    
   xhttp.open("POST", "http://localhost:3000/users", true);

   button.onclick = function() {
       var users = {
           login: login.value,
           password: password.value
       }
        console.log(users, 'users')
        xhttp.send(JSON.stringify(users));
    };

    function getUserGoogs(parsedUserID) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            console.log(request.readyState, 'request.readyState');
            if(request.readyState == 4) {
                let userGoods = JSON.parse(request.responseText);
                console.log(userGoods,'userGoods');
                showUserGoods(userGoods);
            }
        }
        request.open("POST", "http://localhost:3000/goods",true, parsedUserID);
        request.send(JSON.stringify(parsedUserID));
    }; 

    function showUserGoods(data) {
        for(let i = 0; i < data.length; i++) {
            goods.innerHTML += "<li>"+ data[i].title + ": " + data[i].food + "</li>";
        }
    };

}