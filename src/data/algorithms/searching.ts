import { Algorithm } from '../../types';

export const searchingAlgorithms: Algorithm[] = [
  {
    id: 'linear-search',
    name: 'Linear Search',
    category: 'Searching',
    description: 'A simple search algorithm that checks each element in sequence',
    explanation: `
# Linear Search Algorithm

Linear Search is the simplest searching algorithm that sequentially checks each element in a collection until a match is found.

## How it Works

1. **Start**: Begin from the first element
2. **Compare**: Check if current element is the target
3. **Move**: If not found, move to next element
4. **Repeat**: Until element is found or end is reached

## Implementation

\`\`\`python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return index if found
    return -1  # Return -1 if not found
\`\`\`

## Time Complexity

- **Best Case**: O(1) - Element found at first position
- **Average Case**: O(n)
- **Worst Case**: O(n) - Element not found or at last position

## Space Complexity

- O(1) - No extra space needed

## When to Use

- Small datasets
- Unsorted arrays
- Simple implementation needed
- When data structure doesn't support better search
    `,
    codeExample: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    category: 'Searching',
    description: 'An efficient search algorithm for sorted arrays using divide-and-conquer strategy',
    explanation: `
# Binary Search Algorithm

Binary Search is an efficient algorithm for searching a sorted array by repeatedly dividing the search interval in half.

## How it Works

1. **Initialize**: Set left and right pointers to array bounds
2. **Find Middle**: Calculate middle point
3. **Compare**: Check if middle element is target
4. **Divide**: If not found, search left or right half
5. **Repeat**: Until element is found or bounds cross

## Implementation (Iterative)

\`\`\`python
def binary_search_iterative(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
\`\`\`

## Implementation (Recursive)

\`\`\`python
def binary_search_recursive(arr, target, left, right):
    if left > right:
        return -1
        
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)
\`\`\`

## Time Complexity

- **Best Case**: O(1) - Element found at middle
- **Average Case**: O(log n)
- **Worst Case**: O(log n) - Element not found

## Space Complexity

- **Iterative**: O(1)
- **Recursive**: O(log n) due to call stack

## When to Use

- Sorted arrays
- Large datasets
- When efficient search is needed
- When data is static (rarely updated)
    `,
    codeExample: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1`,
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)'
  }
]; 