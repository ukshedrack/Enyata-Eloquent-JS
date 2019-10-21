//Question 2 - Recursion

function isEven(N){
	if (N < 0){return isEven(-N)}
	else if (N == 0){return true;}
	else if (N == 1){return false;}
	else {return isEven(N-2);}
}

// Test cases
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(-1));
console.log(isEven(-50));
console.log(isEven(-75));