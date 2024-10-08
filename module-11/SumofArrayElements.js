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
