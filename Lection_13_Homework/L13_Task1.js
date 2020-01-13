window.onload = function() {

    setInterval(function(){
        
        var usrText = document.querySelectorAll('.inputText');
        // console.log(usrText, 'usrText');

        var result = document.getElementById('resultText');
        // console.log(result, 'result');
        
        function resText(mass) {
            var str = '';
        
            for(var i = 0; i < mass.length - 1; i++) {
                str += mass[i].value + ',';
            }
            str += mass[mass.length - 1].value;
            return str;
        }

        var text = resText(usrText);
        result.innerHTML = text;

    }, 2000)

}