function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
  }
  
  console.log(isPalindrome('racecar')); // Should output true
  console.log(isPalindrome('hello')); // Should output false
  