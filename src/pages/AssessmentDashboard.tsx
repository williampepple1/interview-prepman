import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, HelpCircle, Target } from 'lucide-react';
import { ASSESSMENT_TOPICS } from '../constants/assessments';

const AssessmentDashboard: React.FC = () => {
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
            Assessment Center
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Test your knowledge with timed assessments. Each assessment contains 30 randomly selected questions with a 20-minute time limit.
          </p>
        </div>

        {/* Assessment Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  30 Questions
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  Randomly selected from our question bank
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  20 Minutes
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  Timed assessment with auto-submit
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-8 w-8 text-purple-500" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  Multiple Choice
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  Randomized answer options
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ASSESSMENT_TOPICS.map((topic) => (
            <div
              key={topic.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{topic.icon}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                    {topic.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-200">
                    <span className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {topic.questionCount} questions
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {topic.timeLimit} minutes
                    </span>
                  </div>
                  
                  <Link
                    to={topic.route}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    Start Assessment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3 transition-colors duration-200">
            Assessment Instructions
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200 transition-colors duration-200">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Each assessment contains 30 randomly selected questions from our question bank
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              You have 20 minutes to complete the assessment
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Answer options are randomized for each question
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              You can review your answers before submitting
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              The assessment will auto-submit when time runs out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDashboard; 