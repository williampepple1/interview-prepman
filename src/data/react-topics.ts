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
    content: `
# React Hooks Fundamentals

React Hooks were introduced in React 16.8 to allow functional components to use state and other React features without writing class components. This revolutionized how we write React applications.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

### Key Principles of Hooks

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call hooks from React function components or custom hooks
3. **Hooks are called in the same order every time** - This is why the rules above are important

## useState Hook

The useState hook is the most fundamental hook in React. It allows functional components to manage local state.

### Basic Usage

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

### State Updates

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

### Object State

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

## useEffect Hook

The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

### Basic Usage

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
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

### Dependency Array

The dependency array controls when the effect runs:

- **Empty array []**: Effect runs only once after the first render (like componentDidMount)
- **No array**: Effect runs after every render
- **Array with dependencies**: Effect runs when dependencies change

\`\`\`jsx
useEffect(() => {
  // Runs after every render
  console.log('Component rendered');
});

useEffect(() => {
  // Runs only once after first render
  console.log('Component mounted');
}, []);

useEffect(() => {
  // Runs when userId changes
  console.log('UserId changed:', userId);
}, [userId]);
\`\`\`

### Cleanup Function

Return a cleanup function to perform cleanup when the component unmounts or before the effect runs again:

\`\`\`jsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    
    // Cleanup function
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  
  return <div>Chat messages: {messages.length}</div>;
}
\`\`\`

## Custom Hooks

Custom hooks let you extract component logic into reusable functions. They must start with "use" and can call other hooks.

### Creating Custom Hooks

\`\`\`jsx
// useCounter.js
import { useState } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Usage
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
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

### Custom Hook for API Calls

\`\`\`jsx
// useApi.js
import { useState, useEffect } from 'react';

export function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Best Practices

### 1. Use Multiple useState Calls

Instead of one large state object, use multiple useState calls for different concerns:

\`\`\`jsx
// Good
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);

// Avoid
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});
\`\`\`

### 2. Use Functional Updates

When the new state depends on the previous state, use functional updates:

\`\`\`jsx
// Good
setCount(prevCount => prevCount + 1);

// Avoid
setCount(count + 1);
\`\`\`

### 3. Include All Dependencies

Always include all values from the component scope that change over time in the dependency array:

\`\`\`jsx
// Good
useEffect(() => {
  fetchData(userId, token);
}, [userId, token]);

// Avoid
useEffect(() => {
  fetchData(userId, token);
}, []); // Missing dependencies
\`\`\`

### 4. Use useCallback for Expensive Operations

Use useCallback to memoize functions that are passed as props:

\`\`\`jsx
import React, { useCallback } from 'react';

function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array since it doesn't depend on any props/state
  
  return <ChildComponent onClick={handleClick} />;
}
\`\`\`

## Common Pitfalls

### 1. Infinite Loops

Be careful with useEffect dependencies to avoid infinite loops:

\`\`\`jsx
// This will cause infinite loops
useEffect(() => {
  setCount(count + 1);
}, [count]); // count changes, effect runs, count changes again...

// Fix: Use functional update
useEffect(() => {
  setCount(prevCount => prevCount + 1);
}, []); // Only run once
\`\`\`

### 2. Stale Closures

Be aware of stale closures in event handlers and effects:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  // This will always log 0 due to stale closure
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count); // Always logs 0
    }, 1000);
    
    return () => clearInterval(timer);
  }, [count]);
  
  // Fix: Use functional update or include count in dependencies
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        console.log(prevCount); // Logs current count
        return prevCount + 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []); // No dependencies needed
}
\`\`\`

## Summary

React Hooks provide a powerful and flexible way to manage state and side effects in functional components. By understanding the core principles and best practices, you can write cleaner, more maintainable React code.

Key takeaways:
- useState for local state management
- useEffect for side effects and lifecycle management
- Custom hooks for reusable logic
- Always follow the Rules of Hooks
- Use functional updates when new state depends on previous state
- Include all dependencies in useEffect dependency arrays
    `,
    codeExamples: [
      `// Basic useState example
const [count, setCount] = useState(0);`,
      `// useEffect with cleanup
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`,
      `// Custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(prev => prev + 1);
  return { count, increment };
}`
    ],
    keyPoints: [
      'Hooks can only be called at the top level of React functions',
      'useState returns the current state and a function to update it',
      'useEffect handles side effects and replaces lifecycle methods',
      'Custom hooks must start with "use" and can call other hooks',
      'Always include dependencies in useEffect dependency arrays',
      'Use functional updates when new state depends on previous state'
    ]
  },
  {
    id: 'component-lifecycle',
    title: 'Component Lifecycle & Lifecycle Methods',
    category: 'Lifecycle',
    description: 'Understand React component lifecycle from mounting to unmounting. Learn about lifecycle methods and their modern hook equivalents.',
    estimatedTime: '40 minutes',
    difficulty: 'Intermediate',
    prerequisites: ['React Hooks Fundamentals', 'Class Components'],
    content: `
# Component Lifecycle & Lifecycle Methods

Understanding the React component lifecycle is crucial for building robust applications. This guide covers both class component lifecycle methods and their functional component equivalents using hooks.

## Component Lifecycle Overview

Every React component goes through three main phases:

1. **Mounting**: Component is being created and inserted into the DOM
2. **Updating**: Component is re-rendering due to props or state changes
3. **Unmounting**: Component is being removed from the DOM

## Class Component Lifecycle

### Mounting Phase

\`\`\`jsx
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    console.log('1. Constructor called');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps called');
    return null;
  }
  
  componentDidMount() {
    console.log('4. ComponentDidMount called');
    this.fetchData();
  }
  
  render() {
    console.log('3. Render called');
    return <div>{this.state.data}</div>;
  }
}
\`\`\`

### Updating Phase

\`\`\`jsx
class ExampleComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate called');
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // Return false to prevent re-render
    return this.props.id !== nextProps.id;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture information before DOM updates
    return { scrollPosition: window.scrollY };
  }
}
\`\`\`

### Unmounting Phase

\`\`\`jsx
class ExampleComponent extends React.Component {
  componentWillUnmount() {
    console.log('ComponentWillUnmount called');
    // Cleanup subscriptions, timers, etc.
    this.subscription.unsubscribe();
    clearInterval(this.timer);
  }
}
\`\`\`

## Functional Component Lifecycle with Hooks

### Mounting Phase

\`\`\`jsx
function ExampleComponent({ id }) {
  const [data, setData] = useState(null);
  
  // Equivalent to componentDidMount
  useEffect(() => {
    console.log('Component mounted');
    fetchData();
  }, []); // Empty dependency array = run once
  
  // Equivalent to constructor + getDerivedStateFromProps
  const [derivedState, setDerivedState] = useState(() => {
    // This runs only once during initialization
    return computeInitialState();
  });
  
  return <div>{data}</div>;
}
\`\`\`

### Updating Phase

\`\`\`jsx
function ExampleComponent({ id }) {
  const [data, setData] = useState(null);
  
  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log('Component updated');
    if (id) {
      fetchData(id);
    }
  }, [id]); // Run when id changes
  
  // Equivalent to shouldComponentUpdate
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]); // Only recalculate when data changes
  
  return <div>{memoizedValue}</div>;
}
\`\`\`

### Unmounting Phase

\`\`\`jsx
function ExampleComponent() {
  useEffect(() => {
    const subscription = subscribe();
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
    
    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      subscription.unsubscribe();
      clearInterval(timer);
    };
  }, []);
  
  return <div>Component</div>;
}
\`\`\`

## Lifecycle Method Comparison

| Class Component | Functional Component | Purpose |
|----------------|---------------------|---------|
| constructor | useState initializer function | Initialize state |
| componentDidMount | useEffect with empty deps | Side effects after mount |
| componentDidUpdate | useEffect with dependencies | Side effects after updates |
| componentWillUnmount | useEffect cleanup function | Cleanup before unmount |
| shouldComponentUpdate | useMemo, React.memo | Prevent unnecessary re-renders |
| getDerivedStateFromProps | useState with props | Derive state from props |

## Advanced Lifecycle Patterns

### Conditional Effects

\`\`\`jsx
function UserProfile({ userId, isVisible }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (isVisible && userId) {
      fetchUser(userId);
    }
  }, [userId, isVisible]);
  
  return isVisible ? <div>{user?.name}</div> : null;
}
\`\`\`

### Multiple Effects

\`\`\`jsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  
  // Effect for messages
  useEffect(() => {
    const messageSubscription = subscribeToMessages(roomId, setMessages);
    return () => messageSubscription.unsubscribe();
  }, [roomId]);
  
  // Effect for online users
  useEffect(() => {
    const userSubscription = subscribeToUsers(roomId, setOnlineUsers);
    return () => userSubscription.unsubscribe();
  }, [roomId]);
  
  return (
    <div>
      <div>Online: {onlineUsers.length}</div>
      <div>Messages: {messages.length}</div>
    </div>
  );
}
\`\`\`

### Effect with Cleanup

\`\`\`jsx
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty deps = only run on mount/unmount
  
  return (
    <div>
      Window size: {size.width} x {size.height}
    </div>
  );
}
\`\`\`

## Performance Optimization

### Preventing Unnecessary Re-renders

\`\`\`jsx
// Using React.memo for functional components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{expensiveRender(data)}</div>;
});

// Using useMemo for expensive calculations
function DataVisualization({ data }) {
  const processedData = useMemo(() => {
    return expensiveDataProcessing(data);
  }, [data]);
  
  return <Chart data={processedData} />;
}

// Using useCallback for stable function references
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Stable reference
  
  return <ChildComponent onClick={handleClick} />;
}
\`\`\`

## Common Lifecycle Patterns

### Data Fetching

\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        
        if (isMounted) {
          setUser(userData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    fetchUser();
    
    return () => {
      isMounted = false;
    };
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;
  
  return <div>{user.name}</div>;
}
\`\`\`

### Subscriptions

\`\`\`jsx
function RealTimeData({ dataSource }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const subscription = dataSource.subscribe(setData);
    
    return () => {
      subscription.unsubscribe();
    };
  }, [dataSource]);
  
  return <div>{data}</div>;
}
\`\`\`

## Best Practices

### 1. Use Multiple useEffect Calls

Split different concerns into separate useEffect calls:

\`\`\`jsx
// Good: Separate concerns
useEffect(() => {
  // Handle user data
}, [userId]);

useEffect(() => {
  // Handle theme changes
}, [theme]);

// Avoid: Single large effect
useEffect(() => {
  // Handle everything
}, [userId, theme, otherDeps]);
\`\`\`

### 2. Include All Dependencies

Always include all values from the component scope that change over time:

\`\`\`jsx
// Good
useEffect(() => {
  fetchData(userId, token);
}, [userId, token]);

// Avoid
useEffect(() => {
  fetchData(userId, token);
}, []); // Missing dependencies
\`\`\`

### 3. Use Cleanup Functions

Always clean up subscriptions, timers, and event listeners:

\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => clearInterval(timer);
}, []);
\`\`\`

### 4. Avoid Infinite Loops

Be careful with dependencies to prevent infinite loops:

\`\`\`jsx
// This causes infinite loops
useEffect(() => {
  setCount(count + 1);
}, [count]);

// Fix: Use functional update
useEffect(() => {
  setCount(prev => prev + 1);
}, []); // Only run once
\`\`\`

## Summary

Understanding React component lifecycle is essential for building robust applications. While class components use lifecycle methods, functional components use hooks to achieve the same functionality with more flexibility and better performance.

Key takeaways:
- Components go through mounting, updating, and unmounting phases
- useEffect replaces most lifecycle methods in functional components
- Always clean up subscriptions and timers in useEffect cleanup functions
- Use multiple useEffect calls to separate different concerns
- Include all dependencies in useEffect dependency arrays
- Use React.memo, useMemo, and useCallback for performance optimization
    `,
    codeExamples: [
      `// Class component lifecycle
componentDidMount() {
  this.fetchData();
}`,
      `// Functional component equivalent
useEffect(() => {
  fetchData();
}, []);`,
      `// Cleanup function
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`
    ],
    keyPoints: [
      'Components go through mounting, updating, and unmounting phases',
      'useEffect replaces most lifecycle methods in functional components',
      'Always clean up subscriptions and timers in useEffect cleanup functions',
      'Use multiple useEffect calls to separate different concerns',
      'Include all dependencies in useEffect dependency arrays',
      'React.memo, useMemo, and useCallback help optimize performance'
    ]
  }
]; 