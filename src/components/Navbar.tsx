import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { LogOut, User, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
              Interview Prep Platform
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {user.photoURL ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  ) : (
                    <User className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                  )}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    {user.displayName}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
                Please sign in to access dashboards
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 