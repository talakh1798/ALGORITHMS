function rSigma(num) {
    let n = Math.max(0, Math.floor(num));
    
    // Base case: if n is 0, return 0
    if (n === 0) {
        return 0;
    }
    
    // Recursive case: sum of integers from 1 to n
    return n + rSigma(n - 1);
}

console.log(rSigma(5));    // Output: 15
console.log(rSigma(2.5));  // Output: 3
console.log(rSigma(-1));   // Output: 0
