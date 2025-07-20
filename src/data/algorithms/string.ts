import { Algorithm } from '../../types';

export const stringAlgorithms: Algorithm[] = [
  {
    id: 'kmp',
    name: 'KMP Algorithm (Knuth–Morris–Pratt)',
    category: 'String',
    description: 'Fast pattern matching algorithm using failure function',
    explanation: `
# KMP Algorithm (Knuth–Morris–Pratt)

The KMP algorithm is an efficient string matching algorithm that uses a failure function to avoid unnecessary comparisons.

## How it Works

1. **Preprocess Pattern**: Build failure function (longest proper prefix that is also suffix)
2. **Match**: Use failure function to skip comparisons when mismatch occurs
3. **Continue**: Resume matching from appropriate position

## Implementation

\`\`\`python
def kmp_search(text, pattern):
    def build_lps(pattern):
        lps = [0] * len(pattern)
        length = 0
        i = 1
        
        while i < len(pattern):
            if pattern[i] == pattern[length]:
                length += 1
                lps[i] = length
                i += 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i += 1
        
        return lps
    
    if not pattern or not text:
        return []
    
    lps = build_lps(pattern)
    i = j = 0
    matches = []
    
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == len(pattern):
            matches.append(i - j)
            j = lps[j - 1]
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return matches

# Example usage
text = "AABAACAADAABAABA"
pattern = "AABA"
result = kmp_search(text, pattern)
print(f"Pattern found at indices: {result}")
\`\`\`

## Time Complexity

- **Preprocessing**: O(m) where m is pattern length
- **Searching**: O(n) where n is text length
- **Total**: O(n + m)

## Space Complexity

- O(m) for the failure function (LPS array)

## When to Use

- Pattern matching in large texts
- When multiple pattern searches are needed
- When preprocessing time is acceptable
- DNA sequence matching
    `,
    codeExample: `def kmp_search(text, pattern):
    def build_lps(pattern):
        lps = [0] * len(pattern)
        length = 0
        i = 1
        while i < len(pattern):
            if pattern[i] == pattern[length]:
                length += 1
                lps[i] = length
                i += 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i += 1
        return lps
    
    lps = build_lps(pattern)
    i = j = 0
    matches = []
    
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == len(pattern):
            matches.append(i - j)
            j = lps[j - 1]
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return matches`,
    timeComplexity: 'O(n + m)',
    spaceComplexity: 'O(m)'
  },
  {
    id: 'rabin-karp',
    name: 'Rabin-Karp Algorithm',
    category: 'String',
    description: 'String search using rolling hash function',
    explanation: `
# Rabin-Karp Algorithm

The Rabin-Karp algorithm uses hashing to find patterns in text. It's particularly efficient for multiple pattern searches.

## How it Works

1. **Hash Pattern**: Calculate hash value of the pattern
2. **Rolling Hash**: Calculate hash of each text window
3. **Compare**: If hashes match, verify with character comparison
4. **Slide**: Move window and update hash

## Implementation

\`\`\`python
def rabin_karp_search(text, pattern, d=256, q=101):
    def hash_string(s, d, q):
        h = 0
        for char in s:
            h = (h * d + ord(char)) % q
        return h
    
    n, m = len(text), len(pattern)
    if n < m:
        return []
    
    # Calculate hash values
    pattern_hash = hash_string(pattern, d, q)
    text_hash = hash_string(text[:m], d, q)
    
    # Precompute d^(m-1) % q
    h = pow(d, m - 1, q)
    
    matches = []
    
    for i in range(n - m + 1):
        # Check if hash values match
        if pattern_hash == text_hash:
            # Verify with character comparison
            if text[i:i + m] == pattern:
                matches.append(i)
        
        # Calculate hash for next window
        if i < n - m:
            text_hash = (d * (text_hash - ord(text[i]) * h) + ord(text[i + m])) % q
            # Handle negative hash values
            if text_hash < 0:
                text_hash += q
    
    return matches

# Example usage
text = "GEEKS FOR GEEKS"
pattern = "GEEK"
result = rabin_karp_search(text, pattern)
print(f"Pattern found at indices: {result}")
\`\`\`

## Time Complexity

- **Average Case**: O(n + m) where n is text length, m is pattern length
- **Worst Case**: O(nm) when many hash collisions occur
- **Best Case**: O(n + m) when no hash collisions

## Space Complexity

- O(1) - Constant extra space

## When to Use

- Multiple pattern searches
- When hash collisions are unlikely
- Plagiarism detection
- DNA sequence analysis
    `,
    codeExample: `def rabin_karp_search(text, pattern, d=256, q=101):
    def hash_string(s, d, q):
        h = 0
        for char in s:
            h = (h * d + ord(char)) % q
        return h
    
    n, m = len(text), len(pattern)
    pattern_hash = hash_string(pattern, d, q)
    text_hash = hash_string(text[:m], d, q)
    h = pow(d, m - 1, q)
    
    matches = []
    for i in range(n - m + 1):
        if pattern_hash == text_hash and text[i:i + m] == pattern:
            matches.append(i)
        if i < n - m:
            text_hash = (d * (text_hash - ord(text[i]) * h) + ord(text[i + m])) % q
            if text_hash < 0:
                text_hash += q
    
    return matches`,
    timeComplexity: 'O(n + m)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'z-algorithm',
    name: 'Z-Algorithm',
    category: 'String',
    description: 'Efficient substring search using Z-array',
    explanation: `
# Z-Algorithm

The Z-Algorithm finds all occurrences of a pattern in a text by computing the Z-array, which stores the length of the longest substring starting from each position that matches the prefix.

## How it Works

1. **Create Z-Array**: For each position, find longest prefix match
2. **Use Z-Box**: Utilize previously computed values to skip comparisons
3. **Expand**: Manually expand when Z-box doesn't help
4. **Search**: Use Z-array to find pattern occurrences

## Implementation

\`\`\`python
def z_algorithm_search(text, pattern):
    def compute_z_array(s):
        n = len(s)
        z = [0] * n
        l = r = 0
        
        for i in range(1, n):
            if i > r:
                # No Z-box available, expand manually
                l = r = i
                while r < n and s[r - l] == s[r]:
                    r += 1
                z[i] = r - l
                r -= 1
            else:
                # Use Z-box
                k = i - l
                if z[k] < r - i + 1:
                    z[i] = z[k]
                else:
                    # Expand from r
                    l = i
                    while r < n and s[r - l] == s[r]:
                        r += 1
                    z[i] = r - l
                    r -= 1
        
        return z
    
    # Create string: pattern + '$' + text
    combined = pattern + '$' + text
    z_array = compute_z_array(combined)
    
    pattern_length = len(pattern)
    matches = []
    
    # Find positions where Z[i] == pattern_length
    for i in range(pattern_length + 1, len(z_array)):
        if z_array[i] == pattern_length:
            matches.append(i - pattern_length - 1)
    
    return matches

# Example usage
text = "AABAACAADAABAABA"
pattern = "AABA"
result = z_algorithm_search(text, pattern)
print(f"Pattern found at indices: {result}")
\`\`\`

## Time Complexity

- **Preprocessing**: O(n + m) where n is text length, m is pattern length
- **Searching**: O(n + m)
- **Total**: O(n + m)

## Space Complexity

- O(n + m) for the Z-array

## When to Use

- Pattern matching with preprocessing
- When multiple searches on same text
- When Z-array can be reused
- String similarity problems
    `,
    codeExample: `def z_algorithm_search(text, pattern):
    def compute_z_array(s):
        n = len(s)
        z = [0] * n
        l = r = 0
        
        for i in range(1, n):
            if i > r:
                l = r = i
                while r < n and s[r - l] == s[r]:
                    r += 1
                z[i] = r - l
                r -= 1
            else:
                k = i - l
                if z[k] < r - i + 1:
                    z[i] = z[k]
                else:
                    l = i
                    while r < n and s[r - l] == s[r]:
                        r += 1
                    z[i] = r - l
                    r -= 1
        
        return z
    
    combined = pattern + '$' + text
    z_array = compute_z_array(combined)
    pattern_length = len(pattern)
    matches = []
    
    for i in range(pattern_length + 1, len(z_array)):
        if z_array[i] == pattern_length:
            matches.append(i - pattern_length - 1)
    
    return matches`,
    timeComplexity: 'O(n + m)',
    spaceComplexity: 'O(n + m)'
  },
  {
    id: 'suffix-array',
    name: 'Suffix Array / Suffix Tree',
    category: 'String',
    description: 'Efficient substring search using suffix structures',
    explanation: `
# Suffix Array / Suffix Tree Algorithms

Suffix arrays and suffix trees are data structures that enable efficient substring searches and other string operations.

## How it Works

### Suffix Array
1. **Generate Suffixes**: Create all suffixes of the string
2. **Sort**: Sort suffixes lexicographically
3. **Search**: Use binary search to find pattern

### Suffix Tree
1. **Build Tree**: Construct compressed trie of all suffixes
2. **Search**: Traverse tree following pattern characters
3. **Find Occurrences**: Collect all leaf nodes in subtree

## Implementation (Suffix Array)

\`\`\`python
def build_suffix_array(text):
    def sort_suffixes(suffixes):
        # Simple sorting for demonstration
        # In practice, use more efficient algorithms like SA-IS
        return sorted(suffixes, key=lambda x: text[x:])
    
    n = len(text)
    suffixes = list(range(n))
    suffix_array = sort_suffixes(suffixes)
    
    return suffix_array

def search_suffix_array(text, pattern, suffix_array):
    def binary_search(pattern):
        left, right = 0, len(suffix_array) - 1
        
        while left <= right:
            mid = (left + right) // 2
            suffix_start = suffix_array[mid]
            suffix = text[suffix_start:suffix_start + len(pattern)]
            
            if suffix == pattern:
                # Find all occurrences
                start = mid
                while start > 0 and text[suffix_array[start - 1]:suffix_array[start - 1] + len(pattern)] == pattern:
                    start -= 1
                
                end = mid
                while end < len(suffix_array) - 1 and text[suffix_array[end + 1]:suffix_array[end + 1] + len(pattern)] == pattern:
                    end += 1
                
                return [suffix_array[i] for i in range(start, end + 1)]
            elif suffix < pattern:
                left = mid + 1
            else:
                right = mid - 1
        
        return []
    
    return binary_search(pattern)

# Example usage
text = "banana$"
suffix_array = build_suffix_array(text)
pattern = "ana"
result = search_suffix_array(text, pattern, suffix_array)
print(f"Pattern found at indices: {result}")
\`\`\`

## Implementation (Suffix Tree - Simplified)

\`\`\`python
class SuffixTreeNode:
    def __init__(self):
        self.children = {}
        self.start = -1
        self.end = -1
        self.suffix_link = None

def build_suffix_tree(text):
    # Simplified implementation
    # In practice, use Ukkonen's algorithm for O(n) construction
    root = SuffixTreeNode()
    
    for i in range(len(text)):
        current = root
        for j in range(i, len(text)):
            char = text[j]
            if char not in current.children:
                current.children[char] = SuffixTreeNode()
                current.children[char].start = j
                current.children[char].end = j
            current = current.children[char]
    
    return root

def search_suffix_tree(root, pattern, text):
    current = root
    for char in pattern:
        if char not in current.children:
            return []
        current = current.children[char]
    
    # Collect all leaf nodes (occurrences)
    return collect_occurrences(current, text)

def collect_occurrences(node, text):
    # Simplified - in practice, traverse to leaves
    occurrences = []
    # Implementation depends on how you store leaf information
    return occurrences
\`\`\`

## Time Complexity

### Suffix Array
- **Construction**: O(n log n) with efficient algorithms
- **Search**: O(m log n) where m is pattern length

### Suffix Tree
- **Construction**: O(n) with Ukkonen's algorithm
- **Search**: O(m) where m is pattern length

## Space Complexity

- **Suffix Array**: O(n)
- **Suffix Tree**: O(n)

## When to Use

- Multiple substring searches
- Longest common substring problems
- String compression
- Bioinformatics applications
    `,
    codeExample: `def build_suffix_array(text):
    n = len(text)
    suffixes = list(range(n))
    return sorted(suffixes, key=lambda x: text[x:])

def search_suffix_array(text, pattern, suffix_array):
    left, right = 0, len(suffix_array) - 1
    
    while left <= right:
        mid = (left + right) // 2
        suffix_start = suffix_array[mid]
        suffix = text[suffix_start:suffix_start + len(pattern)]
        
        if suffix == pattern:
            return [suffix_array[mid]]
        elif suffix < pattern:
            left = mid + 1
        else:
            right = mid - 1
    
    return []`,
    timeComplexity: 'O(m log n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 'manacher',
    name: 'Manacher\'s Algorithm',
    category: 'String',
    description: 'Finds the longest palindromic substring in linear time',
    explanation: `
# Manacher's Algorithm

Manacher's algorithm finds the longest palindromic substring in a string in linear time using the concept of palindrome centers and radius.

## How it Works

1. **Transform String**: Insert special characters to handle even-length palindromes
2. **Expand Centers**: For each position, expand palindrome around center
3. **Use Symmetry**: Utilize previously computed values to skip comparisons
4. **Track Maximum**: Keep track of the longest palindrome found

## Implementation

\`\`\`python
def manacher_algorithm(text):
    def transform_string(s):
        # Insert '#' between characters and at ends
        transformed = ['#']
        for char in s:
            transformed.append(char)
            transformed.append('#')
        return ''.join(transformed)
    
    if not text:
        return ""
    
    # Transform string
    transformed = transform_string(text)
    n = len(transformed)
    
    # Initialize palindrome radius array
    p = [0] * n
    
    # Center and right boundary of current palindrome
    center = right = 0
    
    for i in range(n):
        # Use symmetry to initialize radius
        if i < right:
            mirror = 2 * center - i
            p[i] = min(right - i, p[mirror])
        
        # Expand palindrome around current center
        left = i - (p[i] + 1)
        right_expand = i + (p[i] + 1)
        
        while left >= 0 and right_expand < n and transformed[left] == transformed[right_expand]:
            p[i] += 1
            left -= 1
            right_expand += 1
        
        # Update center and right boundary if necessary
        if i + p[i] > right:
            center = i
            right = i + p[i]
    
    # Find maximum palindrome
    max_radius = max(p)
    max_center = p.index(max_radius)
    
    # Convert back to original string indices
    start = (max_center - max_radius) // 2
    end = (max_center + max_radius) // 2
    
    return text[start:end]

# Example usage
text = "babad"
result = manacher_algorithm(text)
print(f"Longest palindromic substring: {result}")

text2 = "cbbd"
result2 = manacher_algorithm(text2)
print(f"Longest palindromic substring: {result2}")
\`\`\`

## Algorithm Steps

1. **String Transformation**: Convert "babad" to "#b#a#b#a#d#"
2. **Palindrome Centers**: For each position, find palindrome radius
3. **Symmetry Optimization**: Use previously computed values
4. **Expansion**: Manually expand when symmetry doesn't help

## Time Complexity

- **O(n)** where n is the length of the string
- **Linear time** due to symmetry optimization

## Space Complexity

- **O(n)** for the palindrome radius array

## When to Use

- Finding longest palindromic substring
- Palindrome-related problems
- String analysis
- Text processing applications

## Applications

- DNA sequence analysis
- Text compression
- Pattern recognition
- Security applications
    `,
    codeExample: `def manacher_algorithm(text):
    def transform_string(s):
        transformed = ['#']
        for char in s:
            transformed.append(char)
            transformed.append('#')
        return ''.join(transformed)
    
    if not text:
        return ""
    
    transformed = transform_string(text)
    n = len(transformed)
    p = [0] * n
    center = right = 0
    
    for i in range(n):
        if i < right:
            mirror = 2 * center - i
            p[i] = min(right - i, p[mirror])
        
        left = i - (p[i] + 1)
        right_expand = i + (p[i] + 1)
        
        while left >= 0 and right_expand < n and transformed[left] == transformed[right_expand]:
            p[i] += 1
            left -= 1
            right_expand += 1
        
        if i + p[i] > right:
            center = i
            right = i + p[i]
    
    max_radius = max(p)
    max_center = p.index(max_radius)
    start = (max_center - max_radius) // 2
    end = (max_center + max_radius) // 2
    
    return text[start:end]`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  }
]; 