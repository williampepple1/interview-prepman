export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  companies?: string[];
  studyPlans?: string[];
  solution?: string;
  explanation?: string;
}

export interface ReactSubtopic {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples: string[];
  keyPoints: string[];
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  isLocked?: boolean;
  isCompleted?: boolean;
}

export interface ReactTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  prerequisites?: string[];
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  subtopics: ReactSubtopic[];
}

export interface SystemDesignSubtopic {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples: string[];
  keyPoints: string[];
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  isLocked?: boolean;
  isCompleted?: boolean;
}

export interface SystemDesignTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  prerequisites?: string[];
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  subtopics: SystemDesignSubtopic[];
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

// Assessment Types
export interface AssessmentQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string; // This will always be the first option in JSON
  explanation?: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface AssessmentTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  questions: AssessmentQuestion[];
  timeLimit: number; // in minutes
  questionCount: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  timeRemaining: number;
  isCompleted: boolean;
  score: number;
  totalQuestions: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeTaken: number;
  questions: AssessmentQuestion[];
  userAnswers: Record<string, string>;
}

// Behavioral Interview Types
export interface Subtopic {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
  estimatedTime: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  content: string;
  subtopics?: Subtopic[];
} 