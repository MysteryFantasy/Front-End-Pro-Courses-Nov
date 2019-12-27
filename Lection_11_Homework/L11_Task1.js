function SuperMath() {

}

console.log(SuperMath, 'SuperMath');


obj = {
    X: 12,
    Y: 3,
    znak: "/"
}

console.log(obj, 'obj');

var p = new SuperMath();
console.log(p, 'p');

p.check = function(obj) {
    X = obj.X;
    Y = obj.Y;
    znak = obj.znak;
    var doMath = confirm("Вы точно хотите выполнить действие: " + X + " " + znak + " " + Y + "?");
    if (doMath == true) {
        console.log('do math');
    } else {
        console.log('new input');
    }
}

console.log(p.check(obj));