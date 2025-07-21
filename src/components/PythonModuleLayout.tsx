import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { pythonModule1Topics } from '../data/python/module1';
import { pythonModule2Topics } from '../data/python/module2';
import { pythonModule3Topics } from '../data/python/module3';
import { pythonModule4Topics } from '../data/python/module4';
import { pythonModule5Topics } from '../data/python/module5';

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