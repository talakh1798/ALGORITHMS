
// Push Front
function pushFront(arr, x) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = x;
    return arr;
}

console.log(pushFront([5, 7, 2, 3], 8)); // [8, 5, 7, 2, 3]
console.log(pushFront([99], 7)); // [7, 99]

// Pop Front
function popFront(arr) {
    let x = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    console.log(arr);
    return x;
}
console.log(popFront([0, 5, 10, 15])); // 0 returned, [5, 10, 15] printed
console.log(popFront([4, 5, 7, 9])); // 4 returned, [5, 7, 9] printed


// Insert At
function insertAt(arr, index, val) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val;
    return arr;
}

console.log(insertAt([100, 200, 5], 2, 311)); // [100, 200, 311, 5]
console.log(insertAt([9, 33, 7], 1, 42)); // [9, 42, 33, 7]

// Remove At
function removeAt(arr, index) {
    let x = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    console.log(arr);
    return x;
}
console.log(removeAt([1000, 3, 204, 77], 1)); // 3 returned, [1000, 204, 77] printed
console.log(removeAt([8, 20, 55, 44, 98], 3)); // 44 returned, [8, 20, 55, 98] printed

// BONUS: Swap Pairs
function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(swapPairs([1, 2, 3, 4])); // [2, 1, 4, 3]
console.log(swapPairs(["Brendan", true, 42])); // [true, "Brendan", 42]









