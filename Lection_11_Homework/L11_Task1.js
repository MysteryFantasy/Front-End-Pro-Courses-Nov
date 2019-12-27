function SuperMath() {
    
    this.input = function() {
        newX = parseInt(prompt('Введите новое значение "x"'));
        X = newX;
        console.log(newX, 'newX');
        
        newY = parseInt(prompt('Введите новое значение "y"'));
        Y = newY;
        console.log(newY, 'newY');
        
        newZnak = prompt('Введите новое значение "znak"');
        znak = newZnak;
        console.log(newZnak, 'newZnak');

        if ((znak == '+') || (znak == '-') || (znak == '*') || (znak == '/') || (znak == '%')) {
            return this.znak();
        } else {     
            return console.log('Ваше действие ' + znak + ' не может быть выполненым');
        }

    }
}

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
        return p.input();
    }
}

obj = {
    X: 12,
    Y: 3,
    znak: "/"
}

console.log(p.check(obj));