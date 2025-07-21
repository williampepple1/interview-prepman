import { Topic } from '../../types';

export const pythonModule11Topics: Topic[] = [
  {
    id: 'unittest-basics',
    title: 'unittest Basics',
    description: 'Learn the basics of Python’s built-in unittest framework.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# unittest Basics

unittest is Python’s built-in testing framework.

~~~python
import unittest
class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(1 + 1, 2)
if __name__ == '__main__':
    unittest.main()
~~~
    `,
    subtopics: [
      {
        id: 'unittest-usage',
        title: 'Using unittest',
        content: `
Write test cases by subclassing unittest.TestCase and using assert methods.
        `,
        keyPoints: [
          'Subclass unittest.TestCase',
          'Use assertEqual, assertTrue, etc.',
          'Run tests with unittest.main()'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'pytest',
    title: 'pytest (Fixtures, Parametrization)',
    description: 'Use pytest for more advanced and flexible testing.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# pytest

pytest is a popular third-party testing framework.

~~~python
def test_add():
    assert 1 + 1 == 2
~~~

- Fixtures: Provide setup/teardown for tests
- Parametrization: Run tests with different data
    `,
    subtopics: [
      {
        id: 'pytest-fixtures',
        title: 'Fixtures',
        content: `
Use fixtures for reusable test setup and teardown.
        `,
        keyPoints: [
          '@pytest.fixture decorator',
          'Pass fixture as argument to test',
          'Scope: function, class, module, session'
        ],
        estimatedTime: '4 minutes'
      },
      {
        id: 'pytest-parametrize',
        title: 'Parametrization',
        content: `
Use @pytest.mark.parametrize to run tests with multiple sets of data.
        `,
        keyPoints: [
          '@pytest.mark.parametrize',
          'Test with different inputs',
          'Reduces code duplication'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'mocking-patching',
    title: 'Mocking & Patching',
    description: 'Mock and patch objects/functions for isolated testing.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Mocking & Patching

Use unittest.mock to replace parts of your system under test.

~~~python
from unittest.mock import patch
def foo():
    return 42
with patch('__main__.foo', return_value=99):
    print(foo())  # 99
~~~
    `,
    subtopics: [
      {
        id: 'mocking-basics',
        title: 'Mocking Basics',
        content: `
Use patch to replace functions, classes, or objects during tests.
        `,
        keyPoints: [
          'patch() as context manager or decorator',
          'Set return_value or side_effect',
          'Isolate dependencies for unit tests'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'tdd',
    title: 'Test-Driven Development (TDD)',
    description: 'Adopt TDD for robust, maintainable code.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Test-Driven Development (TDD)

TDD means writing tests before code.

- Red-Green-Refactor cycle
- Ensures code meets requirements
- Encourages modular design
    `,
    subtopics: [
      {
        id: 'tdd-basics',
        title: 'TDD Basics',
        content: `
Write a failing test, write code to pass, then refactor.
        `,
        keyPoints: [
          'Write test first',
          'Make test pass',
          'Refactor code and tests'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'coverage-ci',
    title: 'Code Coverage & CI Integration',
    description: 'Measure test coverage and integrate with CI tools.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Code Coverage & CI Integration

Use coverage.py to measure test coverage. Integrate tests with CI/CD pipelines.

~~~bash
coverage run -m pytest
coverage report
~~~

- CI tools: GitHub Actions, Travis CI, GitLab CI
    `,
    subtopics: [
      {
        id: 'coverage-basics',
        title: 'Coverage Basics',
        content: `
Use coverage.py to check how much code your tests cover.
        `,
        keyPoints: [
          'coverage run/report',
          'Find untested code',
          'Aim for high coverage, not 100%'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'ci-integration',
        title: 'CI Integration',
        content: `
Run tests automatically in CI/CD pipelines.
        `,
        keyPoints: [
          'GitHub Actions, Travis CI, GitLab CI',
          'Automate testing on push/PR',
          'Fail builds on test failure'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'linting-formatting',
    title: 'Linting & Formatting (flake8, black)',
    description: 'Use tools to enforce code style and catch errors early.',
    difficulty: 'Intermediate',
    estimatedTime: '8 minutes',
    content: `
# Linting & Formatting

flake8 checks code style and errors. black auto-formats code.

~~~bash
flake8 myfile.py
black myfile.py
~~~
    `,
    subtopics: [
      {
        id: 'linting-formatting-basics',
        title: 'Linting & Formatting Basics',
        content: `
Use flake8 for linting, black for formatting.
        `,
        keyPoints: [
          'flake8: style and error checks',
          'black: auto-formatting',
          'Integrate with editors and CI'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 