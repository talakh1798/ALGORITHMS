function rSigma(num){
    // check if num is possitve
    if(num<0 ){
        return 0;
    }
    // convert num to integer if it's not already 
    num = Math.floor(num);

    // base case : if n is 0 
    if (num == 0){
        return 0;
    } else {
        // forward progress : can't solve the problem in one step so narrow the range of possiblites
        // recursive case : add current number to the sum of numbers from 0 to (n-1)
        return num+rSigma(num-1)
    }
}
console.log(rSigma(5));    // Output: 15
console.log(rSigma(2.5));  // Output: 3
console.log(rSigma(-1));   // Output: 0
console.log(rSigma(1000)); // Output: 500500
