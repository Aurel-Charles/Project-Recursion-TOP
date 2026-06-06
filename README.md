# Project: Recursion

Project from [The Odin Project – Full Stack JavaScript](https://www.theodinproject.com/lessons/javascript-recursion).

## Exercises

### Fibonacci

Implementation of the Fibonacci sequence in two ways:

- `fibs(n)` – iterative approach using a `for` loop
- `fibsRec(n)` – recursive approach

Both functions take a number `n` and return an array of `n` Fibonacci numbers.

```
fibs(8)    // [0, 1, 1, 2, 3, 5, 8, 13]
fibsRec(8) // [0, 1, 1, 2, 3, 5, 8, 13]
```

### Merge Sort

Implementation of the merge sort algorithm using recursion.

`mergeSort(arr)` takes an unsorted array and returns a sorted array using a divide-and-conquer approach.

```
mergeSort([])                          // []
mergeSort([73])                        // [73]
mergeSort([3, 2, 1, 13, 8, 5, 0, 1])  // [0, 1, 1, 2, 3, 5, 8, 13]
mergeSort([105, 79, 100, 110])         // [79, 100, 105, 110]
```

## Usage

```bash
node fibonacci.js
node mergeSort.js
```

## Key concepts

- Recursion and base cases
- Divide and conquer
- Array manipulation (`push`, `shift`)