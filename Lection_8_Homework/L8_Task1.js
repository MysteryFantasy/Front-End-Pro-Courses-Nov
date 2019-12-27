function initSlider(size) {
    counter = 0;
    
    function isFinish() {
        if (counter > size){
            counter = 0;
            return counter;
    
        } else if (counter < 0) {
            counter = size;
            return counter;
        }
    }
    
    return slider = {
        up: function() {
            counter++;
            isFinish();
            console.log(counter, 'counter up');
        },
    
        down: function() {
            counter--;
            isFinish();
            console.log(counter, 'counter down');
        },
    
        reset: function() {
            counter = 0;
            console.log(counter, 'counter reset');    
        },

        set: function() {
            var n = +prompt('Введите номер слайда');
            if(n > 0 && n <= size) {
                counter = n;
                console.log(counter, 'counter set');
            } else {
                console.log('Error! The maximum number is ' + size);
            }
        }
    }
    
}

var number = initSlider(5);

number.up();
number.up();
number.up();
number.up();
number.up();
number.up();
number.up();
number.down();
number.down();
number.down();
number.down();
number.down();
number.down();
number.down();
number.down();
number.down();
number.reset();
number.up();
number.up();
number.set();