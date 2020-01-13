window.onload = function() {

    setInterval(function(){
        
        var usrText = document.querySelectorAll('.inputText');
        console.log(usrText, 'usrText');

        function resText(mass) {
            var str = '';
        
            for(var i = 0; i < mass.length - 1; i++) {
                str += mass[i].value + ',';
            }
            str += mass[mass.length - 1].value;
            return str;
        }

        console.log(resText(usrText));

    }, 2000)

}