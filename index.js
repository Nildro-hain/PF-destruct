const names = ['John', 'Jacob', 'Jingleheimer'];
const [name1, name2, name3] = names;
    
    console.log(name1 + name2);

let a = 'Jack';
let b = 'Jill';
console.log('a: ', a);
console.log('b: ', b);

[a, b] = [b, a];

console.log('--switch--');

console.log('a: ', a);
console.log('b: ', b);

const array = [1, [2, [[[3, 4], 5], 6]]];