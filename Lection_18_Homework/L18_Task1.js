window.onload = function() {
    var button = document.querySelectorAll('.btn');

    var clearCounters = document.querySelector('.clearCounters');

    var setCounter = document.querySelector('.setCounter');

    var storage = {
        value: '',
        setInStorage: function(key, value) {
            localStorage.setItem(key, value);
        },
        getFromStorage: function(key) {
            this.value = localStorage.getItem(key) || 0;
        }
    }

    function getParent(elem, selector) {
        return elem.closest(selector);
    }

    for(let i = 0; i < button.length; i ++) {
        storage.getFromStorage('counter' + i);
      
        var block = getParent(button[i], '.block').querySelector('.count').innerHTML = storage.value;       

        button[i].onclick = function() {
            block = getParent(button[i], '.block');

            var counter = 0;

            if (block) {
                counter = ++block.querySelector('.count').innerHTML;
            }
            storage.setInStorage('counter' + i, counter);
        }
    }

    clearCounters.onclick = function() {
        for(let i = 0; i < button.length; i ++) {
            block = getParent(button[i], '.block').querySelector('.count').innerHTML = 0;
            
            counter = 0;
            
            storage.setInStorage('counter' + i, counter);  
        }
    }

    setCounter.onclick = function() {
        var id = parseInt(prompt('Input block number'));
        console.log(id,'id');
        var counterValue = parseInt(prompt('Input counter value'));
        console.log(counterValue,'counterValue');

        if(id >= button.length){
           alert('There is no block with such id. The maximum block number is ' + (button.length - 1));
        } else if(isNaN(counterValue) || isNaN(id)){
            alert('You should input only numbers');
        } else {
            for(let i = 0; i < button.length; i ++) {
                
                block = getParent(button[id], '.block').querySelector('.count').innerHTML = counterValue;   
                
                storage.setInStorage('counter' + id, counterValue);  
            }
        }
    }

}