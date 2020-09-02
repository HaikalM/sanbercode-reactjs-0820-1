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

// soal 1 -> release 1
class Frog extends Animal{
	constructor(name){
		super(name)
	}

	jump(){
		console.log("Frog jump : hop hop")
	}
}

class Ape extends Animal{
	constructor(name, legs){
		super(name)
		this._legs = legs
	}

	yell() {
		console.log("Ape yell : Auoo")
	}
}
console.log("\nOutput soal 1 release - 1")

var sungokong = new Ape("kera sakti")
sungokong._legs = 8
console.log("Ape name : " + sungokong.name)
console.log("Ape legs : " + sungokong.legs)
console.log("Ape Cold Blooded : " + sungokong.cold_blooded)
sungokong.yell()

var kodok = new Frog("buduk")
console.log("\nFrog name : " + kodok.name)
console.log("Frog legs : " + kodok.legs)
console.log("Frog Cold Blooded : " + kodok.cold_blooded)
kodok.jump()


// soal 2
class Clock{
	constructor({template}, timer){
		this._template = template
		this._timer = timer
	}

	render(){
		let date = new Date()

		let hours = date.getHours()
		if (hours < 10) hours = '0' + hours

		let mins = date.getMinutes()
		if (mins < 10) mins = '0' + mins

		let secs = date.getSeconds()
		if (secs < 10) secs = '0' + secs

		let output = this._template.replace('h', hours).replace('m', mins).replace('s', secs)

		console.log(output)
	}

	stop(){
		clearInterval(this._timer)
	}

	start(){
		this.render()
		this._timer = setInterval(this.render.bind(this), 1000)
	}
}
console.log("\nOutput soal 2")
var clock = new Clock({template: 'h:m:s'})
clock.start()
