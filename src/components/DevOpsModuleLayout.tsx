import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { devOpsModule1Topics } from '../data/devops/module1';
// import { devOpsModule2Topics } from '../data/devops/module2';
// import { devOpsModule3Topics } from '../data/devops/module3';
// import { devOpsModule4Topics } from '../data/devops/module4';
// import { devOpsModule5Topics } from '../data/devops/module5';
// import { devOpsModule6Topics } from '../data/devops/module6';
// import { devOpsModule7Topics } from '../data/devops/module7';
// import { devOpsModule8Topics } from '../data/devops/module8';
// import { devOpsModule9Topics } from '../data/devops/module9';
// import { devOpsModule10Topics } from '../data/devops/module10';
// import { devOpsModule11Topics } from '../data/devops/module11';
// import { devOpsModule12Topics } from '../data/devops/module12';

const DevOpsModuleLayout: React.FC = () => {
  const { moduleId } = useParams<{ moduleId?: string }>();
  const safeModuleId = moduleId || '1';
  let topics = devOpsModule1Topics;
  let moduleTitle = 'Module 1: DevOps Fundamentals & Culture';
  let moduleDesc = 'Understand DevOps principles, culture, and practices. Learn about collaboration, automation, and continuous improvement.';

  // if (safeModuleId === '2') {
  //   topics = devOpsModule2Topics;
  //   moduleTitle = 'Module 2: Version Control & Git';
  //   moduleDesc = 'Master Git version control, branching strategies, and collaborative development workflows.';
  // } else if (safeModuleId === '3') {
  //   topics = devOpsModule3Topics;
  //   moduleTitle = 'Module 3: Linux & Shell Scripting';
  //   moduleDesc = 'Master Linux administration, shell scripting, and command-line tools essential for DevOps automation.';
  // } else if (safeModuleId === '4') {
  //   topics = devOpsModule4Topics;
  //   moduleTitle = 'Module 4: Cloud Computing & Infrastructure';
  //   moduleDesc = 'Master cloud platforms (AWS, Azure, GCP), infrastructure management, and cloud-native services.';
  // } else if (safeModuleId === '5') {
  //   topics = devOpsModule5Topics;
  //   moduleTitle = 'Module 5: Containerization & Orchestration';
  //   moduleDesc = 'Master Docker containerization, Kubernetes orchestration, and container management strategies.';
  // } else if (safeModuleId === '6') {
  //   topics = devOpsModule6Topics;
  //   moduleTitle = 'Module 6: CI/CD Pipelines & Automation';
  //   moduleDesc = 'Build robust CI/CD pipelines using Jenkins, GitLab CI, GitHub Actions, and automation tools.';
  // } else if (safeModuleId === '7') {
  //   topics = devOpsModule7Topics;
  //   moduleTitle = 'Module 7: Infrastructure as Code (IaC)';
  //   moduleDesc = 'Master Terraform, CloudFormation, and infrastructure automation for reproducible deployments.';
  // } else if (safeModuleId === '8') {
  //   topics = devOpsModule8Topics;
  //   moduleTitle = 'Module 8: Security & Compliance';
  //   moduleDesc = 'Implement DevSecOps practices, security scanning, compliance automation, and secure deployment strategies.';
  // } else if (safeModuleId === '9') {
  //   topics = devOpsModule9Topics;
  //   moduleTitle = 'Module 9: Monitoring & Observability';
  //   moduleDesc = 'Implement comprehensive monitoring, logging, tracing, and observability solutions for production systems.';
  // } else if (safeModuleId === '10') {
  //   topics = devOpsModule10Topics;
  //   moduleTitle = 'Module 10: Site Reliability Engineering (SRE)';
  //   moduleDesc = 'Master SRE principles, SLI/SLO management, error budgets, and reliability engineering practices.';
  // } else if (safeModuleId === '11') {
  //   topics = devOpsModule11Topics;
  //   moduleTitle = 'Module 11: Advanced DevOps Practices';
  //   moduleDesc = 'Explore advanced DevOps practices, microservices, serverless, and modern deployment strategies.';
  // } else if (safeModuleId === '12') {
  //   topics = devOpsModule12Topics;
  //   moduleTitle = 'Module 12: Real-World DevOps Projects';
  //   moduleDesc = 'Build end-to-end DevOps projects implementing real-world scenarios and best practices.';
  // }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/devops"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            ← Back to DevOps Modules
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
            {moduleTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            {moduleDesc}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/devops/module/${safeModuleId}/topic/${topic.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                {topic.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                {topic.description}
              </p>
              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 transition-colors duration-200">
                {topic.difficulty}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevOpsModuleLayout; 