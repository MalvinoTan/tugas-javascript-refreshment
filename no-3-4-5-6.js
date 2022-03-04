//Nomor 3
const foo = ['Budi', 'Sita', 'Ayu'];
const [a, b, c] = foo;

console.log(`Nomor 3:\na = ${a}, b = ${b}, c = ${c}`);

//Nomor 4
let bdays = ['10-17', '05-19', '20-19'];
for (let i = 0; i < bdays.length; i++) {
    bdays[i] = bdays[i].replace('-', '/');
}

console.log(`Nomor 4:`);
console.log(bdays);

//Nomor 5
let value = [1, 2, 3, 4, 5, 6];
value = value.map(item => item * 2);

console.log(`Nomor 5:`);
console.log(value);

//Nomor 6
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map(item => Math.round(item));

console.log(`Nomor 6:`);
console.log(arr);