var obj = {
    copy: function(buffer){
        this[buffer] = '';
        return this;
    },

    clear: function() {
        if(this.property) {
            this['newResult'] = 0;
        } else {
            this.result = 0;
        }
        return this;
    },

    doFunction: function(callback, x, y) {
        if(this.property) {
            this['newResult'] = callback(x,y);
        } else {
            this.result = callback(x, y);
        }
        return this;
    },

    target: function(property){
        this.property = property;
        return this;
    },    

    result: '',
}

console.log(obj.doFunction(sum, 2, 4).copy('newKey').target('newValue').doFunction(mul, 6, 3));

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