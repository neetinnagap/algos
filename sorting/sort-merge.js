function merge(arr1, arr2) {
	let i = 0;
	let j = 0;
	let res = [];

	while(i < arr1.length && j < arr2.length) {
		if(arr1[i] < arr2[j]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j])
			j++;
		}
	}

	for(; i < arr1.length; i++) {
		res.push(arr1[i]);
	}

	for(; j < arr2.length; j++) {
		res.push(arr2[j]);
	}

	return res;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
	let mid = Math.round(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid, arr.length));
	return merge(left, right);
}

mergeSort([5,4,2,3,1]);