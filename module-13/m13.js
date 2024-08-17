/**
 * Gamble with Profit

Problem Statement: Write a program that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
Input: The input consists of one float F and two integer N, M numbers
Output: The output will print either "true" or "false"
Constraints: 0 ≤ |F| ≤ 1, 0 ≤ |N| ≤ 104, 0 ≤ |M| ≤ 104

Example: Enter numbers
Input: 0.2 50 9
Output: true
Notes: A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.
 */
function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split(" ");
	const prob = parseFloat(data[0]);
	const prize = parseFloat(data[1]);
	const pay = parseFloat(data[2]);
	if (prob * prize > pay) {
		console.log(true);
	} else {
		console.log(false);
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
 * Frame Per Second

Problem Statement: Write a program that returns the number of frames shown in a given number of minutes for a certain FPS. FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
Input: The input consists of two integer number: minute and fps.
Output: The output will print an integers.
Constraints: 0 ≤ |S| ≤ 104

Example: Enter numbers
Input: 10 25
Output: 15000
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split(" ");
	const s = parseInt(data[0] * 60);
	const f = parseInt(data[1]);
	console.log(s * f);
}

/**
 * Kinetic Energy

Problem Statement: Write a program that will calculate Kinetic Energy. It can be calculated with the following formula: KE = 0.5mV*V where m is mass in kg, v is velocity in m/s, KE is kinetic energy in J. Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.
Input: The input consists of two double number: mass and velocity.
Output: The output will print an integer.
Constraints: 0 ≤ |S| ≤ 104

Example:Enter numbers
Input: 60 3
Output: 270
Notes: None
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const data = input.split(" ");
	const m = data[0];
	const v = data[1];
	const k = 0.5 * m * v * v;
	console.log(Math.round(k));
}
