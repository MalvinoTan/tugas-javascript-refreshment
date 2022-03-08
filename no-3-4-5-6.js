// Nomor 3 
// Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, 
// Sita tersimpan dalam variabel bernama b, dan Ayutersimpan dalam variable bernama c.
const foo = ['Budi', 'Sita', 'Ayu'];
const [a, b, c] = foo;

console.log(`Nomor 3:\na = ${a}, b = ${b}, c = ${c}`);

// Nomor 4
// Kalian memiliki sebuah variabel berikut (let bdays = ['10-17','05-19','20-19']). 
// Ubahlah tanda (-) dalam variabel tersebut menjadi (/) 
// sehingga output yang akan keluar dalam console menjadi [ '10/17', '05/19', '20/19' ]
let bdays = ['10-17', '05-19', '20-19'];
for (let i = 0; i < bdays.length; i++) {
    bdays[i] = bdays[i].replace('-', '/');
}

console.log(`Nomor 4:`);
console.log(bdays);

// Nomor 5
// Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). 
// Kalikan setiap value dalam array tersebut dengan dua. 
// Sehingga, ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]
let value = [1, 2, 3, 4, 5, 6];
value = value.map(item => item * 2);

console.log(`Nomor 5:`);
console.log(value);

// Nomor 6
// Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) 
// Bulatkan ke atas variable tersebut sehingga output yang dihasilkan adalah [ 2, 3, 5, 12 ]
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map(item => Math.round(item));

console.log(`Nomor 6:`);
console.log(arr);