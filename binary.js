function rBinarySearch(arr, target, low = 0, high = arr.length - 1) {
    // Base case: if the range is invalid, the target is not found
    if (low > high) {
        return false;
    }

    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);

    // Base case: if the middle element is the target, return true
    if (arr[mid] === target) {
        return true;
    }

    // Recursive case: search in the left or right half of the array
    if (arr[mid] > target) {
        return rBinarySearch(arr, target, low, mid - 1);
    } else {
        return rBinarySearch(arr, target, mid + 1, high);
    }
}

// Example usage
console.log(rBinarySearch([1, 3, 5, 6], 4));       // Output: false
console.log(rBinarySearch([4, 5, 6, 8, 12], 5));   // Output: true

function rGCF(a, b) {
    // Base case: if both numbers are equal, return a (or b)
    if (a === b) {
        return a;
    }

    // Recursive case: apply Euclid's algorithm
    if (a > b) {
        return rGCF(a - b, b);
    } else {
        return rGCF(a, b - a);
    }
}

// Example usage
console.log(rGCF(48, 18)); // Output: 6
console.log(rGCF(56, 98)); // Output: 14

