var	readBooks = require('./callback.js')

var books = [
	{name: 'LOTR', timeSpent: 3000},
	{name: 'Fidas', timeSpent: 2000},
	{name: 'Kalkulus', timeSpent: 4000},
	{name: 'Komik', timeSpent: 1000}
]

let i = 0
function reading(time = 10000, book = books[i]){
	readBooks(time, book, function(sisaWaktu){
		if(time > book.timeSpent){
			i++
			reading(sisaWaktu, books[i])
		}else{
			console.log('Membaca terhenti, waktu tidak cukup')
		}
	})
}
reading()
