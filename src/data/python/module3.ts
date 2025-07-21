import { Topic } from '../../types';

export const pythonModule3Topics: Topic[] = [
  {
    id: 'defining-calling-functions',
    title: 'Defining and Calling Functions',
    description: 'Learn how to define and call functions in Python, including syntax and best practices.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# Defining and Calling Functions

Functions help you organize code into reusable blocks.

~~~python
def greet(name):
    print(f"Hello, {name}!")

greet('Alice')
~~~
    `,
    subtopics: [
      {
        id: 'function-basics',
        title: 'Function Basics',
        content: `
Define a function using 'def', provide a name, parameters, and a body.
        `,
        keyPoints: [
          "Use 'def' to define a function",
          'Functions can take parameters',
          'Use () to call a function',
          'Indentation defines the function body'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'parameters-arguments',
    title: 'Parameters & Arguments (Positional, Keyword, Default, Variadic *args/**kwargs)',
    description: 'Understand different types of function parameters and arguments in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '15 minutes',
    content: `
# Parameters & Arguments

Python supports positional, keyword, default, and variadic arguments.

~~~python
def add(a, b=0):
    return a + b

def print_args(*args, **kwargs):
    print(args, kwargs)
~~~
    `,
    subtopics: [
      {
        id: 'positional-keyword-default',
        title: 'Positional, Keyword, and Default Arguments',
        content: `
Pass arguments by position, by name, or use default values.
        `,
        keyPoints: [
          'Positional: order matters',
          'Keyword: specify by name',
          'Default: provide fallback values'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'variadic-args-kwargs',
        title: 'Variadic Arguments (*args, **kwargs)',
        content: `
Use *args for variable positional arguments and **kwargs for variable keyword arguments.
        `,
        keyPoints: [
          '*args: tuple of extra positional args',
          '**kwargs: dict of extra keyword args',
          'Useful for flexible APIs'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'return-scope',
    title: 'Return Values and Scope (Local, Global, nonlocal)',
    description: 'Learn about return values and variable scope in Python functions.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# Return Values and Scope

Functions can return values. Scope determines variable visibility.

~~~python
def square(x):
    return x * x

x = 10  # global

def foo():
    y = 5  # local
    return x + y
~~~
    `,
    subtopics: [
      {
        id: 'return-values',
        title: 'Return Values',
        content: `
Use 'return' to send a value back from a function.
        `,
        keyPoints: [
          "'return' ends function execution",
          'Can return any type',
          'No return = None'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'scope',
        title: 'Scope: Local, Global, nonlocal',
        content: `
Variables can be local, global, or nonlocal.
        `,
        keyPoints: [
          'Local: inside function',
          'Global: outside all functions',
          'nonlocal: in enclosing function scope'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'lambda-functions',
    title: 'Anonymous Functions (lambda)',
    description: 'Use lambda expressions to create small anonymous functions.',
    difficulty: 'Intermediate',
    estimatedTime: '8 minutes',
    content: `
# Anonymous Functions (lambda)

Lambda functions are small, unnamed functions.

~~~python
square = lambda x: x * x
print(square(5))
~~~
    `,
    subtopics: [
      {
        id: 'lambda-basics',
        title: 'Lambda Basics',
        content: `
Use 'lambda' to create quick, anonymous functions.
        `,
        keyPoints: [
          'lambda args: expression',
          'Can be used wherever a function is needed',
          'Limited to single expressions'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'higher-order-functions',
    title: 'Higher-Order Functions (map, filter, reduce)',
    description: 'Explore higher-order functions that take other functions as arguments.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# Higher-Order Functions

Functions like map, filter, and reduce operate on sequences.

~~~python
nums = [1, 2, 3, 4]
squares = list(map(lambda x: x*x, nums))
evens = list(filter(lambda x: x%2==0, nums))
from functools import reduce
product = reduce(lambda x, y: x*y, nums)
~~~
    `,
    subtopics: [
      {
        id: 'map-filter-reduce',
        title: 'map, filter, reduce',
        content: `
Use map, filter, and reduce for functional programming patterns.
        `,
        keyPoints: [
          'map: apply function to all items',
          'filter: select items by condition',
          'reduce: combine items cumulatively'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'advanced-comprehensions',
    title: 'List, Dict, and Set Comprehensions (Advanced Patterns)',
    description: 'Master advanced comprehension patterns for lists, dicts, and sets.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Advanced Comprehensions

Comprehensions can include conditions and nested loops.

~~~python
matrix = [[1,2,3],[4,5,6]]
flat = [num for row in matrix for num in row]
even_squares = {x: x*x for x in range(10) if x%2==0}
unique_lengths = {len(word) for word in ['hi', 'hello', 'world']}
~~~
    `,
    subtopics: [
      {
        id: 'comprehension-patterns',
        title: 'Comprehension Patterns',
        content: `
Use comprehensions for concise, expressive code.
        `,
        keyPoints: [
          'List, dict, set comprehensions',
          'Can use conditions and nesting',
          'More readable and efficient'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'closures-decorators',
    title: 'Closures and Decorators (Intro)',
    description: 'Get introduced to closures and decorators in Python.',
    difficulty: 'Advanced',
    estimatedTime: '12 minutes',
    content: `
# Closures and Decorators (Intro)

Closures are functions that remember values from enclosing scopes. Decorators modify function behavior.

~~~python
def outer(x):
    def inner(y):
        return x + y
    return inner

def my_decorator(func):
    def wrapper(*args, **kwargs):
        print('Before')
        result = func(*args, **kwargs)
        print('After')
        return result
    return wrapper
~~~
    `,
    subtopics: [
      {
        id: 'closures-basics',
        title: 'Closures',
        content: `
A closure is a function that captures variables from its enclosing scope.
        `,
        keyPoints: [
          'Inner function remembers outer variables',
          'Useful for callbacks and decorators'
        ],
        estimatedTime: '6 minutes'
      },
      {
        id: 'decorators-basics',
        title: 'Decorators',
        content: `
A decorator is a function that modifies another function.
        `,
        keyPoints: [
          'Takes a function and returns a new function',
          'Often used for logging, timing, access control'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'recursion',
    title: 'Recursion (Examples: Factorial, Fibonacci, Search Algorithms)',
    description: 'Understand recursion and see classic examples in Python.',
    difficulty: 'Advanced',
    estimatedTime: '15 minutes',
    content: `
# Recursion

A function that calls itself to solve a problem.

~~~python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
~~~
    `,
    subtopics: [
      {
        id: 'recursion-basics',
        title: 'Recursion Basics',
        content: `
Recursion solves problems by breaking them into smaller subproblems.
        `,
        keyPoints: [
          'Base case and recursive case',
          'Stack overflow if no base case',
          'Common in search, divide-and-conquer'
        ],
        estimatedTime: '7 minutes'
      }
    ]
  },
  {
    id: 'docstrings-type-hints',
    title: 'Docstrings and Type Hints (PEP 484)',
    description: 'Document your functions and use type hints for clarity and tooling.',
    difficulty: 'Intermediate',
    estimatedTime: '8 minutes',
    content: `
# Docstrings and Type Hints

Use docstrings to describe functions. Type hints improve code clarity.

~~~python
def add(a: int, b: int) -> int:
    """Add two integers and return the result."""
    return a + b
~~~
    `,
    subtopics: [
      {
        id: 'docstrings',
        title: 'Docstrings',
        content: `
A docstring is a string literal that documents a function.
        `,
        keyPoints: [
          'Placed as the first statement in a function',
          'Accessible via help() and __doc__',
          'Triple quotes ("""...""")'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'type-hints',
        title: 'Type Hints',
        content: `
Type hints specify expected argument and return types.
        `,
        keyPoints: [
          'Syntax: param: type',
          'Return type: -> type',
          'Helps with static analysis and IDEs'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  }
]; 