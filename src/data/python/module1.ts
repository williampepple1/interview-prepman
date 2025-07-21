import { Topic } from '../../types';

export const pythonModule1Topics: Topic[] = [
  {
    id: 'intro-to-python',
    title: 'What is Python? History, Uses, and Advantages',
    description: 'Learn about Python’s origins, its widespread uses, and why it’s a top choice for developers.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# What is Python?

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python has become one of the most popular languages in the world.

## History
- Developed in the late 1980s, released in 1991
- Named after the comedy group Monty Python

## Uses
- Web development
- Data science and machine learning
- Automation and scripting
- Game development
- Desktop applications

## Advantages
- Easy to learn and use
- Large standard library
- Cross-platform compatibility
- Strong community support
    `,
    subtopics: [
      {
        id: 'python-history',
        title: 'Python History & Evolution',
        content: `
Python was created by Guido van Rossum in the late 1980s and released in 1991. It was designed to emphasize code readability and simplicity. Over the years, Python has evolved with major versions (Python 2, Python 3) and is now widely used in various domains.
        `,
        keyPoints: [
          'Created by Guido van Rossum',
          'First released in 1991',
          'Named after Monty Python',
          'Major versions: Python 2 and Python 3'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-uses',
        title: 'Common Uses of Python',
        content: `
Python is used in web development, data science, automation, scripting, game development, and more. Its versatility and large ecosystem make it suitable for beginners and professionals alike.
        `,
        keyPoints: [
          'Web development (Django, Flask)',
          'Data science (pandas, NumPy, scikit-learn)',
          'Automation and scripting',
          'Game development (Pygame)'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'python-basics',
    title: 'Python Basics: Variables, Data Types, and Operators',
    description: 'Learn the fundamental concepts of Python, including variables, data types, and operators.',
    difficulty: 'Beginner',
    estimatedTime: '15 minutes',
    content: `
# Python Basics

## Variables
- Variables are used to store data
- Can be assigned using '='
- Example: "x = 5"

## Data Types
- "int": Integer (whole numbers)
- "float": Floating-point numbers (with decimal)
- "str": String (text)
- "bool": Boolean (True or False)

## Operators
- Arithmetic: '+', '-', '*', '/', '%'
- Assignment: '=', '+=', '-=', '*=', '/='
- Comparison: '==', '!=', '>', '<', '>=', '<='
- Logical: 'and', 'or', 'not'
    `,
    subtopics: [
      {
        id: 'python-variables',
        title: 'Python Variables',
        content: `
Variables are used to store data in Python. They can be assigned using the '=' operator.
        `,
        keyPoints: [
          'Variables are used to store data',
          "Can be assigned using '='",
          "Example: x = 5"
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-data-types',
        title: 'Python Data Types',
        content: `
Python has several built-in data types.
        `,
        keyPoints: [
          'int: Integer (whole numbers)',
          'float: Floating-point numbers (with decimal)',
          'str: String (text)',
          'bool: Boolean (True or False)'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-operators',
        title: 'Python Operators',
        content: `
Operators are used to perform operations on variables and values.
        `,
        keyPoints: [
          "Arithmetic: '+', '-', '*', '/', '%'",
          "Assignment: '=', '+=', '-=', '*=', '/='",
          "Comparison: '==', '!=', '>', '<', '>=', '<='",
          "Logical: 'and', 'or', 'not'"
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'python-control-flow',
    title: 'Python Control Flow: If Statements, Loops, and Functions',
    description: 'Learn about conditional statements, loops, and functions in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '20 minutes',
    content: `
# Python Control Flow

## If Statements
- Used to make decisions
- Syntax:
~~~python
if condition:
    # code to execute if condition is true
elif condition:
    # code to execute if condition is true
else:
    # code to execute if condition is false
~~~

## Loops
- 'for' loop: Iterates over a sequence (list, tuple, string)
- 'while' loop: Repeats a block of code while a condition is true

## Functions
- Used to group code
- Syntax:
~~~python
def function_name(parameters):
    # code to execute
    return value
~~~
    `,
    subtopics: [
      {
        id: 'python-if-statements',
        title: 'Python If Statements',
        content: `
If statements are used to make decisions in Python.
        `,
        keyPoints: [
          'Used to make decisions',
          'Syntax: `if condition: ... elif condition: ... else: ...`'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-loops',
        title: 'Python Loops',
        content: `
Loops are used to repeat a block of code.
        `,
        keyPoints: [
          '\'for\' loop: Iterates over a sequence (list, tuple, string)',
          '\'while\' loop: Repeats a block of code while a condition is true'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-functions',
        title: 'Python Functions',
        content: `
Functions are used to group code.
        `,
        keyPoints: [
          'Used to group code',
          'Syntax: `def function_name(parameters): ... return value`'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'python-data-structures',
    title: 'Python Data Structures: Lists, Tuples, and Dictionaries',
    description: 'Learn about the fundamental data structures in Python, including lists, tuples, and dictionaries.',
    difficulty: 'Intermediate',
    estimatedTime: '25 minutes',
    content: `
# Python Data Structures

## Lists
- Ordered collection of items
- Can contain different data types
- Mutable (can be changed)
- Syntax: 'my_list = [1, 2, 3]'

## Tuples
- Ordered collection of items
- Immutable (cannot be changed)
- Syntax: 'my_tuple = (1, 2, 3)'

## Dictionaries
- Key-value pairs
- Mutable (can be changed)
- Syntax: 'my_dict = {"name": "John", "age": 25}'
    `,
    subtopics: [
      {
        id: 'python-lists',
        title: 'Python Lists',
        content: `
Lists are ordered collections of items.
        `,
        keyPoints: [
          'Ordered collection of items',
          'Can contain different data types',
          'Mutable (can be changed)'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-tuples',
        title: 'Python Tuples',
        content: `
Tuples are ordered collections of items.
        `,
        keyPoints: [
          'Ordered collection of items',
          'Immutable (cannot be changed)'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-dictionaries',
        title: 'Python Dictionaries',
        content: `
Dictionaries are key-value pairs.
        `,
        keyPoints: [
          'Key-value pairs',
          'Mutable (can be changed)'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'python-error-handling',
    title: 'Python Error Handling: Try, Except, and Finally',
    description: 'Learn about error handling in Python using try, except, and finally blocks.',
    difficulty: 'Intermediate',
    estimatedTime: '15 minutes',
    content: `
# Python Error Handling

## Try, Except, and Finally
- 'try': Block of code to execute
- 'except': Handles errors
- 'finally': Always executed

## Common Exceptions
- 'NameError': Name not found
- 'TypeError': Operation or function not supported for the given types
- 'ValueError': Value is not of the expected type
- 'IndexError': Index out of range
- 'KeyError': Key not found in dictionary
    `,
    subtopics: [
      {
        id: 'python-try-except-finally',
        title: 'Python Try, Except, and Finally',
        content: `
Try, except, and finally blocks are used for error handling in Python.
        `,
        keyPoints: [
          '\'try\': Block of code to execute',
          '\'except\': Handles errors',
          '\'finally\': Always executed'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-common-exceptions',
        title: 'Common Exceptions',
        content: `
Common exceptions in Python.
        `,
        keyPoints: [
          '\'NameError\': Name not found',
          '\'TypeError\': Operation or function not supported for the given types',
          '\'ValueError\': Value is not of the expected type',
          '\'IndexError\': Index out of range',
          '\'KeyError\': Key not found in dictionary'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'python-file-handling',
    title: 'Python File Handling: Reading and Writing Files',
    description: 'Learn about reading and writing files in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '20 minutes',
    content: `
# Python File Handling

## Reading Files
- 'open()': Opens a file
- 'read()': Reads the entire file
- 'readline()': Reads one line at a time
- 'readlines()': Reads all lines into a list

## Writing Files
- 'open()': Opens a file
- 'write()': Writes to the file
- 'writelines()': Writes a list of strings to the file

## Modes
- 'r': Read
- 'w': Write (overwrites existing content)
- 'a': Append (adds to the end)
- 'r+': Read and write
    `,
    subtopics: [
      {
        id: 'python-reading-files',
        title: 'Python Reading Files',
        content: `
Reading files in Python.
        `,
        keyPoints: [
          '\'open()\': Opens a file',
          '\'read()\': Reads the entire file',
          '\'readline()\': Reads one line at a time',
          '\'readlines()\': Reads all lines into a list'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-writing-files',
        title: 'Python Writing Files',
        content: `
Writing files in Python.
        `,
        keyPoints: [
          '\'open()\': Opens a file',
          '\'write()\': Writes to the file',
          '\'writelines()\': Writes a list of strings to the file'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-modes',
        title: 'Python Modes',
        content: `
Modes for opening files.
        `,
        keyPoints: [
          '\'r\': Read',
          '\'w\': Write (overwrites existing content)',
          '\'a\': Append (adds to the end)',
          '\'r+\': Read and write'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'python-modules-and-packages',
    title: 'Python Modules and Packages: Importing and Using',
    description: 'Learn about importing and using modules and packages in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '25 minutes',
    content: `
# Python Modules and Packages

## Importing
- 'import': Imports a module
- 'from ... import': Imports specific functions/classes from a module
- 'as': Renames a module

## Using
- 'module_name.function_name()': Calls a function from a module
- 'from module_name import function_name': Calls a function directly
- 'module_name.class_name()': Creates an instance of a class from a module
    `,
    subtopics: [
      {
        id: 'python-importing',
        title: 'Python Importing',
        content: `
Importing modules in Python.
        `,
        keyPoints: [
          '\'import\': Imports a module',
          '\'from ... import\': Imports specific functions/classes from a module',
          '\'as\': Renames a module'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-using',
        title: 'Python Using',
        content: `
Using modules and packages in Python.
        `,
        keyPoints: [
          '\'module_name.function_name()\': Calls a function from a module',
          '\'from module_name import function_name\': Calls a function directly',
          '\'module_name.class_name()\': Creates an instance of a class from a module'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'python-object-oriented-programming',
    title: 'Python Object-Oriented Programming: Classes and Objects',
    description: 'Learn about classes and objects in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '20 minutes',
    content: `
# Python Object-Oriented Programming

## Classes
- Blueprint for creating objects
- Contains attributes and methods
- Syntax:
~~~python
class MyClass:
    # attributes
    # methods
~~~

## Objects
- Instance of a class
- Can access attributes and methods
- Syntax:
~~~python
my_object = MyClass()
my_object.attribute
my_object.method()
~~~
    `,
    subtopics: [
      {
        id: 'python-classes',
        title: 'Python Classes',
        content: `
Classes are blueprints for creating objects.
        `,
        keyPoints: [
          'Blueprint for creating objects',
          'Contains attributes and methods',
          'Syntax: `class MyClass: ...`'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'python-objects',
        title: 'Python Objects',
        content: `
Objects are instances of a class.
        `,
        keyPoints: [
          'Instance of a class',
          'Can access attributes and methods',
          'Syntax: `my_object = MyClass() ...`'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
];