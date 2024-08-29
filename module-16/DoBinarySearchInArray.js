/**
 * Do Binary Search In Array
 *
 * Problem Statement: Write a program to find the index of a target element from a sorted array in logarithmic time. If the target element is in the array it will print it's index value. Otherwise it will print "Element not found".
 * Input: The program will take an integer N as the size of a sorted array. Then it will take the integer values of the array M[]. Finally, it will take the target value P.
 * Output: The output will print either the index of the target element or "Element not found" if the element is not found.
 * Constraints: 0 ≤ |N| ≤ 100000, 0 ≤ |M[]| ≤ 100000, 0 ≤ |P| ≤ 100000
 * Example-1: Enter numbers
 * Input: 5
         10 20 30 40 50
         20
 * Output: 1
 * Example-2: Enter numbers
 * Input: 5
         10 20 30 40 50
         60
 * Output: Element not found
 * Notes: There will be no repeated elements.
 */


function main (input) {
    /**
     * Write JavaScript code from here
     */
    let data = input.split("\n");

    const numbers = data[1].split(" ");
    const nums = []
    for(let i=0; i<=numbers.length-1; i++){
        nums.push(parseInt(numbers[i]));
    }
    let index = nums.indexOf(parseInt(data[2]));

    if(index>0){
        console.log(index);
    }else{
        console.log("Element not found");
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});