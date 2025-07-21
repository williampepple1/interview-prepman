import { Topic } from '../../types';

export const pythonModule9Topics: Topic[] = [
  {
    id: 'gil',
    title: 'The GIL (Global Interpreter Lock)',
    description: 'Understand the Global Interpreter Lock and its impact on Python concurrency.',
    difficulty: 'Advanced',
    estimatedTime: '8 minutes',
    content: `
# The GIL (Global Interpreter Lock)

The GIL allows only one thread to execute Python bytecode at a time.

- Affects CPython (the standard Python implementation)
- Limits true parallelism in threads
- Does not affect multiprocessing or I/O-bound threads
    `,
    subtopics: [
      {
        id: 'gil-basics',
        title: 'GIL Basics',
        content: `
The GIL prevents multiple native threads from executing Python code at once.
        `,
        keyPoints: [
          'One thread runs at a time in CPython',
          'Impacts CPU-bound multithreading',
          'No effect on multiprocessing or I/O-bound tasks'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'multithreading-vs-multiprocessing',
    title: 'Multithreading vs Multiprocessing',
    description: 'Compare multithreading and multiprocessing in Python.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# Multithreading vs Multiprocessing

- Multithreading: Multiple threads in one process
- Multiprocessing: Multiple processes, each with its own Python interpreter

Use threads for I/O-bound, processes for CPU-bound tasks.
    `,
    subtopics: [
      {
        id: 'threading-vs-processing',
        title: 'Threading vs Processing',
        content: `
Threads share memory, processes do not.
        `,
        keyPoints: [
          'Threads: shared memory, lightweight',
          'Processes: separate memory, true parallelism',
          'Multiprocessing bypasses the GIL'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'threading-module',
    title: 'threading Module Basics',
    description: 'Use the threading module for concurrent execution.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# threading Module Basics

Create and manage threads with the threading module.

~~~python
import threading
def worker():
    print('Working')
t = threading.Thread(target=worker)
t.start()
t.join()
~~~
    `,
    subtopics: [
      {
        id: 'threading-basics',
        title: 'Threading Basics',
        content: `
Start, join, and manage threads.
        `,
        keyPoints: [
          'Thread(target=func)',
          'start(), join()',
          'Use for I/O-bound concurrency'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'multiprocessing-module',
    title: 'multiprocessing Module (Pools, Queues)',
    description: 'Use the multiprocessing module for parallel execution.',
    difficulty: 'Advanced',
    estimatedTime: '12 minutes',
    content: `
# multiprocessing Module

Run code in parallel using processes.

~~~python
from multiprocessing import Pool, Queue
with Pool(4) as p:
    print(p.map(pow, [1,2,3], [2,2,2]))
q = Queue()
q.put('hello')
print(q.get())
~~~
    `,
    subtopics: [
      {
        id: 'multiprocessing-basics',
        title: 'Multiprocessing Basics',
        content: `
Use Pool for parallel tasks, Queue for inter-process communication.
        `,
        keyPoints: [
          'Pool for parallel map',
          'Queue for data exchange',
          'Bypasses the GIL'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'async-programming',
    title: 'Async Programming (asyncio, await, Event Loop)',
    description: 'Write asynchronous code using asyncio, await, and the event loop.',
    difficulty: 'Advanced',
    estimatedTime: '12 minutes',
    content: `
# Async Programming

Use asyncio for asynchronous I/O and concurrency.

~~~python
import asyncio
async def main():
    print('Hello')
    await asyncio.sleep(1)
    print('World')
asyncio.run(main())
~~~
    `,
    subtopics: [
      {
        id: 'asyncio-basics',
        title: 'asyncio & Event Loop',
        content: `
Use async/await and the event loop for async code.
        `,
        keyPoints: [
          'async def, await',
          'asyncio.run(), asyncio.sleep()',
          'Event loop schedules tasks'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'futures-tasks',
    title: 'Futures & Tasks (concurrent.futures)',
    description: 'Use concurrent.futures for high-level concurrency.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# Futures & Tasks

concurrent.futures provides ThreadPoolExecutor and ProcessPoolExecutor.

~~~python
from concurrent.futures import ThreadPoolExecutor, as_completed
with ThreadPoolExecutor(max_workers=2) as executor:
    futures = [executor.submit(pow, 2, 3), executor.submit(pow, 3, 2)]
    for f in as_completed(futures):
        print(f.result())
~~~
    `,
    subtopics: [
      {
        id: 'futures-tasks-basics',
        title: 'Futures & Tasks Basics',
        content: `
Use ThreadPoolExecutor and ProcessPoolExecutor for easy concurrency.
        `,
        keyPoints: [
          'submit() schedules a task',
          'as_completed() yields finished futures',
          'Works with threads or processes'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 