function helper(arr, start, end) {
    let swapIdx = start;
    let pivot = arr[swapIdx];

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for(let i = start+1; i<=end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);

    return swapIdx;
}

function quicksort(arr, start = 0, end=arr.length - 1) {
    if(start < end) {
        let pivotIdx = helper(arr, start, end);

        //left
        quicksort(arr, start, pivotIdx - 1);

        //right
        quicksort(arr, pivotIdx +1, end);
    }

    return arr;
}

quicksort([50,40,80,30,90,70]);