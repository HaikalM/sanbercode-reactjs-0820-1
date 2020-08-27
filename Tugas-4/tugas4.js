// Soal 1
// looping dengan while
// looping pertama
console.log('Soal Ke-1')

var angka = 0
console.log('LOOPING PERTAMA')
while(angka <= 20){
	angka += 2
	console.log(angka + ' - ' + 'I Love Coding')
}

// looping kedua
var angka = 20
console.log('LOOPING KEDUA')
while(angka > 0){
	console.log(angka + ' - ' + 'I will become a frontend developer')
	angka -= 2
}


// Soal 2
// looping dengan for
console.log('\nSoal Ke-2')
for(var angka = 1; angka < 21; angka++){
	// Jika angka ganjil
	if((angka%2) != 0){
		// Jika angka merupakan kelipatan 3
		if((angka%3) == 0){
			console.log(angka + ' - ' + 'I Love Coding')
		}else{
			// Jika angka bukan kelipatan 3
			console.log(angka + ' - ' + 'Santai')
		}
	// Jika angka genap
	}else if ((angka%2) == 0){
		console.log(angka + ' - ' + 'Berkualitas')
	}
}


// Soal 3
console.log('\nSoal Ke-3')
var teks = '#'
for(var baris = 1; baris <= 7; baris++){
	console.log(teks)
	teks = teks.concat('#')
}

// Soal 4
console.log('\nSoal Ke-4')
var kalimat = 'saya sangat senang belajar javascript'
kalimatArr = kalimat.split(' ')
console.log(kalimatArr)

// Soal 5
console.log('\nSoal Ke-5')
var daftarBuah = ['2. Apel', '5. Jeruk', '3. Anggur', '4. Semangka', '1. Mangga']
daftarBuah.sort()
for(var urutan = 0; urutan < daftarBuah.length; urutan++){
	console.log(daftarBuah[urutan])
}
