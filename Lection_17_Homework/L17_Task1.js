window.onload = function() {
    var userData = document.querySelectorAll('.firstName, .lastName, .position');
    // console.log(userData, 'userData');

    getValueFromStore(userData);
    
    setInterval(function(){

        function setValueInStore(arr) {
            var mass = new Array;
            var userInfo = {};
            
            for(var i = 0; i < arr.length; i++) {
                var name = arr[i].name;
                var value = arr[i].value;
                userInfo[name] = value;
            }
            mass.push(userInfo);
            // console.log(mass, 'mass');
            var json = JSON.stringify(mass);
            localStorage.setItem('info', json);
        };
        setValueInStore(userData);

    }, 5000);

    function getValueFromStore(arr) {
        var mass = JSON.parse(localStorage.getItem('info'));
        if(mass) {
            for(var i = 0; i < mass.length; i++){
                var item = mass[i];
                for(var i = 0; i < arr.length; i++) {
                    var name = arr[i].name;
                    var value = item[name];
                    arr[i].value = value;
                }
            }
        }
    };

}