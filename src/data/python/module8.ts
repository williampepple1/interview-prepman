import { Topic } from '../../types';

export const pythonModule8Topics: Topic[] = [
  {
    id: 'modules-packages',
    title: 'Understanding Python Modules & Packages',
    description: 'Learn the difference between modules and packages, and how to use them.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# Python Modules & Packages

A module is a .py file. A package is a directory with __init__.py.

~~~python
# mymodule.py
def foo(): pass
# mypackage/__init__.py
# mypackage/module.py
~~~
    `,
    subtopics: [
      {
        id: 'modules-vs-packages',
        title: 'Modules vs Packages',
        content: `
Modules are single files, packages are directories with __init__.py.
        `,
        keyPoints: [
          'Module: single .py file',
          'Package: directory with __init__.py',
          'Import with dot notation'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'pip-venv-requirements',
    title: 'pip, venv, and Requirements Management',
    description: 'Manage packages and environments with pip, venv, and requirements.txt.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# pip, venv, and Requirements

pip installs packages. venv creates isolated environments. requirements.txt lists dependencies.

~~~python
python -m venv venv
source venv/bin/activate
pip install requests
pip freeze > requirements.txt
pip install -r requirements.txt
~~~
    `,
    subtopics: [
      {
        id: 'pip-venv-basics',
        title: 'pip & venv Basics',
        content: `
Use pip to install packages, venv for environments, requirements.txt for dependencies.
        `,
        keyPoints: [
          'pip install/uninstall/list',
          'venv for project isolation',
          'requirements.txt for reproducibility'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'std-lib-os-sys-pathlib',
    title: 'Key Standard Library Modules: os, sys, pathlib',
    description: 'Work with files, directories, and system info using os, sys, and pathlib.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# os, sys, pathlib

Use these modules for file and system operations.

~~~python
import os, sys
print(os.getcwd())
print(sys.path)
from pathlib import Path
p = Path('.')
print(list(p.iterdir()))
~~~
    `,
    subtopics: [
      {
        id: 'os-sys-pathlib',
        title: 'os, sys, pathlib',
        content: `
Use os for file ops, sys for interpreter info, pathlib for modern paths.
        `,
        keyPoints: [
          'os: file/directory ops',
          'sys: Python runtime info',
          'pathlib: object-oriented paths'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'std-lib-datetime-time',
    title: 'Key Standard Library Modules: datetime, time',
    description: 'Work with dates, times, and timestamps.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# datetime, time

Handle dates, times, and timestamps.

~~~python
from datetime import datetime
print(datetime.now())
import time
time.sleep(1)
~~~
    `,
    subtopics: [
      {
        id: 'datetime-time',
        title: 'datetime, time',
        content: `
Use datetime for dates/times, time for timing and delays.
        `,
        keyPoints: [
          'datetime: date/time objects',
          'time: sleep, timestamps',
          'Format/parse with strftime/strptime'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'std-lib-random-math-statistics',
    title: 'Key Standard Library Modules: random, math, statistics',
    description: 'Generate random numbers, do math, and statistics.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# random, math, statistics

Use these modules for randomness, math, and stats.

~~~python
import random, math, statistics
print(random.randint(1, 10))
print(math.sqrt(16))
print(statistics.mean([1,2,3]))
~~~
    `,
    subtopics: [
      {
        id: 'random-math-statistics',
        title: 'random, math, statistics',
        content: `
random for randomness, math for math, statistics for stats.
        `,
        keyPoints: [
          'random: random numbers',
          'math: math functions',
          'statistics: mean, median, stdev'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'std-lib-collections',
    title: 'Key Standard Library Modules: collections (Counter, defaultdict, namedtuple, deque)',
    description: 'Use advanced data structures from collections.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# collections

collections provides useful data structures.

~~~python
from collections import Counter, defaultdict, namedtuple, deque
c = Counter('aabbcc')
d = defaultdict(int)
Point = namedtuple('Point', 'x y')
q = deque([1,2,3])
~~~
    `,
    subtopics: [
      {
        id: 'collections-usage',
        title: 'Counter, defaultdict, namedtuple, deque',
        content: `
Use Counter for counting, defaultdict for default values, namedtuple for lightweight objects, deque for fast queues.
        `,
        keyPoints: [
          'Counter: counts items',
          'defaultdict: default values',
          'namedtuple: tuple with names',
          'deque: fast appends/pops'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'std-lib-shutil-subprocess',
    title: 'Key Standard Library Modules: shutil & subprocess',
    description: 'Copy/move files and run subprocesses.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# shutil & subprocess

shutil copies/moves files. subprocess runs external commands.

~~~python
import shutil, subprocess
shutil.copy('a.txt', 'b.txt')
subprocess.run(['ls', '-l'])
~~~
    `,
    subtopics: [
      {
        id: 'shutil-subprocess',
        title: 'shutil & subprocess',
        content: `
shutil for file ops, subprocess for running commands.
        `,
        keyPoints: [
          'shutil: copy, move, rmtree',
          'subprocess: run, Popen',
          'Use for automation, scripting'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'creating-package',
    title: 'Creating Your Own Package (with __init__.py)',
    description: 'Organize your code into packages with __init__.py.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Creating Your Own Package

A package is a directory with __init__.py. Place modules inside.

~~~python
# mypackage/__init__.py
# mypackage/module1.py
# mypackage/module2.py
~~~
    `,
    subtopics: [
      {
        id: 'init-py',
        title: '__init__.py',
        content: `
__init__.py marks a directory as a package.
        `,
        keyPoints: [
          'Required for packages (pre-Python 3.3)',
          'Can run package-level code',
          'Enables relative imports'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 