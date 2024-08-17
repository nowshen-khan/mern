//1 done
function calculateSum(a, b) {
	let sum = a + b;
	return sum;
}

//2 done
function isEven(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

//3 done
function findMax(num) {
	let max = num[0];
	for (let i = 1; i < num.length; i++) {
		if (num[i] > max) {
			max = num[i];
		}
	}
	return max;
}


//4 done
function reverseString(str) {
	let revStr = str.split("").reverse().join("");
	return revStr;
}

//5 done
function filterOddNumber(num) {
let oddArray = [];
for (let i = 0; i < num.length; i++) {
		if (num[i]%2!=0) {
			oddArray.push(num[i]);
		}
	}

	return oddArray;
}

//6 done
function sumArray(num) {
	let sum = 0;
	for (let i = 0; i < num.length; i++) {
		sum += num[i];
	}
	return sum;
}

//7 done
function sortArray(num) {

let sortArray=num.sort(function (a, b) {
		return a - b;
	});
	return sortArray;
}
//8 done
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
