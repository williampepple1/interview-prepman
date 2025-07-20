import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Target, Code, CheckCircle } from 'lucide-react';
import { reactTopics } from '../data/react-topics';

const ReactTopicDetail: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = reactTopics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topic not found</h1>
          <Link 
            to="/react" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Back to React Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/react" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to React Dashboard
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                  {topic.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {topic.description}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(topic.difficulty)} transition-colors duration-200 ml-4`}>
                {topic.difficulty}
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
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
                <span>{topic.codeExamples.length} code examples</span>
              </div>
            </div>

            {topic.prerequisites && topic.prerequisites.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Prerequisites:</h3>
                <div className="flex flex-wrap gap-2">
                  {topic.prerequisites.map((prereq, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded transition-colors duration-200">
                      {prereq}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-700 prose-pre:text-gray-800 dark:prose-pre:text-gray-200 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: topic.content
                  .replace(/\n/g, '<br/>')
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-600"><code class="text-gray-800 dark:text-gray-200 block">$2</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
                  .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-6">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4">$1</h3>')
                  .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-3">$1</h4>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700 dark:text-gray-300">$1</em>')
              }} 
            />
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Key Takeaways
          </h3>
          <ul className="space-y-3">
            {topic.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Code Examples
          </h3>
          <div className="space-y-4">
            {topic.codeExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  <code>{example}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            to="/react" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            ← Back to Dashboard
          </Link>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Estimated time: {topic.estimatedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTopicDetail; 