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
            var checkForm = checkData(i);
            if(checkForm === true) {
                nextPage(i);
            }
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

    function checkData(i){
        // console.log(i, 'i');
        if(firstName[i].value.length < 5){
            console.log('Your name is too short. It shoold be not less than 5 symbols');
            return false;
        } else if (lastName[i].value.length < 2) {
            console.log('Your last name is too short');
            return false;
        } else if(age[i].value < 18){
            console.log("Your age is less than 18");
            return false;
        } else if(isNaN(age[i].value)){
            console.log("You should input only numbers");
            return false;
        }
        return true;
    };
}