/**
 * Sum of Array Elements (Medium)

Problem Statement: Write a program where user will give an array of elements. You will have to print the sum of elements where each element will be less than median element.
Input: The input consists of size of the array and the elements of the array. Every input will be unsigned integer number.
Output: The output will be sum of elements that are lesser than median element.
Constraints: 0 ≤ |S| ≤ 109

Example: Enter size of the array and the elements.
Input: 
    6
    30 10 5 40 60 15
Output: 30
Notes: None 
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split("\n");

	const n = Number(data[0]);
	const arr = data[1]
		.split(" ")
		.map((item) => Number(item))
		.sort((a, b) => a - b);

	let mediun;
	if (n % 2 == 0) {
		const k = parseInt(n / 2);
		mediun = (arr[k] + arr[k - 1]) / 2;
	} else {
		//odd
		mediun = arr[parseInt(n / 2)];
	}

	let sum = 0;
	for (let i = 0; i < n; i++) {
		if (arr[i] < mediun) {
			sum = sum + arr[i];
		}
	}
	console.log(sum);
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});

/**
 * Reverse the Number (Easy)

Problem Statement: Write a program where user will give a number. You will reverse the number and print it.

Input: The input consists of an integer number.
Output: The output will be the reverse of the integer number.
Constraints: 0 ≤ |S| ≤ 109

Example: Enter number.
Input: 1234
Output:4321
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split("").reverse().join("");
	let n = Number(data);
	console.log(n);
}

/**
 * Find Factorial (Easy)

Problem Statement: Write a program where you will be given a number. You will have to print the factorial of that number.

Input: The input consists of an integer numbers.
Output: The output will be an integer number.
Constraints: 0 ≤ |S| ≤ 109

Example: Enter a number.
Input: 4
Output: 24
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const n = Number(input);
	let output = 1;
	for (let i = 1; i <= n; i++) {
		output = output * i;
	}
	console.log(output);
}

/**
 * Check for Palindrome (Medium)
 
Problem Statement: Write a program to check whether a number is palindrome or not. palindrome Number: A palindromic number is a number (such as 16461) that remains the same when its digits are reversed.
Input: The input consists of an integer number.
Output: The output will print whether the input is palindrome number or not.
Constraints: 0 ≤ |S| ≤ 109

Example-1: Enter number
Input: 121
Output: 121 is a palindrome number

Example-2: Enter number
Input: 123
Output: 123 is not a palindrome number
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const rev = input.split("").reverse().join("");
	//console.log(rev);
	if (input == rev) {
		console.log(`${input} is a palindrome number`);
	} else {
		console.log(`${input} is not a palindrome number`);
	}
}
