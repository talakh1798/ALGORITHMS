function rFact(num) {
    // Check if num is a positive integer
    if (num < 0 ) {
        return 0;
    }
    // Convert num to integer if it's not already
    num= Math.floor(num)

    if (num === 0) {
        return 1;
    }
    else{
        // Recursive case: n! = n * (n-1)!
        return num * rFact(num - 1);

    }
}

console.log(rFact(3));    // Output: 6
console.log(rFact(6.5));  // Output: 720
console.log(rFact(-1));   // Output: 0
