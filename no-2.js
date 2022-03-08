// SOAL 2A
// Jelaskan kenapa baris 21,22,23 tidak dapat tampil?

// JAWABAN
// Karena nilai pada variabel “terdaftar” diinisialisasi sebagai “false”, 
// sehingga kode pada baris 22 tidak akan dijalankan selama variabel “terdaftar” masih “false”. 
// Solusinya ubah nilainya menjadi “true”.

// SOAL 2B
// Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?

// JAWABAN
// Karena variabel “nama” dideklarasi menggunakan “const”, 
// jadi nilai dari variabel “nama” tidak dapat diubah lagi, oleh karena itu terjadi error.

// SOAL 2C
// Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.

// JAWABAN
// Baris 28 tetap tidak dapat dieksekusi karena variabel “asal” dideklarasi di dalam sebuah 
// function sehingga tidak dapat dipakai di luar function tersebut.