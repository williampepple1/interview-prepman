import { AssessmentQuestion } from '../../types';

export const reactAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'react-1',
    question: 'What is React?',
    options: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system',
      'A web server framework'
    ],
    correctAnswer: 'A JavaScript library for building user interfaces',
    explanation: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.',
    category: 'React Basics',
    difficulty: 'Easy'
  },
  {
    id: 'react-2',
    question: 'What is JSX?',
    options: [
      'A syntax extension for JavaScript that allows you to write HTML-like code',
      'A new programming language',
      'A database query language',
      'A CSS framework'
    ],
    correctAnswer: 'A syntax extension for JavaScript that allows you to write HTML-like code',
    explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
    category: 'React Basics',
    difficulty: 'Easy'
  },
  {
    id: 'react-3',
    question: 'What is a React component?',
    options: [
      'A reusable piece of UI that can contain its own logic and styling',
      'A database table',
      'A CSS class',
      'A JavaScript function that returns HTML'
    ],
    correctAnswer: 'A reusable piece of UI that can contain its own logic and styling',
    explanation: 'React components are reusable pieces of UI that can contain their own logic, styling, and state.',
    category: 'React Basics',
    difficulty: 'Easy'
  },
  {
    id: 'react-4',
    question: 'What is the difference between props and state?',
    options: [
      'Props are read-only and passed from parent components, while state is mutable and managed within the component',
      'Props and state are the same thing',
      'Props are mutable, state is read-only',
      'Props are only used for styling, state is for data'
    ],
    correctAnswer: 'Props are read-only and passed from parent components, while state is mutable and managed within the component',
    explanation: 'Props are read-only and passed from parent components, while state is mutable and managed within the component itself.',
    category: 'React Basics',
    difficulty: 'Medium'
  },
  {
    id: 'react-5',
    question: 'What is the virtual DOM?',
    options: [
      'A lightweight copy of the actual DOM that React uses for performance optimization',
      'A database for storing DOM elements',
      'A CSS framework',
      'A JavaScript library for DOM manipulation'
    ],
    correctAnswer: 'A lightweight copy of the actual DOM that React uses for performance optimization',
    explanation: 'The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize performance by minimizing direct DOM manipulation.',
    category: 'React Basics',
    difficulty: 'Medium'
  },
  {
    id: 'react-6',
    question: 'What is the purpose of the useEffect hook?',
    options: [
      'To perform side effects in functional components, such as data fetching or subscriptions',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To perform side effects in functional components, such as data fetching or subscriptions',
    explanation: 'useEffect is a hook that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.',
    category: 'React Hooks',
    difficulty: 'Medium'
  },
  {
    id: 'react-7',
    question: 'What is the useState hook used for?',
    options: [
      'To add state to functional components',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To add state to functional components',
    explanation: 'useState is a hook that allows you to add state to functional components.',
    category: 'React Hooks',
    difficulty: 'Easy'
  },
  {
    id: 'react-8',
    question: 'What is the difference between controlled and uncontrolled components?',
    options: [
      'Controlled components have their state managed by React, while uncontrolled components manage their own state',
      'Controlled components are always functional, uncontrolled are class components',
      'Controlled components use hooks, uncontrolled components use classes',
      'There is no difference between them'
    ],
    correctAnswer: 'Controlled components have their state managed by React, while uncontrolled components manage their own state',
    explanation: 'Controlled components have their state managed by React, while uncontrolled components manage their own state internally.',
    category: 'React Components',
    difficulty: 'Medium'
  },
  {
    id: 'react-9',
    question: 'What is the purpose of the key prop in React lists?',
    options: [
      'To help React identify which items have changed, been added, or been removed',
      'To style list items',
      'To add click handlers to list items',
      'To make list items draggable'
    ],
    correctAnswer: 'To help React identify which items have changed, been added, or been removed',
    explanation: 'The key prop helps React identify which items have changed, been added, or been removed, which is important for performance and correct rendering.',
    category: 'React Lists',
    difficulty: 'Medium'
  },
  {
    id: 'react-10',
    question: 'What is React Router?',
    options: [
      'A library for handling navigation and routing in React applications',
      'A state management library',
      'A styling library',
      'A testing framework'
    ],
    correctAnswer: 'A library for handling navigation and routing in React applications',
    explanation: 'React Router is a library for handling navigation and routing in React applications.',
    category: 'React Routing',
    difficulty: 'Easy'
  },
  {
    id: 'react-11',
    question: 'What is the purpose of the useContext hook?',
    options: [
      'To consume values from a React context',
      'To create new contexts',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To consume values from a React context',
    explanation: 'useContext is a hook that allows you to consume values from a React context.',
    category: 'React Hooks',
    difficulty: 'Medium'
  },
  {
    id: 'react-12',
    question: 'What is the purpose of the useRef hook?',
    options: [
      'To create a mutable reference that persists across re-renders',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To create a mutable reference that persists across re-renders',
    explanation: 'useRef is a hook that creates a mutable reference that persists across re-renders.',
    category: 'React Hooks',
    difficulty: 'Medium'
  },
  {
    id: 'react-13',
    question: 'What is the purpose of the useMemo hook?',
    options: [
      'To memoize expensive calculations and prevent unnecessary re-computations',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To memoize expensive calculations and prevent unnecessary re-computations',
    explanation: 'useMemo is a hook that memoizes expensive calculations and prevents unnecessary re-computations.',
    category: 'React Hooks',
    difficulty: 'Hard'
  },
  {
    id: 'react-14',
    question: 'What is the purpose of the useCallback hook?',
    options: [
      'To memoize functions and prevent unnecessary re-renders',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To memoize functions and prevent unnecessary re-renders',
    explanation: 'useCallback is a hook that memoizes functions and prevents unnecessary re-renders.',
    category: 'React Hooks',
    difficulty: 'Hard'
  },
  {
    id: 'react-15',
    question: 'What is the purpose of the useReducer hook?',
    options: [
      'To manage complex state logic with a reducer function',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To manage complex state logic with a reducer function',
    explanation: 'useReducer is a hook that allows you to manage complex state logic with a reducer function.',
    category: 'React Hooks',
    difficulty: 'Hard'
  },
  {
    id: 'react-16',
    question: 'What is the purpose of the Fragment component?',
    options: [
      'To group multiple elements without adding extra nodes to the DOM',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To group multiple elements without adding extra nodes to the DOM',
    explanation: 'Fragment is a component that allows you to group multiple elements without adding extra nodes to the DOM.',
    category: 'React Components',
    difficulty: 'Medium'
  },
  {
    id: 'react-17',
    question: 'What is the purpose of the Portal component?',
    options: [
      'To render children into a DOM node that exists outside the parent component',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To render children into a DOM node that exists outside the parent component',
    explanation: 'Portal is a component that allows you to render children into a DOM node that exists outside the parent component.',
    category: 'React Components',
    difficulty: 'Hard'
  },
  {
    id: 'react-18',
    question: 'What is the purpose of the Error Boundary component?',
    options: [
      'To catch JavaScript errors anywhere in the component tree and display a fallback UI',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To catch JavaScript errors anywhere in the component tree and display a fallback UI',
    explanation: 'Error Boundary is a component that catches JavaScript errors anywhere in the component tree and displays a fallback UI.',
    category: 'React Components',
    difficulty: 'Hard'
  },
  {
    id: 'react-19',
    question: 'What is the purpose of the Suspense component?',
    options: [
      'To wrap components that may suspend and display a fallback while they are loading',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To wrap components that may suspend and display a fallback while they are loading',
    explanation: 'Suspense is a component that wraps components that may suspend and displays a fallback while they are loading.',
    category: 'React Components',
    difficulty: 'Hard'
  },
  {
    id: 'react-20',
    question: 'What is the purpose of the lazy function?',
    options: [
      'To enable code splitting and lazy loading of components',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To enable code splitting and lazy loading of components',
    explanation: 'lazy is a function that enables code splitting and lazy loading of components.',
    category: 'React Performance',
    difficulty: 'Hard'
  },
  {
    id: 'react-21',
    question: 'What is the purpose of the memo function?',
    options: [
      'To memoize components and prevent unnecessary re-renders',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To memoize components and prevent unnecessary re-renders',
    explanation: 'memo is a function that memoizes components and prevents unnecessary re-renders.',
    category: 'React Performance',
    difficulty: 'Hard'
  },
  {
    id: 'react-22',
    question: 'What is the purpose of the forwardRef function?',
    options: [
      'To forward refs to child components',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To forward refs to child components',
    explanation: 'forwardRef is a function that allows you to forward refs to child components.',
    category: 'React Components',
    difficulty: 'Hard'
  },
  {
    id: 'react-23',
    question: 'What is the purpose of the createContext function?',
    options: [
      'To create a React context for sharing data between components',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To create a React context for sharing data between components',
    explanation: 'createContext is a function that creates a React context for sharing data between components.',
    category: 'React Context',
    difficulty: 'Medium'
  },
  {
    id: 'react-24',
    question: 'What is the purpose of the Provider component?',
    options: [
      'To provide context values to child components',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To provide context values to child components',
    explanation: 'Provider is a component that provides context values to child components.',
    category: 'React Context',
    difficulty: 'Medium'
  },
  {
    id: 'react-25',
    question: 'What is the purpose of the Consumer component?',
    options: [
      'To consume context values in class components',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To consume context values in class components',
    explanation: 'Consumer is a component that allows you to consume context values in class components.',
    category: 'React Context',
    difficulty: 'Medium'
  },
  {
    id: 'react-26',
    question: 'What is the purpose of the PureComponent class?',
    options: [
      'To create components that only re-render when props or state change',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To create components that only re-render when props or state change',
    explanation: 'PureComponent is a class that creates components that only re-render when props or state change.',
    category: 'React Performance',
    difficulty: 'Hard'
  },
  {
    id: 'react-27',
    question: 'What is the purpose of the shouldComponentUpdate method?',
    options: [
      'To control when a component should re-render',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To control when a component should re-render',
    explanation: 'shouldComponentUpdate is a method that allows you to control when a component should re-render.',
    category: 'React Performance',
    difficulty: 'Hard'
  },
  {
    id: 'react-28',
    question: 'What is the purpose of the componentDidMount method?',
    options: [
      'To perform side effects after a component has been mounted',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To perform side effects after a component has been mounted',
    explanation: 'componentDidMount is a method that allows you to perform side effects after a component has been mounted.',
    category: 'React Lifecycle',
    difficulty: 'Medium'
  },
  {
    id: 'react-29',
    question: 'What is the purpose of the componentDidUpdate method?',
    options: [
      'To perform side effects after a component has been updated',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To perform side effects after a component has been updated',
    explanation: 'componentDidUpdate is a method that allows you to perform side effects after a component has been updated.',
    category: 'React Lifecycle',
    difficulty: 'Medium'
  },
  {
    id: 'react-30',
    question: 'What is the purpose of the componentWillUnmount method?',
    options: [
      'To perform cleanup before a component is unmounted',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To perform cleanup before a component is unmounted',
    explanation: 'componentWillUnmount is a method that allows you to perform cleanup before a component is unmounted.',
    category: 'React Lifecycle',
    difficulty: 'Medium'
  },
  {
    id: 'react-31',
    question: 'What is the purpose of the setState method?',
    options: [
      'To update the state of a class component',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To update the state of a class component',
    explanation: 'setState is a method that allows you to update the state of a class component.',
    category: 'React State',
    difficulty: 'Easy'
  },
  {
    id: 'react-32',
    question: 'What is the purpose of the forceUpdate method?',
    options: [
      'To force a component to re-render',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To force a component to re-render',
    explanation: 'forceUpdate is a method that forces a component to re-render.',
    category: 'React Performance',
    difficulty: 'Hard'
  },
  {
    id: 'react-33',
    question: 'What is the purpose of the ReactDOM.render method?',
    options: [
      'To render a React element into the DOM',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To render a React element into the DOM',
    explanation: 'ReactDOM.render is a method that renders a React element into the DOM.',
    category: 'React DOM',
    difficulty: 'Easy'
  },
  {
    id: 'react-34',
    question: 'What is the purpose of the ReactDOM.unmountComponentAtNode method?',
    options: [
      'To unmount a React component from the DOM',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To unmount a React component from the DOM',
    explanation: 'ReactDOM.unmountComponentAtNode is a method that unmounts a React component from the DOM.',
    category: 'React DOM',
    difficulty: 'Medium'
  },
  {
    id: 'react-35',
    question: 'What is the purpose of the ReactDOM.findDOMNode method?',
    options: [
      'To find the DOM node of a class component',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To find the DOM node of a class component',
    explanation: 'ReactDOM.findDOMNode is a method that finds the DOM node of a class component.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-36',
    question: 'What is the purpose of the ReactDOM.createPortal method?',
    options: [
      'To create a portal for rendering children into a different DOM node',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To create a portal for rendering children into a different DOM node',
    explanation: 'ReactDOM.createPortal is a method that creates a portal for rendering children into a different DOM node.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-37',
    question: 'What is the purpose of the ReactDOM.hydrate method?',
    options: [
      'To hydrate a server-rendered React application',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To hydrate a server-rendered React application',
    explanation: 'ReactDOM.hydrate is a method that hydrates a server-rendered React application.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-38',
    question: 'What is the purpose of the ReactDOM.createRoot method?',
    options: [
      'To create a root for concurrent features in React 18',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To create a root for concurrent features in React 18',
    explanation: 'ReactDOM.createRoot is a method that creates a root for concurrent features in React 18.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-39',
    question: 'What is the purpose of the ReactDOM.flushSync method?',
    options: [
      'To flush all pending updates synchronously',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To flush all pending updates synchronously',
    explanation: 'ReactDOM.flushSync is a method that flushes all pending updates synchronously.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-40',
    question: 'What is the purpose of the ReactDOM.unstable_batchedUpdates method?',
    options: [
      'To batch multiple state updates together',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To batch multiple state updates together',
    explanation: 'ReactDOM.unstable_batchedUpdates is a method that batches multiple state updates together.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-41',
    question: 'What is the purpose of the ReactDOM.unstable_createRoot method?',
    options: [
      'To create an unstable root for experimental features',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To create an unstable root for experimental features',
    explanation: 'ReactDOM.unstable_createRoot is a method that creates an unstable root for experimental features.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-42',
    question: 'What is the purpose of the ReactDOM.unstable_flushDiscreteUpdates method?',
    options: [
      'To flush discrete updates synchronously',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To flush discrete updates synchronously',
    explanation: 'ReactDOM.unstable_flushDiscreteUpdates is a method that flushes discrete updates synchronously.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-43',
    question: 'What is the purpose of the ReactDOM.unstable_runWithPriority method?',
    options: [
      'To run a function with a specific priority',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To run a function with a specific priority',
    explanation: 'ReactDOM.unstable_runWithPriority is a method that runs a function with a specific priority.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-44',
    question: 'What is the purpose of the ReactDOM.unstable_scheduleCallback method?',
    options: [
      'To schedule a callback with a specific priority',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To schedule a callback with a specific priority',
    explanation: 'ReactDOM.unstable_scheduleCallback is a method that schedules a callback with a specific priority.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-45',
    question: 'What is the purpose of the ReactDOM.unstable_cancelCallback method?',
    options: [
      'To cancel a scheduled callback',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To cancel a scheduled callback',
    explanation: 'ReactDOM.unstable_cancelCallback is a method that cancels a scheduled callback.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-46',
    question: 'What is the purpose of the ReactDOM.unstable_wrapCallback method?',
    options: [
      'To wrap a callback with error boundaries',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To wrap a callback with error boundaries',
    explanation: 'ReactDOM.unstable_wrapCallback is a method that wraps a callback with error boundaries.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-47',
    question: 'What is the purpose of the ReactDOM.unstable_getCurrentPriorityLevel method?',
    options: [
      'To get the current priority level',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To get the current priority level',
    explanation: 'ReactDOM.unstable_getCurrentPriorityLevel is a method that gets the current priority level.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-48',
    question: 'What is the purpose of the ReactDOM.unstable_shouldYield method?',
    options: [
      'To check if the current task should yield to other tasks',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To check if the current task should yield to other tasks',
    explanation: 'ReactDOM.unstable_shouldYield is a method that checks if the current task should yield to other tasks.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-49',
    question: 'What is the purpose of the ReactDOM.unstable_requestPaint method?',
    options: [
      'To request a paint operation',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To request a paint operation',
    explanation: 'ReactDOM.unstable_requestPaint is a method that requests a paint operation.',
    category: 'React DOM',
    difficulty: 'Hard'
  },
  {
    id: 'react-50',
    question: 'What is the purpose of the ReactDOM.unstable_now method?',
    options: [
      'To get the current time in milliseconds',
      'To create new components',
      'To handle form submissions',
      'To style components'
    ],
    correctAnswer: 'To get the current time in milliseconds',
    explanation: 'ReactDOM.unstable_now is a method that gets the current time in milliseconds.',
    category: 'React DOM',
    difficulty: 'Hard'
  }
]; 