import { Topic } from '../../types';

export const pythonModule2Topics: Topic[] = [
  {
    id: 'conditional-statements',
    title: 'Conditional Statements (if, elif, else)',
    description: 'Learn how to control the flow of your Python programs using if, elif, and else statements.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# Conditional Statements (if, elif, else)

Conditional statements allow you to execute code blocks based on conditions.

~~~python
x = 10
if x > 0:
    print('Positive')
elif x == 0:
    print('Zero')
else:
    print('Negative')
~~~
    `,
    subtopics: [
      {
        id: 'if-elif-else',
        title: 'if, elif, else Syntax',
        content: `
Use if, elif, and else to control program flow based on conditions.
        `,
        keyPoints: [
          'if for the first condition',
          'elif for additional conditions',
          'else for the default case',
          'Indentation is required'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'loops',
    title: 'Loops (for, while, break, continue, pass)',
    description: 'Repeat actions using for and while loops, and control loop execution with break, continue, and pass.',
    difficulty: 'Beginner',
    estimatedTime: '12 minutes',
    content: `
# Loops in Python

## for Loop
~~~python
for i in range(5):
    print(i)
~~~

## while Loop
~~~python
count = 0
while count < 5:
    print(count)
    count += 1
~~~

## break, continue, pass
- break: Exit the loop
- continue: Skip to the next iteration
- pass: Do nothing (placeholder)
    `,
    subtopics: [
      {
        id: 'for-loop',
        title: 'for Loop',
        content: `
Iterate over a sequence using a for loop.
        `,
        keyPoints: [
          'Use for to iterate over sequences',
          'Common with range(), lists, strings',
          'Can use break and continue'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'while-loop',
        title: 'while Loop',
        content: `
Repeat a block of code while a condition is true.
        `,
        keyPoints: [
          'Use while for repeated actions',
          'Must update the condition inside the loop',
          'Can use break and continue'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'loop-control',
        title: 'break, continue, pass',
        content: `
Control loop execution with break, continue, and pass.
        `,
        keyPoints: [
          'break: Exit the loop',
          'continue: Skip to next iteration',
          'pass: Do nothing (placeholder)'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'range-iteration',
    title: 'range() and Iteration Patterns',
    description: 'Use range() and common iteration patterns in Python.',
    difficulty: 'Beginner',
    estimatedTime: '8 minutes',
    content: `
# range() and Iteration Patterns

range() generates a sequence of numbers.

~~~python
for i in range(1, 6):
    print(i)
~~~
    `,
    subtopics: [
      {
        id: 'range-function',
        title: 'range() Function',
        content: `
Use range() to generate sequences of numbers for iteration.
        `,
        keyPoints: [
          'range(start, stop, step)',
          'Default start is 0, step is 1',
          'Common in for loops'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'lists',
    title: 'Lists (Creation, Indexing, Slicing, Methods, Comprehensions)',
    description: 'Master Python lists: creation, indexing, slicing, methods, and list comprehensions.',
    difficulty: 'Beginner',
    estimatedTime: '15 minutes',
    content: `
# Lists in Python

Lists are ordered, mutable collections.

~~~python
my_list = [1, 2, 3, 4]
print(my_list[0])      # Indexing
print(my_list[1:3])    # Slicing
my_list.append(5)      # Method
squares = [x*x for x in my_list]  # Comprehension
~~~
    `,
    subtopics: [
      {
        id: 'list-basics',
        title: 'List Basics',
        content: `
Create, index, and slice lists.
        `,
        keyPoints: [
          'Lists use square brackets []',
          'Indexing starts at 0',
          'Slicing: list[start:end]'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'list-methods',
        title: 'List Methods',
        content: `
Use methods like append(), extend(), insert(), remove(), pop(), sort(), and reverse().
        `,
        keyPoints: [
          'append(): Add item',
          'remove(): Remove item',
          'sort(): Sort list',
          'pop(): Remove and return item'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'list-comprehensions',
        title: 'List Comprehensions',
        content: `
Create new lists using comprehensions.
        `,
        keyPoints: [
          '[expression for item in list]',
          'Can include if conditions',
          'More concise than loops'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'tuples',
    title: 'Tuples (Immutability, Packing & Unpacking)',
    description: 'Learn about tuples: immutability, packing, and unpacking.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# Tuples in Python

Tuples are ordered, immutable collections.

~~~python
t = (1, 2, 3)
a, b, c = t  # Unpacking
~~~
    `,
    subtopics: [
      {
        id: 'tuple-basics',
        title: 'Tuple Basics',
        content: `
Tuples are like lists but cannot be changed.
        `,
        keyPoints: [
          'Use parentheses ()',
          'Immutable (cannot change)',
          'Can be packed and unpacked'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'sets',
    title: 'Sets (Uniqueness, Set Operations, Frozensets)',
    description: 'Understand sets, set operations, and frozensets in Python.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# Sets in Python

Sets are unordered collections of unique elements.

~~~python
s = {1, 2, 3, 2}
print(s)  # {1, 2, 3}
~~~
    `,
    subtopics: [
      {
        id: 'set-basics',
        title: 'Set Basics',
        content: `
Sets store unique elements and support set operations.
        `,
        keyPoints: [
          'Use curly braces {}',
          'No duplicate elements',
          'Support union, intersection, difference',
          'frozenset is immutable set'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'dictionaries',
    title: 'Dictionaries (Key-Value Pairs, Methods, Comprehensions)',
    description: 'Work with dictionaries: key-value pairs, methods, and comprehensions.',
    difficulty: 'Beginner',
    estimatedTime: '12 minutes',
    content: `
# Dictionaries in Python

Dictionaries store key-value pairs.

~~~python
d = {'a': 1, 'b': 2}
print(d['a'])
d['c'] = 3
squares = {x: x*x for x in range(5)}
~~~
    `,
    subtopics: [
      {
        id: 'dict-basics',
        title: 'Dictionary Basics',
        content: `
Dictionaries use keys to access values.
        `,
        keyPoints: [
          'Use curly braces {}',
          'Keys must be unique',
          'Values can be any type'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'dict-methods',
        title: 'Dictionary Methods',
        content: `
Use methods like keys(), values(), items(), get(), pop(), and update().
        `,
        keyPoints: [
          'keys(): Get all keys',
          'values(): Get all values',
          'items(): Get key-value pairs',
          'get(): Safe value access'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'dict-comprehensions',
        title: 'Dictionary Comprehensions',
        content: `
Create new dictionaries using comprehensions.
        `,
        keyPoints: [
          '{key: value for key, value in iterable}',
          'Can include if conditions',
          'More concise than loops'
        ],
        estimatedTime: '3 minutes'
      }
    ]
  },
  {
    id: 'nested-data-structures',
    title: 'Nested Data Structures (Lists of Dicts, etc.)',
    description: 'Work with nested data structures like lists of dictionaries.',
    difficulty: 'Intermediate',
    estimatedTime: '8 minutes',
    content: `
# Nested Data Structures

You can nest lists, dictionaries, and other structures.

~~~python
people = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25}
]
print(people[0]['name'])
~~~
    `,
    subtopics: [
      {
        id: 'nested-basics',
        title: 'Nested Structures Basics',
        content: `
Combine lists, dictionaries, and other structures for complex data.
        `,
        keyPoints: [
          'Lists of dictionaries',
          'Dictionaries of lists',
          'Access with multiple indices/keys'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'enumerate-zip',
    title: 'Enumerate & Zip',
    description: 'Use enumerate() and zip() for advanced iteration patterns.',
    difficulty: 'Intermediate',
    estimatedTime: '8 minutes',
    content: `
# Enumerate & Zip

enumerate() gives index and value, zip() combines iterables.

~~~python
for idx, val in enumerate(['a', 'b', 'c']):
    print(idx, val)

for a, b in zip([1, 2], ['x', 'y']):
    print(a, b)
~~~
    `,
    subtopics: [
      {
        id: 'enumerate-basics',
        title: 'Enumerate',
        content: `
Use enumerate() to get index and value in a loop.
        `,
        keyPoints: [
          'enumerate(iterable)',
          'Returns (index, value) pairs',
          'Common in for loops'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'zip-basics',
        title: 'Zip',
        content: `
Use zip() to combine multiple iterables.
        `,
        keyPoints: [
          'zip(iter1, iter2, ...)',
          'Pairs elements by position',
          'Stops at shortest iterable'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'iterables-iterators-generators',
    title: 'Iterables vs Iterators vs Generators (Intro)',
    description: 'Understand the difference between iterables, iterators, and generators in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Iterables vs Iterators vs Generators

- Iterable: An object you can loop over (e.g., list, string)
- Iterator: An object with __next__() and __iter__() methods
- Generator: A function that yields values one at a time

~~~python
def my_gen():
    yield 1
    yield 2
for val in my_gen():
    print(val)
~~~
    `,
    subtopics: [
      {
        id: 'iterables-intro',
        title: 'Iterables, Iterators, Generators',
        content: `
Learn the difference between iterables, iterators, and generators.
        `,
        keyPoints: [
          'Iterable: Can be looped over',
          'Iterator: Has __next__() and __iter__()',
          'Generator: Uses yield to produce values'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  }
]; 