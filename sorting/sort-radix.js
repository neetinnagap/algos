function getLength(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
    let max = 0;

    for(let i = 0; i < arr.length; i++) {
        max = Math.max(max, getLength(arr[i]));
    }

    return max;
}

function radixsort(arr) {
    console.log(maxDigits(arr));
}

radixsort([50,33,44,22,11]);