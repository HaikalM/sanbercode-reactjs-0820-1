// Soal 1
var kataPertama = 'saya'
var kataKedua = 'senang'
var kataKetiga = 'belajar'
var kataKeempat = 'javascript'

// reassign var kataKedua
var kataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1,5)
var result = kataPertama.concat(" ")
	.concat(kataKedua).concat(" ")
	.concat(kataKetiga).concat(" ")
	.concat(kataKeempat.toUpperCase())
console.log("Result soal ke-1 : " + result)


// Soal 2
var kataPertama = "1"
var kataKedua = "2"
var kataKetiga = "4"
var kataKeempat = "5"

var kataPertama = parseInt(kataPertama)
var kataKedua = parseInt(kataKedua)
var kataKetiga = parseInt(kataKetiga)
var kataKeempat = parseInt(kataKeempat)

var result = kataPertama + kataKedua + kataKetiga + kataKeempat
console.log("\n")
console.log("Result soal ke-2 : " + result)


// Soal 3
var kalimat = 'wah javascript itu keren sekali'
var kalimatArr = kalimat.split(" ")
var kataPertama = kalimat.substring(0,3)
var kataKedua = kalimatArr[1]
var kataKetiga = kalimatArr[2]
var kataKeempat = kalimatArr[3]
var kataKelima = kalimatArr[4]

console.log("\n")
console.log("Result soal ke-3 :")
console.log("Kata Pertama : " + kataPertama)
console.log("Kata Kedua : " + kataKedua)
console.log("Kata Ketiga : " + kataKetiga)
console.log("Kata Keempat : " + kataKeempat)
console.log("Kata Kelima : " + kataKelima)


// Soal 4
var nilai = Math.floor(Math.random() * 100)
console.log("\n")
console.log("Result soal ke-4 : ")
if (nilai >= 80){
	console.log("Indeks nilai : A")
} else if (nilai >= 70 && nilai < 80){
	console.log("Index nilai : B")
} else if (nilai >= 60 && nilai < 70){
	console.log("Index nilai : C")
} else if (nilai >= 50 && nilai < 60){
	console.log("Index nilai : D")
} else {
	console.log("Index nilai : E")
}


// Soal 5
var tanggal = 1
var bulan = 7
var tahun = 1998

switch(bulan){
	case 1: {bulan = "Januari"; break;}
	case 2: {bulan = "Februari"; break;}
	case 3: {bulan = "Maret"; break;}
	case 4: {bulan = "April"; break;}
	case 5: {bulan = "Mei"; break;}
	case 6: {bulan = "Juni"; break;}
	case 7: {bulan = "Juli"; break;}
	case 8: {bulan = "Agustus"; break;}
	case 9: {bulan = "September"; break;}
	case 10: {bulan = "Oktober"; break;}
	case 11: {bulan = "November"; break;}
	case 12: {bulan = "Desember"; break;}
}
tanggal = tanggal.toString()

console.log("\n")
console.log("Result soal ke-5 :")
console.log(tanggal.concat(" ") + bulan.concat(" ") + tahun)
