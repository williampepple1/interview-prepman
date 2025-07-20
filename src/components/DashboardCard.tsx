import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard } from '../types';

interface DashboardCardProps {
  dashboard: Dashboard;
  isAuthenticated: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ dashboard, isAuthenticated }) => {
  const cardContent = (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">{dashboard.icon}</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{dashboard.title}</h3>
          <p className="text-sm text-gray-600">{dashboard.description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {dashboard.questions.length} questions available
        </div>
        {!isAuthenticated && (
          <div className="text-xs text-red-500 font-medium">
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