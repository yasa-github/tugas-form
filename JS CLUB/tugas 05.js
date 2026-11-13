// // 1. Perulangan pertama: menampilkan angka dari 1 sampai 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // 2. Perulangan kedua: hitungan mundur dari 5 sampai 1
// for (let j = 5; j >= 1; j--) {
//   console.log(j);
// }

// // Mencetak teks setelah perulangan kedua selesai
// console.log("mulai!");


// 1. Inisialisasi variabel awal
let angka = 1;
let total = 0;

// 2. Perulangan while untuk menjumlahkan angka 1 sampai 5
while (angka <= 5) {
  total += angka; // Sama dengan: total = total + angka
  angka++;        // Menaikkan nilai angka sebesar 1 di setiap putaran
}

// 3. Cetak hasil akhir di luar blok perulangan
console.log(total);
