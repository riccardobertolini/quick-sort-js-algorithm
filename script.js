const quickSortFunc = (data) => {
	if (data.length <= 1) { 
		return data;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = data.pop();
		var length = data.length;

		for (var i = 0; i < length; i++) {
			if (data[i] <= pivot) {
				left.push(data[i]);
			} else {
				right.push(data[i]);
			}
		}

		return newArray.concat(quickSortFunc(left), pivot, quickSortFunc(right));
	}
}

// testing the function
const arrayToSort = [4,3, 0, 2, 5, -1, 4, 1 ];
const sortedArray = quickSortFunc(arrayToSort);

console.log("Unsorted array: " + arrayToSort);
console.log("Sorted array: " + sortedArray);
