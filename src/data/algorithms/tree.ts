import { Algorithm } from '../../types';

export const treeAlgorithms: Algorithm[] = [
  {
    id: 'depth-first-search',
    name: 'Depth-First Search (DFS)',
    category: 'Tree',
    description: 'Explore as deep as possible before backtracking (preorder, inorder, postorder)',
    explanation: `
# Depth-First Search (DFS)

Depth-First Search is a tree/graph traversal algorithm that explores as far as possible along each branch before backtracking. It can be implemented in three main ways: preorder, inorder, and postorder.

## How it Works

1. **Start**: Begin at the root node
2. **Explore**: Go as deep as possible along one branch
3. **Backtrack**: When reaching a leaf, go back and explore other branches
4. **Repeat**: Until all nodes are visited

## Implementation (Recursive)

\`\`\`python
class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None

def dfs_preorder(root):
    """Visit: Root -> Left -> Right"""
    result = []
    
    def traverse(node):
        if node:
            result.append(node.val)  # Visit root first
            traverse(node.left)      # Then left subtree
            traverse(node.right)     # Then right subtree
    
    traverse(root)
    return result

def dfs_inorder(root):
    """Visit: Left -> Root -> Right"""
    result = []
    
    def traverse(node):
        if node:
            traverse(node.left)      # Visit left subtree first
            result.append(node.val)  # Then root
            traverse(node.right)     # Then right subtree
    
    traverse(root)
    return result

def dfs_postorder(root):
    """Visit: Left -> Right -> Root"""
    result = []
    
    def traverse(node):
        if node:
            traverse(node.left)      # Visit left subtree first
            traverse(node.right)     # Then right subtree
            result.append(node.val)  # Then root
    
    traverse(root)
    return result

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(f"Preorder: {dfs_preorder(root)}")
print(f"Inorder: {dfs_inorder(root)}")
print(f"Postorder: {dfs_postorder(root)}")
\`\`\`

## Implementation (Iterative with Stack)

\`\`\`python
def dfs_iterative(root):
    if not root:
        return []
    
    result = []
    stack = [root]
    
    while stack:
        node = stack.pop()
        result.append(node.val)
        
        # Push right child first (so left is processed first)
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    
    return result

def dfs_inorder_iterative(root):
    result = []
    stack = []
    current = root
    
    while current or stack:
        # Reach the leftmost node
        while current:
            stack.append(current)
            current = current.left
        
        # Process current node
        current = stack.pop()
        result.append(current.val)
        
        # Move to right subtree
        current = current.right
    
    return result
\`\`\`

## Implementation (Graph DFS)

\`\`\`python
def dfs_graph(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            result.extend(dfs_graph(graph, neighbor, visited))
    
    return result

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

result = dfs_graph(graph, 'A')
print(f"DFS traversal: {result}")
\`\`\`

## Time Complexity

- **Tree DFS**: O(n) where n is number of nodes
- **Graph DFS**: O(V + E) where V is vertices, E is edges

## Space Complexity

- **Recursive**: O(h) where h is height of tree (call stack)
- **Iterative**: O(w) where w is maximum width of tree

## When to Use

- Tree/graph traversal
- Topological sorting
- Cycle detection
- Maze solving
- Web crawling

## Applications

- **Preorder**: Copying trees, prefix notation
- **Inorder**: Binary search tree traversal (sorted order)
- **Postorder**: Deleting trees, postfix notation
    `,
    codeExample: `class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None

def dfs_preorder(root):
    result = []
    
    def traverse(node):
        if node:
            result.append(node.val)
            traverse(node.left)
            traverse(node.right)
    
    traverse(root)
    return result

# Example
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
result = dfs_preorder(root)
print(f"Preorder: {result}")`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)'
  },
  {
    id: 'breadth-first-search',
    name: 'Breadth-First Search (BFS)',
    category: 'Tree',
    description: 'Explore level by level',
    explanation: `
# Breadth-First Search (BFS)

Breadth-First Search is a tree/graph traversal algorithm that explores all nodes at the current depth before moving to nodes at the next depth level.

## How it Works

1. **Start**: Begin at the root node
2. **Queue**: Use a queue to keep track of nodes to visit
3. **Level by Level**: Process all nodes at current level before moving to next
4. **Repeat**: Until all nodes are visited

## Implementation (Tree BFS)

\`\`\`python
from collections import deque

class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None

def bfs_tree(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        node = queue.popleft()
        result.append(node.val)
        
        # Add children to queue
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    
    return result

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left = TreeNode(6)
root.right.right = TreeNode(7)

result = bfs_tree(root)
print(f"BFS traversal: {result}")
\`\`\`

## Implementation (Level by Level)

\`\`\`python
def bfs_level_order(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result

# Example usage
result = bfs_level_order(root)
print(f"Level order: {result}")
# Output: [[1], [2, 3], [4, 5, 6, 7]]
\`\`\`

## Implementation (Graph BFS)

\`\`\`python
def bfs_graph(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    result = []
    
    while queue:
        vertex = queue.popleft()
        result.append(vertex)
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return result

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

result = bfs_graph(graph, 'A')
print(f"BFS traversal: {result}")
\`\`\`

## Implementation (Shortest Path)

\`\`\`python
def bfs_shortest_path(graph, start, end):
    if start == end:
        return [start]
    
    visited = set()
    queue = deque([(start, [start])])
    visited.add(start)
    
    while queue:
        vertex, path = queue.popleft()
        
        for neighbor in graph[vertex]:
            if neighbor == end:
                return path + [neighbor]
            
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    
    return None  # No path found

# Example usage
path = bfs_shortest_path(graph, 'A', 'F')
print(f"Shortest path: {path}")
\`\`\`

## Time Complexity

- **Tree BFS**: O(n) where n is number of nodes
- **Graph BFS**: O(V + E) where V is vertices, E is edges

## Space Complexity

- O(w) where w is maximum width of tree/graph

## When to Use

- Shortest path problems
- Level-order traversal
- Web crawling
- Social network analysis
- GPS navigation

## Applications

- **Level Order**: Tree visualization, hierarchical data processing
- **Shortest Path**: Navigation systems, network routing
- **Web Crawling**: Search engine indexing
- **Social Networks**: Friend suggestions, network analysis
    `,
    codeExample: `from collections import deque

def bfs_tree(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        node = queue.popleft()
        result.append(node.val)
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    
    return result

# Example
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
result = bfs_tree(root)
print(f"BFS: {result}")`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(w)'
  },
  {
    id: 'binary-search-tree-search',
    name: 'Binary Search Tree (BST) Search',
    category: 'Tree',
    description: 'Search in a BST using comparisons',
    explanation: `
# Binary Search Tree (BST) Search

Binary Search Tree Search is an efficient search algorithm that takes advantage of the BST property: left subtree contains smaller values, right subtree contains larger values.

## How it Works

1. **Start**: Begin at the root node
2. **Compare**: Compare target with current node
3. **Navigate**: Go left if target < current, right if target > current
4. **Repeat**: Until target is found or reaching a leaf

## Implementation (Recursive)

\`\`\`python
class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None

def bst_search_recursive(root, target):
    if not root or root.val == target:
        return root
    
    if target < root.val:
        return bst_search_recursive(root.left, target)
    else:
        return bst_search_recursive(root.right, target)

# Example usage
root = TreeNode(10)
root.left = TreeNode(5)
root.right = TreeNode(15)
root.left.left = TreeNode(3)
root.left.right = TreeNode(7)
root.right.left = TreeNode(12)
root.right.right = TreeNode(18)

target = 7
result = bst_search_recursive(root, target)
print(f"Found: {result.val if result else 'Not found'}")
\`\`\`

## Implementation (Iterative)

\`\`\`python
def bst_search_iterative(root, target):
    current = root
    
    while current:
        if current.val == target:
            return current
        elif target < current.val:
            current = current.left
        else:
            current = current.right
    
    return None

# Example usage
result = bst_search_iterative(root, 12)
print(f"Found: {result.val if result else 'Not found'}")
\`\`\`

## Implementation (Insert)

\`\`\`python
def bst_insert(root, val):
    if not root:
        return TreeNode(val)
    
    if val < root.val:
        root.left = bst_insert(root.left, val)
    elif val > root.val:
        root.right = bst_insert(root.right, val)
    
    return root

# Example usage
root = None
values = [10, 5, 15, 3, 7, 12, 18]
for val in values:
    root = bst_insert(root, val)
\`\`\`

## Implementation (Delete)

\`\`\`python
def bst_delete(root, key):
    if not root:
        return root
    
    if key < root.val:
        root.left = bst_delete(root.left, key)
    elif key > root.val:
        root.right = bst_delete(root.right, key)
    else:
        # Node with only one child or no child
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
        
        # Node with two children: get inorder successor
        root.val = min_value_node(root.right).val
        root.right = bst_delete(root.right, root.val)
    
    return root

def min_value_node(node):
    current = node
    while current.left:
        current = current.left
    return current

# Example usage
root = bst_delete(root, 5)
\`\`\`

## Implementation (Inorder Traversal - Sorted Order)

\`\`\`python
def bst_inorder(root):
    result = []
    
    def traverse(node):
        if node:
            traverse(node.left)
            result.append(node.val)
            traverse(node.right)
    
    traverse(root)
    return result

# Example usage
sorted_values = bst_inorder(root)
print(f"Sorted values: {sorted_values}")
\`\`\`

## Time Complexity

- **Search**: O(h) where h is height of tree
- **Insert**: O(h)
- **Delete**: O(h)
- **Best Case**: O(log n) for balanced tree
- **Worst Case**: O(n) for skewed tree

## Space Complexity

- **Recursive**: O(h) for call stack
- **Iterative**: O(1) extra space

## When to Use

- Ordered data storage
- Range queries
- Dynamic data structures
- Database indexing
- Symbol tables

## Advantages and Disadvantages

### Advantages
- Fast search, insert, delete operations
- Maintains sorted order
- Efficient for range queries

### Disadvantages
- Performance degrades with unbalanced trees
- No guarantee of balance
- Space overhead for pointers
    `,
    codeExample: `def bst_search_iterative(root, target):
    current = root
    
    while current:
        if current.val == target:
            return current
        elif target < current.val:
            current = current.left
        else:
            current = current.right
    
    return None

# Example
root = TreeNode(10)
root.left = TreeNode(5)
root.right = TreeNode(15)
result = bst_search_iterative(root, 5)
print(f"Found: {result.val if result else 'Not found'}")`,
    timeComplexity: 'O(h)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'avl-red-black-search',
    name: 'AVL Tree / Red-Black Tree Search',
    category: 'Tree',
    description: 'Balanced BST searches',
    explanation: `
# AVL Tree / Red-Black Tree Search

AVL Trees and Red-Black Trees are self-balancing binary search trees that maintain balance after insertions and deletions, ensuring logarithmic time complexity.

## How it Works

### AVL Tree
1. **Balance Factor**: Height difference between left and right subtrees
2. **Rebalancing**: Rotate when balance factor > 1 or < -1
3. **Search**: Same as BST but guaranteed O(log n) performance

### Red-Black Tree
1. **Color Property**: Each node is red or black
2. **Balance Rules**: Maintain properties after modifications
3. **Search**: Same as BST with guaranteed balance

## Implementation (AVL Tree)

\`\`\`python
class AVLNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1

def get_height(node):
    if not node:
        return 0
    return node.height

def get_balance(node):
    if not node:
        return 0
    return get_height(node.left) - get_height(node.right)

def right_rotate(y):
    x = y.left
    T2 = x.right
    
    x.right = y
    y.left = T2
    
    y.height = max(get_height(y.left), get_height(y.right)) + 1
    x.height = max(get_height(x.left), get_height(x.right)) + 1
    
    return x

def left_rotate(x):
    y = x.right
    T2 = y.left
    
    y.left = x
    x.right = T2
    
    x.height = max(get_height(x.left), get_height(x.right)) + 1
    y.height = max(get_height(y.left), get_height(y.right)) + 1
    
    return y

def avl_insert(root, val):
    # Standard BST insert
    if not root:
        return AVLNode(val)
    
    if val < root.val:
        root.left = avl_insert(root.left, val)
    elif val > root.val:
        root.right = avl_insert(root.right, val)
    else:
        return root  # Duplicate values not allowed
    
    # Update height
    root.height = max(get_height(root.left), get_height(root.right)) + 1
    
    # Get balance factor
    balance = get_balance(root)
    
    # Left Left Case
    if balance > 1 and val < root.left.val:
        return right_rotate(root)
    
    # Right Right Case
    if balance < -1 and val > root.right.val:
        return left_rotate(root)
    
    # Left Right Case
    if balance > 1 and val > root.left.val:
        root.left = left_rotate(root.left)
        return right_rotate(root)
    
    # Right Left Case
    if balance < -1 and val < root.right.val:
        root.right = right_rotate(root.right)
        return left_rotate(root)
    
    return root

def avl_search(root, target):
    if not root or root.val == target:
        return root
    
    if target < root.val:
        return avl_search(root.left, target)
    else:
        return avl_search(root.right, target)

# Example usage
root = None
values = [10, 20, 30, 40, 50, 25]
for val in values:
    root = avl_insert(root, val)

result = avl_search(root, 25)
print(f"Found: {result.val if result else 'Not found'}")
\`\`\`

## Implementation (Red-Black Tree)

\`\`\`python
class RBNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
        self.color = "RED"  # RED or BLACK

class RedBlackTree:
    def __init__(self):
        self.NIL = RBNode(0)
        self.NIL.color = "BLACK"
        self.root = self.NIL
    
    def search(self, target):
        return self._search_recursive(self.root, target)
    
    def _search_recursive(self, node, target):
        if node == self.NIL or target == node.val:
            return node
        
        if target < node.val:
            return self._search_recursive(node.left, target)
        else:
            return self._search_recursive(node.right, target)
    
    def insert(self, val):
        node = RBNode(val)
        node.left = self.NIL
        node.right = self.NIL
        
        self._insert_node(node)
        self._fix_insert(node)
    
    def _insert_node(self, node):
        y = None
        x = self.root
        
        while x != self.NIL:
            y = x
            if node.val < x.val:
                x = x.left
            else:
                x = x.right
        
        node.parent = y
        if y is None:
            self.root = node
        elif node.val < y.val:
            y.left = node
        else:
            y.right = node
    
    def _fix_insert(self, k):
        while k.parent and k.parent.color == "RED":
            if k.parent == k.parent.parent.right:
                u = k.parent.parent.left
                if u.color == "RED":
                    u.color = "BLACK"
                    k.parent.color = "BLACK"
                    k.parent.parent.color = "RED"
                    k = k.parent.parent
                else:
                    if k == k.parent.left:
                        k = k.parent
                        self._right_rotate(k)
                    k.parent.color = "BLACK"
                    k.parent.parent.color = "RED"
                    self._left_rotate(k.parent.parent)
            else:
                u = k.parent.parent.right
                if u.color == "RED":
                    u.color = "BLACK"
                    k.parent.color = "BLACK"
                    k.parent.parent.color = "RED"
                    k = k.parent.parent
                else:
                    if k == k.parent.right:
                        k = k.parent
                        self._left_rotate(k)
                    k.parent.color = "BLACK"
                    k.parent.parent.color = "RED"
                    self._right_rotate(k.parent.parent)
        
        self.root.color = "BLACK"
    
    def _left_rotate(self, x):
        y = x.right
        x.right = y.left
        if y.left != self.NIL:
            y.left.parent = x
        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
        y.left = x
        x.parent = y
    
    def _right_rotate(self, x):
        y = x.left
        x.left = y.right
        if y.right != self.NIL:
            y.right.parent = x
        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.right:
            x.parent.right = y
        else:
            x.parent.left = y
        y.right = x
        x.parent = y

# Example usage
rbt = RedBlackTree()
values = [7, 3, 18, 10, 22, 8, 11, 26, 2, 6, 13]
for val in values:
    rbt.insert(val)

result = rbt.search(10)
print(f"Found: {result.val if result else 'Not found'}")
\`\`\`

## Time Complexity

- **Search**: O(log n) - guaranteed
- **Insert**: O(log n) - with rebalancing
- **Delete**: O(log n) - with rebalancing

## Space Complexity

- O(n) for storing the tree
- O(log n) for recursive calls

## When to Use

- When guaranteed O(log n) performance is needed
- Database indexing
- Symbol tables
- Ordered maps/sets
- Real-time applications

## Comparison

### AVL Tree
- **Pros**: More balanced, better for lookup-heavy applications
- **Cons**: More rotations during insert/delete

### Red-Black Tree
- **Pros**: Fewer rotations, better for insert/delete-heavy applications
- **Cons**: Less balanced than AVL
    `,
    codeExample: `def avl_search(root, target):
    if not root or root.val == target:
        return root
    
    if target < root.val:
        return avl_search(root.left, target)
    else:
        return avl_search(root.right, target)

# Example
root = AVLNode(10)
root.left = AVLNode(5)
root.right = AVLNode(15)
result = avl_search(root, 5)
print(f"Found: {result.val if result else 'Not found'}")`,
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(log n)'
  },
  {
    id: 'b-tree-search',
    name: 'B-Tree / B+ Tree Search',
    category: 'Tree',
    description: 'Used in databases and filesystems',
    explanation: `
# B-Tree / B+ Tree Search

B-Trees and B+ Trees are self-balancing tree data structures designed for systems that read and write large blocks of data, commonly used in databases and filesystems.

## How it Works

### B-Tree Properties
1. **Multiple Keys**: Each node can have multiple keys
2. **Balanced**: All leaf nodes at same level
3. **Order**: Minimum degree t determines node capacity
4. **Search**: Navigate through internal nodes to find target

### B+ Tree Properties
1. **Data in Leaves**: All data stored in leaf nodes
2. **Linked Leaves**: Leaf nodes linked for range queries
3. **Internal Keys**: Internal nodes only contain keys for navigation

## Implementation (B-Tree)

\`\`\`python
class BTreeNode:
    def __init__(self, leaf=True):
        self.leaf = leaf
        self.keys = []
        self.children = []

class BTree:
    def __init__(self, t):
        self.root = BTreeNode()
        self.t = t  # Minimum degree
    
    def search(self, key):
        return self._search_recursive(self.root, key)
    
    def _search_recursive(self, node, key):
        i = 0
        # Find the first key greater than or equal to k
        while i < len(node.keys) and key > node.keys[i]:
            i += 1
        
        # If the found key is equal to k, return this node
        if i < len(node.keys) and node.keys[i] == key:
            return node
        
        # If this is a leaf node, then key is not present
        if node.leaf:
            return None
        
        # Go to the appropriate child
        return self._search_recursive(node.children[i], key)
    
    def insert(self, key):
        root = self.root
        
        # If root is full, then tree grows in height
        if len(root.keys) == (2 * self.t) - 1:
            new_root = BTreeNode(leaf=False)
            new_root.children.append(root)
            self._split_child(new_root, 0)
            self.root = new_root
        
        self._insert_non_full(self.root, key)
    
    def _insert_non_full(self, node, key):
        i = len(node.keys) - 1
        
        if node.leaf:
            # Insert key into leaf node
            while i >= 0 and node.keys[i] > key:
                node.keys.append(node.keys[i])
                i -= 1
            node.keys.append(key)
        else:
            # Find the child which is going to have the new key
            while i >= 0 and node.keys[i] > key:
                i -= 1
            i += 1
            
            # Check if the found child is full
            if len(node.children[i].keys) == (2 * self.t) - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1
            
            self._insert_non_full(node.children[i], key)
    
    def _split_child(self, parent, i):
        t = self.t
        child = parent.children[i]
        new_node = BTreeNode(leaf=child.leaf)
        
        # Move keys
        parent.keys.insert(i, child.keys[t - 1])
        parent.children.insert(i + 1, new_node)
        
        new_node.keys = child.keys[t:]
        child.keys = child.keys[:t - 1]
        
        # Move children
        if not child.leaf:
            new_node.children = child.children[t:]
            child.children = child.children[:t]

# Example usage
btree = BTree(3)  # Minimum degree 3
keys = [10, 20, 5, 6, 12, 30, 7, 17]
for key in keys:
    btree.insert(key)

result = btree.search(12)
print(f"Found: {result.keys if result else 'Not found'}")
\`\`\`

## Implementation (B+ Tree)

\`\`\`python
class BPlusTreeNode:
    def __init__(self, leaf=True):
        self.leaf = leaf
        self.keys = []
        self.children = []
        self.next = None  # For leaf nodes

class BPlusTree:
    def __init__(self, t):
        self.root = BPlusTreeNode()
        self.t = t
    
    def search(self, key):
        return self._search_recursive(self.root, key)
    
    def _search_recursive(self, node, key):
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1
        
        if node.leaf:
            if i < len(node.keys) and node.keys[i] == key:
                return node
            return None
        
        return self._search_recursive(node.children[i], key)
    
    def range_search(self, start_key, end_key):
        """Search for all keys in range [start_key, end_key]"""
        result = []
        leaf = self._find_leaf(start_key)
        
        while leaf:
            for i, key in enumerate(leaf.keys):
                if start_key <= key <= end_key:
                    result.append(key)
                elif key > end_key:
                    return result
            
            leaf = leaf.next
        
        return result
    
    def _find_leaf(self, key):
        """Find the leaf node that would contain the key"""
        node = self.root
        while not node.leaf:
            i = 0
            while i < len(node.keys) and key >= node.keys[i]:
                i += 1
            node = node.children[i]
        return node

# Example usage
bplus_tree = BPlusTree(3)
keys = [10, 20, 5, 6, 12, 30, 7, 17]
for key in keys:
    bplus_tree.insert(key)

result = bplus_tree.search(12)
print(f"Found: {result.keys if result else 'Not found'}")

range_result = bplus_tree.range_search(5, 15)
print(f"Range search [5, 15]: {range_result}")
\`\`\`

## Time Complexity

- **Search**: O(log n) - where n is number of keys
- **Insert**: O(log n)
- **Delete**: O(log n)
- **Range Query**: O(log n + k) where k is number of keys in range

## Space Complexity

- O(n) for storing all keys
- Efficient disk usage due to high branching factor

## When to Use

- Database indexing
- Filesystem organization
- Large datasets that don't fit in memory
- Range queries
- External storage systems

## Advantages

- **Disk Efficiency**: Minimizes disk I/O operations
- **Range Queries**: Excellent for B+ trees
- **Balanced**: Guaranteed logarithmic height
- **High Branching**: Reduces tree height

## Applications

- **Databases**: MySQL, PostgreSQL, SQLite
- **Filesystems**: NTFS, ext4, Btrfs
- **Key-Value Stores**: LevelDB, RocksDB
- **Search Engines**: Lucene, Elasticsearch
    `,
    codeExample: `def btree_search(node, key):
    i = 0
    while i < len(node.keys) and key > node.keys[i]:
        i += 1
    
    if i < len(node.keys) and node.keys[i] == key:
        return node
    
    if node.leaf:
        return None
    
    return btree_search(node.children[i], key)

# Example
root = BTreeNode()
root.keys = [10, 20]
root.children = [BTreeNode(), BTreeNode(), BTreeNode()]
result = btree_search(root, 10)
print(f"Found: {result.keys if result else 'Not found'}")`,
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'trie-search',
    name: 'Trie Search',
    category: 'Tree',
    description: 'For string/prefix searching',
    explanation: `
# Trie Search

A Trie (prefix tree) is a tree-like data structure used to store and search strings efficiently. It's particularly useful for prefix-based searches and autocomplete functionality.

## How it Works

1. **Structure**: Each node represents a character
2. **Path**: Path from root to leaf represents a string
3. **Search**: Traverse tree following characters of search string
4. **Prefix**: All strings with common prefix share common path

## Implementation (Basic Trie)

\`\`\`python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word
    
    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

# Example usage
trie = Trie()
words = ["apple", "app", "application", "banana", "band"]
for word in words:
    trie.insert(word)

print(f"Search 'app': {trie.search('app')}")
print(f"Search 'apple': {trie.search('apple')}")
print(f"Starts with 'app': {trie.starts_with('app')}")
\`\`\`

## Implementation (Advanced Trie with Autocomplete)

\`\`\`python
class AdvancedTrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
        self.frequency = 0  # For autocomplete ranking

class AdvancedTrie:
    def __init__(self):
        self.root = AdvancedTrieNode()
    
    def insert(self, word, frequency=1):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = AdvancedTrieNode()
            node = node.children[char]
        node.is_end_of_word = True
        node.frequency = frequency
    
    def autocomplete(self, prefix, max_suggestions=5):
        """Find all words starting with prefix, sorted by frequency"""
        node = self.root
        
        # Navigate to prefix end
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        
        # Collect all words with this prefix
        suggestions = []
        self._collect_words(node, prefix, suggestions)
        
        # Sort by frequency and return top suggestions
        suggestions.sort(key=lambda x: x[1], reverse=True)
        return [word for word, freq in suggestions[:max_suggestions]]
    
    def _collect_words(self, node, current_word, suggestions):
        if node.is_end_of_word:
            suggestions.append((current_word, node.frequency))
        
        for char, child in node.children.items():
            self._collect_words(child, current_word + char, suggestions)
    
    def delete(self, word):
        """Delete a word from the trie"""
        def _delete_helper(node, word, index):
            if index == len(word):
                if not node.is_end_of_word:
                    return False
                node.is_end_of_word = False
                return len(node.children) == 0
            
            char = word[index]
            if char not in node.children:
                return False
            
            should_delete_child = _delete_helper(node.children[char], word, index + 1)
            
            if should_delete_child:
                del node.children[char]
                return len(node.children) == 0
            
            return False
        
        _delete_helper(self.root, word, 0)

# Example usage
advanced_trie = AdvancedTrie()
words_with_freq = [
    ("apple", 10), ("app", 5), ("application", 3),
    ("banana", 8), ("band", 6), ("bandana", 2)
]

for word, freq in words_with_freq:
    advanced_trie.insert(word, freq)

suggestions = advanced_trie.autocomplete("app")
print(f"Autocomplete for 'app': {suggestions}")
\`\`\`

## Implementation (Compressed Trie)

\`\`\`python
class CompressedTrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
        self.prefix = ""

class CompressedTrie:
    def __init__(self):
        self.root = CompressedTrieNode()
    
    def insert(self, word):
        if not word:
            return
        
        node = self.root
        i = 0
        
        while i < len(word):
            # Find matching child
            matched_child = None
            matched_prefix = ""
            
            for child_prefix, child in node.children.items():
                # Find common prefix
                common_len = 0
                min_len = min(len(child_prefix), len(word) - i)
                
                for j in range(min_len):
                    if child_prefix[j] == word[i + j]:
                        common_len += 1
                    else:
                        break
                
                if common_len > 0:
                    matched_child = child
                    matched_prefix = child_prefix
                    break
            
            if matched_child:
                # Split if necessary
                if common_len < len(matched_prefix):
                    # Create new node for split
                    new_node = CompressedTrieNode()
                    new_node.prefix = matched_prefix[common_len:]
                    new_node.children = matched_child.children
                    new_node.is_end_of_word = matched_child.is_end_of_word
                    
                    # Update matched child
                    matched_child.prefix = matched_prefix[:common_len]
                    matched_child.children = {new_node.prefix: new_node}
                    matched_child.is_end_of_word = False
                
                node = matched_child
                i += common_len
            else:
                # Create new child
                new_child = CompressedTrieNode()
                new_child.prefix = word[i:]
                new_child.is_end_of_word = True
                node.children[new_child.prefix] = new_child
                break
        
        if i == len(word):
            node.is_end_of_word = True

# Example usage
compressed_trie = CompressedTrie()
words = ["apple", "app", "application", "banana"]
for word in words:
    compressed_trie.insert(word)
\`\`\`

## Time Complexity

- **Insert**: O(m) where m is length of word
- **Search**: O(m) where m is length of word
- **Prefix Search**: O(m) where m is length of prefix
- **Autocomplete**: O(m + k) where k is number of suggestions

## Space Complexity

- O(ALPHABET_SIZE × N × M) where N is number of words, M is average length

## When to Use

- Autocomplete systems
- Spell checkers
- IP routing tables
- Dictionary implementations
- Prefix-based searches

## Applications

- **Search Engines**: Google autocomplete
- **Text Editors**: Code completion
- **Mobile Keyboards**: Word suggestions
- **Network Routing**: IP address lookup
- **Bioinformatics**: DNA sequence analysis
    `,
    codeExample: `class Trie:
    def __init__(self):
        self.root = {}
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        node['#'] = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node:
                return False
            node = node[char]
        return '#' in node

# Example
trie = Trie()
trie.insert("apple")
result = trie.search("apple")
print(f"Found: {result}")`,
    timeComplexity: 'O(m)',
    spaceComplexity: 'O(ALPHABET_SIZE × N × M)'
  }
]; 