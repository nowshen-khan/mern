/**
 * Check Anagram

Problem Statement: You are given two strings A and B. Your task is check whether the string 
B is anagram of string A or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other whereas "abcd" and "aabc" are not.
Input: The input consists of two strings A and B in two lines containing only lowercase English letters.
Output: In output print "YES" if string B is anagram of string A or "NO" otherwise. Print without quotation mark.
Constraints: 1 ≤ ∣A∣,∣B∣ ≤ 10000
strings contains only lowercase (a−z) English letters.

Example 1:
Input:abcd and dbac
Output: YES
Example 2:
Input: abcd and aabc
Output: NO
 */
function main(input) {
	/**
	 * Write JavaScript code from here
	 */

	// Function to check if two strings are anagrams
	function areAnagrams(s1, s2) {
		// Sort both strings and compare
		return s1.split("").sort().join("") === s2.split("").sort().join("");
	}

	let data = input.split("\n");
	let str1 = data[0];
	let str2 = data[1];

	if (areAnagrams(str1, str2)) {
		console.log("YES");
	} else {
		console.log("NO");
	}
}

let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
