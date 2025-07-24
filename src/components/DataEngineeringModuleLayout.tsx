import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { dataEngineeringModule1Topics } from '../data/data-engineering/module1';
import { dataEngineeringModule2Topics } from '../data/data-engineering/module2';
import { dataEngineeringModule3Topics } from '../data/data-engineering/module3';
import { dataEngineeringModule4Topics } from '../data/data-engineering/module4';
import { dataEngineeringModule5Topics } from '../data/data-engineering/module5';
import { dataEngineeringModule6Topics } from '../data/data-engineering/module6';

const DataEngineeringModuleLayout: React.FC = () => {
  const { moduleId } = useParams<{ moduleId?: string }>();
  const safeModuleId = moduleId || '1';
  let topics = dataEngineeringModule1Topics;
  let moduleTitle = 'Module 1: Foundations of Data Engineering';
  let moduleDesc = 'Understand the basics of data engineering, programming, and the data ecosystem.';

  if (safeModuleId === '2') {
    topics = dataEngineeringModule2Topics;
    moduleTitle = 'Module 2: Programming Fundamentals for Data Engineering';
    moduleDesc = 'Master Python, SQL, and shell scripting for data engineering. Learn data manipulation, automation, and best practices.';
  } else if (safeModuleId === '3') {
    topics = dataEngineeringModule3Topics;
    moduleTitle = 'Module 3: Data Warehousing & Data Lakes';
    moduleDesc = 'Design and implement data warehouses and data lakes. Learn about data modeling, schema design, and storage optimization.';
  } else if (safeModuleId === '4') {
    topics = dataEngineeringModule4Topics;
    moduleTitle = 'Module 4: Big Data Technologies & Distributed Computing';
    moduleDesc = 'Master Hadoop, Spark, and distributed computing concepts. Learn about streaming technologies and cloud big data services.';
  } else if (safeModuleId === '5') {
    topics = dataEngineeringModule5Topics;
    moduleTitle = 'Module 5: Data Pipeline Development & Orchestration';
    moduleDesc = 'Design and implement ETL pipelines, orchestrate workflows with Airflow, and ensure data quality and reliability.';
  } else if (safeModuleId === '6') {
    topics = dataEngineeringModule6Topics;
    moduleTitle = 'Module 6: Data Governance, Security & Compliance';
    moduleDesc = 'Establish data governance frameworks, implement security measures, and ensure regulatory compliance for data management.';
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/data-engineering"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors duration-200"
          >
            ← Back to Data Engineering Modules
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
              to={`/data-engineering/module/${safeModuleId}/topic/${topic.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                {topic.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                {topic.description}
              </p>
              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 transition-colors duration-200">
                {topic.difficulty}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringModuleLayout; 