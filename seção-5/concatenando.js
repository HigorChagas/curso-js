const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//const arr3 = arr1.concat(arr2, [7, 8, 9], 'Higor');
// ... rest -> ... spread
const arr3 = [...arr1, 'Higor', ...arr2, ...[7, 8, 9]];
console.log(arr3);