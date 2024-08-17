/*
2. Quotient Calculator (Easy)

Problem Statement:
Write a program to find the quotient of two numbers (integer division).

Input: The input consists of two integers.
Output: Output will be the quotient which will be an integer.
Constraints: -2^31 ≤ |S| ≤ 2^31 - 1

Example: Enter two numbers
Input: 4 2
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
	let intDivision = parseInt(num1 / num2);
	console.log(intDivision);
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
