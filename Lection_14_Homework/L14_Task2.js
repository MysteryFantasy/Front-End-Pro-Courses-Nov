window.onload = function() {
    var boxik = document.querySelector('.box');
    // console.log(boxik, 'boxik');

    boxik.onclick = function() {
        this.classList.toggle('foo');
    }

    document.onclick = function(event) {
        // console.log(this,'this');
        // console.log(event.type, 'event.type');
        console.log(event, 'event');
        var a = event.clientX;
        console.log(a, 'clientX');
        var b = event.clientY;
        console.log(b,'clientY');
        
        boxik.classList.add('position');
        boxik.style.top = b +'px';
        boxik.style.left = a + 'px';
    }

}