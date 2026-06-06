// Iteration of fibonacci
function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1 || i === 2) {
            result.push(1);
        } else {
            const prevNum1 = result[i - 2];
            const prevNum2 = result[i - 1];
            
            result.push(prevNum1 + prevNum2);
        }
    }
    return result;
}

// Recursiv version of fibonacci
function fibsRec(n) {
  console.log(`This was printed recursively `);

  const result = [];
  if (n === 0) {
    result.push(n);
    return result;
  }
  if (n === 1) {
    result.push(0);
    return result;
  }
  if (n === 2) {
    result.push(0, 1);
    return result;
  }

  const previousResult = fibsRec(n - 1);
  let nextNum =
    previousResult[previousResult.length - 1] +
    previousResult[previousResult.length - 2];
  previousResult.push(nextNum);

  return previousResult;
}

function mergeSort(arr) {
  const result = [];
  const length = arr.length;

  if (length == 0) {
    return result;
  }
  if (length == 1) {
    result.push(...arr);
    return result;
  }
  const leftHalfLength = Math.floor(length / 2);

  const leftSideArr = [];
  for (let i = 0; i < leftHalfLength; i++) {
    leftSideArr.push(arr[i]);
  }
  const rightSideArr = [];
  for (let i = leftHalfLength; i < length; i++) {
    rightSideArr.push(arr[i]);
  }

  const resultLeft = mergeSort(leftSideArr);
  const resultRight = mergeSort(rightSideArr);

  while (resultLeft.length != 0 || resultRight.length != 0) {
    if (
      resultLeft[0] < resultRight[0] ||
      typeof resultRight[0] === "undefined"
    ) {
      result.push(resultLeft[0]);
      resultLeft.shift();
    } else {
      result.push(resultRight[0]);
      resultRight.shift();
    }
  }
  return result;
}

console.log(mergeSort([])); // → []
console.log(mergeSort([73])); // → [73]
console.log(mergeSort([1, 2, 3, 4, 5])); // → [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // → [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // → [79, 100, 105, 110]
