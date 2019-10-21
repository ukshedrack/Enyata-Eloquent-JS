// Question 1 - FLATTENING

arrays = [[1,2,3], [4,5,6], [7,8,9]]
console.log(arrays.reduce((flat,current) => flat.concat(current), []));