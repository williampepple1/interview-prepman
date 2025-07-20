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