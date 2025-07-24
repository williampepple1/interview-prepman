import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const DevOpsDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
            DevOps Mastery Course
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Master DevOps practices, tools, and methodologies to streamline software development and deployment processes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/devops/module/1"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 1: DevOps Fundamentals & Culture
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Understand DevOps principles, culture, and practices. Learn about collaboration, automation, and continuous improvement.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Beginner
            </span>
          </Link>
          <Link
            to="/devops/module/2"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 2: Version Control & Git
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master Git version control, branching strategies, and collaborative development workflows.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Beginner - Intermediate
            </span>
          </Link>
          <Link
            to="/devops/module/3"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 3: Linux & Shell Scripting
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master Linux administration, shell scripting, and command-line tools essential for DevOps automation.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/devops/module/4"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 4: Cloud Computing & Infrastructure
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master cloud platforms (AWS, Azure, GCP), infrastructure management, and cloud-native services.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/devops/module/5"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 5: Containerization & Orchestration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master Docker containerization, Kubernetes orchestration, and container management strategies.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/devops/module/6"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 6: CI/CD Pipelines & Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Build robust CI/CD pipelines using Jenkins, GitLab CI, GitHub Actions, and automation tools.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Intermediate
            </span>
          </Link>
          <Link
            to="/devops/module/7"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 7: Infrastructure as Code (IaC)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master Terraform, CloudFormation, and infrastructure automation for reproducible deployments.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Intermediate - Advanced
            </span>
          </Link>
          <Link
            to="/devops/module/8"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 8: Security & Compliance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Implement DevSecOps practices, security scanning, compliance automation, and secure deployment strategies.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
          <Link
            to="/devops/module/9"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 9: Monitoring & Observability
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Implement comprehensive monitoring, logging, tracing, and observability solutions for production systems.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
          <Link
            to="/devops/module/10"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 10: Site Reliability Engineering (SRE)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Master SRE principles, SLI/SLO management, error budgets, and reliability engineering practices.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
          <Link
            to="/devops/module/11"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 11: Advanced DevOps Practices
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Explore advanced DevOps practices, microservices, serverless, and modern deployment strategies.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
          <Link
            to="/devops/module/12"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
              Module 12: Real-World DevOps Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
              Build end-to-end DevOps projects implementing real-world scenarios and best practices.
            </p>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
              Advanced
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevOpsDashboard; 