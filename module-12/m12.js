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
