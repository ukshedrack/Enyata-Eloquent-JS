// CHESSBOARD

var size = prompt("Enter a size for your chessboard");
var grid = "";
for (let y = 0; y < size; y += 1) {
	for (let x = 0; x < size; x += 1) {
		if ((x+y)%2 == 0) {grid += ' ';}
		else {grid += '#';}
	}
	grid += "\n";
}
console.log(grid);