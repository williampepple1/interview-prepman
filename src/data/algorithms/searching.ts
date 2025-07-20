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
  },
  {
    id: 'exhaustive-search',
    name: 'Exhaustive Search (Brute Force)',
    category: 'Searching',
    description: 'Try every possibility',
    explanation: `
# Exhaustive Search (Brute Force)

Exhaustive Search systematically checks all possible solutions to find the optimal one. It's guaranteed to find the solution but can be computationally expensive.

## How it Works

1. **Generate**: Create all possible combinations/solutions
2. **Evaluate**: Check each solution against the problem constraints
3. **Compare**: Keep track of the best solution found
4. **Return**: Return the optimal solution

## Implementation (Subset Sum)

\`\`\`python
def exhaustive_search_subset_sum(arr, target):
    n = len(arr)
    best_subset = None
    min_size = float('inf')
    
    # Try all possible subsets (2^n combinations)
    for i in range(1 << n):
        subset = []
        current_sum = 0
        
        for j in range(n):
            if i & (1 << j):
                subset.append(arr[j])
                current_sum += arr[j]
        
        # Check if this subset sums to target
        if current_sum == target and len(subset) < min_size:
            min_size = len(subset)
            best_subset = subset[:]
    
    return best_subset

# Example usage
arr = [3, 1, 4, 2, 5]
target = 6
result = exhaustive_search_subset_sum(arr, target)
print(f"Smallest subset with sum {target}: {result}")
\`\`\`

## Implementation (Traveling Salesman)

\`\`\`python
import itertools

def exhaustive_search_tsp(distances):
    n = len(distances)
    if n <= 1:
        return 0, []
    
    min_cost = float('inf')
    best_path = None
    
    # Try all possible permutations
    for path in itertools.permutations(range(1, n)):
        cost = distances[0][path[0]]  # Start from city 0
        
        for i in range(len(path) - 1):
            cost += distances[path[i]][path[i + 1]]
        
        cost += distances[path[-1]][0]  # Return to city 0
        
        if cost < min_cost:
            min_cost = cost
            best_path = [0] + list(path) + [0]
    
    return min_cost, best_path

# Example usage
distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]
cost, path = exhaustive_search_tsp(distances)
print(f"Minimum cost: {cost}, Path: {path}")
\`\`\`

## Time Complexity

- **Subset Sum**: O(2^n) - exponential
- **TSP**: O(n!) - factorial
- **General**: O(b^d) where b is branching factor, d is depth

## Space Complexity

- O(n) for storing current solution
- O(b^d) for storing all solutions (if needed)

## When to Use

- Small problem sizes
- When optimal solution is required
- When no better algorithm exists
- For benchmarking other algorithms

## Advantages and Disadvantages

### Advantages
- Guaranteed to find optimal solution
- Simple to implement
- No special data structures needed

### Disadvantages
- Exponential time complexity
- Not practical for large problems
- Memory intensive for large search spaces
    `,
    codeExample: `def exhaustive_search_subset_sum(arr, target):
    n = len(arr)
    best_subset = None
    min_size = float('inf')
    
    for i in range(1 << n):
        subset = []
        current_sum = 0
        
        for j in range(n):
            if i & (1 << j):
                subset.append(arr[j])
                current_sum += arr[j]
        
        if current_sum == target and len(subset) < min_size:
            min_size = len(subset)
            best_subset = subset[:]
    
    return best_subset

# Example
arr = [3, 1, 4, 2, 5]
target = 6
result = exhaustive_search_subset_sum(arr, target)
print(f"Subset: {result}")`,
    timeComplexity: 'O(2^n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'backtracking-search',
    name: 'Backtracking Search',
    category: 'Searching',
    description: 'Used in puzzles like N-Queens, Sudoku',
    explanation: `
# Backtracking Search

Backtracking is a systematic way to search through all possible solutions by building solutions incrementally and abandoning partial solutions that cannot lead to a valid solution.

## How it Works

1. **Choose**: Make a choice from available options
2. **Explore**: Recursively explore the consequences of that choice
3. **Backtrack**: If the choice doesn't lead to a solution, undo the choice
4. **Repeat**: Try another choice until solution is found

## Implementation (N-Queens)

\`\`\`python
def backtracking_n_queens(n):
    def is_safe(board, row, col):
        # Check row, column, and diagonals
        for i in range(n):
            if board[row][i] == 'Q' or board[i][col] == 'Q':
                return False
            for j in range(n):
                if board[i][j] == 'Q' and (i + j == row + col or i - j == row - col):
                    return False
        return True
    
    def backtrack(board, row):
        if row == n:
            return True
        
        for col in range(n):
            if is_safe(board, row, col):
                board[row][col] = 'Q'
                if backtrack(board, row + 1):
                    return True
                board[row][col] = '.'  # Backtrack
        
        return False
    
    board = [['.' for _ in range(n)] for _ in range(n)]
    if backtrack(board, 0):
        return board
    return None

# Example usage
result = backtracking_n_queens(4)
for row in result:
    print(' '.join(row))
\`\`\`

## Implementation (Sudoku)

\`\`\`python
def backtracking_sudoku(board):
    def is_valid(board, row, col, num):
        # Check row
        for x in range(9):
            if board[row][x] == num:
                return False
        
        # Check column
        for x in range(9):
            if board[x][col] == num:
                return False
        
        # Check 3x3 box
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(3):
            for j in range(3):
                if board[i + start_row][j + start_col] == num:
                    return False
        
        return True
    
    def solve(board):
        for row in range(9):
            for col in range(9):
                if board[row][col] == 0:
                    for num in range(1, 10):
                        if is_valid(board, row, col, num):
                            board[row][col] = num
                            if solve(board):
                                return True
                            board[row][col] = 0  # Backtrack
                    return False
        return True
    
    if solve(board):
        return board
    return None

# Example usage
sudoku_board = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
]
result = backtracking_sudoku(sudoku_board)
\`\`\`

## Time Complexity

- **N-Queens**: O(n!) - factorial
- **Sudoku**: O(9^(n²)) - exponential
- **General**: O(b^d) where b is branching factor, d is depth

## Space Complexity

- O(d) where d is maximum depth of recursion
- O(n²) for board representation

## When to Use

- Constraint satisfaction problems
- Combinatorial optimization
- Puzzle solving
- When systematic search is needed

## Applications

- **N-Queens**: Chess puzzle
- **Sudoku**: Number puzzle
- **Graph Coloring**: Map coloring
- **Subset Sum**: Knapsack problems
    `,
    codeExample: `def backtracking_n_queens(n):
    def is_safe(board, row, col):
        for i in range(n):
            if board[row][i] == 'Q' or board[i][col] == 'Q':
                return False
        return True
    
    def backtrack(board, row):
        if row == n:
            return True
        
        for col in range(n):
            if is_safe(board, row, col):
                board[row][col] = 'Q'
                if backtrack(board, row + 1):
                    return True
                board[row][col] = '.'
        
        return False
    
    board = [['.' for _ in range(n)] for _ in range(n)]
    return backtrack(board, 0)

# Example
result = backtracking_n_queens(4)
print(f"Solution found: {result}")`,
    timeComplexity: 'O(n!)',
    spaceComplexity: 'O(n²)'
  },
  {
    id: 'branch-and-bound-search',
    name: 'Branch and Bound',
    category: 'Searching',
    description: 'Optimized backtracking for combinatorial problems',
    explanation: `
# Branch and Bound

Branch and Bound is an optimization technique for solving combinatorial optimization problems. It systematically enumerates candidate solutions using state space search with pruning.

## How it Works

1. **Branch**: Divide the problem into smaller subproblems
2. **Bound**: Calculate upper and lower bounds for each subproblem
3. **Prune**: Eliminate subproblems that cannot lead to better solutions
4. **Search**: Continue until optimal solution is found

## Implementation (0/1 Knapsack)

\`\`\`python
def branch_and_bound_knapsack(values, weights, capacity):
    n = len(values)
    
    def calculate_bound(level, current_weight, current_value):
        if current_weight >= capacity:
            return 0
        
        bound = current_value
        j = level
        totweight = current_weight
        
        while j < n and totweight + weights[j] <= capacity:
            totweight += weights[j]
            bound += values[j]
            j += 1
        
        if j < n:
            bound += (capacity - totweight) * values[j] / weights[j]
        
        return bound
    
    def branch_and_bound(level, current_weight, current_value, best_value):
        if current_weight > capacity:
            return best_value
        
        if level == n:
            return max(best_value, current_value)
        
        # Calculate bound for this node
        bound = calculate_bound(level, current_weight, current_value)
        if bound <= best_value:
            return best_value
        
        # Include current item
        include_value = branch_and_bound(
            level + 1, 
            current_weight + weights[level], 
            current_value + values[level], 
            best_value
        )
        
        # Exclude current item
        exclude_value = branch_and_bound(
            level + 1, 
            current_weight, 
            current_value, 
            max(best_value, include_value)
        )
        
        return max(include_value, exclude_value)
    
    return branch_and_bound(0, 0, 0, 0)

# Example usage
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50
result = branch_and_bound_knapsack(values, weights, capacity)
print(f"Maximum value: {result}")
\`\`\`

## Implementation (Traveling Salesman)

\`\`\`python
def branch_and_bound_tsp(distances):
    n = len(distances)
    
    def calculate_bound(path, unvisited):
        if not unvisited:
            return 0
        
        # Calculate minimum cost to complete the tour
        min_cost = 0
        for city in unvisited:
            min_edges = float('inf')
            for other in unvisited:
                if other != city:
                    min_edges = min(min_edges, distances[city][other])
            min_cost += min_edges
        
        return min_cost
    
    def branch_and_bound(path, unvisited, current_cost, best_cost):
        if not unvisited:
            # Complete the tour
            total_cost = current_cost + distances[path[-1]][path[0]]
            return min(best_cost, total_cost)
        
        # Calculate lower bound
        bound = current_cost + calculate_bound(path, unvisited)
        if bound >= best_cost:
            return best_cost
        
        for city in unvisited:
            new_path = path + [city]
            new_unvisited = unvisited - {city}
            new_cost = current_cost + distances[path[-1]][city]
            
            best_cost = branch_and_bound(new_path, new_unvisited, new_cost, best_cost)
        
        return best_cost
    
    return branch_and_bound([0], set(range(1, n)), 0, float('inf'))

# Example usage
distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]
result = branch_and_bound_tsp(distances)
print(f"Minimum cost: {result}")
\`\`\`

## Time Complexity

- **Worst Case**: O(2^n) - same as brute force
- **Average Case**: Much better due to pruning
- **Best Case**: O(n) - if optimal solution found early

## Space Complexity

- O(n) for recursion stack
- O(n) for bounds calculation

## When to Use

- Integer programming problems
- Combinatorial optimization
- When pruning can significantly reduce search space
- Resource allocation problems

## Advantages

- **Pruning**: Eliminates unpromising branches
- **Optimal**: Guaranteed to find optimal solution
- **Flexible**: Can be adapted to various problems
- **Efficient**: Often much faster than exhaustive search
    `,
    codeExample: `def branch_and_bound_knapsack(values, weights, capacity):
    n = len(values)
    
    def calculate_bound(level, current_weight, current_value):
        if current_weight >= capacity:
            return 0
        
        bound = current_value
        j = level
        totweight = current_weight
        
        while j < n and totweight + weights[j] <= capacity:
            totweight += weights[j]
            bound += values[j]
            j += 1
        
        return bound
    
    def branch_and_bound(level, current_weight, current_value, best_value):
        if current_weight > capacity:
            return best_value
        
        if level == n:
            return max(best_value, current_value)
        
        bound = calculate_bound(level, current_weight, current_value)
        if bound <= best_value:
            return best_value
        
        include_value = branch_and_bound(
            level + 1, 
            current_weight + weights[level], 
            current_value + values[level], 
            best_value
        )
        
        exclude_value = branch_and_bound(
            level + 1, 
            current_weight, 
            current_value, 
            max(best_value, include_value)
        )
        
        return max(include_value, exclude_value)
    
    return branch_and_bound(0, 0, 0, 0)

# Example
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50
result = branch_and_bound_knapsack(values, weights, capacity)
print(f"Maximum value: {result}")`,
    timeComplexity: 'O(2^n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'monte-carlo-search',
    name: 'Monte Carlo Search',
    category: 'Searching',
    description: 'Random sampling, often in games',
    explanation: `
# Monte Carlo Search

Monte Carlo Search uses random sampling to explore search spaces, particularly effective in game playing and optimization problems where the search space is too large for systematic exploration.

## How it Works

1. **Sample**: Generate random samples from the search space
2. **Evaluate**: Assess the quality of each sample
3. **Aggregate**: Combine results to estimate the solution
4. **Converge**: More samples generally lead to better accuracy

## Implementation (Monte Carlo Tree Search - MCTS)

\`\`\`python
import random
import math

class MCTSNode:
    def __init__(self, state, parent=None, action=None):
        self.state = state
        self.parent = parent
        self.action = action
        self.children = []
        self.visits = 0
        self.value = 0.0
    
    def is_fully_expanded(self):
        return len(self.children) == len(self.get_possible_actions())
    
    def get_possible_actions(self):
        # This should be implemented based on the specific game/problem
        return []
    
    def get_ucb_value(self, exploration_constant=1.414):
        if self.visits == 0:
            return float('inf')
        return (self.value / self.visits) + exploration_constant * math.sqrt(math.log(self.parent.visits) / self.visits)

def monte_carlo_tree_search(root_state, iterations=1000):
    root = MCTSNode(root_state)
    
    for _ in range(iterations):
        node = root
        
        # Selection
        while node.is_fully_expanded() and not node.state.is_terminal():
            node = select_child(node)
        
        # Expansion
        if not node.state.is_terminal():
            action = random.choice([a for a in node.state.get_possible_actions() 
                                  if a not in [child.action for child in node.children]])
            new_state = node.state.apply_action(action)
            child = MCTSNode(new_state, parent=node, action=action)
            node.children.append(child)
            node = child
        
        # Simulation
        simulation_state = node.state.copy()
        while not simulation_state.is_terminal():
            action = random.choice(simulation_state.get_possible_actions())
            simulation_state = simulation_state.apply_action(action)
        
        # Backpropagation
        reward = simulation_state.get_reward()
        while node:
            node.visits += 1
            node.value += reward
            node = node.parent
    
    # Return best action
    return max(root.children, key=lambda c: c.visits).action

# Example usage (simplified)
class GameState:
    def __init__(self):
        self.board = [0] * 9  # Tic-tac-toe board
        self.current_player = 1
    
    def is_terminal(self):
        # Check for win or draw
        return self.check_winner() != 0 or 0 not in self.board
    
    def get_possible_actions(self):
        return [i for i, cell in enumerate(self.board) if cell == 0]
    
    def apply_action(self, action):
        new_state = GameState()
        new_state.board = self.board[:]
        new_state.board[action] = self.current_player
        new_state.current_player = 3 - self.current_player  # Switch player
        return new_state
    
    def get_reward(self):
        winner = self.check_winner()
        if winner == 1:
            return 1
        elif winner == 2:
            return -1
        return 0
    
    def check_winner(self):
        # Check rows, columns, diagonals
        lines = [(0,1,2), (3,4,5), (6,7,8), (0,3,6), (1,4,7), (2,5,8), (0,4,8), (2,4,6)]
        for a, b, c in lines:
            if self.board[a] == self.board[b] == self.board[c] != 0:
                return self.board[a]
        return 0

# Example usage
initial_state = GameState()
best_action = monte_carlo_tree_search(initial_state, iterations=1000)
print(f"Best action: {best_action}")
\`\`\`

## Implementation (Monte Carlo Optimization)

\`\`\`python
def monte_carlo_optimization(objective_function, bounds, iterations=10000):
    """
    Find maximum of objective function using Monte Carlo sampling
    """
    best_value = float('-inf')
    best_point = None
    
    for _ in range(iterations):
        # Generate random point within bounds
        point = [random.uniform(bounds[i][0], bounds[i][1]) 
                for i in range(len(bounds))]
        
        # Evaluate objective function
        value = objective_function(point)
        
        # Update best if better
        if value > best_value:
            best_value = value
            best_point = point
    
    return best_point, best_value

# Example usage
def objective_function(x):
    return -(x[0] - 2)**2 - (x[1] - 3)**2 + 10

bounds = [(-5, 5), (-5, 5)]
best_point, best_value = monte_carlo_optimization(objective_function, bounds)
print(f"Best point: {best_point}, Best value: {best_value}")
\`\`\`

## Time Complexity

- **MCTS**: O(iterations × simulation_depth)
- **Optimization**: O(iterations × evaluation_cost)
- **General**: O(n) where n is number of samples

## Space Complexity

- **MCTS**: O(tree_size) for storing search tree
- **Optimization**: O(1) for storing best solution

## When to Use

- Game playing (Go, Chess, etc.)
- Large search spaces
- When systematic search is impractical
- Optimization problems
- When approximate solutions are acceptable

## Applications

- **Game AI**: AlphaGo, game playing bots
- **Optimization**: Function optimization
- **Planning**: Robot path planning
- **Simulation**: Risk assessment
    `,
    codeExample: `def monte_carlo_optimization(objective_function, bounds, iterations=10000):
    best_value = float('-inf')
    best_point = None
    
    for _ in range(iterations):
        point = [random.uniform(bounds[i][0], bounds[i][1]) 
                for i in range(len(bounds))]
        value = objective_function(point)
        
        if value > best_value:
            best_value = value
            best_point = point
    
    return best_point, best_value

# Example
def objective_function(x):
    return -(x[0] - 2)**2 - (x[1] - 3)**2 + 10

bounds = [(-5, 5), (-5, 5)]
best_point, best_value = monte_carlo_optimization(objective_function, bounds)
print(f"Best point: {best_point}, Best value: {best_value}")`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'iterative-deepening-search',
    name: 'Iterative Deepening Search (IDS)',
    category: 'Searching',
    description: 'Combines DFS depth limits with completeness',
    explanation: `
# Iterative Deepening Search (IDS)

Iterative Deepening Search combines the space efficiency of Depth-First Search with the completeness of Breadth-First Search by running DFS with increasing depth limits.

## How it Works

1. **Start**: Begin with depth limit 0
2. **DFS**: Perform DFS with current depth limit
3. **Increase**: Increment depth limit by 1
4. **Repeat**: Until solution is found or maximum depth reached

## Implementation (Tree Search)

\`\`\`python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.children = []

def iterative_deepening_search(root, target):
    def depth_limited_search(node, target, depth_limit):
        if node is None:
            return None
        
        if node.val == target:
            return node
        
        if depth_limit <= 0:
            return None
        
        for child in node.children:
            result = depth_limited_search(child, target, depth_limit - 1)
            if result:
                return result
        
        return None
    
    # Try increasing depth limits
    depth = 0
    max_depth = 100  # Prevent infinite loop
    
    while depth <= max_depth:
        result = depth_limited_search(root, target, depth)
        if result:
            return result, depth
        depth += 1
    
    return None, -1

# Example usage
root = TreeNode(1)
root.children = [TreeNode(2), TreeNode(3)]
root.children[0].children = [TreeNode(4), TreeNode(5)]
root.children[1].children = [TreeNode(6), TreeNode(7)]

target = 5
result, depth = iterative_deepening_search(root, target)
print(f"Found at depth {depth}: {result.val if result else 'Not found'}")
\`\`\`

## Implementation (Graph Search)

\`\`\`python
def iterative_deepening_graph_search(graph, start, target):
    def depth_limited_search(node, target, depth_limit, visited):
        if node == target:
            return [node]
        
        if depth_limit <= 0:
            return None
        
        visited.add(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                path = depth_limited_search(neighbor, target, depth_limit - 1, visited)
                if path:
                    return [node] + path
        
        visited.remove(node)
        return None
    
    # Try increasing depth limits
    depth = 0
    max_depth = len(graph)
    
    while depth <= max_depth:
        visited = set()
        result = depth_limited_search(start, target, depth, visited)
        if result:
            return result, depth
        depth += 1
    
    return None, -1

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

path, depth = iterative_deepening_graph_search(graph, 'A', 'F')
print(f"Path: {path}, Depth: {depth}")
\`\`\`

## Implementation (8-Puzzle)

\`\`\`python
def iterative_deepening_8puzzle(initial_state, goal_state):
    def manhattan_distance(state, goal):
        distance = 0
        for i in range(3):
            for j in range(3):
                if state[i][j] != 0:
                    # Find position in goal
                    for gi in range(3):
                        for gj in range(3):
                            if goal[gi][gj] == state[i][j]:
                                distance += abs(i - gi) + abs(j - gj)
                                break
        return distance
    
    def get_neighbors(state):
        # Find empty position
        for i in range(3):
            for j in range(3):
                if state[i][j] == 0:
                    empty_i, empty_j = i, j
                    break
        
        neighbors = []
        moves = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        
        for di, dj in moves:
            new_i, new_j = empty_i + di, empty_j + dj
            if 0 <= new_i < 3 and 0 <= new_j < 3:
                new_state = [row[:] for row in state]
                new_state[empty_i][empty_j] = new_state[new_i][new_j]
                new_state[new_i][new_j] = 0
                neighbors.append(new_state)
        
        return neighbors
    
    def depth_limited_search(state, goal, depth_limit, path):
        if state == goal:
            return path
        
        if depth_limit <= 0:
            return None
        
        for neighbor in get_neighbors(state):
            if neighbor not in path:
                result = depth_limited_search(neighbor, goal, depth_limit - 1, path + [neighbor])
                if result:
                    return result
        
        return None
    
    # Try increasing depth limits
    depth = 0
    max_depth = 31  # Maximum moves for 8-puzzle
    
    while depth <= max_depth:
        result = depth_limited_search(initial_state, goal_state, depth, [initial_state])
        if result:
            return result, depth
        depth += 1
    
    return None, -1

# Example usage
initial = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 5, 8]
]
goal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
]

solution, moves = iterative_deepening_8puzzle(initial, goal)
print(f"Solution found in {moves} moves")
\`\`\`

## Time Complexity

- **Worst Case**: O(b^d) where b is branching factor, d is depth
- **Optimal**: O(b^d) - same as BFS but with better space complexity
- **Average**: Often better than BFS due to early termination

## Space Complexity

- O(d) where d is depth of solution
- Much better than BFS which uses O(b^d)

## When to Use

- When solution depth is unknown
- When memory is limited
- When optimal solution is required
- Game playing (chess, checkers)

## Advantages

- **Complete**: Guaranteed to find solution if it exists
- **Optimal**: Finds shortest path
- **Space Efficient**: Uses DFS space complexity
- **Flexible**: Works with any search problem
    `,
    codeExample: `def iterative_deepening_search(root, target):
    def depth_limited_search(node, target, depth_limit):
        if node is None:
            return None
        
        if node.val == target:
            return node
        
        if depth_limit <= 0:
            return None
        
        for child in node.children:
            result = depth_limited_search(child, target, depth_limit - 1)
            if result:
                return result
        
        return None
    
    depth = 0
    while depth <= 100:
        result = depth_limited_search(root, target, depth)
        if result:
            return result, depth
        depth += 1
    
    return None, -1

# Example
root = TreeNode(1)
root.children = [TreeNode(2), TreeNode(3)]
result, depth = iterative_deepening_search(root, 3)
print(f"Found at depth {depth}: {result.val if result else 'Not found'}")`,
    timeComplexity: 'O(b^d)',
    spaceComplexity: 'O(d)'
  }
]; 