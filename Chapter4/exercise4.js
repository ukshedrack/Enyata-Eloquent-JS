// Question 4 - A DEEP COMPARISON

function deepEqual(value1, value2){
	if (value1 === value2) return true;
	if (value1 == null || typeof value1 != 'object' || value2 == null || typeof value2 != 'object') return false;
	let keysA = Object.keys(value1), keysB = Object.keys(value2);
	if (keysA.length != keysB.length) return false
	for (let key of keysA){
		if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) return false;
	}
	return true;
}
let obj = {here: {is: 'an'}, object: 2}
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));


var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);