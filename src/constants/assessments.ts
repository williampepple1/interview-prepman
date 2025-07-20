import { AssessmentTopic } from '../types';
import { reactAssessmentQuestions } from '../data/assessments/react';
import { nodejsAssessmentQuestions } from '../data/assessments/nodejs';

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
  }
]; 