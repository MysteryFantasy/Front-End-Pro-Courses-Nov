function inArray(str, arr) {
    // console.log(str, 'str');
    // console.log(arr, 'arr');
    var elem;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].includes(str)){
            elem = arr[i];
            console.log(elem + " This element has required string");
        } else {
            console.log(arr[i] + " This element doesn't have required string");
        }
    }
    return elem ? true : false;
}

console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));