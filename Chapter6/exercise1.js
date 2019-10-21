class Vec{
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(other){
		return new Vec (this.x + other.x, this.y + other.y)
	}

	minus(other){
		return new Vec (this.x - other.x, this.y - other.y)
	}

	get length() {
		let v1 = this.x * this.x
		let v2 = this.y * this.y
		return Math.sqrt(v1 + v2)
	}
}

var vector = new Vec(1, 2);
var newVector = new Vec(2, 3);
var dist = new Vec(3, 4);
console.log(vector.plus(newVector));
console.log(vector.minus(newVector));
console.log(dist.length);