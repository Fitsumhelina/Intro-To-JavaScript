function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
  }
  
  console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output [2, 4]
  


  function filterEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output [2, 4]
  