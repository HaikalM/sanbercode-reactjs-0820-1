// soal 1 -> release 0
class Animal {
	constructor(name){
		this._name = name
		this._legs = 4
		this._cold_blooded = false
	}

	get name(){
		return this._name
	}

	get legs(){
		return this._legs
	}

	get cold_blooded(){
		return this._cold_blooded
	}
}
var sheep = new Animal("shaun")
console.log("Output soal 1 release - 0")
console.log("Sheep name : " + sheep.name)
console.log("Sheep legs : " + sheep.legs)
console.log("Sheep Cold Blooded : " + sheep.cold_blooded)
