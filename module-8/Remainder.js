/*
1. Remainder Reminder (Easy)

Problem Statement: Write a program to find the remainder of two numbers (modulo operation).

Input: The input consists of two integers.
Output: Output will be the remainder.
Constraints: -2^31 ≤ |S| ≤ 2^31 - 1

Example: Enter two numbers
Input: 5 3
Output: 2

Solved in JavaScript
*/
function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	let numArray = input.split(" ");
	let num1 = parseInt(numArray[0]);
	let num2 = parseInt(numArray[1]);
	let remainder = num1 % num2;
	console.log(remainder);
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
