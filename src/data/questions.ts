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
  },
  {
    id: '8',
    title: 'Two Sum II - Input Array Is Sorted (LeetCode #167)',
    difficulty: 'Medium',
    category: 'Two Pointers',
    description: 'Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2].',
    solution: `
## Solution

### Approach: Two Pointers
\`\`\`python
def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        
        if current_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return []
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(1)
    `,
    explanation: `
## Explanation

Since the array is sorted, we can use two pointers approach:

1. Start with left pointer at the beginning and right pointer at the end
2. Calculate the sum of elements at both pointers
3. If sum equals target, return the indices (1-indexed)
4. If sum is less than target, move left pointer right (increase sum)
5. If sum is greater than target, move right pointer left (decrease sum)

This approach is optimal because:
- We only need one pass through the array
- We can eliminate half the remaining elements in each iteration
- No extra space is needed
    `,
    tags: ['two-pointers', 'array', 'binary-search'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple', 'Facebook'],
    studyPlans: ['Top 75', 'Blind 75', 'Grind 75']
  },
  {
    id: '9',
    title: 'Remove Duplicates from Sorted Array (LeetCode #26)',
    difficulty: 'Easy',
    category: 'Two Pointers',
    description: 'Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.',
    solution: `
## Solution

### Approach: Two Pointers
\`\`\`python
def removeDuplicates(nums):
    if not nums:
        return 0
    
    # Use two pointers: one for writing, one for reading
    write_index = 1
    
    for read_index in range(1, len(nums)):
        # If current element is different from previous
        if nums[read_index] != nums[read_index - 1]:
            nums[write_index] = nums[read_index]
            write_index += 1
    
    return write_index
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(1)
    `,
    explanation: `
## Explanation

We use two pointers technique:

1. **write_index**: Points to the position where we'll write the next unique element
2. **read_index**: Scans through the array to find unique elements

Algorithm:
1. Start with write_index = 1 (first element is always unique)
2. For each element starting from index 1:
   - If current element is different from previous element, write it at write_index
   - Increment write_index
3. Return write_index (number of unique elements)

This approach modifies the array in-place and maintains the relative order of elements.
    `,
    tags: ['two-pointers', 'array'],
    companies: ['Microsoft', 'Google', 'Amazon', 'Apple', 'Adobe'],
    studyPlans: ['Top 75', 'Blind 75', 'Grind 75']
  },
  {
    id: '10',
    title: 'Container With Most Water (LeetCode #11)',
    difficulty: 'Medium',
    category: 'Two Pointers',
    description: 'Given n non-negative integers height where each represents a point at coordinate (i, height[i]). Find two lines, which, together with the x-axis forms a container, such that the container contains the maximum amount of water.',
    solution: `
## Solution

### Approach: Two Pointers
\`\`\`python
def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    
    while left < right:
        # Calculate area with current heights
        width = right - left
        h = min(height[left], height[right])
        area = width * h
        max_area = max(max_area, area)
        
        # Move the pointer with smaller height
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(1)
    `,
    explanation: `
## Explanation

The key insight is that the area is limited by the shorter of the two heights:

1. Start with two pointers at the ends of the array
2. Calculate the area: width × min(height[left], height[right])
3. Update max_area if current area is larger
4. Move the pointer with the smaller height inward

Why this works:
- The area is always limited by the shorter height
- By moving the pointer with smaller height, we might find a larger area
- We don't need to check combinations with even smaller heights
- This ensures we don't miss the optimal solution

The greedy approach of always moving the shorter pointer is optimal because:
- The current area is the maximum possible with the shorter height
- Moving the taller pointer can only decrease the area
- Moving the shorter pointer might increase the area
    `,
    tags: ['two-pointers', 'array', 'greedy'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple', 'Facebook'],
    studyPlans: ['Top 75', 'Blind 75', 'Grind 75']
  },
  {
    id: '11',
    title: '3Sum (LeetCode #15)',
    difficulty: 'Medium',
    category: 'Two Pointers',
    description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.',
    solution: `
## Solution

### Approach: Two Pointers with Sorting
\`\`\`python
def threeSum(nums):
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        # Skip duplicates for i
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        left, right = i + 1, len(nums) - 1
        
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                
                # Skip duplicates for left and right
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    
    return result
\`\`\`

**Time Complexity**: O(n²)
**Space Complexity**: O(1) (excluding output space)
    `,
    explanation: `
## Explanation

The solution uses a combination of sorting and two pointers:

1. **Sort the array**: This allows us to use two pointers efficiently
2. **Fix one element**: For each element nums[i], find two other elements that sum to -nums[i]
3. **Use two pointers**: For the remaining elements, use left and right pointers
4. **Skip duplicates**: Avoid duplicate triplets by skipping identical elements

Algorithm:
1. Sort the array
2. For each element nums[i] (skip duplicates):
   - Use two pointers (left, right) to find pairs that sum to -nums[i]
   - If sum == 0, add triplet to result and skip duplicates
   - If sum < 0, move left pointer right
   - If sum > 0, move right pointer left

Key optimizations:
- Skip duplicates at each level to avoid duplicate triplets
- Early termination when nums[i] > 0 (since array is sorted)
- Two pointers approach reduces complexity from O(n³) to O(n²)
    `,
    tags: ['two-pointers', 'array', 'sorting'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple', 'Facebook'],
    studyPlans: ['Top 75', 'Blind 75', 'Grind 75']
  },
  {
    id: '12',
    title: 'Linked List Cycle (LeetCode #141)',
    difficulty: 'Easy',
    category: 'Two Pointers',
    description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.',
    solution: `
## Solution

### Approach: Floyd's Cycle Finding Algorithm (Fast and Slow Pointers)
\`\`\`python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def hasCycle(head):
    if not head or not head.next:
        return False
    
    slow = head
    fast = head.next
    
    while slow != fast:
        if not fast or not fast.next:
            return False
        slow = slow.next
        fast = fast.next.next
    
    return True
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(1)
    `,
    explanation: `
## Explanation

Floyd's Cycle Finding Algorithm (also known as the "tortoise and hare" algorithm):

1. **Two pointers**: Use a slow pointer (moves 1 step) and fast pointer (moves 2 steps)
2. **Cycle detection**: If there's a cycle, the fast pointer will eventually catch up to the slow pointer
3. **No cycle**: If there's no cycle, the fast pointer will reach the end (null)

Why this works:
- If there's no cycle, fast pointer reaches end in O(n/2) = O(n) time
- If there's a cycle, fast pointer will eventually meet slow pointer
- The meeting point is not necessarily the start of the cycle
- The algorithm is guaranteed to terminate

Mathematical proof:
- Let the cycle length be L
- Let the distance from head to cycle start be D
- When slow enters cycle, fast is D steps ahead
- Fast catches up to slow in L - (D mod L) steps
- Total time complexity is O(n)

This is the most efficient way to detect cycles in linked lists.
    `,
    tags: ['two-pointers', 'linked-list'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple', 'Facebook'],
    studyPlans: ['Top 75', 'Blind 75', 'Grind 75']
  },
  {
    id: '13',
    title: 'Remove Nth Node From End of List (LeetCode #19)',
    difficulty: 'Medium',
    category: 'Two Pointers',
    description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
    solution: `
## Solution

### Approach: Two Pointers (Fast and Slow)
\`\`\`python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head, n):
    # Create a dummy node to handle edge cases
    dummy = ListNode(0)
    dummy.next = head
    
    # Two pointers
    first = dummy
    second = dummy
    
    # Move first pointer n+1 steps ahead
    for _ in range(n + 1):
        first = first.next
    
    # Move both pointers until first reaches end
    while first:
        first = first.next
        second = second.next
    
    # Remove the nth node from end
    second.next = second.next.next
    
    return dummy.next
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(1)
    `,
    explanation: `
## Explanation

The two pointers approach allows us to find the nth node from the end in one pass:

1. **Dummy node**: Create a dummy node to handle edge cases (like removing the head)
2. **Two pointers**: Use first and second pointers
3. **Gap creation**: Move first pointer n+1 steps ahead of second
4. **Synchronized movement**: Move both pointers until first reaches the end
5. **Removal**: When first reaches end, second points to the node before the one to remove

Why n+1 steps?
- We want second to point to the node BEFORE the one we want to remove
- This allows us to easily remove the target node by updating the next pointer

Example:
- List: 1 -> 2 -> 3 -> 4 -> 5, n = 2
- We want to remove node with value 4 (2nd from end)
- After moving first n+1 steps: first points to 3, second points to dummy
- After synchronized movement: first points to null, second points to 3
- Remove: 3.next = 3.next.next (removes 4)

This approach is optimal because:
- Only one pass through the list
- Constant extra space
- Handles all edge cases elegantly
    `,
    tags: ['two-pointers', 'linked-list'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple', 'Facebook'],
    studyPlans: ['Top 75', 'Blind 75', 'Grind 75']
  },
  {
    id: 'ransom-note',
    title: 'Ransom Note (LeetCode #383)',
    difficulty: 'Easy',
    category: 'Hashmap',
    description: 'Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.',
    solution: `
## Solution

### Approach: Hash Map
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

**Time Complexity**: O(m + n) where m is length of magazine and n is length of ransomNote
**Space Complexity**: O(k) where k is the number of unique characters in magazine
    `,
    explanation: `
## Explanation

1. **Count characters**: First, we count the frequency of each character in the magazine string
2. **Check availability**: For each character in the ransom note, we check if it's available in our count
3. **Decrement count**: If a character is used, we decrement its count
4. **Return result**: If we can use all characters from ransom note, return true; otherwise false

This approach ensures we can only use each character from the magazine once.
    `,
    tags: ['hash-table', 'string', 'counting'],
    companies: ['Google', 'Apple', 'Microsoft'],
    studyPlans: ['Top 150']
  },
  {
    id: 'isomorphic-strings',
    title: 'Isomorphic Strings (LeetCode #205)',
    difficulty: 'Easy',
    category: 'Hashmap',
    description: 'Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters.',
    solution: `
## Solution

### Approach: Hash Map
\`\`\`python
def isIsomorphic(s, t):
    if len(s) != len(t):
        return False
    
    s_to_t = {}
    t_to_s = {}
    
    for i in range(len(s)):
        char_s, char_t = s[i], t[i]
        
        # Check s to t mapping
        if char_s in s_to_t:
            if s_to_t[char_s] != char_t:
                return False
        else:
            s_to_t[char_s] = char_t
        
        # Check t to s mapping
        if char_t in t_to_s:
            if t_to_s[char_t] != char_s:
                return False
        else:
            t_to_s[char_t] = char_s
    
    return True
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(k) where k is the number of unique characters
    `,
    explanation: `
## Explanation

We need to check for bidirectional mapping:
1. **Forward mapping**: Each character in s maps to exactly one character in t
2. **Reverse mapping**: Each character in t maps to exactly one character in s
3. **Consistency check**: If a character appears again, it must map to the same character

This ensures that the mapping is one-to-one and consistent throughout the strings.
    `,
    tags: ['hash-table', 'string'],
    companies: ['Google', 'Microsoft', 'Apple'],
    studyPlans: ['Top 150']
  },
  {
    id: 'word-pattern',
    title: 'Word Pattern (LeetCode #290)',
    difficulty: 'Easy',
    category: 'Hashmap',
    description: 'Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.',
    solution: `
## Solution

### Approach: Hash Map
\`\`\`python
def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words):
        return False
    
    pattern_to_word = {}
    word_to_pattern = {}
    
    for i in range(len(pattern)):
        char, word = pattern[i], words[i]
        
        # Check pattern to word mapping
        if char in pattern_to_word:
            if pattern_to_word[char] != word:
                return False
        else:
            pattern_to_word[char] = word
        
        # Check word to pattern mapping
        if word in word_to_pattern:
            if word_to_pattern[word] != char:
                return False
        else:
            word_to_pattern[word] = char
    
    return True
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(k) where k is the number of unique characters/words
    `,
    explanation: `
## Explanation

Similar to isomorphic strings, we need bidirectional mapping:
1. **Pattern to word**: Each character in pattern maps to exactly one word
2. **Word to pattern**: Each word maps to exactly one character in pattern
3. **Consistency check**: If a character/word appears again, it must map to the same word/character

This ensures the pattern and string follow the same bijection.
    `,
    tags: ['hash-table', 'string'],
    companies: ['Google', 'Microsoft', 'Apple'],
    studyPlans: ['Top 150']
  },
  {
    id: 'valid-anagram',
    title: 'Valid Anagram (LeetCode #242)',
    difficulty: 'Easy',
    category: 'Hashmap',
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    solution: `
## Solution

### Approach 1: Hash Map
\`\`\`python
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    
    char_count = {}
    
    # Count characters in s
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Decrement counts for characters in t
    for char in t:
        if char not in char_count or char_count[char] == 0:
            return False
        char_count[char] -= 1
    
    return True
\`\`\`

### Approach 2: Sorting
\`\`\`python
def isAnagram(s, t):
    return sorted(s) == sorted(t)
\`\`\`

**Time Complexity**: O(n) for hash map, O(n log n) for sorting
**Space Complexity**: O(k) for hash map, O(n) for sorting
    `,
    explanation: `
## Explanation

**Hash Map Approach**:
1. **Count characters**: Count frequency of each character in string s
2. **Check against t**: For each character in t, decrement the count
3. **Validate**: If any character is missing or count goes negative, return false

**Sorting Approach**:
1. **Sort both strings**: Convert both strings to sorted lists
2. **Compare**: If they are equal, they are anagrams

The hash map approach is more efficient for large strings.
    `,
    tags: ['hash-table', 'string', 'sorting'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Apple'],
    studyPlans: ['Top 150']
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams (LeetCode #49)',
    difficulty: 'Medium',
    category: 'Hashmap',
    description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    solution: `
## Solution

### Approach: Hash Map with Sorted Key
\`\`\`python
def groupAnagrams(strs):
    anagram_groups = {}
    
    for word in strs:
        # Create a key by sorting the characters
        sorted_word = ''.join(sorted(word))
        
        if sorted_word in anagram_groups:
            anagram_groups[sorted_word].append(word)
        else:
            anagram_groups[sorted_word] = [word]
    
    return list(anagram_groups.values())
\`\`\`

### Alternative Approach: Hash Map with Character Count
\`\`\`python
def groupAnagrams(strs):
    anagram_groups = {}
    
    for word in strs:
        # Create a key by counting characters
        char_count = [0] * 26
        for char in word:
            char_count[ord(char) - ord('a')] += 1
        
        key = tuple(char_count)
        
        if key in anagram_groups:
            anagram_groups[key].append(word)
        else:
            anagram_groups[key] = [word]
    
    return list(anagram_groups.values())
\`\`\`

**Time Complexity**: O(n * k log k) for sorting approach, O(n * k) for counting approach
**Space Complexity**: O(n * k) where n is number of strings and k is max string length
    `,
    explanation: `
## Explanation

**Sorting Approach**:
1. **Create key**: Sort characters of each word to create a unique key
2. **Group**: Use the sorted word as key in hash map
3. **Collect**: Return all groups

**Counting Approach**:
1. **Count characters**: Create a character count array for each word
2. **Create key**: Use the count array as a tuple key
3. **Group**: Group words with same character counts

Both approaches work, but counting is more efficient for longer strings.
    `,
    tags: ['hash-table', 'string', 'sorting'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Facebook'],
    studyPlans: ['Top 150']
  },
  {
    id: 'happy-number',
    title: 'Happy Number (LeetCode #202)',
    difficulty: 'Easy',
    category: 'Hashmap',
    description: 'Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.',
    solution: `
## Solution

### Approach: Hash Set
\`\`\`python
def isHappy(n):
    seen = set()
    
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(digit) ** 2 for digit in str(n))
    
    return n == 1
\`\`\`

**Time Complexity**: O(log n)
**Space Complexity**: O(log n)
    `,
    explanation: `
## Explanation

1. **Track seen numbers**: Use a set to track numbers we've already seen
2. **Calculate next number**: Sum the squares of digits
3. **Check for cycle**: If we see a number again, we're in a cycle
4. **Check for happy**: If we reach 1, the number is happy

The key insight is that if we enter a cycle, we'll never reach 1, so we can detect this by tracking seen numbers.
    `,
    tags: ['hash-table', 'math', 'two-pointers'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Apple'],
    studyPlans: ['Top 150']
  },
  {
    id: 'contains-duplicate-ii',
    title: 'Contains Duplicate II (LeetCode #219)',
    difficulty: 'Easy',
    category: 'Hashmap',
    description: 'Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.',
    solution: `
## Solution

### Approach: Hash Map
\`\`\`python
def containsNearbyDuplicate(nums, k):
    seen = {}
    
    for i, num in enumerate(nums):
        if num in seen and i - seen[num] <= k:
            return True
        seen[num] = i
    
    return False
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(min(n, k))
    `,
    explanation: `
## Explanation

1. **Track last position**: Store the last position of each number in a hash map
2. **Check distance**: When we see a number again, check if the distance is ≤ k
3. **Update position**: Always update the position to the current index

This approach ensures we only need to traverse the array once and maintain a sliding window of size k.
    `,
    tags: ['hash-table', 'array', 'sliding-window'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Apple'],
    studyPlans: ['Top 150']
  },
  {
    id: 'longest-consecutive-sequence',
    title: 'Longest Consecutive Sequence (LeetCode #128)',
    difficulty: 'Medium',
    category: 'Hashmap',
    description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
    solution: `
## Solution

### Approach: Hash Set
\`\`\`python
def longestConsecutive(nums):
    if not nums:
        return 0
    
    num_set = set(nums)
    max_length = 0
    
    for num in num_set:
        # Only start counting from sequence beginnings
        if num - 1 not in num_set:
            current_num = num
            current_length = 1
            
            # Count consecutive numbers
            while current_num + 1 in num_set:
                current_num += 1
                current_length += 1
            
            max_length = max(max_length, current_length)
    
    return max_length
\`\`\`

**Time Complexity**: O(n)
**Space Complexity**: O(n)
    `,
    explanation: `
## Explanation

1. **Create set**: Convert array to set for O(1) lookups
2. **Find sequence starts**: Only start counting from numbers that don't have a predecessor
3. **Count consecutive**: For each sequence start, count how many consecutive numbers follow
4. **Track maximum**: Keep track of the longest sequence found

The key optimization is only starting from sequence beginnings to avoid redundant counting.
    `,
    tags: ['hash-table', 'array', 'union-find'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Facebook'],
    studyPlans: ['Top 150']
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