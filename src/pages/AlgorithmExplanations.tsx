import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, HardDrive } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Algorithm } from '../types';

const AlgorithmExplanations: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null);

  const algorithms: Algorithm[] = [
    {
      id: 'binary-search',
      name: 'Binary Search',
      category: 'Search',
      description: 'An efficient algorithm for finding an element in a sorted array',
      explanation: `
# Binary Search Algorithm

Binary search is a divide-and-conquer algorithm that efficiently finds the position of a target element in a sorted array.

## How it Works

1. **Divide**: Compare the target element with the middle element of the array
2. **Conquer**: If they match, return the index
3. **Recurse**: If they don't match, recursively search the left or right half

## Implementation

\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Target not found
\`\`\`

## Time Complexity

- **Best Case**: O(1) - Target found at middle
- **Average Case**: O(log n) - Target found after log n comparisons
- **Worst Case**: O(log n) - Target not found

## Space Complexity

- **Iterative**: O(1) - Constant extra space
- **Recursive**: O(log n) - Call stack space

## When to Use

- Array must be sorted
- Need to find a specific element efficiently
- Working with large datasets where linear search would be too slow
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
            right = mid - 1
    
    return -1`,
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)'
    },
    {
      id: 'merge-sort',
      name: 'Merge Sort',
      category: 'Sorting',
      description: 'A stable, divide-and-conquer sorting algorithm',
      explanation: `
# Merge Sort Algorithm

Merge sort is a stable sorting algorithm that uses the divide-and-conquer strategy to sort an array by repeatedly dividing it into smaller subarrays.

## How it Works

1. **Divide**: Split the array into two halves
2. **Sort**: Recursively sort both halves
3. **Merge**: Combine the sorted halves

## Implementation

\`\`\`python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result
\`\`\`

## Time Complexity

- **Best Case**: O(n log n)
- **Average Case**: O(n log n)
- **Worst Case**: O(n log n)

## Space Complexity

- O(n) - Requires additional space for merging

## When to Use

- Need stable sorting
- Have O(n) extra space available
- Want guaranteed O(n log n) performance
      `,
      codeExample: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)`,
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)'
    },
    {
      id: 'depth-first-search',
      name: 'Depth-First Search',
      category: 'Graph',
      description: 'A graph traversal algorithm that explores as far as possible along each branch',
      explanation: `
# Depth-First Search (DFS) Algorithm

DFS is a graph traversal algorithm that explores a graph by going as deep as possible along each branch before backtracking.

## How it Works

1. **Start**: Begin at a chosen vertex
2. **Explore**: Visit an adjacent unvisited vertex
3. **Recurse**: Repeat step 2 for the new vertex
4. **Backtrack**: When no unvisited adjacent vertices exist

## Implementation

\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)  # Process current node
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
\`\`\`

## Time Complexity

- O(V + E) where V is vertices and E is edges

## Space Complexity

- O(V) for the visited set and recursion stack

## When to Use

- Finding paths in a graph
- Detecting cycles
- Topological sorting
- Solving puzzles with only one solution
      `,
      codeExample: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    {
      id: 'breadth-first-search',
      name: 'Breadth-First Search',
      category: 'Graph',
      description: 'A graph traversal algorithm that explores all vertices at the present depth before moving to vertices at the next depth level',
      explanation: `
# Breadth-First Search (BFS) Algorithm

BFS is a graph traversal algorithm that explores a graph level by level, visiting all neighbors of a vertex before moving to the next level.

## How it Works

1. **Start**: Begin at a chosen vertex
2. **Explore**: Visit all adjacent vertices
3. **Queue**: Add unvisited neighbors to a queue
4. **Repeat**: Process queue until empty

## Implementation

\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    
    while queue:
        vertex = queue.popleft()
        print(vertex)  # Process current node
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

## Time Complexity

- O(V + E) where V is vertices and E is edges

## Space Complexity

- O(V) for the queue and visited set

## When to Use

- Finding shortest paths
- Level-order traversal
- Finding all vertices within one distance
- Social networking features
      `,
      codeExample: `def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    
    while queue:
        vertex = queue.popleft()
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Algorithm List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Algorithms</h2>
              <div className="space-y-2">
                {algorithms.map((algorithm) => (
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