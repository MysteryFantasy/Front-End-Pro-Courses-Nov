window.onload = function() {

    var box = document.querySelectorAll('.boxik');
    // console.dir(box,'box');
    // console.log(box, 'box');

    var button = document.querySelectorAll('.btn');
    // console.dir(button,'button');
    // console.log(button, 'button');
    
    var firstName = document.querySelectorAll('.firstName');
    // console.log(firstName, 'firstName');
    var lastName = document.querySelectorAll('.lastName');
    // console.log(lastName, 'lastName');
    var age = document.querySelectorAll('.age');
    // console.log(age, 'age');
    
    var i = 0;

    for(; i < box.length; i++){
        box[i].onclick = (function(i){
            return function(){
                var counter;
                if(box[i + 1]){
                    counter = i + 1;    
                } else {
                    counter = 0;
                }
                this.classList.remove('center');
                box[counter].classList.add('center');
            }
        })(i);
    };
}