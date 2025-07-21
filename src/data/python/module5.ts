import { Topic } from '../../types';

export const pythonModule5Topics: Topic[] = [
  {
    id: 'file-handling',
    title: 'File Handling (open, with, Reading & Writing Files)',
    description: 'Learn how to read from and write to files in Python using open() and with statements.',
    difficulty: 'Beginner',
    estimatedTime: '12 minutes',
    content: `
# File Handling

Use open() to work with files. Use with for automatic resource management.

~~~python
with open('example.txt', 'w') as f:
    f.write('Hello, world!')

with open('example.txt', 'r') as f:
    content = f.read()
    print(content)
~~~
    `,
    subtopics: [
      {
        id: 'open-with',
        title: 'open() and with Statement',
        content: `
Use open() to open files and with to ensure files are closed automatically.
        `,
        keyPoints: [
          'open(filename, mode)',
          'with handles closing',
          'Modes: r, w, a, b, +'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'reading-writing',
        title: 'Reading & Writing Files',
        content: `
Read with read(), readline(), readlines(). Write with write(), writelines().
        `,
        keyPoints: [
          'read(), readline(), readlines()',
          'write(), writelines()',
          'Always close files (with does this)'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'json-csv-pickle',
    title: 'JSON, CSV, and Pickle Files',
    description: 'Work with structured data using JSON, CSV, and Pickle modules.',
    difficulty: 'Intermediate',
    estimatedTime: '14 minutes',
    content: `
# JSON, CSV, and Pickle Files

Use built-in modules to read and write structured data.

~~~python
import json, csv, pickle
# JSON
with open('data.json', 'w') as f:
    json.dump({'a': 1}, f)
# CSV
with open('data.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['a', 'b'])
# Pickle
with open('data.pkl', 'wb') as f:
    pickle.dump([1,2,3], f)
~~~
    `,
    subtopics: [
      {
        id: 'json-files',
        title: 'JSON Files',
        content: `
Use json.dump() and json.load() for JSON serialization.
        `,
        keyPoints: [
          'json.dump(), json.load()',
          'Text-based, human-readable',
          'Common for APIs and configs'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'csv-files',
        title: 'CSV Files',
        content: `
Use csv.writer() and csv.reader() for CSV files.
        `,
        keyPoints: [
          'csv.writer(), csv.reader()',
          'Comma-separated values',
          'Good for spreadsheets'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'pickle-files',
        title: 'Pickle Files',
        content: `
Use pickle.dump() and pickle.load() for binary serialization.
        `,
        keyPoints: [
          'pickle.dump(), pickle.load()',
          'Binary format',
          'Python-specific objects'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'exception-handling',
    title: 'Exception Handling (try, except, finally, Custom Exceptions)',
    description: 'Handle errors gracefully using try, except, finally, and custom exceptions.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# Exception Handling

Use try, except, and finally to handle errors. Define custom exceptions for special cases.

~~~python
try:
    x = 1 / 0
except ZeroDivisionError as e:
    print('Error:', e)
finally:
    print('Done')

class MyError(Exception):
    pass
~~~
    `,
    subtopics: [
      {
        id: 'try-except-finally',
        title: 'try, except, finally',
        content: `
Handle exceptions and clean up resources.
        `,
        keyPoints: [
          'try: code that may fail',
          'except: handle error',
          'finally: always runs'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'custom-exceptions',
        title: 'Custom Exceptions',
        content: `
Define your own exception classes for special error cases.
        `,
        keyPoints: [
          'Subclass Exception',
          'Raise with raise MyError()',
          'Add custom logic if needed'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'logging',
    title: 'Logging with logging Module',
    description: 'Use the logging module to record messages and errors.',
    difficulty: 'Intermediate',
    estimatedTime: '8 minutes',
    content: `
# Logging

The logging module provides flexible logging for your programs.

~~~python
import logging
logging.basicConfig(level=logging.INFO)
logging.info('This is an info message')
logging.error('This is an error message')
~~~
    `,
    subtopics: [
      {
        id: 'logging-basics',
        title: 'Logging Basics',
        content: `
Use logging for info, warning, error, and debug messages.
        `,
        keyPoints: [
          'logging.info(), logging.error()',
          'Set level with basicConfig',
          'Better than print() for production'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'custom-modules',
    title: 'Creating and Importing Custom Modules',
    description: 'Organize your code into reusable modules and import them.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Creating and Importing Custom Modules

Save Python code in .py files and import them as modules.

~~~python
# mymodule.py
def greet():
    print('Hello!')

# main.py
import mymodule
mymodule.greet()
~~~
    `,
    subtopics: [
      {
        id: 'importing-modules',
        title: 'Importing Modules',
        content: `
Use import, from ... import, and as to bring in modules.
        `,
        keyPoints: [
          'import module',
          'from module import name',
          'import ... as alias'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'name-main',
    title: 'Understanding __name__ == "__main__"',
    description: 'Learn why and how to use the __name__ == "__main__" idiom.',
    difficulty: 'Intermediate',
    estimatedTime: '8 minutes',
    content: `
# Understanding __name__ == "__main__"

This idiom lets you write code that can be run as a script or imported as a module.

~~~python
def main():
    print('Running as a script')

if __name__ == "__main__":
    main()
~~~
    `,
    subtopics: [
      {
        id: 'main-idiom',
        title: '__name__ == "__main__"',
        content: `
This idiom checks if the file is being run directly or imported.
        `,
        keyPoints: [
          'Direct run: __name__ == "__main__"',
          'Imported: __name__ is module name',
          'Good for reusable scripts'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'venv-basics',
    title: 'Virtual Environments & venv Basics',
    description: 'Isolate your Python projects using virtual environments and venv.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Virtual Environments & venv

venv lets you create isolated Python environments for projects.

~~~python
python -m venv myenv
source myenv/bin/activate  # On Windows: myenv\Scripts\activate
pip install requests
~~~
    `,
    subtopics: [
      {
        id: 'venv-usage',
        title: 'Using venv',
        content: `
Create and activate virtual environments for project isolation.
        `,
        keyPoints: [
          'python -m venv myenv',
          'Activate with source or Scripts/activate',
          'Install packages inside the venv'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 