import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Question } from '../types';

interface QuestionDetailProps {
  questions: Question[];
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({ questions }) => {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const [showSolution, setShowSolution] = useState(false);

  const question = questions.find(q => q.id === questionId);

  if (!question) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Question Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">The question you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'Medium': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'Hard': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to=".." 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Questions
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">{question.title}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(question.difficulty)} transition-colors duration-200`}>
                {question.difficulty}
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-200">
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {question.category}
              </div>
              <div className="flex space-x-2">
                {question.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded transition-colors duration-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8 dark:prose-invert">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Problem Description</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-200">{question.description}</p>
            </div>

            {question.solution && (
              <div className="mb-8">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 mb-4"
                >
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
                
                {showSolution && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Solution</h3>
                    <MarkdownRenderer content={question.solution} />
                  </div>
                )}
              </div>
            )}

            {question.explanation && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3 transition-colors duration-200">Explanation</h3>
                <MarkdownRenderer content={question.explanation} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail; 