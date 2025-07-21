import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Target, Code } from 'lucide-react';
import { SystemDesignTopic } from '../types';

interface SystemDesignTopicCardProps {
  topic: SystemDesignTopic;
}

const SystemDesignTopicCard: React.FC<SystemDesignTopicCardProps> = ({ topic }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200 mb-2">
            {topic.title}
          </h3>
          <p className="text-gray-600 dark:text-white transition-colors duration-200 mb-4">
            {topic.description}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(topic.difficulty)} transition-colors duration-200 ml-4`}>
          {topic.difficulty}
        </span>
      </div>
      
      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-white">
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>{topic.estimatedTime}</span>
        </div>
        <div className="flex items-center space-x-1">
          <BookOpen className="h-4 w-4" />
          <span>{topic.category}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Code className="h-4 w-4" />
          <span>{topic.subtopics.length} subtopics</span>
        </div>
      </div>

      {topic.prerequisites && topic.prerequisites.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-white mb-2">Prerequisites:</h4>
          <div className="flex flex-wrap gap-2">
            {topic.prerequisites.map((prereq, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded transition-colors duration-200">
                {prereq}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-white mb-2">Subtopics:</h4>
        <ul className="space-y-1">
          {topic.subtopics.slice(0, 3).map((subtopic, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-white flex items-start">
              <Target className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
              {subtopic.title}
            </li>
          ))}
          {topic.subtopics.length > 3 && (
            <li className="text-sm text-gray-500 dark:text-white">
              +{topic.subtopics.length - 3} more subtopics
            </li>
          )}
        </ul>
      </div>
      
      <Link 
        to={`/system-design/topic/${topic.id}`}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
      >
        Start Learning →
      </Link>
    </div>
  );
};

export default SystemDesignTopicCard; 