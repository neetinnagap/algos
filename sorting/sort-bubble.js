function bubblesort(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

bubblesort([5,4,2,3,1]);