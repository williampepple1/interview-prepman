import { ReactTopic } from '../types';

export const reactTopics: ReactTopic[] = [
  {
    id: 'hooks-fundamentals',
    title: 'React Hooks Fundamentals',
    category: 'Hooks',
    description: 'Master the core React Hooks: useState, useEffect, and custom hooks. Learn when and how to use them effectively.',
    estimatedTime: '45 minutes',
    difficulty: 'Beginner',
    prerequisites: ['Basic JavaScript', 'React Components'],
    subtopics: [
      {
        id: 'introduction-to-hooks',
        title: 'Introduction to Hooks',
        description: 'Learn what React Hooks are and why they were introduced.',
        estimatedTime: '10 minutes',
        difficulty: 'Beginner',
    content: `
# Introduction to React Hooks

React Hooks were introduced in React 16.8 to allow functional components to use state and other React features without writing class components. This revolutionized how we write React applications.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

### Key Principles of Hooks

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call hooks from React function components or custom hooks
3. **Hooks are called in the same order every time** - This is why the rules above are important

## Why Hooks?

Before hooks, you had to use class components to:
- Manage state
- Use lifecycle methods
- Share logic between components

Hooks solve these problems by allowing you to:
- Use state in functional components
- Use lifecycle features without classes
- Share logic between components more easily
        `,
        codeExamples: [
          `// Before Hooks (Class Component)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}`,
          `// After Hooks (Functional Component)
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
        ],
        keyPoints: [
          'Hooks were introduced in React 16.8',
          'Hooks allow functional components to use state and lifecycle features',
          'Hooks must be called at the top level of your component',
          'Hooks can only be called from React function components or custom hooks',
          'Hooks are called in the same order every time'
        ]
      },
      {
        id: 'useState-hook',
        title: 'useState Hook',
        description: 'Learn how to manage state in functional components using the useState hook.',
        estimatedTime: '15 minutes',
        difficulty: 'Beginner',
        content: `
# useState Hook

The useState hook is the most fundamental hook in React. It allows functional components to manage local state.

## Basic Usage

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## State Updates

State updates are asynchronous and batched for performance. React may batch multiple setState calls into a single re-render.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1); // This might not use the latest count
    setCount(prevCount => prevCount + 1); // This always uses the latest count
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
\`\`\`

## Object State

When managing object state, always spread the previous state to avoid mutations:

\`\`\`jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: 'John',
    email: 'john@example.com',
    age: 25
  });
  
  const updateName = (newName) => {
    setUser(prevUser => ({
      ...prevUser,
      name: newName
    }));
  };
  
  return (
    <div>
      <p>Name: {user.name}</p>
      <button onClick={() => updateName('Jane')}>Update Name</button>
    </div>
  );
}
\`\`\`
        `,
        codeExamples: [
          `// Basic useState
const [count, setCount] = useState(0);

// Multiple state variables
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);

// Object state
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});

// Array state
const [items, setItems] = useState([]);`
        ],
        keyPoints: [
          'useState returns an array with the current state and a function to update it',
          'Always use the setter function to update state, never modify state directly',
          'State updates are asynchronous and may be batched',
          'Use the functional form of setState when the new state depends on the previous state',
          'For objects and arrays, always create a new copy to trigger re-renders'
        ]
      },
      {
        id: 'useEffect-hook',
        title: 'useEffect Hook',
        description: 'Learn how to handle side effects in functional components using the useEffect hook.',
        estimatedTime: '20 minutes',
        difficulty: 'Beginner',
        content: `
# useEffect Hook

The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

## Basic Usage

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]); // Dependency array
    
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return <div>{user.name}</div>;
}
\`\`\`

## Cleanup Function

useEffect can return a cleanup function that runs before the component unmounts or before the effect runs again:

\`\`\`jsx
function Timer() {
  const [count, setCount] = useState(0);
  
useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(timer);
  }, []); // Empty dependency array = run once
    
  return <div>Count: {count}</div>;
}
\`\`\`
        `,
        codeExamples: [
          `// Effect with no dependencies (runs after every render)
useEffect(() => {
  console.log('Component rendered');
});

// Effect with empty dependency array (runs once after mount)
useEffect(() => {
  console.log('Component mounted');
}, []);

// Effect with dependencies (runs when dependencies change)
useEffect(() => {
  console.log('User ID changed:', userId);
}, [userId]);

// Effect with cleanup
  useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`
        ],
        keyPoints: [
          'useEffect runs after every render by default',
          'Use the dependency array to control when the effect runs',
          'An empty dependency array means the effect runs only once after mount',
          'Always include dependencies that the effect uses',
          'Return a cleanup function to clean up subscriptions, timers, etc.'
        ]
      }
    ]
  },
  {
    id: 'component-lifecycle',
    title: 'Component Lifecycle',
    category: 'Lifecycle',
    description: 'Understand the component lifecycle in React and how to use lifecycle methods effectively.',
    estimatedTime: '30 minutes',
    difficulty: 'Intermediate',
    prerequisites: ['React Hooks Fundamentals'],
    subtopics: [
      {
        id: 'lifecycle-overview',
        title: 'Lifecycle Overview',
        description: 'Learn about the different phases of a React component\'s lifecycle.',
        estimatedTime: '10 minutes',
        difficulty: 'Intermediate',
        content: `
# Component Lifecycle Overview

Every React component goes through a lifecycle from creation to destruction. Understanding this lifecycle is crucial for building efficient React applications.

## Lifecycle Phases

### 1. Mounting Phase
- **constructor()** - Initialize state and bind methods
- **render()** - Return JSX
- **componentDidMount()** - Component is mounted to DOM

### 2. Updating Phase
- **render()** - Re-render with new props/state
- **componentDidUpdate()** - Component updated

### 3. Unmounting Phase
- **componentWillUnmount()** - Component is about to be removed

## Class Component Lifecycle

\`\`\`jsx
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  
  componentDidMount() {
    // Called after component is mounted to DOM
    this.fetchData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    // Called after component updates
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }
  
  componentWillUnmount() {
    // Called before component is unmounted
    this.cleanup();
  }
  
  render() {
    return <div>{this.state.data}</div>;
  }
}
\`\`\`

## Functional Component with Hooks

\`\`\`jsx
function ExampleComponent({ id }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // componentDidMount equivalent
    fetchData();
    
    // componentWillUnmount equivalent
    return () => {
      cleanup();
    };
  }, []); // Empty dependency array = run once
  
useEffect(() => {
    // componentDidUpdate equivalent
    if (id) {
      fetchData();
    }
  }, [id]); // Run when id changes
  
  return <div>{data}</div>;
}
\`\`\`
        `,
        codeExamples: [
          `// Mounting phase
useEffect(() => {
  console.log('Component mounted');
  return () => console.log('Component will unmount');
}, []);

// Updating phase
useEffect(() => {
  console.log('Component updated');
}, [someValue]);

// Cleanup on unmount
  useEffect(() => {
    const timer = setInterval(() => {
    // Do something
    }, 1000);
    
    return () => clearInterval(timer);
}, []);`
    ],
    keyPoints: [
          'Components go through mounting, updating, and unmounting phases',
          'Class components use lifecycle methods like componentDidMount',
          'Functional components use useEffect to handle lifecycle events',
          'Always clean up subscriptions and timers in useEffect cleanup',
          'The dependency array controls when useEffect runs'
        ]
      },
      {
        id: 'lifecycle-methods',
        title: 'Lifecycle Methods',
        description: 'Deep dive into specific lifecycle methods and their use cases.',
        estimatedTime: '20 minutes',
    difficulty: 'Intermediate',
    content: `
# Lifecycle Methods Deep Dive

## componentDidMount

Called immediately after a component is mounted. Perfect for:
- API calls
- Setting up subscriptions
- DOM manipulations

\`\`\`jsx
class UserProfile extends React.Component {
  componentDidMount() {
    // Fetch user data when component mounts
    this.fetchUserData();
    
    // Set up WebSocket connection
    this.websocket = new WebSocket('ws://example.com');
    this.websocket.onmessage = this.handleMessage;
  }
  
  fetchUserData = async () => {
    const response = await fetch(\`/api/users/\${this.props.userId}\`);
    const userData = await response.json();
    this.setState({ user: userData });
  };
}
\`\`\`

## componentDidUpdate

Called after the component updates. Use for:
- Responding to prop changes
- Making API calls based on new data
- DOM updates

\`\`\`jsx
class UserProfile extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // Only fetch if userId changed
    if (prevProps.userId !== this.props.userId) {
      this.fetchUserData();
    }
    
    // Update document title when user name changes
    if (prevState.user?.name !== this.state.user?.name) {
      document.title = \`Profile - \${this.state.user.name}\`;
    }
  }
}
\`\`\`

## componentWillUnmount

Called before the component is unmounted. Use for:
- Cleaning up subscriptions
- Canceling API requests
- Removing event listeners

\`\`\`jsx
class UserProfile extends React.Component {
  componentWillUnmount() {
    // Clean up WebSocket connection
    if (this.websocket) {
      this.websocket.close();
    }
    
    // Cancel any pending API requests
    if (this.controller) {
      this.controller.abort();
    }
  }
}
\`\`\`
        `,
        codeExamples: [
          `// componentDidMount equivalent with hooks
  useEffect(() => {
  fetchUserData();
  const websocket = new WebSocket('ws://example.com');
  
    return () => {
    websocket.close();
    };
  }, []);
  
// componentDidUpdate equivalent with hooks
useEffect(() => {
  if (userId) {
    fetchUserData();
  }
}, [userId]);

// componentWillUnmount equivalent with hooks
useEffect(() => {
  return () => {
    // Cleanup code here
    console.log('Component unmounting');
  };
}, []);`
        ],
        keyPoints: [
          'componentDidMount is perfect for initial setup and API calls',
          'componentDidUpdate should be used carefully to avoid infinite loops',
          'componentWillUnmount is essential for cleanup to prevent memory leaks',
          'Hooks provide equivalent functionality with useEffect',
          'Always compare previous and current values in componentDidUpdate'
        ]
      }
    ]
  },
  {
    id: 'state-management',
    title: 'State Management',
    category: 'State',
    description: 'Learn different approaches to state management in React applications, from local state to global state management.',
    estimatedTime: '60 minutes',
    difficulty: 'Intermediate',
    prerequisites: ['React Hooks Fundamentals'],
    subtopics: [
      {
        id: 'local-state',
        title: 'Local State Management',
        description: 'Learn how to manage state within individual components using useState and useReducer.',
        estimatedTime: '20 minutes',
        difficulty: 'Intermediate',
        content: `
# Local State Management

Local state is the most basic form of state management in React. It's contained within a single component and doesn't affect other components.

## useState for Simple State

For simple state values, useState is the go-to hook:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <p>Count: {count}</p>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      {isVisible && <p>This is visible!</p>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

## useReducer for Complex State

When state logic becomes complex, useReducer provides a more structured approach:

\`\`\`jsx
const initialState = {
  count: 0,
  step: 1,
  history: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + state.step,
        history: [...state.history, state.count]
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - state.step,
        history: [...state.history, state.count]
      };
    case 'setStep':
      return {
        ...state,
        step: action.payload
      };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function AdvancedCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <input 
        type="number" 
        value={state.step}
        onChange={(e) => dispatch({ type: 'setStep', payload: Number(e.target.value) })}
      />
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <p>History: {state.history.join(', ')}</p>
    </div>
  );
}
\`\`\`
        `,
        codeExamples: [
          `// Simple state with useState
const [value, setValue] = useState(initialValue);

// Complex state with useReducer
const [state, dispatch] = useReducer(reducer, initialState);

// Object state
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});

// Array state
const [items, setItems] = useState([]);`
        ],
        keyPoints: [
          'useState is perfect for simple state values',
          'useReducer is better for complex state logic',
          'Always use functional updates when new state depends on previous state',
          'Keep state as local as possible',
          'Avoid deeply nested state objects'
        ]
      },
      {
        id: 'context-api',
        title: 'Context API',
        description: 'Learn how to share state across components using React Context API.',
        estimatedTime: '25 minutes',
        difficulty: 'Intermediate',
        content: `
# Context API

The Context API allows you to share state across components without prop drilling. It's perfect for global state that doesn't change frequently.

## Creating Context

\`\`\`jsx
// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
\`\`\`

## Using Context

\`\`\`jsx
// App.js
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

// Header.js
import { useTheme } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={\`header \${theme}\`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

// Content.js
import { useTheme } from './ThemeContext';

function Content() {
  const { theme } = useTheme();
  
  return (
    <main className={\`content \${theme}\`}>
      <p>Current theme: {theme}</p>
    </main>
  );
}
\`\`\`

## User Context Example

\`\`\`jsx
// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch('/api/me', {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (response.ok) {
        const userData = await response.json();
          setUser(userData);
        }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
          setLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const login = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    
    if (response.ok) {
      const { user: userData, token } = await response.json();
      localStorage.setItem('token', token);
      setUser(userData);
      return true;
    }
    return false;
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  
  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
\`\`\`
        `,
        codeExamples: [
          `// Creating context
const MyContext = createContext();

// Provider component
function MyProvider({ children }) {
  const [value, setValue] = useState(initialValue);
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook
function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
}`
        ],
        keyPoints: [
          'Context API is perfect for sharing state across components',
          'Avoid using Context for frequently changing state',
          'Always provide a default value or check for context existence',
          'Create custom hooks for better developer experience',
          'Context can cause unnecessary re-renders if not optimized'
        ]
      },
      {
        id: 'external-libraries',
        title: 'External State Libraries',
        description: 'Explore popular external state management libraries like Redux Toolkit and Zustand.',
        estimatedTime: '15 minutes',
        difficulty: 'Advanced',
        content: `
# External State Libraries

For complex applications, external state management libraries provide powerful features and better performance.

## Redux Toolkit

Redux Toolkit is the official, opinionated way to write Redux logic:

\`\`\`jsx
// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    history: []
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.history.push(state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.push(state.value);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.history.push(state.value);
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// App.js
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

// Counter.js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const history = useSelector((state) => state.counter.history);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <p>History: {history.join(', ')}</p>
    </div>
  );
}
\`\`\`

## Zustand

Zustand is a lightweight state management library with a simple API:

\`\`\`jsx
// store/useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// Counter.js
import useStore from './store/useStore';

function Counter() {
  const { count, increment, decrement, reset } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`
    `,
    codeExamples: [
          `// Redux Toolkit slice
const slice = createSlice({
  name: 'feature',
  initialState: {},
  reducers: {
    action: (state, action) => {
      // Update state
    }
  }
});

// Zustand store
const useStore = create((set) => ({
  state: initialValue,
  actions: () => set((state) => ({ /* new state */ }))
}));`
    ],
    keyPoints: [
          'Redux Toolkit is the official Redux solution',
          'Zustand is lightweight and easy to use',
          'Choose libraries based on your app complexity',
          'External libraries provide better performance for large apps',
          'Consider learning curve and team expertise when choosing'
        ]
      }
    ]
  }
]; 