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
let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
