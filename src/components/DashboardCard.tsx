import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard } from '../types';

interface DashboardCardProps {
  dashboard: Dashboard;
  isAuthenticated: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ dashboard, isAuthenticated }) => {
  const cardContent = (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">{dashboard.icon}</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">{dashboard.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">{dashboard.description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
          {dashboard.questions.length} questions available
        </div>
        {!isAuthenticated && (
          <div className="text-xs text-red-500 dark:text-red-400 font-medium transition-colors duration-200">
            Login required
          </div>
        )}
      </div>
    </div>
  );

  if (isAuthenticated) {
    return (
      <Link to={dashboard.route} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default DashboardCard; 