function rFact(num) {
    let n = Math.max(0, Math.floor(num));
    
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    return n * rFact(n - 1);
}


console.log(rFact(3));    // Output: 6
console.log(rFact(6.5));  // Output: 720
console.log(rFact(-1));   // Output: 0
