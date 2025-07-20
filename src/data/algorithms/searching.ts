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
  },
  {
    id: 'jump-search',
    name: 'Jump Search',
    category: 'Searching',
    description: 'Jump in fixed steps, then linear search within a block',
    explanation: `
# Jump Search Algorithm

Jump Search is an algorithm for searching sorted arrays by jumping ahead in fixed steps and then performing linear search within the identified block.

## How it Works

1. **Calculate Jump Size**: Optimal jump size is √n
2. **Jump Ahead**: Jump by fixed steps until we find a value greater than target
3. **Linear Search**: Perform linear search in the previous block
4. **Return Result**: Return index if found, -1 otherwise

## Implementation

\`\`\`python
import math

def jump_search(arr, target):
    n = len(arr)
    if n == 0:
        return -1
    
    # Calculate optimal jump size
    step = int(math.sqrt(n))
    
    # Find the block where target may be present
    prev = 0
    while prev < n and arr[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1
    
    # Linear search in the identified block
    while prev < min(step, n):
        if arr[prev] == target:
            return prev
        prev += 1
    
    return -1

# Example usage
arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
target = 55
result = jump_search(arr, target)
print(f"Element {target} found at index: {result}")
\`\`\`

## Optimized Implementation

\`\`\`python
def jump_search_optimized(arr, target):
    n = len(arr)
    if n == 0:
        return -1
    
    # Calculate jump size
    step = int(n ** 0.5)
    
    # Find the block
    i = 0
    while i < n and arr[i] < target:
        i += step
    
    # Linear search in the block
    start = max(0, i - step)
    end = min(n, i)
    
    for j in range(start, end):
        if arr[j] == target:
            return j
    
    return -1
\`\`\`

## Time Complexity

- **Best Case**: O(1) - Target found in first jump
- **Average Case**: O(√n) - Optimal jump size
- **Worst Case**: O(√n) - Target in last block

## Space Complexity

- O(1) - Constant extra space

## When to Use

- Sorted arrays
- When binary search is not available
- When data is stored in external memory
- When jump size can be optimized for specific hardware

## Comparison with Other Searches

- **vs Linear Search**: Better for large datasets
- **vs Binary Search**: Simpler implementation, good for external memory
- **vs Interpolation Search**: More predictable performance
    `,
    codeExample: `import math

def jump_search(arr, target):
    n = len(arr)
    if n == 0:
        return -1
    
    step = int(math.sqrt(n))
    prev = 0
    
    while prev < n and arr[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1
    
    while prev < min(step, n):
        if arr[prev] == target:
            return prev
        prev += 1
    
    return -1

# Example
arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
target = 55
result = jump_search(arr, target)
print(f"Found at index: {result}")`,
    timeComplexity: 'O(√n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'interpolation-search',
    name: 'Interpolation Search',
    category: 'Searching',
    description: 'Like Binary Search but estimates position using value distribution',
    explanation: `
# Interpolation Search Algorithm

Interpolation Search is an improvement over binary search for uniformly distributed sorted arrays. It estimates the position of the target value using linear interpolation.

## How it Works

1. **Calculate Position**: Use formula: pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
2. **Compare**: Check if element at calculated position is target
3. **Adjust Bounds**: Update low/high based on comparison
4. **Repeat**: Until target is found or bounds cross

## Implementation

\`\`\`python
def interpolation_search(arr, target):
    low, high = 0, len(arr) - 1
    
    while low <= high and target >= arr[low] and target <= arr[high]:
        # Avoid division by zero
        if arr[high] == arr[low]:
            if arr[low] == target:
                return low
            return -1
        
        # Calculate position using interpolation
        pos = low + int(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))
        
        # Target found
        if arr[pos] == target:
            return pos
        
        # Target is in left subarray
        if arr[pos] > target:
            high = pos - 1
        # Target is in right subarray
        else:
            low = pos + 1
    
    return -1

# Example usage
arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47]
target = 18
result = interpolation_search(arr, target)
print(f"Element {target} found at index: {result}")
\`\`\`

## Optimized Implementation

\`\`\`python
def interpolation_search_optimized(arr, target):
    low, high = 0, len(arr) - 1
    
    while low <= high:
        # Handle edge cases
        if arr[high] == arr[low]:
            return low if arr[low] == target else -1
        
        if target < arr[low] or target > arr[high]:
            return -1
        
        # Calculate position
        pos = low + int(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))
        
        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    
    return -1
\`\`\`

## Time Complexity

- **Best Case**: O(1) - Target found at first probe
- **Average Case**: O(log log n) - For uniformly distributed data
- **Worst Case**: O(n) - For non-uniform distribution

## Space Complexity

- O(1) - Constant extra space

## When to Use

- Uniformly distributed sorted arrays
- When data distribution is known
- When better than binary search performance is needed
- Database indexing

## Advantages and Disadvantages

### Advantages
- Faster than binary search for uniform data
- Better for large datasets with known distribution
- Efficient for external memory searches

### Disadvantages
- Poor performance on non-uniform data
- More complex implementation
- Sensitive to data distribution
    `,
    codeExample: `def interpolation_search(arr, target):
    low, high = 0, len(arr) - 1
    
    while low <= high and target >= arr[low] and target <= arr[high]:
        if arr[high] == arr[low]:
            if arr[low] == target:
                return low
            return -1
        
        pos = low + int(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))
        
        if arr[pos] == target:
            return pos
        elif arr[pos] > target:
            high = pos - 1
        else:
            low = pos + 1
    
    return -1

# Example
arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47]
target = 18
result = interpolation_search(arr, target)
print(f"Found at index: {result}")`,
    timeComplexity: 'O(log log n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'exponential-search',
    name: 'Exponential Search',
    category: 'Searching',
    description: 'Quickly find range, then Binary Search inside it',
    explanation: `
# Exponential Search Algorithm

Exponential Search is useful for searching in unbounded arrays or when the size is unknown. It finds the range where the target might be present and then uses binary search.

## How it Works

1. **Find Range**: Start with index 1, then 2, 4, 8, 16... until we find a value greater than target
2. **Binary Search**: Perform binary search in the identified range
3. **Return Result**: Return index if found, -1 otherwise

## Implementation

\`\`\`python
def exponential_search(arr, target):
    n = len(arr)
    if n == 0:
        return -1
    
    # If target is first element
    if arr[0] == target:
        return 0
    
    # Find range for binary search
    i = 1
    while i < n and arr[i] <= target:
        i = i * 2
    
    # Perform binary search in the identified range
    return binary_search_range(arr, target, i // 2, min(i, n - 1))

def binary_search_range(arr, target, left, right):
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Example usage
arr = [2, 3, 4, 10, 40, 50, 60, 70, 80, 90, 100]
target = 10
result = exponential_search(arr, target)
print(f"Element {target} found at index: {result}")
\`\`\`

## Implementation for Unbounded Arrays

\`\`\`python
def exponential_search_unbounded(arr_func, target):
    """
    arr_func(i) returns the element at index i
    Returns -1 if element not found or index out of bounds
    """
    # Find the range
    i = 1
    while True:
        try:
            if arr_func(i) >= target:
                break
            i *= 2
        except IndexError:
            break
    
    # Binary search in the range [i//2, i]
    left = i // 2
    right = i
    
    while left <= right:
        mid = (left + right) // 2
        try:
            if arr_func(mid) == target:
                return mid
            elif arr_func(mid) < target:
                left = mid + 1
            else:
                right = mid - 1
        except IndexError:
            right = mid - 1
    
    return -1
\`\`\`

## Time Complexity

- **Best Case**: O(1) - Target found at first position
- **Average Case**: O(log n) - Similar to binary search
- **Worst Case**: O(log n) - When target is at the end

## Space Complexity

- O(1) - Constant extra space

## When to Use

- Unbounded arrays
- When array size is unknown
- When target is likely to be near the beginning
- External memory searches

## Comparison with Other Searches

- **vs Linear Search**: Much faster for large datasets
- **vs Binary Search**: Better for unbounded arrays
- **vs Jump Search**: More efficient range finding
    `,
    codeExample: `def exponential_search(arr, target):
    n = len(arr)
    if n == 0:
        return -1
    
    if arr[0] == target:
        return 0
    
    i = 1
    while i < n and arr[i] <= target:
        i = i * 2
    
    return binary_search_range(arr, target, i // 2, min(i, n - 1))

def binary_search_range(arr, target, left, right):
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Example
arr = [2, 3, 4, 10, 40, 50, 60, 70, 80, 90, 100]
target = 10
result = exponential_search(arr, target)
print(f"Found at index: {result}")`,
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'ternary-search',
    name: 'Ternary Search',
    category: 'Searching',
    description: 'Similar to Binary Search but splits into 3 parts (used in optimization)',
    explanation: `
# Ternary Search Algorithm

Ternary Search is similar to binary search but divides the search space into three parts instead of two. It's particularly useful for finding the maximum or minimum of a unimodal function.

## How it Works

1. **Divide**: Split the search space into three equal parts
2. **Compare**: Compare values at the two dividing points
3. **Eliminate**: Eliminate one-third of the search space
4. **Repeat**: Until the search space is small enough

## Implementation (Finding Maximum)

\`\`\`python
def ternary_search_max(arr):
    left, right = 0, len(arr) - 1
    
    while right - left > 3:
        # Calculate two dividing points
        mid1 = left + (right - left) // 3
        mid2 = right - (right - left) // 3
        
        # Compare values at dividing points
        if arr[mid1] < arr[mid2]:
            left = mid1
        else:
            right = mid2
    
    # Linear search in the remaining small range
    max_val = arr[left]
    max_index = left
    
    for i in range(left + 1, right + 1):
        if arr[i] > max_val:
            max_val = arr[i]
            max_index = i
    
    return max_index, max_val

# Example usage
arr = [1, 3, 5, 7, 9, 8, 6, 4, 2]  # Unimodal array
max_index, max_value = ternary_search_max(arr)
print(f"Maximum value {max_value} found at index {max_index}")
\`\`\`

## Implementation (Finding Target Value)

\`\`\`python
def ternary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        # Calculate two dividing points
        mid1 = left + (right - left) // 3
        mid2 = right - (right - left) // 3
        
        # Check if target is found
        if arr[mid1] == target:
            return mid1
        if arr[mid2] == target:
            return mid2
        
        # Determine which third to search
        if target < arr[mid1]:
            right = mid1 - 1
        elif target > arr[mid2]:
            left = mid2 + 1
        else:
            left = mid1 + 1
            right = mid2 - 1
    
    return -1

# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
result = ternary_search(arr, target)
print(f"Element {target} found at index: {result}")
\`\`\`

## Implementation (Function Optimization)

\`\`\`python
def ternary_search_function(func, left, right, precision=1e-6):
    """
    Find maximum of unimodal function in range [left, right]
    """
    while right - left > precision:
        # Calculate two dividing points
        mid1 = left + (right - left) / 3
        mid2 = right - (right - left) / 3
        
        # Compare function values
        if func(mid1) < func(mid2):
            left = mid1
        else:
            right = mid2
    
    return (left + right) / 2

# Example: Find maximum of f(x) = -(x-5)² + 10
def example_function(x):
    return -(x - 5) ** 2 + 10

max_x = ternary_search_function(example_function, 0, 10)
print(f"Maximum found at x = {max_x:.6f}")
print(f"Maximum value = {example_function(max_x):.6f}")
\`\`\`

## Time Complexity

- **Best Case**: O(1) - Target found at first comparison
- **Average Case**: O(log₃ n) - Logarithmic with base 3
- **Worst Case**: O(log₃ n) - When target is at the end

## Space Complexity

- O(1) - Constant extra space

## When to Use

- Finding maximum/minimum of unimodal functions
- Optimization problems
- When binary search is not suitable
- Mathematical function optimization

## Comparison with Binary Search

### Advantages
- Better for unimodal functions
- More robust for optimization problems
- Can find local maxima/minima

### Disadvantages
- More comparisons per iteration
- Slightly more complex implementation
- Not always better than binary search for simple searches
    `,
    codeExample: `def ternary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid1 = left + (right - left) // 3
        mid2 = right - (right - left) // 3
        
        if arr[mid1] == target:
            return mid1
        if arr[mid2] == target:
            return mid2
        
        if target < arr[mid1]:
            right = mid1 - 1
        elif target > arr[mid2]:
            left = mid2 + 1
        else:
            left = mid1 + 1
            right = mid2 - 1
    
    return -1

# Example
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
result = ternary_search(arr, target)
print(f"Found at index: {result}")`,
    timeComplexity: 'O(log₃ n)',
    spaceComplexity: 'O(1)'
  }
]; 