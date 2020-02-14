window.onload = function(){
    var login = document.querySelector('.login');
    console.log(login, 'login');
    var password = document.querySelector('.password');
    console.log(password, 'password');
    var button = document.querySelector('.btn');
    console.log(button, 'button');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState, 'xhttp.readyState');
        if (xhttp.readyState == 4) {
            let userID = xhttp.responseText;
            let parsedUserID = JSON.parse(userID);
            console.log(parsedUserID, 'user id');
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

}