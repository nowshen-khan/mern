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

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
