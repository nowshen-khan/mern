/**
 * Calculate power of this number

Problem Statement: Write a program where you will be given a number and it's exponent. You will have to calculate the power of the number.
Input: The input consists of two integer numbers.
Output: The output will be an integer number.
Constraints: 0 ≤ |S| ≤ 109

Example: Enter numbers.
Input: 3 4
Output: 81
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	let data = input.split(" ");

	let n1 = parseInt(data[0]);
	let n2 = parseInt(data[1]);
	console.log(n1 ** n2);
}
let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
