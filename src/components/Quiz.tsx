import React, { useState, useEffect, useCallback } from 'react';
import { Clock, CheckCircle, XCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { AssessmentQuestion, QuizState, QuizResult } from '../types';

interface QuizProps {
  questions: AssessmentQuestion[];
  timeLimit: number; // in minutes
  onComplete: (result: QuizResult) => void;
  onExit: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, timeLimit, onComplete, onExit }) => {

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: timeLimit * 60, // Convert to seconds
    isCompleted: false,
    score: 0,
    totalQuestions: Math.min(30, questions.length)
  });

  const [showConfirmExit, setShowConfirmExit] = useState(false);
  const [showReview, setShowReview] = useState(false);

  // Randomize questions and answer options
  const randomizedQuestions = React.useMemo(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 30);
    
    return selected.map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    }));
  }, [questions]);

  // Timer effect
  useEffect(() => {
    if (quizState.isCompleted || quizState.timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          // Time's up - auto submit
          const result = calculateResult(prev.answers, randomizedQuestions);
          onComplete(result);
          return { ...prev, isCompleted: true, timeRemaining: 0 };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.isCompleted, quizState.timeRemaining, randomizedQuestions, onComplete]);

  const calculateResult = useCallback((answers: Record<string, string>, questions: AssessmentQuestion[]): QuizResult => {
    let correctAnswers = 0;
    const userAnswers = { ...answers };

    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / questions.length) * 100);
    const timeTaken = (timeLimit * 60) - quizState.timeRemaining;

    return {
      score,
      totalQuestions: questions.length,
      correctAnswers,
      incorrectAnswers: questions.length - correctAnswers,
      timeTaken,
      questions,
      userAnswers
    };
  }, [timeLimit, quizState.timeRemaining]);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setQuizState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer }
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < randomizedQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const handleSubmit = () => {
    const result = calculateResult(quizState.answers, randomizedQuestions);
    onComplete(result);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = randomizedQuestions[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === randomizedQuestions.length - 1;
  const answeredQuestions = Object.keys(quizState.answers).length;
  const progressPercentage = (quizState.currentQuestionIndex + 1) / randomizedQuestions.length * 100;

  if (showConfirmExit) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Exit Assessment?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your progress will be lost. Are you sure you want to exit?
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowConfirmExit(false)}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onExit}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowConfirmExit(true)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Question {quizState.currentQuestionIndex + 1} of {randomizedQuestions.length}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {answeredQuestions} of {randomizedQuestions.length} answered
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                <Clock className="h-5 w-5" />
                <span className="font-mono text-lg">
                  {formatTime(quizState.timeRemaining)}
                </span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Question */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                    quizState.answers[currentQuestion.id] === option
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option}
                    checked={quizState.answers[currentQuestion.id] === option}
                    onChange={(e) => handleAnswerSelect(currentQuestion.id, e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center ${
                    quizState.answers[currentQuestion.id] === option
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 dark:border-gray-500'
                  }`}>
                    {quizState.answers[currentQuestion.id] === option && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="text-gray-900 dark:text-white">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={quizState.currentQuestionIndex === 0}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          <div className="flex items-center space-x-3">
            {!isLastQuestion ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowReview(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Review & Submit
                <CheckCircle className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Question Navigation */}
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Question Navigation
          </h3>
          <div className="grid grid-cols-10 gap-2">
            {randomizedQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setQuizState(prev => ({ ...prev, currentQuestionIndex: index }))}
                className={`w-8 h-8 rounded-md text-xs font-medium transition-colors ${
                  index === quizState.currentQuestionIndex
                    ? 'bg-blue-600 text-white'
                    : quizState.answers[randomizedQuestions[index].id]
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Review Your Answers
            </h3>
            
            <div className="space-y-4 mb-6">
              {randomizedQuestions.map((question, index) => (
                <div key={question.id} className="border-b border-gray-200 dark:border-gray-600 pb-4">
                  <div className="flex items-start space-x-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      quizState.answers[question.id]
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                    }`}>
                      {quizState.answers[question.id] ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Question {index + 1}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {quizState.answers[question.id] || 'Not answered'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {answeredQuestions} of {randomizedQuestions.length} questions answered
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowReview(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Continue
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz; 