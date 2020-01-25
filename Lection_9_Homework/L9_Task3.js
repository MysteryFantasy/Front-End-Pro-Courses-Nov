function inArray(str, arr) {
    // console.log(str, 'str');
    // console.log(arr, 'arr');

    for(var i = 0; i < arr.length; i++) {
        // console.log(arr[i], 'arr[i]');
        if(arr[i].includes(str)){
            console.log(arr[i] + " This element has required string");
        } else {
            console.log(arr[i] + " This element doesn't have required string");
        }
    }

}

inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']);