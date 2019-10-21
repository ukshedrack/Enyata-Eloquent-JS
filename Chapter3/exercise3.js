//Question 3 - Bean Counting

var countChar = function(string, char){ 
	let count = 0;

	for (let letter of string){
		if (letter == char) {count += 1;}  
		else {count += 0;}
	}
	return count;
}

//Test Cases
console.log(countChar('Hippopotamus', 'p'));
console.log(countChar('BBC', 'B'));