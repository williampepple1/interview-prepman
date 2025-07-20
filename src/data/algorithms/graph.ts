import { Algorithm } from '../../types';

export const graphAlgorithms: Algorithm[] = [
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