import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const PythonDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
            Python Mastery Course
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Learn Python from beginner to advanced with hands-on modules and examples.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/python/module/1"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 1: Introduction to Python & Programming Basics
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Start your Python journey with the fundamentals: syntax, variables, data types, operators, and more.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Beginner
            </span>
          </Link>
          <Link
            to="/python/module/2"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 2: Control Flow & Data Structures
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master control flow, loops, lists, dictionaries, comprehensions, and more.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Beginner - Intermediate
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PythonDashboard; 