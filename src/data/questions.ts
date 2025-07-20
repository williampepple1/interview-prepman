import { Question } from '../types';

export const dsaQuestions: Question[] = [
  {
    id: '1',
    title: 'Two Sum (LeetCode #1)',
    difficulty: 'Easy',
    category: 'Arrays',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    solution: `
## Solution

### Approach 1: Brute Force
\`\`\`python
def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
\`\`\`

**Time Complexity**: O(n²)
**Space Complexity**: O(1)

### Approach 2: Hash Map (Optimal)
\`\`\`python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(n)
    `,
    explanation: `
## Explanation

The optimal solution uses a hash map to store previously seen numbers and their indices. For each number, we:

1. Calculate the complement (target - current number)
2. Check if the complement exists in our hash map
3. If found, return the indices
4. If not found, add the current number and its index to the hash map

This approach ensures we only need to traverse the array once, making it much more efficient than the brute force approach.
    `,
    tags: ['array', 'hash-table'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Facebook'],
    studyPlans: ['Top 75', 'Blind 75', 'Top 150', 'Grind 75']
  },
  {
    id: '2',
    title: 'Valid Parentheses (LeetCode #20)',
    difficulty: 'Easy',
    category: 'Stack',
    description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.',
    solution: `
## Solution

\`\`\`python
def isValid(s):
    stack = []
    brackets = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in '({[':
            stack.append(char)
        elif char in ')}]':
            if not stack or stack.pop() != brackets[char]:
                return False
    
    return len(stack) == 0
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(n)
    `,
    explanation: `
## Explanation

We use a stack to keep track of opening brackets. For each character:

1. If it's an opening bracket, push it onto the stack
2. If it's a closing bracket, check if it matches the most recent opening bracket
3. If they don't match or the stack is empty, the string is invalid
4. At the end, the stack should be empty for a valid string

This approach ensures proper bracket matching and order.
    `,
    tags: ['stack', 'string'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Bloomberg', 'Uber'],
    studyPlans: ['Top 75', 'Blind 75']
  },
  {
    id: '3',
    title: 'Merge Two Sorted Lists (LeetCode #21)',
    difficulty: 'Easy',
    category: 'Linked List',
    description: 'Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.',
    solution: `
## Solution

\`\`\`python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(l1, l2):
    dummy = ListNode(0)
    current = dummy
    
    while l1 and l2:
        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    
    current.next = l1 if l1 else l2
    return dummy.next
\`\`\`

**Time Complexity**: O(n + m)
**Space Complexity**: O(1)
    `,
    explanation: `
## Explanation

We use a dummy node to simplify the merging process:

1. Create a dummy node and a current pointer
2. Compare values from both lists
3. Attach the smaller value to the result list
4. Move the pointer in the list we took from
5. Continue until one list is exhausted
6. Attach the remaining nodes from the non-empty list

This approach maintains the sorted order and handles edge cases elegantly.
    `,
    tags: ['linked-list', 'recursion'],
    companies: ['Amazon', 'Microsoft', 'Apple', 'Adobe'],
    studyPlans: ['Top 75', 'Top 150']
  },
  {
    id: '4',
    title: 'Longest Substring Without Repeating Characters (LeetCode #3)',
    difficulty: 'Medium',
    category: 'Strings',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    solution: `
## Solution

### Approach: Sliding Window with Hash Set
\`\`\`python
def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(min(m, n)) where m is the size of the charset
    `,
    explanation: `
## Explanation

We use a sliding window approach with a hash set:

1. Use two pointers (left and right) to maintain a window
2. Use a set to track characters in the current window
3. If we encounter a repeating character, move the left pointer until the window is valid
4. Update the maximum length whenever we expand the window
5. Continue until we process the entire string

This approach ensures we find the longest substring without repeating characters efficiently.
    `,
    tags: ['string', 'sliding-window', 'hash-set'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Bloomberg', 'Adobe'],
    studyPlans: ['Grind 75']
  },
  {
    id: '5',
    title: 'Longest Palindromic Substring (LeetCode #5)',
    difficulty: 'Medium',
    category: 'Strings',
    description: 'Given a string s, return the longest palindromic substring in s.',
    solution: `
## Solution

### Approach: Expand Around Center
\`\`\`python
def longestPalindrome(s):
    def expandAroundCenter(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
    
    start = 0
    max_length = 0
    
    for i in range(len(s)):
        # Check odd length palindromes
        len1 = expandAroundCenter(i, i)
        # Check even length palindromes
        len2 = expandAroundCenter(i, i + 1)
        
        curr_max = max(len1, len2)
        if curr_max > max_length:
            max_length = curr_max
            start = i - (curr_max - 1) // 2
    
    return s[start:start + max_length]
\`\`\`

**Time Complexity**: O(n²)
**Space Complexity**: O(1)
    `,
    explanation: `
## Explanation

We use the "expand around center" approach:

1. For each character, treat it as the center of a palindrome
2. Expand outward in both directions as long as characters match
3. Handle both odd-length (single character center) and even-length (two character center) palindromes
4. Keep track of the longest palindrome found
5. Return the substring with the maximum length

This approach is more efficient than checking all possible substrings.
    `,
    tags: ['string', 'dynamic-programming', 'palindrome'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Facebook', 'Uber'],
    studyPlans: ['Grind 75']
  },
  {
    id: '6',
    title: 'Clone Graph (LeetCode #133)',
    difficulty: 'Medium',
    category: 'Graph',
    description: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
    solution: `
## Solution

### Approach: DFS with Hash Map
\`\`\`python
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node):
    if not node:
        return None
    
    visited = {}
    
    def dfs(original_node):
        if original_node in visited:
            return visited[original_node]
        
        # Create new node
        cloned_node = Node(original_node.val)
        visited[original_node] = cloned_node
        
        # Clone neighbors
        for neighbor in original_node.neighbors:
            cloned_neighbor = dfs(neighbor)
            cloned_node.neighbors.append(cloned_neighbor)
        
        return cloned_node
    
    return dfs(node)
\`\`\`

**Time Complexity**: O(V + E) where V is vertices and E is edges
**Space Complexity**: O(V)
    `,
    explanation: `
## Explanation

We use a depth-first search approach with a hash map to track visited nodes:

1. Use a hash map to store original node -> cloned node mapping
2. For each node, check if it's already been cloned
3. If not, create a new node and add it to the hash map
4. Recursively clone all neighbors
5. Return the cloned graph

This approach ensures we don't create duplicate nodes and handles cycles in the graph.
    `,
    tags: ['graph', 'dfs', 'hash-table', 'recursion'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Facebook', 'Uber'],
    studyPlans: ['Grind 75']
  },
  {
    id: '7',
    title: 'Ransom Note (LeetCode #383)',
    difficulty: 'Easy',
    category: 'Strings',
    description: 'Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.',
    solution: `
## Solution

### Approach: Character Frequency Count
\`\`\`python
def canConstruct(ransomNote, magazine):
    # Count characters in magazine
    char_count = {}
    for char in magazine:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Check if ransomNote can be constructed
    for char in ransomNote:
        if char not in char_count or char_count[char] == 0:
            return False
        char_count[char] -= 1
    
    return True
\`\`\`

**Time Complexity**: O(m + n) where m and n are lengths of magazine and ransomNote
**Space Complexity**: O(1) since we use a fixed-size character set
    `,
    explanation: `
## Explanation

We use a character frequency counting approach:

1. Count the frequency of each character in the magazine
2. For each character in the ransom note, check if it's available in the magazine
3. Decrease the count when we use a character
4. If any character is not available or we run out, return False
5. If we can construct the entire ransom note, return True

This approach efficiently handles the character frequency requirements.
    `,
    tags: ['string', 'hash-table', 'counting'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple', 'Spotify'],
    studyPlans: ['Grind 75']
  }
];

export const reactQuestions: Question[] = [
  {
    id: '1',
    title: 'React Hooks Fundamentals',
    difficulty: 'Medium',
    category: 'Hooks',
    description: 'Explain the difference between useState and useEffect hooks and when to use each. Provide examples of common use cases and best practices.',
    solution: `
## useState Hook

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]); // Dependency array
    
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return <div>{user.name}</div>;
}
\`\`\`
    `,
    explanation: `
## Key Differences

### useState
- **Purpose**: Manages component state
- **Returns**: Current state value and setter function
- **Use when**: You need to store and update data that affects rendering
- **Re-renders**: Component re-renders when state changes

### useEffect
- **Purpose**: Handles side effects (API calls, subscriptions, DOM manipulation)
- **Returns**: Nothing (cleanup function optional)
- **Use when**: You need to perform actions after render or when dependencies change
- **Re-renders**: Doesn't cause re-renders directly

## Best Practices

1. **useState**: Use for local component state
2. **useEffect**: Use for side effects, API calls, subscriptions
3. **Dependencies**: Always include dependencies in useEffect dependency array
4. **Cleanup**: Return cleanup function for subscriptions and timers
    `,
    tags: ['hooks', 'state-management']
  },
  {
    id: '2',
    title: 'Component Lifecycle',
    difficulty: 'Medium',
    category: 'Lifecycle',
    description: 'Describe the component lifecycle in React and the purpose of each lifecycle method. Compare class component lifecycle with functional component hooks.',
    solution: `
## Class Component Lifecycle

\`\`\`jsx
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  
  componentDidMount() {
    // Called after component is mounted to DOM
    this.fetchData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    // Called after component updates
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }
  
  componentWillUnmount() {
    // Called before component is unmounted
    this.cleanup();
  }
  
  render() {
    return <div>{this.state.data}</div>;
  }
}
\`\`\`

## Functional Component with Hooks

\`\`\`jsx
function ExampleComponent({ id }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // componentDidMount equivalent
    fetchData();
    
    // componentWillUnmount equivalent
    return () => {
      cleanup();
    };
  }, []); // Empty dependency array = run once
  
  useEffect(() => {
    // componentDidUpdate equivalent
    if (id) {
      fetchData();
    }
  }, [id]); // Run when id changes
  
  return <div>{data}</div>;
}
\`\`\`
    `,
    explanation: `
## Lifecycle Comparison

### Class Components
- **Mounting**: constructor → render → componentDidMount
- **Updating**: render → componentDidUpdate
- **Unmounting**: componentWillUnmount

### Functional Components (Hooks)
- **Mounting**: useState → useEffect (empty deps)
- **Updating**: useEffect (with deps)
- **Unmounting**: useEffect cleanup function

## Key Differences

1. **Hooks are more flexible**: Can have multiple useEffect calls
2. **Cleaner code**: No need for this binding
3. **Better performance**: Hooks can be optimized better
4. **Easier testing**: Functional components are easier to test

## Best Practices

1. Use functional components with hooks for new code
2. Keep useEffect dependencies minimal
3. Always clean up subscriptions and timers
4. Use custom hooks to share logic between components
    `,
    tags: ['lifecycle', 'components']
  }
];

export const dataEngineeringQuestions: Question[] = [
  {
    id: '1',
    title: 'ETL Pipeline Design',
    difficulty: 'Hard',
    category: 'Data Pipeline',
    description: 'Design an ETL (Extract, Transform, Load) pipeline for processing large datasets with real-time requirements. Consider scalability, fault tolerance, and data quality.',
    solution: `
## ETL Pipeline Architecture

### 1. Extract Layer
\`\`\`python
# Using Apache Kafka for real-time data ingestion
from kafka import KafkaConsumer
import json

def extract_data():
    consumer = KafkaConsumer(
        'data-stream',
        bootstrap_servers=['localhost:9092'],
        value_deserializer=lambda m: json.loads(m.decode('utf-8'))
    )
    
    for message in consumer:
        yield message.value
\`\`\`

### 2. Transform Layer
\`\`\`python
# Using Apache Spark for distributed processing
from pyspark.sql import SparkSession
from pyspark.sql.functions import *

def transform_data(spark, raw_data):
    df = spark.createDataFrame(raw_data)
    
    # Data cleaning and transformation
    transformed_df = df.filter(col("quality_score") > 0.8) \\
                      .withColumn("processed_timestamp", current_timestamp()) \\
                      .withColumn("data_version", lit("v1.0"))
    
    return transformed_df
\`\`\`

### 3. Load Layer
\`\`\`python
# Using Apache Cassandra for scalable storage
from cassandra.cluster import Cluster

def load_data(transformed_data):
    cluster = Cluster(['localhost'])
    session = cluster.connect('data_warehouse')
    
    for row in transformed_data:
        session.execute("""
            INSERT INTO processed_data (id, value, timestamp, version)
            VALUES (%s, %s, %s, %s)
        """, (row.id, row.value, row.timestamp, row.version))
\`\`\`
    `,
    explanation: `
## Design Considerations

### Scalability
- **Horizontal scaling**: Use distributed systems (Kafka, Spark, Cassandra)
- **Partitioning**: Partition data by time, region, or business key
- **Load balancing**: Distribute processing across multiple nodes

### Fault Tolerance
- **Idempotency**: Ensure operations can be retried safely
- **Checkpointing**: Save progress to resume from failures
- **Dead letter queues**: Handle failed records separately

### Data Quality
- **Validation**: Check data types, ranges, and business rules
- **Monitoring**: Track data quality metrics
- **Alerting**: Notify on data quality issues

### Real-time Requirements
- **Streaming**: Use stream processing frameworks
- **Low latency**: Minimize processing time
- **Backpressure handling**: Manage data flow rates
    `,
    tags: ['etl', 'pipeline', 'big-data']
  },
  {
    id: '2',
    title: 'Data Warehouse Architecture',
    difficulty: 'Hard',
    category: 'Architecture',
    description: 'Explain the differences between star schema and snowflake schema in data warehousing. When would you choose one over the other?',
    solution: `
## Star Schema

\`\`\`sql
-- Fact Table
CREATE TABLE sales_fact (
    sale_id INT PRIMARY KEY,
    product_id INT,
    customer_id INT,
    store_id INT,
    date_id INT,
    quantity INT,
    amount DECIMAL(10,2)
);

-- Dimension Tables
CREATE TABLE product_dim (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    brand VARCHAR(50)
);

CREATE TABLE customer_dim (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(50)
);
\`\`\`

## Snowflake Schema

\`\`\`sql
-- Normalized Dimension Tables
CREATE TABLE product_dim (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category_id INT,
    brand_id INT
);

CREATE TABLE category_dim (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50),
    department_id INT
);

CREATE TABLE department_dim (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);
\`\`\`
    `,
    explanation: `
## Key Differences

### Star Schema
- **Structure**: Single fact table with denormalized dimension tables
- **Performance**: Faster queries due to fewer joins
- **Storage**: More storage space due to denormalization
- **Maintenance**: Simpler to maintain and understand

### Snowflake Schema
- **Structure**: Normalized dimension tables with multiple levels
- **Performance**: Slower queries due to more joins
- **Storage**: Less storage space due to normalization
- **Maintenance**: More complex but reduces data redundancy

## When to Choose

### Choose Star Schema When:
- Query performance is critical
- Data is relatively static
- Storage space is not a constraint
- Simplicity is preferred

### Choose Snowflake Schema When:
- Storage space is limited
- Data is highly normalized
- Complex hierarchies exist
- Data consistency is critical

## Best Practices

1. **Hybrid approach**: Use star schema for frequently queried data
2. **Performance testing**: Test both schemas with your specific queries
3. **Data volume**: Consider data growth and storage costs
4. **Query patterns**: Analyze common query patterns to optimize schema
    `,
    tags: ['data-warehouse', 'schema-design']
  }
]; 