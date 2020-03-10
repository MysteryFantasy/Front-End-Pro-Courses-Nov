window.onload = function() {
    var userData = document.querySelectorAll('.firstName, .lastName, .position');
    // console.log(userData, 'userData');

    getValueFromStore();
    
    setInterval(function(){

        function setValueInStore() {
            var mass = [];
            var userInfo = {};
          
            for(var i = 0; i < userData.length; i++) {
                var name = userData[i].name;
                var value = userData[i].value;
                userInfo[name] = value;
            }
            mass.push(userInfo);
            console.log(mass, 'mass');
            var json = JSON.stringify(mass);
            localStorage.setItem('info', json);
        };
        setValueInStore();

    }, 5000);

    function getValueFromStore() {
        var mass = JSON.parse(localStorage.getItem('info'));
        if(mass) {
            for(var i = 0; i < mass.length; i++){
                var item = mass[i];
                for(var i = 0; i < userData.length; i++) {
                    var name = userData[i].name;
                    var value = item[name];
                    userData[i].value = value;
                }
            }
        }
    };

}