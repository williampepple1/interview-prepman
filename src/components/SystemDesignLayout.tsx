import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, CheckCircle, Clock, Code } from 'lucide-react';
import { systemDesignTopics } from '../data/system-design-topics';

const SystemDesignLayout: React.FC = () => {
  const { topicId, subtopicId } = useParams<{ topicId: string; subtopicId?: string }>();
  const navigate = useNavigate();
  
  const topic = systemDesignTopics.find(t => t.id === topicId);
  
  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topic not found</h1>
          <Link 
            to="/system-design" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Back to System Design Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Set default subtopic if none selected
  const defaultSubtopic = topic.subtopics[0];
  const currentSubtopicId = subtopicId || defaultSubtopic?.id;
  const currentSubtopic = topic.subtopics.find(s => s.id === currentSubtopicId) || defaultSubtopic;

  const handleSubtopicClick = (subtopicId: string) => {
    navigate(`/system-design/topic/${topicId}/${subtopicId}`);
  };

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
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/system-design" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {topic.title}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {topic.description}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(topic.difficulty)} transition-colors duration-200`}>
                {topic.difficulty}
              </span>
              <div className="flex items-center text-sm text-gray-500 dark:text-white">
                <Clock className="h-4 w-4 mr-1" />
                <span>{topic.estimatedTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Subtopics */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Subtopics
              </h3>
              <div className="space-y-2">
                {topic.subtopics.map((subtopic, index) => {
                  const isActive = subtopic.id === currentSubtopicId;
                  const isLocked = subtopic.isLocked;
                  const isCompleted = subtopic.isCompleted;
                  
                  return (
                    <div
                      key={subtopic.id}
                      className={`relative p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent'
                      }`}
                      onClick={() => !isLocked && handleSubtopicClick(subtopic.id)}
                    >
                      {/* Progress indicator */}
                      {index > 0 && (
                        <div className="absolute -top-2 left-6 w-0.5 h-2 bg-gray-200 dark:bg-gray-600"></div>
                      )}
                      
                      <div className="flex items-center space-x-3">
                        {/* Status icon */}
                        <div className="flex-shrink-0">
                          {isLocked ? (
                            <Lock className="h-5 w-5 text-gray-400" />
                          ) : isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <div className={`w-5 h-5 rounded-full border-2 ${
                              isActive 
                                ? 'border-blue-500 bg-blue-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}></div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm font-medium ${
                            isActive 
                              ? 'text-blue-900 dark:text-blue-100' 
                              : isLocked 
                                ? 'text-gray-500 dark:text-gray-300' 
                                : 'text-gray-900 dark:text-white'
                          }`}>
                            {subtopic.title}
                          </h4>
                          <p className={`text-xs mt-1 ${
                            isActive 
                              ? 'text-blue-700 dark:text-blue-200' 
                              : 'text-gray-500 dark:text-white'
                          }`}>
                            {subtopic.estimatedTime}
                          </p>
                        </div>
                        
                        {/* Difficulty indicator */}
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(subtopic.difficulty)}`}>
                          {subtopic.difficulty}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            {currentSubtopic ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                {/* Subtopic Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {currentSubtopic.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-200">
                        {currentSubtopic.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentSubtopic.difficulty)} ml-4`}>
                      {currentSubtopic.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-white">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{currentSubtopic.estimatedTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Code className="h-4 w-4" />
                      <span>{currentSubtopic.codeExamples.length} code examples</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-200 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-700 prose-pre:text-gray-800 dark:prose-pre:text-gray-200 prose-li:text-gray-700 dark:prose-li:text-gray-200 prose-ul:text-gray-700 dark:prose-ul:text-gray-200 prose-ol:text-gray-700 dark:prose-ol:text-gray-200">
                                      <div 
                    dangerouslySetInnerHTML={{ 
                      __html: currentSubtopic.content
                        .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">$1</h1>')
                        .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-6">$1</h2>')
                        .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4">$1</h3>')
                        .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-3">$1</h4>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700 dark:text-white">$1</em>')
                        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-600"><code class="text-gray-800 dark:text-white block">$2</code></pre>')
                        .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white px-1 py-0.5 rounded text-sm font-mono">$1</code>')
                        .replace(/\n/g, '<br/>')
                    }} 
                  />
                  </div>
                </div>

                {/* Key Points */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {currentSubtopic.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-white">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Examples */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Code Examples
                  </h3>
                  <div className="space-y-4">
                    {currentSubtopic.codeExamples.map((example, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                          <code>{example}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                <p className="text-gray-500 dark:text-white">No subtopic selected</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesignLayout; 