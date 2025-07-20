export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

export interface Question {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  solution?: string;
  explanation?: string;
  tags: string[];
}

export interface Dashboard {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  questions: Question[];
}

export interface Algorithm {
  id: string;
  name: string;
  category: string;
  description: string;
  explanation: string;
  codeExample: string;
  timeComplexity: string;
  spaceComplexity: string;
} 