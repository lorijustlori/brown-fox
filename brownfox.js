let x = 'The quick brown fox jumps over the lazy dog';

function lcase(str) {
  return str.toLowerCase();
}
let y = x.split(' ').join('')
// console.log(y);

// function lcase() {
//     var y = "The quick brown fox jumps over the lazy dog";
//     var res = str.toLowerCase();

function Alphasort(str){
  var y = str.split("");
  return y.sort().join('');
}

// console.log(Alphasort(lcase(y)));

console.log(x.toLowerCase().split(' ').join('').split('').sort().join(''));




