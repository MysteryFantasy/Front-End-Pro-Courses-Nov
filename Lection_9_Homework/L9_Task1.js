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

    target: function(property){
        this.doFunction = function(callback, x, y){
            this[property] = callback(x,y)
            return this;
        },
        
        this.clear = function(){
            this[property] = 0;
            return this;
        }
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