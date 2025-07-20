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
      id: 'quick-sort',
      name: 'Quick Sort',
      category: 'Sorting',
      description: 'A highly efficient, comparison-based sorting algorithm',
      explanation: `
# Quick Sort Algorithm

Quick sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element and partitioning the array around it.

## How it Works

1. **Choose Pivot**: Select a pivot element (usually last element)
2. **Partition**: Rearrange elements so that all elements smaller than pivot are on the left
3. **Recurse**: Recursively sort the left and right subarrays

## Implementation

\`\`\`python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x <= pivot]
    right = [x for x in arr[:-1] if x > pivot]
    
    return quick_sort(left) + [pivot] + quick_sort(right)
\`\`\`

## Time Complexity

- **Best Case**: O(n log n) - Balanced partitions
- **Average Case**: O(n log n) - Random data
- **Worst Case**: O(n²) - Already sorted or reverse sorted

## Space Complexity

- **Average**: O(log n) - Call stack space
- **Worst**: O(n) - Unbalanced partitions
      `,
      codeExample: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x <= pivot]
    right = [x for x in arr[:-1] if x > pivot]
    
    return quick_sort(left) + [pivot] + quick_sort(right)`,
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(log n)'
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