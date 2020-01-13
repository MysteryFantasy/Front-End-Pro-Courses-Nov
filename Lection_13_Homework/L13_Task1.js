window.onload = function() {

    setInterval(function(){
        
        var usrText = document.querySelectorAll('.inputText');
        // console.log(usrText, 'usrText');

        var result = document.getElementById('resultText');
        // console.log(result, 'result');
        
        function resText(mass) {
            var str = '';
        
            for(var i = 0; i < mass.length; i++) {
                if(mass[i].value.length !== 0){
                    str += mass[i].value + ',';
                }
            }
            return str;
        }

        var text = resText(usrText);
        result.innerHTML = text;

    }, 2000)

}