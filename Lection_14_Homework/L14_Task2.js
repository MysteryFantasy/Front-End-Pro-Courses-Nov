window.onload = function() {
    var boxik = document.querySelector('.box');
    console.log(boxik, 'boxik');

    boxik.onclick = function() {
        this.classList.toggle('foo');
    }


}
