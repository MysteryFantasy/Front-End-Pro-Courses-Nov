window.onload = function() {
    var button = document.querySelectorAll('.btn');

    var clearCounters = document.querySelector('.clearCounters');

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

}