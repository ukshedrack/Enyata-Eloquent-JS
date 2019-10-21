// Question 4 - A DEEP COMPARISON

function deepEqual(value1, value2){
	if (value1 === value2) return true;
	let keysA = Object.keys(value1), keysB = Object.keys(value2);
	if (keysA.length != keysB.length) return false
	for (let key of keysA){
		if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) return false;
	}
	return true;
}