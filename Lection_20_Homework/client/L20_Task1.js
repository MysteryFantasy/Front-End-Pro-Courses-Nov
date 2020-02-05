window.onload = function() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState, 'xhttp.readyState');
        if (xhttp.readyState == 4) {
            let data = xhttp.responseText;
            let parsedData = JSON.parse(data);
            console.log(parsedData, 'parsedData1');
            render(parsedData);
        }
    }

   xhttp.open("GET", "http://localhost:3000/users", true);

   this.document.querySelector('#btn').onclick = function() {
        xhttp.send();
   }

   function render(data) {
    const users = document.querySelector('.users');

    let items = data.map(item => '<div' + ' class="block"' + '>' + item.name + '</div>');
      users.innerHTML  = items.join(' ');
   }

   var request = new XMLHttpRequest();

   request.onreadystatechange = function() {
       console.log(request.readyState, 'request.readyState');
       if (request.readyState == 4) {
           let lastUserName = request.responseText;
           let parsedLastUserName = JSON.parse(lastUserName);
           console.log(parsedLastUserName);  
       }
   }

  request.open("GET", "http://localhost:3000/user", true);

   this.document.querySelector('#lastBtn').onclick = function() {
       request.send();
    }   

}