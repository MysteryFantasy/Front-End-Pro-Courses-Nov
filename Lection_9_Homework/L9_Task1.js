var obj = {
    copy: function(buffer){
        this[buffer] = '';
        return this;
    },

    clear: function() {
        this.result = 0;
        return this;
    },

    doFunction: function(callback, x, y) {
        this.result = callback(x, y);
        return this;
    },

    result: '',
   
}

console.log(obj, 'obj');
// console.log(obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3));
console.log(obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear());
console.log(obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear().doFunction(div, 12, 4).copy('newKey').doFunction(deduct, 7, 2));

function sum(x, y) {
    res = x + y;
    return res;
}

function deduct(x, y) {
    res = x - y;
    return res;
}

function mul(x, y) {
    res = x * y;
    return res;
}

function div(x, y) {
    res = x / y;
    return res;
}

function rest(x, y) {
    res = x % y;
    return res;
}