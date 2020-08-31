// soal 1
console.log('Soal Ke-1')
const phi = 3.14
const luasLingkaran = (jariJari) => {
	let result = phi * jariJari * jariJari
	return result
}
console.log("Luas Lingkaran : " + luasLingkaran(5))

const kelilingLingkaran = (jariJari) => {
	let result = 2 * phi * jariJari
	return result
}
console.log("Keliling Lingkaran : " + kelilingLingkaran(5))


// Soal 2
console.log('\nSoal Ke-2')
var kalimat = ""
const tambahDataKalimat = (...kata) => {
	for(let i=0; i < kata.length; i++){
		kalimat += `${kata[i]} `
	}
	return kalimat
}
console.log(tambahDataKalimat("saya", "adalah", "seorang", "frontend", "developer"))


// Soal 3
console.log('\nSoal Ke-3')
const newFunction = (firstName, lastName) => {
	return {
		firstName,
		lastName,
		fullName: () => {
			console.log(`${firstName} ${lastName}`)
		}
	}
}
newFunction("William", "Imoh").fullName()


// Soal 4
console.log('\nSoal Ke-4')
const newObject = {
	firstName: "Harry",
	lastName: "Potter Holt",
	destination: "Hogwarts React Conf",
	occupation: "Deve-wizard Avocado",
	spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation)


// Soal 5
console.log("\nSoal Ke-5")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east]
console.log(combined)
