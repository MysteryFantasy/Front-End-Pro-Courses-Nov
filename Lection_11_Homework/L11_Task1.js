function SuperMath() {

}

console.log(SuperMath, 'SuperMath');

SuperMath.prototype.znak = function() {
    result = 0;
    if (znak == '+') {
        result = X + Y;
    } else if (znak == '-') {
        result = X - Y; 
    } else if (znak == '*') {
        result = X * Y;
    } else if (znak == '/') {
        result = X / Y;
    } else if (znak == '%') {
        result = X % Y;
    }
    return result;
}

var p = new SuperMath();
console.log(p, 'p');

p.check = function(obj) {
    X = obj.X;
    Y = obj.Y;
    znak = obj.znak;
    var doMath = confirm("Вы точно хотите выполнить действие: " + X + " " + znak + " " + Y + "?");
    if (doMath == true) {
        return p.znak();
    } else {
        console.log('new input')
    }
}

obj = {
    X: 12,
    Y: 3,
    znak: "/"
}

console.log(p.check(obj));