//1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330

function circuitPower(voltage, current) {
	power = voltage * current;
	return power;
}

// 2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

function findMaxNumber(num) {
	let max = num[0];
	for (let i = 1; i < num.length; i++) {
		if (num[i] > max) {
			max = num[i];
		}
	}
	return max;
}

//3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.

function mergeArrays(arr1, arr2) {
	let newArr = arr1.concat(arr2);
	return newArr;
}

// 4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]

function arrayValuesTypes(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(typeof arr[i]);
	}
	return newArr;
}
