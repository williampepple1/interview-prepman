import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { dataEngineeringModule1Topics } from '../data/data-engineering/module1';
import { dataEngineeringModule2Topics } from '../data/data-engineering/module2';
import { dataEngineeringModule3Topics } from '../data/data-engineering/module3';
import { dataEngineeringModule4Topics } from '../data/data-engineering/module4';
import { dataEngineeringModule5Topics } from '../data/data-engineering/module5';
import { dataEngineeringModule6Topics } from '../data/data-engineering/module6';
import { dataEngineeringModule7Topics } from '../data/data-engineering/module7';
import { dataEngineeringModule8Topics } from '../data/data-engineering/module8';
import { dataEngineeringModule9Topics } from '../data/data-engineering/module9';
import { dataEngineeringModule10Topics } from '../data/data-engineering/module10';
import { dataEngineeringModule11Topics } from '../data/data-engineering/module11';
import { Topic, Subtopic } from '../types';
import MarkdownRenderer from './MarkdownRenderer';

const DataEngineeringTopicLayout: React.FC = () => {
  const { moduleId, topicId, subtopicId } = useParams<{ moduleId?: string; topicId: string; subtopicId?: string }>();
  const safeModuleId = moduleId || '1';
  const topics = safeModuleId === '11' ? dataEngineeringModule11Topics : safeModuleId === '10' ? dataEngineeringModule10Topics : safeModuleId === '9' ? dataEngineeringModule9Topics : safeModuleId === '8' ? dataEngineeringModule8Topics : safeModuleId === '7' ? dataEngineeringModule7Topics : safeModuleId === '6' ? dataEngineeringModule6Topics : safeModuleId === '5' ? dataEngineeringModule5Topics : safeModuleId === '4' ? dataEngineeringModule4Topics : safeModuleId === '3' ? dataEngineeringModule3Topics : safeModuleId === '2' ? dataEngineeringModule2Topics : dataEngineeringModule1Topics;
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const [currentSubtopic, setCurrentSubtopic] = useState<Subtopic | null>(null);

  useEffect(() => {
    if (topicId) {
      const topic = topics.find(t => t.id === topicId);
      setCurrentTopic(topic || null);
      if (subtopicId && topic) {
        const subtopic = topic.subtopics?.find(s => s.id === subtopicId);
        setCurrentSubtopic(subtopic || null);
      } else {
        setCurrentSubtopic(null);
      }
    }
  }, [topicId, subtopicId, topics]);

  if (!currentTopic) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topic not found</h1>
            <Link
              to={`/data-engineering/module/${safeModuleId}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              Back to Module {safeModuleId}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (currentSubtopic) {
      return (
        <div>
          <div className="mb-6">
            <Link
              to={`/data-engineering/module/${safeModuleId}/topic/${topicId}`}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {currentTopic.title}
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              {currentSubtopic.title}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {currentSubtopic.estimatedTime}
              </span>
            </div>
          </div>
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-white prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-900 dark:prose-code:text-white prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800">
            <MarkdownRenderer content={currentSubtopic.content} />
          </div>
          {currentSubtopic.keyPoints && currentSubtopic.keyPoints.length > 0 && (
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Key Points</h3>
              <ul className="space-y-2">
                {currentSubtopic.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-800 dark:text-blue-200">• {point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    return (
      <div>
        <div className="mb-6">
          <Link
            to={`/data-engineering/module/${safeModuleId}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Module {safeModuleId}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
            {currentTopic.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
            {currentTopic.description}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {currentTopic.estimatedTime}
            </span>
          </div>
        </div>
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-white prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-900 dark:prose-code:text-white prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800">
          <MarkdownRenderer content={currentTopic.content} />
        </div>
        {currentTopic.subtopics && currentTopic.subtopics.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
              Subtopics
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {currentTopic.subtopics.map((subtopic) => (
                <Link
                  key={subtopic.id}
                  to={`/data-engineering/module/${safeModuleId}/topic/${topicId}/${subtopic.id}`}
                  className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                    {subtopic.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-200">
                    <Clock className="h-4 w-4 mr-1" />
                    {subtopic.estimatedTime}
                  </div>
                  {subtopic.keyPoints && subtopic.keyPoints.length > 0 && (
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">Key Points:</strong>
                      <ul className="mt-1 space-y-1">
                        {subtopic.keyPoints.slice(0, 2).map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span>• {point}</span>
                          </li>
                        ))}
                        {subtopic.keyPoints.length > 2 && (
                          <li className="text-blue-600 dark:text-blue-400">
                            +{subtopic.keyPoints.length - 2} more points
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                Module {safeModuleId} Topics
              </h2>
              <nav className="space-y-2">
                {topics.map((topic) => (
                  <div key={topic.id}>
                    <Link
                      to={`/data-engineering/module/${safeModuleId}/topic/${topic.id}`}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        topicId === topic.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {topic.title}
                    </Link>
                    {topicId === topic.id && topic.subtopics && (
                      <div className="ml-4 mt-2 space-y-1">
                        {topic.subtopics.map((subtopic) => (
                          <Link
                            key={subtopic.id}
                            to={`/data-engineering/module/${safeModuleId}/topic/${topic.id}/${subtopic.id}`}
                            className={`block px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                              subtopicId === subtopic.id
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                            }`}
                          >
                            {subtopic.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringTopicLayout; 