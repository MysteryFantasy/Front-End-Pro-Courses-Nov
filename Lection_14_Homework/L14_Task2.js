window.onload = function() {
    var boxik = document.querySelector('.box');
    // console.log(boxik, 'boxik');

    // boxik.onclick = function() {
    //     this.classList.toggle('foo');
    // }

    // document.onclick = function() {
    //     // console.log(event.type, 'event.type');
    //     console.log(event, 'event');

    //     var a = event.clientX;
    //     console.log(a, 'clientX');
    //     var b = event.clientY;
    //     console.log(b,'clientY');

    //     boxik.classList.add('position');
    //     boxik.style.left = a + 'px';
    //     boxik.style.top = b +'px';
    // }

    boxik.onmousedown = function(event) {
        var offX = event.offsetX;
        console.log(offX, 'offX');
        var offY = event.offsetY;
        console.log(offY, 'offY');    

        document.onmousemove = function(event){
            c = event.pageX;
            console.log(c, 'pageX');
            d = event.pageY;
            console.log(d,'pageY');
            boxik.style.left = c - offX + 'px';
            boxik.style.top =  d - offY + 'px';
        }
    }

    boxik.onmouseup = function() {
        document.onmousemove = null;
    }
    
}