// Remove Blanks
function removeBlanks(str) {
    let resultArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            resultArray.push(str[i]);
        }
    }
    return resultArray.join('');
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); // "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); // "IcannotBELIEVEit'snotBUTTER"
 
// Git Digit
function getDigits(str) {
    let digits = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            digits += str[i];
        }
    }
    return Number(digits);
}
console.log(getDigits("abc8c0d1ngd0j0!8")); // 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // 1357924680

// count non spaces
function count(str) {
    let lengthWithSpaces = str.length;
    let lengthWithoutSpaces = 0;
    
    for (let i = 0; i < lengthWithSpaces; i++) {
        if (str[i] !== ' ') {
            lengthWithoutSpaces++;
        }
    }
    return lengthWithoutSpaces;
}
console.log(count("Honey pie, you are driving me crazy")); // 29
console.log(count("Hello world !")); // 11

// remove Shorter Strings
function removeShorterStrings(arr, minLength) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); // ['There', 'bug', 'the', 'system']
