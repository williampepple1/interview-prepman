import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { pythonModule1Topics } from '../data/python/module1';
import { pythonModule2Topics } from '../data/python/module2';
import { pythonModule3Topics } from '../data/python/module3';
import { pythonModule4Topics } from '../data/python/module4';
import { pythonModule5Topics } from '../data/python/module5';
import { pythonModule6Topics } from '../data/python/module6';
import { pythonModule7Topics } from '../data/python/module7';
import { pythonModule8Topics } from '../data/python/module8';
import { pythonModule9Topics } from '../data/python/module9';
import { pythonModule10Topics } from '../data/python/module10';
import { pythonModule11Topics } from '../data/python/module11';
import { pythonModule12Topics } from '../data/python/module12';
import { pythonModule13Topics } from '../data/python/module13';

const PythonModuleLayout: React.FC = () => {
  const { moduleId } = useParams<{ moduleId?: string }>();
  const safeModuleId = moduleId || '1';
  let topics = pythonModule1Topics;
  let moduleTitle = 'Module 1: Introduction to Python & Programming Basics';
  let moduleDesc = 'Explore all topics in this module. Click a topic to view its details and subtopics.';

  if (safeModuleId === '2') {
    topics = pythonModule2Topics;
    moduleTitle = 'Module 2: Control Flow & Data Structures';
    moduleDesc = 'Master control flow, loops, lists, dictionaries, comprehensions, and more.';
  } else if (safeModuleId === '3') {
    topics = pythonModule3Topics;
    moduleTitle = 'Module 3: Functions & Functional Programming';
    moduleDesc = 'Learn about functions, functional programming, comprehensions, recursion, and more.';
  } else if (safeModuleId === '4') {
    topics = pythonModule4Topics;
    moduleTitle = 'Module 4: Strings & Regular Expressions';
    moduleDesc = 'Work with strings, formatting, Unicode, regex, and text parsing in Python.';
  } else if (safeModuleId === '5') {
    topics = pythonModule5Topics;
    moduleTitle = 'Module 5: Files, Exceptions, and Modules';
    moduleDesc = 'Work with files, handle exceptions, use logging, and organize code with modules and venv.';
  } else if (safeModuleId === '6') {
    topics = pythonModule6Topics;
    moduleTitle = 'Module 6: Object-Oriented Programming (OOP)';
    moduleDesc = 'Master classes, inheritance, special methods, decorators, abstract base classes, and dataclasses.';
  } else if (safeModuleId === '7') {
    topics = pythonModule7Topics;
    moduleTitle = 'Module 7: Advanced Python Concepts';
    moduleDesc = 'Dive into iterators, generators, decorators, context managers, functools, itertools, metaclasses, and more.';
  } else if (safeModuleId === '8') {
    topics = pythonModule8Topics;
    moduleTitle = 'Module 8: Modules, Packages, and Standard Library';
    moduleDesc = 'Learn about modules, packages, pip, venv, and key standard library modules for real-world Python.';
  } else if (safeModuleId === '9') {
    topics = pythonModule9Topics;
    moduleTitle = 'Module 9: Concurrency & Parallelism';
    moduleDesc = 'Learn about the GIL, threading, multiprocessing, asyncio, futures, and parallel programming in Python.';
  } else if (safeModuleId === '10') {
    topics = pythonModule10Topics;
    moduleTitle = 'Module 10: Databases & ORM';
    moduleDesc = 'Learn SQLite, basic SQL, SQLAlchemy ORM, transactions, migrations, and connecting to PostgreSQL/MySQL.';
  } else if (safeModuleId === '11') {
    topics = pythonModule11Topics;
    moduleTitle = 'Module 11: Testing & Best Practices';
    moduleDesc = 'Learn unittest, pytest, mocking, TDD, coverage, CI, linting, and formatting for robust Python code.';
  } else if (safeModuleId === '12') {
    topics = pythonModule12Topics;
    moduleTitle = 'Module 12: Networking & APIs';
    moduleDesc = 'Learn requests, REST APIs, consuming and creating APIs, and WebSockets in Python.';
  } else if (safeModuleId === '13') {
    topics = pythonModule13Topics;
    moduleTitle = 'Module 13: Web Development with Python';
    moduleDesc = 'Learn Flask, Django, FastAPI, Jinja2, authentication, and web development best practices.';
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/python"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 mb-4 transition-colors duration-200"
          >
            ← Back to Python Modules
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
            {moduleTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            {moduleDesc}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/python/module/${safeModuleId}/topic/${topic.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                {topic.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                {topic.description}
              </p>
              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
                {topic.difficulty}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PythonModuleLayout; 