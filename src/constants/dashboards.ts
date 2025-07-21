import { Dashboard } from '../types';

export const DASHBOARD_CONFIGS: Record<string, Omit<Dashboard, 'questions'>> = {
  dsa: {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master fundamental data structures and algorithmic concepts',
    icon: '⚡',
    route: '/dashboard/dsa'
  },
  react: {
    id: 'react',
    title: 'React Learning Path',
    description: 'Master React fundamentals and advanced concepts with comprehensive learning modules',
    icon: '⚛️',
    route: '/react'
  },
  dataEngineering: {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Questions on data pipelines, ETL, and big data',
    icon: '📊',
    route: '/dashboard/data-engineering'
  },
  algorithms: {
    id: 'algorithms',
    title: 'Algorithm Explanations',
    description: 'Detailed explanations of common algorithms',
    icon: '🧮',
    route: '/dashboard/algorithms'
  },
  systemDesign: {
    id: 'system-design',
    title: 'System Design & Architecture',
    description: 'Master scalable system design principles and architectural patterns',
    icon: '🏗️',
    route: '/system-design'
  },
  behavioralInterview: {
    id: 'behavioral-interview',
    title: 'Behavioral Interview Preparation',
    description: 'Master behavioral interview techniques, STAR method, and common scenarios',
    icon: '💼',
    route: '/behavioral-interview'
  },
  python: {
    id: 'python',
    title: 'Python Mastery Course',
    description: 'Learn Python from beginner to advanced with hands-on modules and examples',
    icon: '🐍',
    route: '/python'
  }
}; 