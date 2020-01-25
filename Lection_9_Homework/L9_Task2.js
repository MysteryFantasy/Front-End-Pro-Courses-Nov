str = 'var_text_hello';
console.log(str, 'str');

function changeText(str) {
  var arr = str.split('_');
  console.log(arr, 'arr');

  for(var i = 0; i < arr.length; i++){
    console.log(arr[i], 'arr[i]')
  }

  return arr;
}

console.log(changeText(str, 'str'));