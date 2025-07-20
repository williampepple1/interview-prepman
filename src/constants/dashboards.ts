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
  }
}; 