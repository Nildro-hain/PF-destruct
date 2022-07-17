const array = [1, [2, [[[3, 4], 5], 6]]];
var a = array[0];
console.log('array: ', array);
console.log('a: ', a);
var ba = array[1];

var b = ba[0];
console.log('b: ', b);
var bb = ba[1];
var bc = bb[0];

var c = bc[0];
console.log('c: ', c);
var d = bc[1];
console.log('d: ', d);
var e = bb[1];
console.log('e: ', e);






