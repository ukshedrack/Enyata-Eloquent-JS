// Reversing an Array
var reverseArray = (array) => {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
	    let old = array[i];
	    array[i] = array[array.length - 1 - i];
	    array[array.length - 1 - i] = old;
	}
	return array;
}
//Test Cases
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["Ademola Babatunde", "Akintunde Akinpelumi", "Anita Igboh", "Gerald Inyiama", 
			"Ogechi Chiama", "Ogunsola Folakemi", "Olisemeka Shedrack", "Tejiri Amami"]));