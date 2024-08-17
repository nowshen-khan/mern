/**
 * Is the number Prime? (Medium)

Problem Statement: Write a program where you will be given a number. You will have to check whether the number is prime or not.
Input: The input consists of an integer numbers.
Output: The output will print whether the number is prime or not. For example, for 13 it will print "13 is a prime number." for 24 it will print "24 is not a prime number."
Constraints: 0 ≤ |S| ≤ 109

Example: Enter number.
Input: 13
Output: 13 is a prime number.
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */

	let prime = true;
	if (input === 1) {
		console.log(`${input} is neither prime nor composite number.`);
	} else if (input > 1) {
		for (let i = 2; i < input; i++) {
			if (input % i == 0) {
				prime = false;
			}
		}
		if (prime) {
			console.log(`${input} is a prime number.`);
		} else {
			console.log(`${input} is not a prime number.`);
		}
	} else {
		console.log(`${input} is not a prime number.`);
	}
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
