import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashboardCard from '../components/DashboardCard';
import { DASHBOARD_CONFIGS } from '../constants/dashboards';
import { dsaQuestions, dataEngineeringQuestions } from '../data/questions';

const Home: React.FC = () => {
  const { user, signInWithGoogle } = useAuth();

  const dashboards = [
    
    {
      id: 'assessments',
      title: 'Assessment Center',
      description: 'Test your knowledge with timed assessments on various topics',
      icon: '📝',
      route: '/assessments',
      questions: [] // Assessments have their own structure
    },
    {
      ...DASHBOARD_CONFIGS.dsa,
      questions: dsaQuestions
    },
    {
      ...DASHBOARD_CONFIGS.react,
      questions: [] // React now uses topics instead of questions
    },
    {
      ...DASHBOARD_CONFIGS.dataEngineering,
      questions: dataEngineeringQuestions
    },
    {
      ...DASHBOARD_CONFIGS.dataEngineeringLearning,
      questions: [] // Data Engineering learning path uses topics instead of questions
    },
    {
      ...DASHBOARD_CONFIGS.algorithms,
      questions: [] // Algorithm explanations don't use the same question structure
    },
    {
      ...DASHBOARD_CONFIGS.systemDesign,
      questions: [] // System Design uses topics instead of questions
    },
    {
      ...DASHBOARD_CONFIGS.behavioralInterview,
      questions: [] // Behavioral Interview uses topics instead of questions
    },
    {
      ...DASHBOARD_CONFIGS.python,
      questions: [] // Python uses topics instead of questions
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Interview Preparation Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            Master your technical interviews with our comprehensive collection of questions, 
            explanations, and practice problems across multiple domains.
          </p>
        </div>

        {!user && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8 transition-colors duration-200">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2 transition-colors duration-200">
                Sign in to Access All Dashboards
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-4 transition-colors duration-200">
                Create an account or sign in with Google to unlock all interview preparation materials.
              </p>
              <button
                onClick={signInWithGoogle}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Sign in with Google
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard) => (
            <DashboardCard
              key={dashboard.id}
              dashboard={dashboard}
              isAuthenticated={!!user}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 