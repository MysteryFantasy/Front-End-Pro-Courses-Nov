window.onload = function() {

    var usrText = document.querySelectorAll('.inputText');
    // console.log(usrText, 'usrText');

    var result = document.getElementById('resultText');
    // console.log(result, 'result');

    setInterval(function(){

        function resText(mass) {
            var str = '';
        
            for(var i = 0; i < mass.length - 1; i++) {
                if(mass[i].value){
                    str += mass[i].value + ',';
                }
            }
            str+= mass[mass.length - 1].value
            return str;
        }

        var text = resText(usrText);
        result.value = text;
        
    }, 2000)

}