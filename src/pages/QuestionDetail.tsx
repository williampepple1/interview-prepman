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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Question Not Found</h2>
          <p className="text-gray-600 mb-6">The question you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to=".." 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Questions
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{question.title}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty}
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {question.category}
              </div>
              <div className="flex space-x-2">
                {question.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Problem Description</h2>
              <p className="text-gray-700 leading-relaxed">{question.description}</p>
            </div>

            {question.solution && (
              <div className="mb-8">
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors mb-4"
                >
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
                
                {showSolution && (
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
                    <MarkdownRenderer content={question.solution} />
                  </div>
                )}
              </div>
            )}

            {question.explanation && (
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Explanation</h3>
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