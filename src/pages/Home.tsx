import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashboardCard from '../components/DashboardCard';
import { DASHBOARD_CONFIGS } from '../constants/dashboards';
import { dsaQuestions } from '../data/questions';

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
    },
    {
      ...DASHBOARD_CONFIGS.devops,
      questions: [] // DevOps uses topics instead of questions
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-white/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Technical Interviews
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive interview preparation platform with practice questions, 
              detailed explanations, and assessments across multiple domains
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {!user ? (
                <button
                  onClick={signInWithGoogle}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Get Started Free
                </button>
              ) : (
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Explore Dashboards
                </button>
              )}
              <button
                onClick={() => {
                  const element = document.getElementById('dashboards-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">Practice Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-200">Learning Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Available Access</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-50 dark:text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="dashboards-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            Explore our comprehensive collection of interview preparation materials tailored to your career goals.
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