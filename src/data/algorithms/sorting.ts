import { Algorithm } from '../../types';

export const sortingAlgorithms: Algorithm[] = [
  {
    id: 'selection-sort',
    name: 'Selection Sort',
    category: 'Sorting',
    description: 'A simple sorting algorithm that repeatedly selects the minimum element from the unsorted portion',
    explanation: `
# Selection Sort Algorithm

Selection Sort works by repeatedly finding the minimum element from the unsorted portion and placing it at the beginning.

## How it Works

1. **Initialize**: Start with full unsorted array
2. **Find Minimum**: Find smallest element in unsorted portion
3. **Swap**: Place it at beginning of unsorted portion
4. **Repeat**: Until array is sorted

## Implementation

\`\`\`python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
\`\`\`

## Time Complexity

- **Best Case**: O(n²)
- **Average Case**: O(n²)
- **Worst Case**: O(n²)

## Space Complexity

- O(1) - In-place sorting

## When to Use

- Small datasets
- When memory space is limited
- When number of swaps needs to be minimized
- Educational purposes
    `,
    codeExample: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'counting-sort',
    name: 'Counting Sort',
    category: 'Sorting',
    description: 'A non-comparison sorting algorithm that works by counting the number of objects with distinct key values',
    explanation: `
# Counting Sort Algorithm

Counting Sort is an integer sorting algorithm that works by counting the number of objects with distinct key values and using arithmetic to determine their positions.

## How it Works

1. **Count**: Count occurrences of each element
2. **Modify Counts**: Update counts to reflect positions
3. **Place Elements**: Place elements in correct positions
4. **Copy Back**: Copy sorted elements back to original array

## Implementation

\`\`\`python
def counting_sort(arr):
    if not arr:
        return arr
        
    # Find range of array elements
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    
    # Initialize counting array
    count = [0] * range_val
    output = [0] * len(arr)
    
    # Count occurrences
    for num in arr:
        count[num - min_val] += 1
    
    # Modify count array to contain actual positions
    for i in range(1, len(count)):
        count[i] += count[i - 1]
    
    # Build output array
    for num in reversed(arr):
        index = count[num - min_val] - 1
        output[index] = num
        count[num - min_val] -= 1
    
    return output
\`\`\`

## Time Complexity

- O(n + k) where k is the range of input

## Space Complexity

- O(n + k) for output and counting arrays

## When to Use

- Integer or string data
- Small range of possible values
- When linear time sorting is needed
- When stable sort is required
    `,
    codeExample: `def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    for num in arr:
        count[num] += 1
    pos = 0
    for i in range(max_val + 1):
        for j in range(count[i]):
            arr[pos] = i
            pos += 1`,
    timeComplexity: 'O(n + k)',
    spaceComplexity: 'O(k)'
  },
  {
    id: 'radix-sort',
    name: 'Radix Sort',
    category: 'Sorting',
    description: 'A non-comparison sorting algorithm that sorts integers by processing each digit position',
    explanation: `
# Radix Sort Algorithm

Radix Sort is a non-comparative sorting algorithm that sorts integers by processing each digit position, starting from the least significant digit.

## How it Works

1. **Find Max**: Determine number of digits in largest number
2. **Process Digits**: Sort numbers based on each digit position
3. **Use Counting Sort**: For each digit position
4. **Repeat**: Until all digits are processed

## Implementation

\`\`\`python
def radix_sort(arr):
    def counting_sort_for_digit(arr, exp):
        n = len(arr)
        output = [0] * n
        count = [0] * 10
        
        # Count occurrences of current digit
        for i in range(n):
            index = arr[i] // exp
            count[index % 10] += 1
        
        # Update count to actual positions
        for i in range(1, 10):
            count[i] += count[i - 1]
        
        # Build output array
        i = n - 1
        while i >= 0:
            index = arr[i] // exp
            output[count[index % 10] - 1] = arr[i]
            count[index % 10] -= 1
            i -= 1
        
        # Copy output to arr
        for i in range(n):
            arr[i] = output[i]
    
    # Find maximum number to know number of digits
    max_num = max(arr)
    
    # Do counting sort for every digit
    exp = 1
    while max_num // exp > 0:
        counting_sort_for_digit(arr, exp)
        exp *= 10
    
    return arr
\`\`\`

## Time Complexity

- O(d * (n + k)) where d is number of digits and k is range of each digit

## Space Complexity

- O(n + k)

## When to Use

- Integer or string data
- Fixed-length integers
- When stable sort is needed
- When data range is not too large
    `,
    codeExample: `def radix_sort(arr):
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        counting_sort_for_digit(arr, exp)
        exp *= 10`,
    timeComplexity: 'O(d * (n + k))',
    spaceComplexity: 'O(n + k)'
  },
  {
    id: 'bucket-sort',
    name: 'Bucket Sort',
    category: 'Sorting',
    description: 'A sorting algorithm that distributes elements into buckets and sorts each bucket individually',
    explanation: `
# Bucket Sort Algorithm

Bucket Sort works by distributing elements into a number of buckets, sorting these buckets individually, and then concatenating them.

## How it Works

1. **Create Buckets**: Make n empty buckets
2. **Distribute**: Put array elements into buckets
3. **Sort Buckets**: Sort individual buckets
4. **Concatenate**: Combine all buckets in order

## Implementation

\`\`\`python
def bucket_sort(arr):
    if not arr:
        return arr
        
    # Find range of values
    max_val = max(arr)
    min_val = min(arr)
    
    # Number of buckets, using array length
    bucket_range = (max_val - min_val) / len(arr)
    
    # Create empty buckets
    buckets = [[] for _ in range(len(arr) + 1)]
    
    # Put array elements in different buckets
    for num in arr:
        # Handle edge case where num is max_val
        idx = int((num - min_val) / bucket_range)
        if idx == len(arr):
            idx -= 1
        buckets[idx].append(num)
    
    # Sort individual buckets
    for bucket in buckets:
        bucket.sort()
    
    # Concatenate all buckets into arr
    index = 0
    for bucket in buckets:
        for num in bucket:
            arr[index] = num
            index += 1
    
    return arr
\`\`\`

## Time Complexity

- **Average Case**: O(n + k)
- **Worst Case**: O(n²) when all elements go to same bucket

## Space Complexity

- O(n + k)

## When to Use

- Floating point numbers
- Uniformly distributed data
- When input is likely to be uniformly distributed
- When additional memory usage is acceptable
    `,
    codeExample: `def bucket_sort(arr):
    buckets = [[] for _ in range(len(arr))]
    for num in arr:
        idx = int(num * len(arr))
        buckets[idx].append(num)
    for bucket in buckets:
        bucket.sort()
    return [num for bucket in buckets for num in bucket]`,
    timeComplexity: 'O(n + k)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    category: 'Sorting',
    description: 'A highly efficient, divide-and-conquer sorting algorithm using a pivot element',
    explanation: `
# Quick Sort Algorithm

Quick Sort is an efficient, in-place sorting algorithm that uses a divide-and-conquer strategy and a pivot element to partition the array.

## How it Works

1. **Choose Pivot**: Select a pivot element (usually last or random)
2. **Partition**: Rearrange elements so smaller elements are before pivot
3. **Recursion**: Recursively sort the sub-arrays
4. **Combine**: The array is sorted when all sub-arrays are sorted

## Implementation

\`\`\`python
def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
\`\`\`

## Time Complexity

- **Best Case**: O(n log n) - Balanced partitions
- **Average Case**: O(n log n)
- **Worst Case**: O(n²) - Already sorted array

## Space Complexity

- O(log n) - Due to recursion stack

## When to Use

- Large datasets
- When average-case performance is important
- When in-place sorting is needed
- When stable sorting isn't required
    `,
    codeExample: `def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)`,
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(log n)'
  }
]; 