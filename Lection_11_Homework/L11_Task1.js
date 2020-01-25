function SuperMath() {
    
    this.input = function() {
        X = parseInt(prompt('Введите новое значение "x"'));
        console.log(X, 'X');
        
        Y = parseInt(prompt('Введите новое значение "y"'));
        console.log(Y, 'Y');
        
        znak = prompt('Введите новое значение "znak"');
        console.log(znak, 'znak');

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

SuperMath.check = function(obj) {
    X = obj.X;
    Y = obj.Y;
    znak = obj.znak;
    var doMath = confirm("Вы точно хотите выполнить действие: " + X + " " + znak + " " + Y + "?");
    if (doMath == true) {
        return this.znak();
    } else {
        return this.input();
    }
}

obj = {
    X: 12,
    Y: 3,
    znak: "/"
}

var p = new SuperMath();
console.log(p, 'p');
p.check = SuperMath.check;

console.log(p.check(obj));