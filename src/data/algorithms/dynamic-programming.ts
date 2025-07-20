import { Algorithm } from '../../types';

export const dynamicProgrammingAlgorithms: Algorithm[] = [
  {
    id: 'fibonacci-dp',
    name: 'Fibonacci (DP version)',
    category: 'Dynamic Programming',
    description: 'Classic dynamic programming example for calculating Fibonacci numbers',
    explanation: `
# Fibonacci (Dynamic Programming)

The Fibonacci sequence is a classic example of dynamic programming, demonstrating how to optimize recursive solutions using memoization or tabulation.

## How it Works

1. **Identify Subproblems**: F(n) = F(n-1) + F(n-2)
2. **Store Results**: Cache computed values to avoid recalculation
3. **Build Solution**: Use stored results to build larger solutions
4. **Optimize**: Convert recursion to iteration for better performance

## Implementation (Memoization - Top-Down)

\`\`\`python
def fibonacci_memoization(n, memo=None):
    if memo is None:
        memo = {}
    
    # Base cases
    if n <= 1:
        return n
    
    # Check if already computed
    if n in memo:
        return memo[n]
    
    # Compute and store
    memo[n] = fibonacci_memoization(n - 1, memo) + fibonacci_memoization(n - 2, memo)
    return memo[n]

# Example usage
result = fibonacci_memoization(10)
print(f"F(10) = {result}")
\`\`\`

## Implementation (Tabulation - Bottom-Up)

\`\`\`python
def fibonacci_tabulation(n):
    if n <= 1:
        return n
    
    # Initialize table
    dp = [0] * (n + 1)
    dp[1] = 1
    
    # Fill table
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# Example usage
result = fibonacci_tabulation(10)
print(f"F(10) = {result}")
\`\`\`

## Implementation (Space Optimized)

\`\`\`python
def fibonacci_optimized(n):
    if n <= 1:
        return n
    
    # Only store last two values
    prev, curr = 0, 1
    
    for i in range(2, n + 1):
        prev, curr = curr, prev + curr
    
    return curr

# Example usage
result = fibonacci_optimized(10)
print(f"F(10) = {result}")
\`\`\`

## Time Complexity

- **Naive Recursion**: O(2^n) - exponential
- **Memoization**: O(n) - linear
- **Tabulation**: O(n) - linear
- **Optimized**: O(n) - linear

## Space Complexity

- **Memoization**: O(n) - call stack + memo
- **Tabulation**: O(n) - dp array
- **Optimized**: O(1) - constant space

## When to Use

- Learning dynamic programming concepts
- When subproblems overlap significantly
- When recursive solution is inefficient
- As a foundation for more complex DP problems
    `,
    codeExample: `def fibonacci_dp(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# Calculate F(10)
result = fibonacci_dp(10)
print(f"F(10) = {result}")`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'longest-common-subsequence',
    name: 'Longest Common Subsequence (LCS)',
    category: 'Dynamic Programming',
    description: 'Finds the longest subsequence common to two sequences',
    explanation: `
# Longest Common Subsequence (LCS)

The LCS problem finds the longest subsequence that appears in both sequences in the same order, but not necessarily consecutively.

## How it Works

1. **Define Subproblems**: LCS(i,j) = length of LCS of str1[0:i] and str2[0:j]
2. **Recurrence Relation**: 
   - If str1[i-1] == str2[j-1]: LCS(i,j) = LCS(i-1,j-1) + 1
   - Else: LCS(i,j) = max(LCS(i-1,j), LCS(i,j-1))
3. **Build Table**: Fill 2D DP table
4. **Reconstruct**: Trace back to find the actual subsequence

## Implementation

\`\`\`python
def longest_common_subsequence(str1, str2):
    m, n = len(str1), len(str2)
    
    # Create DP table
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Fill the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    # Reconstruct the subsequence
    lcs = []
    i, j = m, n
    while i > 0 and j > 0:
        if str1[i - 1] == str2[j - 1]:
            lcs.append(str1[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -= 1
        else:
            j -= 1
    
    return ''.join(reversed(lcs)), dp[m][n]

# Example usage
str1 = "ABCDGH"
str2 = "AEDFHR"
lcs_string, lcs_length = longest_common_subsequence(str1, str2)
print(f"LCS: {lcs_string}, Length: {lcs_length}")
\`\`\`

## Space Optimized Version

\`\`\`python
def lcs_optimized(str1, str2):
    m, n = len(str1), len(str2)
    
    # Use only two rows
    prev = [0] * (n + 1)
    curr = [0] * (n + 1)
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                curr[j] = prev[j - 1] + 1
            else:
                curr[j] = max(prev[j], curr[j - 1])
        prev, curr = curr, prev
    
    return prev[n]
\`\`\`

## Time Complexity

- **Standard**: O(m × n) where m, n are string lengths
- **Optimized**: O(m × n) with O(n) space

## Space Complexity

- **Standard**: O(m × n) for DP table
- **Optimized**: O(n) using two rows

## When to Use

- File diff tools (git diff)
- DNA sequence comparison
- Plagiarism detection
- Version control systems
- Bioinformatics applications
    `,
    codeExample: `def longest_common_subsequence(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m][n]

# Example
str1 = "ABCDGH"
str2 = "AEDFHR"
result = longest_common_subsequence(str1, str2)
print(f"LCS Length: {result}")`,
    timeComplexity: 'O(m × n)',
    spaceComplexity: 'O(m × n)'
  },
  {
    id: 'longest-increasing-subsequence',
    name: 'Longest Increasing Subsequence (LIS)',
    category: 'Dynamic Programming',
    description: 'Finds the longest subsequence with strictly increasing values',
    explanation: `
# Longest Increasing Subsequence (LIS)

The LIS problem finds the longest subsequence where elements are in strictly increasing order.

## How it Works

1. **Define Subproblems**: LIS(i) = length of LIS ending at index i
2. **Recurrence Relation**: LIS(i) = max(LIS(j) + 1) for all j < i where arr[j] < arr[i]
3. **Build Solution**: Fill DP array and track maximum
4. **Reconstruct**: Use parent array to trace back the sequence

## Implementation (O(n²) Solution)

\`\`\`python
def longest_increasing_subsequence(arr):
    n = len(arr)
    
    # dp[i] = length of LIS ending at index i
    dp = [1] * n
    # parent[i] = index of previous element in LIS
    parent = [-1] * n
    
    # Fill DP table
    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                parent[i] = j
    
    # Find maximum length and ending index
    max_length = max(dp)
    end_index = dp.index(max_length)
    
    # Reconstruct the sequence
    lis = []
    while end_index != -1:
        lis.append(arr[end_index])
        end_index = parent[end_index]
    
    return lis[::-1], max_length

# Example usage
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
lis_sequence, lis_length = longest_increasing_subsequence(arr)
print(f"LIS: {lis_sequence}, Length: {lis_length}")
\`\`\`

## Implementation (O(n log n) Solution)

\`\`\`python
def lis_optimized(arr):
    n = len(arr)
    
    # tail[i] = smallest tail value for LIS of length i+1
    tail = []
    # parent[i] = index of previous element
    parent = [-1] * n
    # index[i] = index of element in tail array
    index = [-1] * n
    
    for i in range(n):
        # Binary search to find position to insert arr[i]
        pos = bisect.bisect_left(tail, arr[i])
        
        if pos == len(tail):
            tail.append(arr[i])
        else:
            tail[pos] = arr[i]
        
        index[pos] = i
        if pos > 0:
            parent[i] = index[pos - 1]
    
    # Reconstruct the sequence
    lis = []
    current = index[len(tail) - 1]
    while current != -1:
        lis.append(arr[current])
        current = parent[current]
    
    return lis[::-1], len(tail)

# Example usage
import bisect
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
lis_sequence, lis_length = lis_optimized(arr)
print(f"LIS: {lis_sequence}, Length: {lis_length}")
\`\`\`

## Time Complexity

- **Standard**: O(n²) - quadratic
- **Optimized**: O(n log n) - using binary search

## Space Complexity

- **Standard**: O(n) for DP array
- **Optimized**: O(n) for tail array and parent tracking

## When to Use

- Order analysis and optimization
- Stock price analysis
- Scheduling problems
- Bioinformatics (protein folding)
- Data compression
    `,
    codeExample: `def longest_increasing_subsequence(arr):
    n = len(arr)
    dp = [1] * n
    
    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
    
    return max(dp)

# Example
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
result = longest_increasing_subsequence(arr)
print(f"LIS Length: {result}")`,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'knapsack-01',
    name: '0/1 Knapsack Problem',
    category: 'Dynamic Programming',
    description: 'Resource optimization problem with binary item selection',
    explanation: `
# 0/1 Knapsack Problem

The 0/1 Knapsack problem involves selecting items with given weights and values to maximize total value while staying within a weight limit.

## How it Works

1. **Define Subproblems**: dp[i][w] = max value using first i items with weight limit w
2. **Recurrence Relation**: 
   - If weight[i-1] <= w: dp[i][w] = max(dp[i-1][w], value[i-1] + dp[i-1][w-weight[i-1]])
   - Else: dp[i][w] = dp[i-1][w]
3. **Build Table**: Fill 2D DP table
4. **Reconstruct**: Trace back to find selected items

## Implementation

\`\`\`python
def knapsack_01(weights, values, capacity):
    n = len(weights)
    
    # Create DP table
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    # Fill the table
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i - 1] <= w:
                # Include item i
                dp[i][w] = max(dp[i - 1][w], 
                              values[i - 1] + dp[i - 1][w - weights[i - 1]])
            else:
                # Exclude item i
                dp[i][w] = dp[i - 1][w]
    
    # Reconstruct the solution
    selected_items = []
    i, w = n, capacity
    while i > 0 and w > 0:
        if dp[i][w] != dp[i - 1][w]:
            selected_items.append(i - 1)
            w -= weights[i - 1]
        i -= 1
    
    return dp[n][capacity], selected_items[::-1]

# Example usage
weights = [2, 1, 3, 2]
values = [12, 10, 20, 15]
capacity = 5
max_value, selected = knapsack_01(weights, values, capacity)
print(f"Maximum value: {max_value}")
print(f"Selected items: {selected}")
\`\`\`

## Space Optimized Version

\`\`\`python
def knapsack_optimized(weights, values, capacity):
    n = len(weights)
    
    # Use only one row
    dp = [0] * (capacity + 1)
    
    for i in range(n):
        # Iterate backwards to avoid overwriting
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], values[i] + dp[w - weights[i]])
    
    return dp[capacity]
\`\`\`

## Time Complexity

- **Standard**: O(n × W) where n is number of items, W is capacity
- **Optimized**: O(n × W) with O(W) space

## Space Complexity

- **Standard**: O(n × W) for DP table
- **Optimized**: O(W) using single row

## When to Use

- Resource allocation problems
- Investment portfolio optimization
- Cutting stock problems
- Resource scheduling
- Budget allocation
    `,
    codeExample: `def knapsack_01(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i - 1][w], 
                              values[i - 1] + dp[i - 1][w - weights[i - 1]])
            else:
                dp[i][w] = dp[i - 1][w]
    
    return dp[n][capacity]

# Example
weights = [2, 1, 3, 2]
values = [12, 10, 20, 15]
capacity = 5
result = knapsack_01(weights, values, capacity)
print(f"Maximum value: {result}")`,
    timeComplexity: 'O(n × W)',
    spaceComplexity: 'O(n × W)'
  },
  {
    id: 'coin-change',
    name: 'Coin Change Problem',
    category: 'Dynamic Programming',
    description: 'Finds the number of ways to make a sum using given coin denominations',
    explanation: `
# Coin Change Problem

The Coin Change problem finds the number of different ways to make a given amount using coins of specified denominations.

## How it Works

1. **Define Subproblems**: dp[i] = number of ways to make amount i
2. **Recurrence Relation**: dp[i] = sum(dp[i - coin]) for all coins
3. **Initialize**: dp[0] = 1 (one way to make amount 0)
4. **Build Solution**: Fill DP array iteratively

## Implementation (Number of Ways)

\`\`\`python
def coin_change_ways(coins, amount):
    # dp[i] = number of ways to make amount i
    dp = [0] * (amount + 1)
    dp[0] = 1  # Base case: one way to make amount 0
    
    # For each coin
    for coin in coins:
        # For each amount from coin to target
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    
    return dp[amount]

# Example usage
coins = [1, 2, 5]
amount = 5
ways = coin_change_ways(coins, amount)
print(f"Number of ways to make {amount}: {ways}")
\`\`\`

## Implementation (Minimum Coins)

\`\`\`python
def coin_change_minimum(coins, amount):
    # dp[i] = minimum coins needed for amount i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # Base case: 0 coins needed for amount 0
    
    # For each amount
    for i in range(1, amount + 1):
        # Try each coin
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# Example usage
coins = [1, 2, 5]
amount = 11
min_coins = coin_change_minimum(coins, amount)
print(f"Minimum coins needed: {min_coins}")
\`\`\`

## Implementation (All Combinations)

\`\`\`python
def coin_change_combinations(coins, amount):
    def backtrack(target, start, path, result):
        if target == 0:
            result.append(path[:])
            return
        if target < 0:
            return
        
        for i in range(start, len(coins)):
            path.append(coins[i])
            backtrack(target - coins[i], i, path, result)
            path.pop()
    
    result = []
    backtrack(amount, 0, [], result)
    return result

# Example usage
coins = [1, 2, 5]
amount = 5
combinations = coin_change_combinations(coins, amount)
print(f"All combinations: {combinations}")
\`\`\`

## Time Complexity

- **Number of Ways**: O(n × amount) where n is number of coins
- **Minimum Coins**: O(n × amount)
- **All Combinations**: O(amount^n) - exponential

## Space Complexity

- **Number of Ways**: O(amount) for DP array
- **Minimum Coins**: O(amount) for DP array
- **All Combinations**: O(amount^n) for all combinations

## When to Use

- Currency exchange problems
- Vending machine programming
- Payment system optimization
- Resource allocation
- Combinatorial problems
    `,
    codeExample: `def coin_change_ways(coins, amount):
    dp = [0] * (amount + 1)
    dp[0] = 1
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]
    
    return dp[amount]

# Example
coins = [1, 2, 5]
amount = 5
result = coin_change_ways(coins, amount)
print(f"Number of ways: {result}")`,
    timeComplexity: 'O(n × amount)',
    spaceComplexity: 'O(amount)'
  },
  {
    id: 'matrix-chain-multiplication',
    name: 'Matrix Chain Multiplication',
    category: 'Dynamic Programming',
    description: 'Finds optimal order for matrix multiplication to minimize operations',
    explanation: `
# Matrix Chain Multiplication

The Matrix Chain Multiplication problem finds the optimal order to multiply a sequence of matrices to minimize the total number of scalar multiplications.

## How it Works

1. **Define Subproblems**: dp[i][j] = minimum cost to multiply matrices i to j
2. **Recurrence Relation**: dp[i][j] = min(dp[i][k] + dp[k+1][j] + cost[i][k][j]) for all k
3. **Cost Calculation**: cost[i][k][j] = dimensions[i] × dimensions[k+1] × dimensions[j+1]
4. **Build Solution**: Fill DP table and track optimal splits

## Implementation

\`\`\`python
def matrix_chain_multiplication(dimensions):
    n = len(dimensions) - 1  # Number of matrices
    
    # dp[i][j] = minimum cost to multiply matrices i to j
    dp = [[0] * n for _ in range(n)]
    # parent[i][j] = optimal split point
    parent = [[0] * n for _ in range(n)]
    
    # Fill DP table diagonally
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            
            # Try all possible split points
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    parent[i][j] = k
    
    return dp[0][n - 1], parent

def print_optimal_parens(parent, i, j):
    if i == j:
        print(f"A{i + 1}", end="")
    else:
        print("(", end="")
        print_optimal_parens(parent, i, parent[i][j])
        print_optimal_parens(parent, parent[i][j] + 1, j)
        print(")", end="")

# Example usage
dimensions = [10, 30, 5, 60]  # 3 matrices: 10×30, 30×5, 5×60
min_cost, parent = matrix_chain_multiplication(dimensions)
print(f"Minimum cost: {min_cost}")
print("Optimal parenthesization: ", end="")
print_optimal_parens(parent, 0, len(dimensions) - 2)
print()
\`\`\`

## Implementation (Space Optimized)

\`\`\`python
def matrix_chain_optimized(dimensions):
    n = len(dimensions) - 1
    dp = [[0] * n for _ in range(n)]
    
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1]
                dp[i][j] = min(dp[i][j], cost)
    
    return dp[0][n - 1]
\`\`\`

## Time Complexity

- **Standard**: O(n³) - cubic time
- **Optimized**: O(n³) with better space usage

## Space Complexity

- **Standard**: O(n²) for DP table
- **Optimized**: O(n²) for DP table

## When to Use

- Linear algebra computations
- Scientific computing
- Graphics processing
- Machine learning algorithms
- Compiler optimization

## Example Walkthrough

For matrices A₁(10×30), A₂(30×5), A₃(5×60):
- (A₁A₂)A₃: (10×30×5) + (10×5×60) = 1500 + 3000 = 4500
- A₁(A₂A₃): (30×5×60) + (10×30×60) = 9000 + 18000 = 27000
- Optimal: (A₁A₂)A₃ with cost 4500
    `,
    codeExample: `def matrix_chain_multiplication(dimensions):
    n = len(dimensions) - 1
    dp = [[0] * n for _ in range(n)]
    
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1]
                dp[i][j] = min(dp[i][j], cost)
    
    return dp[0][n - 1]

# Example
dimensions = [10, 30, 5, 60]
result = matrix_chain_multiplication(dimensions)
print(f"Minimum cost: {result}")`,
    timeComplexity: 'O(n³)',
    spaceComplexity: 'O(n²)'
  },
  {
    id: 'edit-distance',
    name: 'Edit Distance (Levenshtein Distance)',
    category: 'Dynamic Programming',
    description: 'Measures minimum operations to transform one string to another',
    explanation: `
# Edit Distance (Levenshtein Distance)

The Edit Distance problem finds the minimum number of operations (insert, delete, replace) required to transform one string into another.

## How it Works

1. **Define Subproblems**: dp[i][j] = edit distance between str1[0:i] and str2[0:j]
2. **Recurrence Relation**:
   - If str1[i-1] == str2[j-1]: dp[i][j] = dp[i-1][j-1]
   - Else: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
3. **Operations**: Insert, Delete, Replace
4. **Build Solution**: Fill DP table and trace back operations

## Implementation

\`\`\`python
def edit_distance(str1, str2):
    m, n = len(str1), len(str2)
    
    # Create DP table
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize first row and column
    for i in range(m + 1):
        dp[i][0] = i  # Delete all characters from str1
    for j in range(n + 1):
        dp[0][j] = j  # Insert all characters from str2
    
    # Fill the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]  # No operation needed
            else:
                # Take minimum of insert, delete, replace
                dp[i][j] = 1 + min(dp[i - 1][j],      # Delete
                                  dp[i][j - 1],      # Insert
                                  dp[i - 1][j - 1])  # Replace
    
    return dp[m][n]

# Example usage
str1 = "kitten"
str2 = "sitting"
distance = edit_distance(str1, str2)
print(f"Edit distance between '{str1}' and '{str2}': {distance}")
\`\`\`

## Implementation (With Operations Tracking)

\`\`\`python
def edit_distance_with_operations(str1, str2):
    m, n = len(str1), len(str2)
    
    # Create DP table and operations table
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    operations = [[''] * (n + 1) for _ in range(m + 1)]
    
    # Initialize
    for i in range(m + 1):
        dp[i][0] = i
        operations[i][0] = 'D' * i
    for j in range(n + 1):
        dp[0][j] = j
        operations[0][j] = 'I' * j
    
    # Fill tables
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
                operations[i][j] = operations[i - 1][j - 1] + 'M'  # Match
            else:
                # Find minimum operation
                delete_cost = dp[i - 1][j] + 1
                insert_cost = dp[i][j - 1] + 1
                replace_cost = dp[i - 1][j - 1] + 1
                
                if delete_cost <= insert_cost and delete_cost <= replace_cost:
                    dp[i][j] = delete_cost
                    operations[i][j] = operations[i - 1][j] + 'D'  # Delete
                elif insert_cost <= replace_cost:
                    dp[i][j] = insert_cost
                    operations[i][j] = operations[i][j - 1] + 'I'  # Insert
                else:
                    dp[i][j] = replace_cost
                    operations[i][j] = operations[i - 1][j - 1] + 'R'  # Replace
    
    return dp[m][n], operations[m][n]

# Example usage
str1 = "kitten"
str2 = "sitting"
distance, ops = edit_distance_with_operations(str1, str2)
print(f"Edit distance: {distance}")
print(f"Operations: {ops}")
\`\`\`

## Space Optimized Version

\`\`\`python
def edit_distance_optimized(str1, str2):
    m, n = len(str1), len(str2)
    
    # Use only two rows
    prev = list(range(n + 1))
    curr = [0] * (n + 1)
    
    for i in range(1, m + 1):
        curr[0] = i
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                curr[j] = prev[j - 1]
            else:
                curr[j] = 1 + min(prev[j], curr[j - 1], prev[j - 1])
        prev, curr = curr, prev
    
    return prev[n]
\`\`\`

## Time Complexity

- **Standard**: O(m × n) where m, n are string lengths
- **Optimized**: O(m × n) with O(n) space

## Space Complexity

- **Standard**: O(m × n) for DP table
- **Optimized**: O(n) using two rows

## When to Use

- Spell checking and correction
- DNA sequence comparison
- Plagiarism detection
- Natural language processing
- Fuzzy string matching
- Version control (diff tools)

## Example Walkthrough

"kitten" → "sitting":
1. Replace 'k' with 's': "sitten"
2. Replace 'e' with 'i': "sittin"
3. Insert 'g': "sitting"
Total: 3 operations
    `,
    codeExample: `def edit_distance(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    
    return dp[m][n]

# Example
str1 = "kitten"
str2 = "sitting"
result = edit_distance(str1, str2)
print(f"Edit distance: {result}")`,
    timeComplexity: 'O(m × n)',
    spaceComplexity: 'O(m × n)'
  }
]; 