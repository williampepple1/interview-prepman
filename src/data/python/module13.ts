import { Topic } from '../../types';

export const pythonModule13Topics: Topic[] = [
  {
    id: 'flask-basics',
    title: 'Flask Basics (Routes, Templates, Forms)',
    description: 'Learn the basics of web development with Flask: routes, templates, and forms.',
    difficulty: 'Intermediate',
    estimatedTime: '14 minutes',
    content: `
# Flask Basics

Flask is a lightweight web framework for Python.

~~~python
from flask import Flask, render_template, request
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')
@app.route('/submit', methods=['POST'])
def submit():
    data = request.form['data']
    return f"Received: {data}"
# Run: flask run
~~~
    `,
    subtopics: [
      {
        id: 'flask-routes',
        title: 'Routes',
        content: `
Define routes with @app.route and handle requests.
        `,
        keyPoints: [
          '@app.route for URL mapping',
          'GET and POST methods',
          'Use request for form data'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'flask-templates',
        title: 'Templates',
        content: `
Use render_template to render HTML templates.
        `,
        keyPoints: [
          'Templates in templates/ folder',
          'Jinja2 syntax for variables',
          'Pass data to templates'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'flask-forms',
        title: 'Forms',
        content: `
Handle form submissions with request.form.
        `,
        keyPoints: [
          'HTML forms in templates',
          'request.form to access data',
          'Validate and process input'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'django-basics',
    title: 'Django Basics (Models, Views, Templates)',
    description: 'Get started with Django: models, views, and templates.',
    difficulty: 'Intermediate',
    estimatedTime: '16 minutes',
    content: `
# Django Basics

Django is a full-featured web framework for Python.

- Models: Define data structure
- Views: Handle requests and responses
- Templates: Render HTML
    `,
    subtopics: [
      {
        id: 'django-models',
        title: 'Models',
        content: `
Define models as Python classes for database tables.
        `,
        keyPoints: [
          'Subclass models.Model',
          'Fields: CharField, IntegerField, etc.',
          'Migrations for schema changes'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'django-views',
        title: 'Views',
        content: `
Views process requests and return responses.
        `,
        keyPoints: [
          'Function-based or class-based views',
          'Return HttpResponse or render()',
          'URL patterns map to views'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'django-templates',
        title: 'Templates',
        content: `
Templates use Django Template Language (DTL) for dynamic HTML.
        `,
        keyPoints: [
          'Templates in templates/ folder',
          '{{ variable }} for data',
          '{% for %}, {% if %} for logic'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'fastapi-modern',
    title: 'FastAPI for Modern APIs',
    description: 'Build modern, fast APIs with FastAPI.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# FastAPI for Modern APIs

FastAPI is a modern, async web framework for APIs.

~~~python
from fastapi import FastAPI
app = FastAPI()
@app.get('/')
def root():
    return {'message': 'Hello World'}
# Run: uvicorn main:app --reload
~~~
    `,
    subtopics: [
      {
        id: 'fastapi-modern-basics',
        title: 'FastAPI Basics',
        content: `
Define async endpoints, use type hints, and get automatic docs.
        `,
        keyPoints: [
          'Async endpoints with async def',
          'Type hints for validation',
          'Docs at /docs and /redoc'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'jinja2-templating',
    title: 'Jinja2 Templating',
    description: 'Use Jinja2 for powerful, flexible HTML templating.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Jinja2 Templating

Jinja2 is a popular templating engine for Python web frameworks.

~~~jinja
<h1>Hello, {{ name }}!</h1>
{% for item in items %}
  <li>{{ item }}</li>
{% endfor %}
~~~
    `,
    subtopics: [
      {
        id: 'jinja2-basics',
        title: 'Jinja2 Basics',
        content: `
Use {{ }} for variables, {% %} for logic in templates.
        `,
        keyPoints: [
          '{{ variable }} for output',
          '{% for %}, {% if %} for logic',
          'Used in Flask, Django, FastAPI'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'auth',
    title: 'Authentication & Authorization',
    description: 'Implement authentication and authorization in Python web apps.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# Authentication & Authorization

Control access to your web app with authentication and authorization.

- Authentication: Who are you?
- Authorization: What can you do?
    `,
    subtopics: [
      {
        id: 'auth-basics',
        title: 'Auth Basics',
        content: `
Use sessions, cookies, and libraries for auth.
        `,
        keyPoints: [
          'Flask-Login, Django auth, OAuth',
          'Sessions and cookies',
          'Role-based access control'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  }
]; 