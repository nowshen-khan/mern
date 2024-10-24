/*
Greetings
Problem Statement: Write a program that asks the user for their name and then prints a personalized greeting.
Input: The input consists of a string SS
Output: Output a single line containing the personalized greeting.
Constraints: 1 ≤ S ≤ 1000
Example: What is your name?
Input: Alice
Output: Hello, Alice! Nice to meet you.
Notes: In the example, the user's name is "Alice". The program prints a greeting message, combining the user's name with the predefined message.
*/

function main (input) {
    /**
     * Write JavaScript code from here
     */
    console.log('Hello, '+input+'! Nice to meet you.')
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});