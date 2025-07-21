import { Topic } from '../../types';

export const pythonModule12Topics: Topic[] = [
  {
    id: 'requests-basics',
    title: 'requests Module Basics',
    description: 'Use the requests library to make HTTP requests in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# requests Module Basics

requests is a popular library for HTTP requests.

~~~python
import requests
response = requests.get('https://api.github.com')
print(response.status_code)
print(response.json())
~~~
    `,
    subtopics: [
      {
        id: 'requests-usage',
        title: 'Using requests',
        content: `
Make GET, POST, PUT, DELETE requests easily.
        `,
        keyPoints: [
          'requests.get(), post(), put(), delete()',
          'response.status_code, .json(), .text',
          'Handle errors with response.raise_for_status()'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'rest-apis',
    title: 'REST APIs (GET, POST, PUT, DELETE)',
    description: 'Interact with RESTful APIs using HTTP methods.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# REST APIs

Use HTTP methods to interact with REST APIs.

- GET: Retrieve data
- POST: Create data
- PUT: Update data
- DELETE: Remove data
    `,
    subtopics: [
      {
        id: 'rest-methods',
        title: 'REST Methods',
        content: `
Use GET, POST, PUT, DELETE for CRUD operations.
        `,
        keyPoints: [
          'GET: fetch data',
          'POST: create data',
          'PUT: update data',
          'DELETE: remove data'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'consuming-apis',
    title: 'Consuming APIs (OpenWeather, GitHub)',
    description: 'Practice consuming real-world APIs like OpenWeather and GitHub.',
    difficulty: 'Intermediate',
    estimatedTime: '14 minutes',
    content: `
# Consuming APIs

Use requests to call public APIs and process responses.

~~~python
import requests
url = 'https://api.github.com/users/octocat'
resp = requests.get(url)
data = resp.json()
print(data['login'])
~~~
    `,
    subtopics: [
      {
        id: 'api-examples',
        title: 'API Examples',
        content: `
Work with APIs like OpenWeather and GitHub.
        `,
        keyPoints: [
          'Read API docs for endpoints',
          'Parse JSON responses',
          'Handle authentication if needed'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'fastapi',
    title: 'Creating APIs with FastAPI',
    description: 'Build your own REST APIs using FastAPI.',
    difficulty: 'Intermediate',
    estimatedTime: '14 minutes',
    content: `
# Creating APIs with FastAPI

FastAPI is a modern web framework for building APIs.

~~~python
from fastapi import FastAPI
app = FastAPI()
@app.get('/')
def read_root():
    return {'Hello': 'World'}
# Run: uvicorn main:app --reload
~~~
    `,
    subtopics: [
      {
        id: 'fastapi-basics',
        title: 'FastAPI Basics',
        content: `
Define endpoints with decorators, return JSON responses.
        `,
        keyPoints: [
          'Install fastapi, uvicorn',
          '@app.get(), @app.post()',
          'Automatic docs at /docs'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'websockets',
    title: 'WebSockets Basics',
    description: 'Understand WebSockets for real-time communication.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# WebSockets Basics

WebSockets enable real-time, two-way communication.

~~~python
import websockets
# Example with websockets library (async)
# See docs: https://websockets.readthedocs.io/
~~~
    `,
    subtopics: [
      {
        id: 'websockets-basics',
        title: 'WebSockets Basics',
        content: `
Use WebSockets for real-time, bidirectional communication.
        `,
        keyPoints: [
          'Persistent connection',
          'Send/receive messages asynchronously',
          'Used in chat, games, live updates'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 