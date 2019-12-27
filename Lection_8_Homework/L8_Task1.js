function initSlider(size) {
    counter = 0;
    var slider = {};
    
    return slider = {
        up: function() {
            counter++;
            this.isStart();
            this.isFinish();
            console.log(counter, 'counter up');
        },
    
        down: function() {
            counter--;
            this.isStart();
            this.isFinish();
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
        },

        isStart: function() {
            if (counter < 0) {
                counter = size;
            }
        },

        isFinish: function() {
            if (counter > size){
                counter = 0;
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