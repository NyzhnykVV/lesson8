
const newArrayLength = 10;
const newMaxNumberToRandom = 20;
const newArray = [];


function merge(left, right) {
    let mergedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            mergedArray.push(left.shift());
        } else {
            mergedArray.push(right.shift());
        }
    }
    return [...mergedArray, ...left, ...right];
}


function customMergeSort(newArray) {
    const half = newArray.length / 2;

    if (newArray.length < 2) {
        return newArray;
    }
    const left = newArray.splice(0, half);
    return merge(customMergeSort(left), customMergeSort(newArray));
}


function generateRandomNumbersForArray(newArray) {
    for (let i = 0; i < newArrayLength; i++) {
        let randomNum = Math.floor(Math.random() * newMaxNumberToRandom);
       newArray.push(randomNum);
    }
}


generateRandomNumbersForArray(newArray);
console.log(` Generated array:`);
console.table(newArray);
console.log(` Sorted array:`);
console.table(customMergeSort(newArray));
