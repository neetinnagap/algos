function insertionsort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        let j = i - 1;
        for(; j >= 0 ; j--) {
            if(arr[j] > currVal) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = currVal;
    }
    
    return arr;
}

insertionsort([5,4,2,3,1]);