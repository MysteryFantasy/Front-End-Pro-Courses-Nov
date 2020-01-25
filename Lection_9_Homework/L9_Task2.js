str = 'var_text_hello';
console.log(str, 'str');

function changeText(str) {
  var arr = str.split('_');
  console.log(arr, 'arr');

  for(var i = 1; i < arr.length; i++){
    arr[i] = capLetFirst(arr[i]);
    console.log(arr[i], 'arr[i]')
  }
  var newText = arr.join('');
  // console.log(newText,'newText');
  return newText;
}

function capLetFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

console.log(changeText(str, 'str'));