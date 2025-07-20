import { AssessmentTopic } from '../types';
import { reactAssessmentQuestions } from '../data/assessments/react';
import { nodejsAssessmentQuestions } from '../data/assessments/nodejs';
import { cleanCodeAssessmentQuestions } from '../data/assessments/clean-code';
import { pythonAssessmentQuestions } from '../data/assessments/python';

export const ASSESSMENT_TOPICS: AssessmentTopic[] = [
  {
    id: 'react',
    title: 'React Assessment',
    description: 'Test your knowledge of React fundamentals, hooks, components, and best practices',
    icon: '⚛️',
    route: '/assessments/react',
    questions: reactAssessmentQuestions,
    timeLimit: 20, // 20 minutes
    questionCount: 30
  },
  {
    id: 'nodejs',
    title: 'Node.js Assessment',
    description: 'Test your knowledge of Node.js runtime, modules, APIs, and server-side development',
    icon: '🟢',
    route: '/assessments/nodejs',
    questions: nodejsAssessmentQuestions,
    timeLimit: 20, // 20 minutes
    questionCount: 30
  },
  {
    id: 'clean-code',
    title: 'Clean Code & Software Engineering',
    description: 'Test your knowledge of clean code principles, SOLID principles, design patterns, and software engineering best practices',
    icon: '🧹',
    route: '/assessments/clean-code',
    questions: cleanCodeAssessmentQuestions,
    timeLimit: 20, // 20 minutes
    questionCount: 30
  },
  {
    id: 'python',
    title: 'Python Assessment',
    description: 'Test your knowledge of Python syntax, data structures, built-in functions, and programming fundamentals',
    icon: '🐍',
    route: '/assessments/python',
    questions: pythonAssessmentQuestions,
    timeLimit: 20, // 20 minutes
    questionCount: 30
  }
]; 