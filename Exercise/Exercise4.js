// Menentukan Total Hari dalam Tahun, Bulan, Minggu & Hari
// Ex. Total Hari = 485 Hari

// Step0. Declare Total Hari
let totalHari = 485

// Step1. Cari tahun terlebih dahulu : Total Hari / 360 = ... Tahun
let tahun = Math.floor(totalHari / 360)
console.log(tahun)

// Step2. Cari sisa bagi dari perhitungan diatas untuk mendapatkan sisa hari : Total Hari % 360 = ... Hari
let sisaBagiTahun = totalHari % 360 // 125 Hari
console.log(sisaBagiTahun)

// Step3. Cari bulan berdasarkan sisa bagi tahun : Sisa Bagi Tahun / 30 = 125 Hari / 30
let bulan = Math.floor(sisaBagiTahun / 30) 
console.log(bulan)

// Step4. Cari sisa bagi dari perhitungan diatas untuk mendapatkan sisa hari : SisaBagiTahun % 30 = ... Hari
let sisaBagiBulan = sisaBagiTahun % 30
console.log(sisaBagiBulan)

// Step5. Cari minggu berdasarkan sisa bagi bulan : Sisa Bagi Bulan / 7 = 5 Hari / 7
let minggu = Math.floor(sisaBagiBulan / 7)
console.log(minggu)

// Step6. Dari sisa bagi minggu, kita sudah bisa mendapatkan total hari sisanya
let sisaBagiMinggu = sisaBagiBulan % 7

let hari = sisaBagiMinggu
console.log(sisaBagiMinggu)

// Step7. Tampilkan Tahun, Bulan, Minggu, Hari
console.log(`${totalHari} Hari = ${tahun} Tahun, ${bulan} Bulan, ${minggu} Minggu, ${hari} Hari`)