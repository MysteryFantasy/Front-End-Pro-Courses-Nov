window.onload = function() {
    var userData2 = document.querySelectorAll('.firstName, .lastName, .position');
    console.log(userData2, 'userData');
    
    setInterval(function(){

        function setValueInStore(arr) {
            var mass = new Array;
            var userInfo = {};
            
            for(var i = 0; i < arr.length; i++) {
                var name = arr[i].name;
                var value = arr[i].value;
                userInfo[name] = value;
                console.log(userInfo, 'userInfo');
            }
            mass.unshift(userInfo);
            console.log(mass, 'mass');
        };
        setValueInStore(userData2)

    }, 5000);

}