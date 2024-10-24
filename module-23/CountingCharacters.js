/*
Counting Characters

Problem Statement: Write a program that counts the number of characters in a string entered by the user.
Input: The input is a string.
Output: Output the number of characters.
Constraints: Output will be an unsigned integer.
Example: Enter a string
Input: Alice
Output: 5
*/

function main (input) {
    /**
     * Write JavaScript code from here
     */
    const charCount = input.length;

console.log(charCount);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});