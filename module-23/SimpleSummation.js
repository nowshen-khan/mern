/*
Simple Summation
Problem Statement: Write a program that calculates and prints the sum of two numbers entered by the user.
Input: The input consists of two integers.
Output: Output a single line containing the sum of two integers.
Constraints: -2 31 ≤ |S| ≤ 231 - 1
Example: Enter two numbers
Input: 5 2
Output: 7
*/

function main (input) {
    /**
     * Write JavaScript code from here
     */
    const numbers = input.split(' ');


const num1 = parseInt(numbers[0], 10);
const num2 = parseInt(numbers[1], 10);

const sum = num1 + num2;


console.log(sum);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});