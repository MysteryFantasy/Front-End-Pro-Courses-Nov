window.onload = function() {
    var button = document.querySelector('.btn');
    // console.log(button, 'button');
    
    var counter = document.querySelector('.count');
    // console.log(counter,'counter');
    
    var size = '';
    size = localStorage.getItem('counter');

    counter.innerHTML = size;

    button.onclick = function(){
        console.log('click')
        
        size = ++counter.innerHTML;
        localStorage.setItem('counter', size);

    }

}