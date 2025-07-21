import { Topic } from '../../types';

export const pythonModule7Topics: Topic[] = [
  {
    id: 'iterators-generators',
    title: 'Iterators & Generators (Lazy Evaluation)',
    description: 'Understand iterators and generators for efficient, lazy evaluation in Python.',
    difficulty: 'Advanced',
    estimatedTime: '12 minutes',
    content: `
# Iterators & Generators

Iterators allow you to traverse data. Generators produce items lazily.

~~~python
nums = [1, 2, 3]
iter_nums = iter(nums)
print(next(iter_nums))

def gen():
    yield 1
    yield 2
for x in gen():
    print(x)
~~~
    `,
    subtopics: [
      {
        id: 'iterator-basics',
        title: 'Iterator Basics',
        content: `
Use iter() and next() to traverse iterables.
        `,
        keyPoints: [
          'iter() gets an iterator',
          'next() gets next item',
          'StopIteration signals end'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'generator-basics',
        title: 'Generator Basics',
        content: `
Use yield to create generators for lazy evaluation.
        `,
        keyPoints: [
          'yield produces values one at a time',
          'Generators save memory',
          'Can use generator expressions'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'decorators',
    title: 'Decorators (Function & Class-based)',
    description: 'Use decorators to modify function and class behavior.',
    difficulty: 'Advanced',
    estimatedTime: '12 minutes',
    content: `
# Decorators

Decorators wrap functions or classes to add behavior.

~~~python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print('Before')
        result = func(*args, **kwargs)
        print('After')
        return result
    return wrapper

@my_decorator
def greet():
    print('Hello!')
~~~
    `,
    subtopics: [
      {
        id: 'function-decorators',
        title: 'Function Decorators',
        content: `
Wrap functions to add pre/post-processing.
        `,
        keyPoints: [
          'Use @decorator syntax',
          'Can be stacked',
          'Common for logging, timing, access control'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'class-decorators',
        title: 'Class-based Decorators',
        content: `
Use classes with __call__ for advanced decorators.
        `,
        keyPoints: [
          'Define __call__ method',
          'Can maintain state',
          'Useful for complex logic'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'context-managers',
    title: 'Context Managers (with, Custom Context Managers, contextlib)',
    description: 'Manage resources with context managers and the with statement.',
    difficulty: 'Advanced',
    estimatedTime: '12 minutes',
    content: `
# Context Managers

Context managers handle setup and cleanup automatically.

~~~python
with open('file.txt') as f:
    data = f.read()

class MyCtx:
    def __enter__(self):
        print('Enter')
    def __exit__(self, exc_type, exc_val, exc_tb):
        print('Exit')

from contextlib import contextmanager
@contextmanager
def my_cm():
    print('Start')
    yield
    print('End')
~~~
    `,
    subtopics: [
      {
        id: 'with-statement',
        title: 'with Statement',
        content: `
Use with to manage resources safely.
        `,
        keyPoints: [
          'with handles __enter__ and __exit__',
          'Prevents resource leaks',
          'Common for files, locks, DB connections'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'custom-context',
        title: 'Custom Context Managers',
        content: `
Create custom context managers with classes or contextlib.
        `,
        keyPoints: [
          'Define __enter__ and __exit__',
          'Use @contextmanager for simpler syntax',
          'Great for resource management'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'args-kwargs',
    title: '*args vs **kwargs Deep Dive',
    description: 'Master advanced usage of *args and **kwargs in Python functions.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# *args vs **kwargs Deep Dive

*args collects positional arguments, **kwargs collects keyword arguments.

~~~python
def foo(*args, **kwargs):
    print(args, kwargs)
foo(1, 2, a=3, b=4)
~~~
    `,
    subtopics: [
      {
        id: 'args-kwargs-usage',
        title: 'Advanced Usage',
        content: `
Unpack and forward arguments flexibly.
        `,
        keyPoints: [
          '*args is a tuple',
          '**kwargs is a dict',
          'Can unpack with * and **'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'closures-scopes',
    title: 'Closures & Scopes (LEGB Rule)',
    description: 'Understand closures and the LEGB rule for variable scope.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# Closures & Scopes (LEGB Rule)

Closures capture variables from enclosing scopes. LEGB: Local, Enclosing, Global, Built-in.

~~~python
def outer():
    x = 'enclosing'
    def inner():
        print(x)
    return inner
f = outer()
f()
~~~
    `,
    subtopics: [
      {
        id: 'legb-rule',
        title: 'LEGB Rule',
        content: `
Python resolves variables in Local, Enclosing, Global, Built-in order.
        `,
        keyPoints: [
          'Local: inside function',
          'Enclosing: outer function',
          'Global: module level',
          'Built-in: Python builtins'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'functools',
    title: 'The functools Module (partial, lru_cache)',
    description: 'Use functools for advanced function manipulation and caching.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# functools Module

functools provides tools for higher-order functions and caching.

~~~python
from functools import partial, lru_cache

def add(x, y):
    return x + y
add5 = partial(add, 5)
print(add5(10))

@lru_cache(maxsize=32)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)
~~~
    `,
    subtopics: [
      {
        id: 'partial-lru-cache',
        title: 'partial, lru_cache',
        content: `
Use partial to fix arguments, lru_cache to cache results.
        `,
        keyPoints: [
          'partial creates new functions',
          'lru_cache caches function results',
          'Improves performance'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'itertools',
    title: 'The itertools Module (Combinatorics, Infinite Iterators)',
    description: 'Use itertools for combinatorics and efficient looping.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# itertools Module

itertools provides tools for efficient looping and combinatorics.

~~~python
import itertools
for x in itertools.permutations([1,2,3]):
    print(x)
for i in itertools.count(10):
    if i > 12:
        break
    print(i)
~~~
    `,
    subtopics: [
      {
        id: 'combinatorics-infinite',
        title: 'Combinatorics & Infinite Iterators',
        content: `
Use permutations, combinations, count, cycle, repeat, etc.
        `,
        keyPoints: [
          'permutations, combinations for combinatorics',
          'count, cycle, repeat for infinite sequences',
          'chain, groupby for advanced iteration'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'metaclasses',
    title: 'Metaclasses (Basics)',
    description: 'Learn the basics of metaclasses for advanced class creation.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# Metaclasses (Basics)

Metaclasses control class creation. Use type or inherit from type.

~~~python
class MyMeta(type):
    def __new__(cls, name, bases, dct):
        print('Creating', name)
        return super().__new__(cls, name, bases, dct)
class MyClass(metaclass=MyMeta):
    pass
~~~
    `,
    subtopics: [
      {
        id: 'metaclass-basics',
        title: 'Metaclass Basics',
        content: `
Metaclasses customize class creation and behavior.
        `,
        keyPoints: [
          'Inherit from type',
          'Override __new__ or __init__',
          'Used for frameworks, ORMs, APIs'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'dynamic-code',
    title: 'Dynamic Code Execution (eval, exec, AST)',
    description: 'Execute and analyze code dynamically with eval, exec, and the ast module.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# Dynamic Code Execution

Use eval, exec, and ast for dynamic code execution and analysis.

~~~python
code = 'print(2 + 2)'
eval('2 + 2')
exec(code)
import ast
tree = ast.parse('x = 42')
print(ast.dump(tree))
~~~
    `,
    subtopics: [
      {
        id: 'eval-exec-ast',
        title: 'eval, exec, AST',
        content: `
Evaluate and execute code at runtime, analyze with ast.
        `,
        keyPoints: [
          'eval evaluates expressions',
          'exec executes statements',
          'ast parses and analyzes code'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 