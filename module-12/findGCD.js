/**
 * What will be the GCD? (Medium)

Problem Statement: Write a program where you have to find the GCD(Greatest Common Divisor) of two numbers.
Input: The input consists of two integer numbers.
Output: The output will be an integer number.
Constraints: 0 ≤ |S| ≤ 109

Example: Enter two numbers.
Input: 9 12
Output: 3
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	let data = input.split(" ");
	let a = data[0];
	let b = data[1];
	let gcd = function (a, b) {
		if (b == 0) {
			return a;
		}
		return gcd(b, a % b);
	};
	console.log(gcd(a, b));
}
let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
