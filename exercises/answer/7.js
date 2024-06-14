function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case: 0! and 1! are both 1
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
  
  console.log(factorial(5)); // Should output 120 (5!)
  