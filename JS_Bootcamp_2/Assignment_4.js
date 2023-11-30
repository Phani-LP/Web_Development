function checkPalindrome(s) {
	
    const len = s.length;

    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return 'Not a palindrome';
        }
    }
    return 'Palindrome';
}

let s = window.prompt('Enter a string: ');

console.log(checkPalindrome(s));

/*
Output:
Palindrome
Not a palindrome
*/