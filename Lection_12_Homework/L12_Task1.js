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

var arr = new SuperArray(7, 5, {min:10, max:55});
console.log(arr, 'arr');

SuperArray.prototype.render = function(separator){
    var separator = separator;
    // console.log(separator, 'separator');

    for(var i = 0; i < this.mass.length; i++){
        for(var j = 0; j < this.mass[i].length; j++){
            document.write(this.mass[i][j] + ' ');
        }
        document.write('<p></p>');
    }
    document.write(separator);
};

arr.render("*-*-*-*-*-*-*-*");

SuperArray.prototype.clear = function(direction, k) { 
    if(direction == 'row') {
        for(var i = 0; i < this.mass.length; i++){
            for(var j = 0; j < this.mass[i].length; j++){
                this.mass[k][j] = 0;
            }
        } 
    } else if(direction == 'column') {
        for(var i = 0; i < this.mass.length; i++){
            for(var j = 0; j < this.mass[i].length; j++){
                this.mass[i][k] = 0;
            }
        } 
    }
};

arr.clear('row', 1);
arr.clear('column', 3);

SuperArray.prototype.setMarker = function(position) {
    var x = position.x;
    // console.log(x, 'x');
    var y = position.y;
    // console.log(y, 'y');
    marker = "&";
    // console.log(marker, 'marker');

    for(var i = 0; i < this.mass.length; i++){
        for(var j = 0; j < this.mass[i].length; j++){
            this.mass[x][y] = marker;
        }
    } 
};

arr.setMarker({x:2, y:3});