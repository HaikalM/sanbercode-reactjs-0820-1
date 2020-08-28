// soal 1
function halo(){
	return "Halo Sanbers!"
}
console.log('Result soal ke-1')
console.log(halo())

// soal 2
function kalikan(params1, params2){
	return params1 * params2
}

var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log('\nResult soal ke-2 : ')
console.log(hasilKali)

// soal 3
function introduce(name, age, address, hobby){
	var teks = 'Nama saya ' + name
	teks += ', umur saya ' + age + ' tahun'
	teks += ', alamat saya di ' + address
	teks += ', dan saya punya hobby yaitu ' + hobby
	return teks
}
console.log('\nResult soal ke-3 : ')
console.log(introduce('John', 30, 'jalan belum jadi', 'Gaming'))

// soal 4
var arrayDaftarPeserta = ['Asep', 'laki-laki', 'baca buku', 1992]
var objectDaftarPeserta = {
	nama: 'Asep',
	jenis_kelamin: 'laki-laki',
	hobi: 'baca buku',
	tahun_lahir: 1992
}
console.log('\nResult soal ke-4 : ')
console.log(objectDaftarPeserta.tahun_lahir)

// soal 5
var fruitLists = [
	{
		nama: 'strawberry',
		warna: 'merah',
		'ada bijinya': 'tidak',
		harga: 9000
	}, {
		nama: 'jeruk',
		warna: 'oranye',
		'ada bijinya': 'ada',
		harga: 8000
	}, {
		nama: 'Semangka',
		warna: 'Hijau & Merah',
		'ada bijinya': 'ada',
		harga: 10000
	}, {
		nama: 'Pisang',
		warna: 'Kuning',
		'ada bijinya': 'ada',
		harga: 5000
	}
]
console.log('\nResult soal ke-5 : ')
console.log(fruitLists[0])

// soal 6
var dataFilm = []
function tambahObjectKeArray(nama, durasi, genre, tahun){
	var objek = {
		nama: nama,
		durasi: durasi,
		genre: genre,
		tahun: tahun
	}
	dataFilm.push(objek)
}
tambahObjectKeArray('james bond - rogue nation', '2 jam', 'action', 2015)
tambahObjectKeArray('Mission Imposible III', '2 jam', 'action', 2013)
console.log('\nResult soal ke-6 : ')
console.log(dataFilm)
