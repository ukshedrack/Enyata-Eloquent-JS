// Exercise 2 - GROUPS

class Group{
	constructor(){
		this.group = [];
	}
	add(value){
		if(value in this.group){}
		else {this.group.push(value);}
	}
	delete(value){
		if(value in this.group){
			return this.group.pop(value);
		}
	}
	has(value){
		return this.group.includes(value);
	}
	static from(collection){
		let group = new Group;
		for (let value of collection){
			group.add(value);
		}
		return group;
	}
}

var group = Group.from([10, 20]);
console.log(group.has(10));