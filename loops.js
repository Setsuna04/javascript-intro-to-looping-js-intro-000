function maybeTrue() {
  return (Math.random() >= 0.5);
}

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push("I am ${i} strange loop${i===0 ? '' : 's'}");
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';

}

function doWhileLoop(array){
  do {
    array.pop();
  } while (( maybeTrue());
}
