function binarySearchForInfiniteArray(arr, target) {
  let low = 0;
  let high = 1;

  while (arr[high] < target) {
    high = high * 2;
  }
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = arr[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const infiniteArray = [
  1, 3, 5, 7, 9, 11, 13, 14, 15, 15, 17, 18, 19, 20, 102, 110,
];
const targetValue = 102;
const result = binarySearchForInfiniteArray(infiniteArray, targetValue);

if (result !== -1) {
  console.log(`Target ${targetValue} found at index ${result}.`);
} else {
  console.log(`Target ${targetValue} not found.`);
}
