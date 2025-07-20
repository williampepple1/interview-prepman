import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import QuestionDetail from '../pages/QuestionDetail';
import AlgorithmExplanations from '../pages/AlgorithmExplanations';
import { dsaQuestions, reactQuestions, dataEngineeringQuestions } from '../data/questions';

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
      
      {/* React Questions Routes */}
      <Route 
        path="/dashboard/react" 
        element={
          <ProtectedRoute>
            <Dashboard 
              questions={reactQuestions}
              title="React Questions"
              description="Prepare for React-specific technical interviews"
            />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/react/:questionId" 
        element={
          <ProtectedRoute>
            <QuestionDetail 
              questions={reactQuestions}
            />
          </ProtectedRoute>
        } 
      />
      
      {/* Data Engineering Routes */}
      <Route 
        path="/dashboard/data-engineering" 
        element={
          <ProtectedRoute>
            <Dashboard 
              questions={dataEngineeringQuestions}
              title="Data Engineering"
              description="Questions on data pipelines, ETL, and big data"
            />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/data-engineering/:questionId" 
        element={
          <ProtectedRoute>
            <QuestionDetail 
              questions={dataEngineeringQuestions}
            />
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
    </Routes>
  );
};

export default AppRoutes; 