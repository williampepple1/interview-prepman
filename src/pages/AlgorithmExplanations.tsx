import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, HardDrive, Tag } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Algorithm } from '../types';

const AlgorithmExplanations: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories from algorithms
  const categories = useMemo(() => {
    const cats = new Set(algorithms.map(algo => algo.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter algorithms based on selected category
  const filteredAlgorithms = useMemo(() => {
    if (selectedCategory === 'All') return algorithms;
    return algorithms.filter(algo => algo.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Algorithm Explanations</h1>
          <p className="text-gray-600">Detailed explanations of common algorithms with code examples and complexity analysis</p>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {category}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Algorithm List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Algorithms</h2>
              <div className="space-y-2">
                {filteredAlgorithms.map((algorithm) => (
                  <button
                    key={algorithm.id}
                    onClick={() => setSelectedAlgorithm(algorithm)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedAlgorithm?.id === algorithm.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <h3 className="font-medium text-gray-900">{algorithm.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{algorithm.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {algorithm.timeComplexity}
                      </span>
                      <span className="flex items-center">
                        <HardDrive className="h-3 w-3 mr-1" />
                        {algorithm.spaceComplexity}
                      </span>
                      <span className="flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {algorithm.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Algorithm Details */}
          <div className="lg:col-span-2">
            {selectedAlgorithm ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedAlgorithm.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedAlgorithm.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Time: {selectedAlgorithm.timeComplexity}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <HardDrive className="h-4 w-4 mr-1" />
                      Space: {selectedAlgorithm.spaceComplexity}
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {selectedAlgorithm.category}
                    </span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <MarkdownRenderer content={selectedAlgorithm.explanation} />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select an Algorithm</h3>
                <p className="text-gray-600">Choose an algorithm from the list to view its detailed explanation</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmExplanations;

const algorithms: Algorithm[] = [
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
  },
  {
    id: 'bellman-ford',
    name: 'Bellman-Ford Algorithm',
    category: 'Graph',
    description: 'Finds shortest paths from source vertex to all vertices, handles negative weights',
    explanation: `
# Bellman-Ford Algorithm

The Bellman-Ford algorithm finds the shortest paths from a source vertex to all other vertices, even with negative edge weights.

## How it Works

1. **Initialize**: Set distance to infinity for all vertices except source
2. **Relax Edges**: Update distances by checking all edges V-1 times
3. **Check Negative Cycles**: One more iteration to detect negative cycles
4. **Report**: Either shortest paths or negative cycle detection

## Implementation

\`\`\`python
def bellman_ford(graph, source):
    V = len(graph)
    dist = [float('inf')] * V
    dist[source] = 0

    # Relax all edges V-1 times
    for _ in range(V - 1):
        for u in range(V):
            for v, weight in graph[u]:
                if dist[u] != float('inf') and dist[u] + weight < dist[v]:
                    dist[v] = dist[u] + weight

    # Check for negative cycles
    for u in range(V):
        for v, weight in graph[u]:
            if dist[u] != float('inf') and dist[u] + weight < dist[v]:
                return None  # Negative cycle exists

    return dist
\`\`\`

## Time Complexity

- O(VE) where V is vertices and E is edges

## Space Complexity

- O(V) for the distance array

## When to Use

- Graph has negative edge weights
- Need to detect negative cycles
- Single source shortest path
- Network routing protocols
    `,
    codeExample: `def bellman_ford(graph, source):
    V = len(graph)
    dist = [float('inf')] * V
    dist[source] = 0
    for _ in range(V - 1):
        for u in range(V):
            for v, weight in graph[u]:
                if dist[u] + weight < dist[v]:
                    dist[v] = dist[u] + weight`,
    timeComplexity: 'O(VE)',
    spaceComplexity: 'O(V)'
  },
  {
    id: 'floyd-warshall',
    name: 'Floyd-Warshall Algorithm',
    category: 'Graph',
    description: 'Finds shortest paths between all pairs of vertices in a weighted graph',
    explanation: `
# Floyd-Warshall Algorithm

The Floyd-Warshall algorithm finds the shortest paths between all pairs of vertices in a weighted graph, including those with negative edges.

## How it Works

1. **Initialize**: Create distance matrix from graph
2. **Consider All Vertices**: For each vertex k as intermediate
3. **Update Distances**: Update if path through k is shorter
4. **Complete**: Matrix contains shortest paths

## Implementation

\`\`\`python
def floyd_warshall(graph):
    V = len(graph)
    dist = [[float('inf')] * V for _ in range(V)]
    
    # Initialize distances
    for i in range(V):
        for j in range(V):
            if i == j:
                dist[i][j] = 0
            elif graph[i][j] != 0:
                dist[i][j] = graph[i][j]
    
    # Update distances through intermediate vertices
    for k in range(V):
        for i in range(V):
            for j in range(V):
                if dist[i][k] != float('inf') and dist[k][j] != float('inf'):
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist
\`\`\`

## Time Complexity

- O(V³) where V is the number of vertices

## Space Complexity

- O(V²) for the distance matrix

## When to Use

- Need all pairs shortest paths
- Graph is dense
- Can have negative edges
- Small to medium sized graphs
    `,
    codeExample: `def floyd_warshall(graph):
    V = len(graph)
    dist = [[float('inf')] * V for _ in range(V)]
    for k in range(V):
        for i in range(V):
            for j in range(V):
                dist[i][j] = min(dist[i][j], 
                                dist[i][k] + dist[k][j])`,
    timeComplexity: 'O(V³)',
    spaceComplexity: 'O(V²)'
  },
  {
    id: 'kruskal',
    name: 'Kruskal\'s Algorithm',
    category: 'Graph',
    description: 'Finds a minimum spanning tree in a weighted undirected graph',
    explanation: `
# Kruskal's Algorithm

Kruskal's algorithm finds a minimum spanning tree in a weighted undirected graph using a greedy approach.

## How it Works

1. **Sort Edges**: Sort all edges by weight
2. **Initialize**: Create disjoint sets for vertices
3. **Process Edges**: Add edges that don't create cycles
4. **Complete**: When V-1 edges are added

## Implementation

\`\`\`python
class UnionFind:
    def __init__(self, vertices):
        self.parent = list(range(vertices))
        self.rank = [0] * vertices
    
    def find(self, item):
        if self.parent[item] != item:
            self.parent[item] = self.find(self.parent[item])
        return self.parent[item]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1

def kruskal(graph, V):
    edges = [(w, u, v) for u in range(V) for v, w in graph[u]]
    edges.sort()
    uf = UnionFind(V)
    mst = []
    
    for weight, u, v in edges:
        if uf.find(u) != uf.find(v):
            uf.union(u, v)
            mst.append((u, v, weight))
    
    return mst
\`\`\`

## Time Complexity

- O(E log E) where E is the number of edges

## Space Complexity

- O(V) for the disjoint set data structure

## When to Use

- Need minimum spanning tree
- Graph is sparse
- Edge weights are distinct
- When edge-based processing is preferred
    `,
    codeExample: `def kruskal(graph, V):
    edges = [(w, u, v) for u in range(V) 
             for v, w in graph[u]]
    edges.sort()
    uf = UnionFind(V)
    mst = []
    for weight, u, v in edges:
        if uf.find(u) != uf.find(v):
            uf.union(u, v)
            mst.append((u, v, weight))`,
    timeComplexity: 'O(E log E)',
    spaceComplexity: 'O(V)'
  },
  {
    id: 'prims',
    name: 'Prim\'s Algorithm',
    category: 'Graph',
    description: 'Finds a minimum spanning tree by growing from a starting vertex',
    explanation: `
# Prim's Algorithm

Prim's algorithm finds a minimum spanning tree by growing a tree from a starting vertex, always adding the lowest weight edge that connects a new vertex.

## How it Works

1. **Start**: Choose any vertex as root
2. **Find Edge**: Find minimum weight edge connecting tree to non-tree vertex
3. **Add Vertex**: Add the new vertex to tree
4. **Repeat**: Until all vertices are in tree

## Implementation

\`\`\`python
from heapq import heappush, heappop

def prims(graph, V):
    visited = [False] * V
    mst = []
    # Start with vertex 0
    pq = [(0, 0, -1)]  # (weight, vertex, parent)
    
    while pq:
        weight, vertex, parent = heappop(pq)
        
        if visited[vertex]:
            continue
            
        visited[vertex] = True
        if parent != -1:
            mst.append((parent, vertex, weight))
        
        for next_vertex, edge_weight in graph[vertex]:
            if not visited[next_vertex]:
                heappush(pq, (edge_weight, next_vertex, vertex))
    
    return mst
\`\`\`

## Time Complexity

- O((V + E) log V) with binary heap
- O(E log V) for dense graphs

## Space Complexity

- O(V) for the priority queue and visited array

## When to Use

- Need minimum spanning tree
- Graph is dense
- When vertex-based processing is preferred
- Memory efficiency is important
    `,
    codeExample: `def prims(graph, V):
    visited = [False] * V
    pq = [(0, 0, -1)]  # (weight, vertex, parent)
    mst = []
    while pq:
        weight, vertex, parent = heappop(pq)
        if not visited[vertex]:
            visited[vertex] = True
            if parent != -1:
                mst.append((parent, vertex, weight))`,
    timeComplexity: 'O((V + E) log V)',
    spaceComplexity: 'O(V)'
  }
];
