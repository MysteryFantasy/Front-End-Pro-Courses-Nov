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
    
    for(let i = 0; i < button.length; i++) {
        button[i].onclick = function() {
            nextPage(i);
        }
    };

    function nextPage(i) {
        if(box[i + 1]) {
            box[i].classList.remove('center');
            box[i + 1].classList.add('center');
        } else {
            box[i].classList.remove('center');
            box[0].classList.add('center'); 
        }
    };
}