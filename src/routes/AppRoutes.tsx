import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import QuestionDetail from '../pages/QuestionDetail';
import AlgorithmExplanations from '../pages/AlgorithmExplanations';
import AssessmentDashboard from '../pages/AssessmentDashboard';
import Assessment from '../pages/Assessment';
import ReactDashboard from '../pages/ReactDashboard';
import PythonDashboard from '../pages/PythonDashboard';

import ReactTopicLayout from '../components/ReactTopicLayout';
import SystemDesignDashboard from '../pages/SystemDesignDashboard';
import SystemDesignLayout from '../components/SystemDesignLayout';
import BehavioralInterviewDashboard from '../pages/BehavioralInterviewDashboard';
import BehavioralInterviewLayout from '../components/BehavioralInterviewLayout';
import PythonTopicLayout from '../components/PythonTopicLayout';
import PythonModuleLayout from '../components/PythonModuleLayout';
import DataEngineeringDashboard from '../pages/DataEngineeringDashboard';
import DataEngineeringModuleLayout from '../components/DataEngineeringModuleLayout';
import DataEngineeringTopicLayout from '../components/DataEngineeringTopicLayout';
import DevOpsDashboard from '../pages/DevOpsDashboard';
import DevOpsModuleLayout from '../components/DevOpsModuleLayout';
import DevOpsTopicLayout from '../components/DevOpsTopicLayout';
import { dsaQuestions } from '../data/questions';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Data Structures & Algorithms Routes */}
      <Route 
        path="/dashboard/dsa" 
        element={
          <ProtectedRoute>
            <Dashboard 
              questions={dsaQuestions}
              title="Data Structures & Algorithms"
              description="Master fundamental data structures and algorithmic concepts"
            />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/dsa/:questionId" 
        element={
          <ProtectedRoute>
            <QuestionDetail 
              questions={dsaQuestions}
            />
          </ProtectedRoute>
        } 
      />
      
      {/* React Learning Routes */}
      <Route 
        path="/react" 
        element={
          <ProtectedRoute>
            <ReactDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/react/topic/:topicId" 
        element={
          <ProtectedRoute>
            <ReactTopicLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/react/topic/:topicId/:subtopicId" 
        element={
          <ProtectedRoute>
            <ReactTopicLayout />
          </ProtectedRoute>
        } 
      />

      {/* System Design Routes */}
      <Route 
        path="/system-design" 
        element={
          <ProtectedRoute>
            <SystemDesignDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/system-design/topic/:topicId" 
        element={
          <ProtectedRoute>
            <SystemDesignLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/system-design/topic/:topicId/:subtopicId" 
        element={
          <ProtectedRoute>
            <SystemDesignLayout />
          </ProtectedRoute>
        } 
      />

      {/* Behavioral Interview Routes */}
      <Route 
        path="/behavioral-interview" 
        element={
          <ProtectedRoute>
            <BehavioralInterviewDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/behavioral-interview/topic/:topicId" 
        element={
          <ProtectedRoute>
            <BehavioralInterviewLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/behavioral-interview/topic/:topicId/:subtopicId" 
        element={
          <ProtectedRoute>
            <BehavioralInterviewLayout />
          </ProtectedRoute>
        } 
      />

      {/* Python Learning Path Routes */}
      <Route 
        path="/python" 
        element={
          <ProtectedRoute>
            <PythonDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/python/module/:moduleId" 
        element={
          <ProtectedRoute>
            <PythonModuleLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/python/module/:moduleId/topic/:topicId" 
        element={
          <ProtectedRoute>
            <PythonTopicLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/python/module/:moduleId/topic/:topicId/:subtopicId" 
        element={
          <ProtectedRoute>
            <PythonTopicLayout />
          </ProtectedRoute>
        } 
      />
      
      {/* Data Engineering Learning Path Routes */}
      <Route 
        path="/data-engineering" 
        element={
          <ProtectedRoute>
            <DataEngineeringDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/data-engineering/module/:moduleId" 
        element={
          <ProtectedRoute>
            <DataEngineeringModuleLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/data-engineering/module/:moduleId/topic/:topicId" 
        element={
          <ProtectedRoute>
            <DataEngineeringTopicLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/data-engineering/module/:moduleId/topic/:topicId/:subtopicId" 
        element={
          <ProtectedRoute>
            <DataEngineeringTopicLayout />
          </ProtectedRoute>
        } 
      />

      {/* DevOps Learning Path Routes */}
      <Route 
        path="/devops" 
        element={
          <ProtectedRoute>
            <DevOpsDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devops/module/:moduleId" 
        element={
          <ProtectedRoute>
            <DevOpsModuleLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devops/module/:moduleId/topic/:topicId" 
        element={
          <ProtectedRoute>
            <DevOpsTopicLayout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devops/module/:moduleId/topic/:topicId/:subtopicId" 
        element={
          <ProtectedRoute>
            <DevOpsTopicLayout />
          </ProtectedRoute>
        } 
      />

      
      {/* Algorithm Explanations Route */}
      <Route 
        path="/dashboard/algorithms" 
        element={
          <ProtectedRoute>
            <AlgorithmExplanations />
          </ProtectedRoute>
        } 
      />

      {/* Assessment Routes */}
      <Route 
        path="/assessments" 
        element={
          <ProtectedRoute>
            <AssessmentDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/assessments/:topicId" 
        element={
          <ProtectedRoute>
            <Assessment />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes; 