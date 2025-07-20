import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, Target } from 'lucide-react';
import { ASSESSMENT_TOPICS } from '../constants/assessments';
import { AssessmentTopic, QuizResult } from '../types';
import Quiz from '../components/Quiz';

const Assessment: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [topic, setTopic] = useState<AssessmentTopic | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const foundTopic = ASSESSMENT_TOPICS.find(t => t.id === topicId);
    if (!foundTopic) {
      navigate('/assessments');
      return;
    }
    setTopic(foundTopic);
  }, [topicId, navigate]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleComplete = (quizResult: QuizResult) => {
    setResult(quizResult);
  };

  const handleExit = () => {
    navigate('/assessments');
  };

  const handleRetake = () => {
    setIsStarted(false);
    setResult(null);
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (isStarted && !result) {
    return (
      <Quiz
        questions={topic.questions}
        timeLimit={topic.timeLimit}
        onComplete={handleComplete}
        onExit={handleExit}
      />
    );
  }

  if (result) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Assessment Complete!
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {topic.title} - Results
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
                result.score >= 80 ? 'bg-green-100 dark:bg-green-900/30' :
                result.score >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                'bg-red-100 dark:bg-red-900/30'
              }`}>
                <span className={`text-3xl font-bold ${
                  result.score >= 80 ? 'text-green-600 dark:text-green-400' :
                  result.score >= 60 ? 'text-yellow-600 dark:text-yellow-400' :
                  'text-red-600 dark:text-red-400'
                }`}>
                  {result.score}%
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {result.score >= 80 ? 'Excellent!' :
                 result.score >= 60 ? 'Good Job!' :
                 'Keep Practicing!'}
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-2">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{result.totalQuestions}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Questions</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg mx-auto mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{result.correctAnswers}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Correct</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg mx-auto mb-2">
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{result.incorrectAnswers}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Incorrect</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg mx-auto mb-2">
                  <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Math.floor(result.timeTaken / 60)}:{(result.timeTaken % 60).toString().padStart(2, '0')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Time Taken</p>
              </div>
            </div>

            {/* Performance Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Performance</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{result.score}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    result.score >= 80 ? 'bg-green-500' :
                    result.score >= 60 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${result.score}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question Review */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Question Review
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {result.questions.map((question, index) => {
                const userAnswer = result.userAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                      }`}>
                        {isCorrect ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                          Question {index + 1}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                          {question.question}
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs">
                            <span className="text-gray-500 dark:text-gray-400">Your answer:</span>{' '}
                            <span className={isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                              {userAnswer || 'Not answered'}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-xs">
                              <span className="text-gray-500 dark:text-gray-400">Correct answer:</span>{' '}
                              <span className="text-green-600 dark:text-green-400">{question.correctAnswer}</span>
                            </p>
                          )}
                          {question.explanation && (
                            <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-700">
                              <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">
                                Explanation:
                              </p>
                              <p className="text-xs text-blue-800 dark:text-blue-200">
                                {question.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetake}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retake Assessment
            </button>
            <button
              onClick={() => navigate('/assessments')}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Back to Assessments
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">{topic.icon}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {topic.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {topic.description}
          </p>
        </div>

        {/* Assessment Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Assessment Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{topic.questionCount} Questions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Randomly selected from our question bank</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{topic.timeLimit} Minutes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Timed assessment with auto-submit</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Important Notes:
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Questions are randomly selected from our question bank</li>
              <li>• Answer options are randomized for each question</li>
              <li>• You can review your answers before submitting</li>
              <li>• The assessment will auto-submit when time runs out</li>
              <li>• You cannot pause or restart the assessment once started</li>
            </ul>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={handleStart}
            className="px-8 py-4 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment; 