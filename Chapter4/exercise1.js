//The Sum of a Range

//Range of numbers
var range = (start, end, step = start < end ? 1 : -1) => {
	let array = [];

	if (step > 0){
		for (i = start; i <= end; i += step){array.push(i);}
	}
	else {
		for (i = start; i >= end; i += step){array.push(i);}
	}
	return array;
}

//Sum of an array
var sum = (array) => {
	let total = 0;

	for (let number of array){
		total += number;
	}
	return total;
}
//Test Cases
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));