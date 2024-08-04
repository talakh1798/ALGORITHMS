// Reverse
function ReverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(ReverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(ReverseArray([7, 6, 5, 4, 3])); // [3, 4, 5, 6, 7]


// Rotate 
function RotateArray(arr, shiftBy) {
    shiftBy = shiftBy % arr.length; 
    if (shiftBy < 0) {
        shiftBy += arr.length; 
    }
    
    // Reverse the first part
    for (let i = 0, j = shiftBy - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Reverse the second part
    for (let i = shiftBy, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Reverse the whole array
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}
console.log( RotateArray([1, 2, 3], 1)); // [3, 1, 2]
console.log( RotateArray([1, 2, 3], -1)); // [2, 3, 1]
console.log(RotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log( RotateArray([1, 2, 3, 4, 5], -2)); // [3, 4, 5, 1, 2]

// Filter Range
function filterRange(arr, min, max) {
    let j = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[j] = arr[i];
            j++;
        }
    }
    arr.length = j;
    
    return arr;
}
console.log(filterRange([1, 2, 3, 4, 5], 2, 4)); // [2, 3, 4]
console.log(filterRange([10, 20, 30, 40, 50], 15, 45)); // [20, 30, 40]
console.log(filterRange([5, 6, 7, 8, 9], 6, 8)); // [6, 7, 8]
console.log(filterRange([100, 200, 300], 150, 250)); // [200]

// Concat 

function Concat(array1, array2) {
    let newArray = new Array(array1.length + array2.length);
    let i = 0;

    // elements from the first array
    for ( ;i < array1.length; i++) {
        newArray[i] = array1[i];
    }

    // elements from the second array
    for (let j = 0; j <  array2.length; j++, i++) {
        newArray[i] = array2[j];
    }

    return newArray;
}

console.log(Concat(['a', 'b'], [1, 2])); // ['a', 'b', 1, 2]
console.log(Concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(Concat([], [4, 5, 6])); // [4, 5, 6]
console.log(Concat([1, 2, 3], [])); // [1, 2, 3]


