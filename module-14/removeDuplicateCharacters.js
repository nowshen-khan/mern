/**
 * 
 * Remove Duplicate Characters

Problem Statement: Write a program that removes duplicate characters from a given string, keeping only the first occurrence of each character.
Input: The input consists of a string.
Output: The output will be a string without any duplicate character.
Constraints: 0 ≤ |S| ≤ 1000

Example: Enter string
Input: apples
Output: aples
Notes: None
 */
function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	let str = input.split("");
	let n = str.length;

	let array = str.filter((item, index) => str.indexOf(item) === index);
	console.log(array.join(""));
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
