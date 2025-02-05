function selectionsort(arr) {
    let minIdx = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; i < arr.length; j++) {
            if(arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
}

selectionsort([5,4,2,3,1]);