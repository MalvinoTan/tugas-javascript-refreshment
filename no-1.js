var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " + 
        b + 
        "berasal dari " + 
        asal
    );
}

terdaftar = true; // 1b Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;

console.log("array = " + lengkap_arr[2]); // 1a Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan(); // 1c Lakukan pemanggilan untuk function perkenalan pada baris 31