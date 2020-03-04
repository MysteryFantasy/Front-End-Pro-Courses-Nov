function SuperArray(n, m, options){
    this.n = n;
    // console.log(n, 'n');
    this.m = m;
    // console.log(m, 'm');
    this.options = options;
    // console.log(options, 'options');

    var mass = new Array(n);
    for(var i = 0; i < mass.length; i++){
        mass[i]= new Array(m);
        for(var j = 0; j < mass[i].length; j++){
            mass[i][j] = Math.floor(Math.random() * (options.max - options.min) + options.min);
        }
    }
    this.mass = mass;
};

var arr = new SuperArray(7, 4, {min:10, max:55});
console.log(arr, 'arr');