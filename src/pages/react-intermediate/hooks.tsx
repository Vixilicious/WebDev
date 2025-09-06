
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const ReactHooks = () => {
  return (
    <ContentLayout
      title="React Hooks"
      section="React Intermediate"
      currentStep={2}
      totalSteps={6}
      prevLink="/react-intermediate"
      nextLink="/react-intermediate/structure"
    >
      <div>
        <h2>Introduction to React Hooks</h2>
        <p className="mb-4">
          React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 as a way to use stateful logic without writing class components.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Why Hooks?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Problems Hooks Solve:</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Complex components become hard to understand</li>
                <li>Classes confuse both people and machines</li>
                <li>Reusing stateful logic between components is difficult</li>
                <li>Related code is split in different lifecycle methods</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-1">Benefits of Hooks:</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Extract and reuse stateful logic without changing component hierarchy</li>
                <li>Split components into smaller, more focused functions</li>
                <li>Use more React features without classes</li>
                <li>Group related code together (by concern, not lifecycle)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Core Hooks</h2>
        <p className="mb-4">
          React provides a set of built-in hooks that cover most common use cases. Let's explore each one in detail:
        </p>

        <h3 className="mt-6">useState (Review)</h3>
        <p className="mb-4">
          We've already covered <code>useState</code> in the previous lesson, but let's quickly refresh:
        </p>

        <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`}
        </CodeBlock>

        <h3 className="mt-6">useEffect</h3>
        <p className="mb-4">
          The <code>useEffect</code> hook lets you perform side effects in function components. It's similar to lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> combined.
        </p>

        <CodeBlock language="jsx">
{`import React, { useState, useEffect } from 'react';

function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    // This code runs after every render
    console.log('Component rendered');
    
    // Setup event listener (similar to componentDidMount)
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Return a cleanup function (similar to componentWillUnmount)
    return () => {
      console.log('Cleaning up event listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  
  return (
    <div>
      <p>Window width: {windowWidth}px</p>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="mt-4">useEffect Dependency Array</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h5 className="font-medium mb-1">No Dependency Array</h5>
            <CodeBlock language="jsx">
{`useEffect(() => {
  // Runs after EVERY render
  console.log('Component updated');
});`}
            </CodeBlock>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h5 className="font-medium mb-1">Empty Array</h5>
            <CodeBlock language="jsx">
{`useEffect(() => {
  // Runs ONCE after initial render
  console.log('Component mounted');
}, []);`}
            </CodeBlock>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h5 className="font-medium mb-1">With Dependencies</h5>
            <CodeBlock language="jsx">
{`useEffect(() => {
  // Runs when count changes
  console.log('Count changed:', count);
}, [count]);`}
            </CodeBlock>
          </div>
        </div>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="font-medium">⚠️ Important:</p>
          <p>
            Always include all values from the component scope that change over time and are used by the effect in the dependencies array. This includes props, state, and functions defined in the component body.
          </p>
        </div>

        <h4 className="mt-4">Common useEffect Use Cases</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <h5 className="font-medium mb-2">Data Fetching</h5>
            <CodeBlock language="jsx">
{`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          \`https://api.example.com/users/\${userId}\`
        );
        
        if (!response.ok) {
          throw new Error('User not found');
        }
        
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [userId]); // Re-run when userId changes
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return null;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}`}
            </CodeBlock>
          </div>
          <div>
            <h5 className="font-medium mb-2">Subscriptions & Event Listeners</h5>
            <CodeBlock language="jsx">
{`function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // Connect to the chat room
    console.log(\`Connecting to room \${roomId}...\`);
    const connection = createConnection(roomId);
    connection.connect();
    
    // Setup message listener
    connection.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });
    
    // Cleanup function
    return () => {
      console.log(\`Disconnecting from room \${roomId}...\`);
      connection.disconnect();
    };
  }, [roomId]); // Reconnect if roomId changes
  
  return (
    <div>
      <h2>Room: {roomId}</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
}`}
            </CodeBlock>
          </div>
        </div>

        <h3 className="mt-6">useContext</h3>
        <p className="mb-4">
          The <code>useContext</code> hook lets you subscribe to React context without introducing nesting. It's a way to share values between components without explicitly passing props through every level.
        </p>

        <CodeBlock language="jsx">
{`// 1. Create a context
const ThemeContext = React.createContext('light');

// 2. Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // The value provided to consumers
  const value = {
    theme,
    toggleTheme
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create a consumer component using useContext
function ThemedButton() {
  // Get context value
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        padding: '10px 15px',
        border: '1px solid #ccc'
      }}
    >
      Current theme: {theme}
    </button>
  );
}

// 4. Use the provider to make context available
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Context Example</h1>
        <ThemedButton />
        <OtherComponents />
      </div>
    </ThemeProvider>
  );
}`}
        </CodeBlock>

        <div className="bg-pink/20 p-4 rounded-lg my-4">
          <p className="font-medium">💡 Pro Tip:</p>
          <p>
            Use Context for global state that doesn't change often (like themes, user authentication, or preferences). For frequently changing state with many updates, consider using a more specialized state management solution.
          </p>
        </div>

        <h3 className="mt-6">useReducer</h3>
        <p className="mb-4">
          The <code>useReducer</code> hook is an alternative to useState that's better suited for managing complex state logic.
        </p>

        <CodeBlock language="jsx">
{`import React, { useReducer } from 'react';

// Reducer function defines how state updates in response to actions
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'set':
      return { count: action.payload };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  // useReducer returns current state and a dispatch function
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'set', payload: 10 })}>
        Set to 10
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="mt-4">When to Use useReducer vs useState</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div>
            <h5 className="font-medium mb-2">Use useState when:</h5>
            <ul className="list-disc ml-6 space-y-1">
              <li>State is simple (primitive values)</li>
              <li>Few state transitions</li>
              <li>No complex logic between state updates</li>
              <li>State is updated in only a few places</li>
              <li>Team is more familiar with useState</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Use useReducer when:</h5>
            <ul className="list-disc ml-6 space-y-1">
              <li>State is complex (objects, nested values)</li>
              <li>Many related state transitions</li>
              <li>Complex logic for state updates</li>
              <li>Next state depends on previous state</li>
              <li>Actions need to be reused across components</li>
              <li>Testing state transitions is important</li>
            </ul>
          </div>
        </div>

        <h3 className="mt-6">useRef</h3>
        <p className="mb-4">
          The <code>useRef</code> hook provides a way to create a mutable reference that persists across renders. It has two common use cases:
        </p>
        <ol className="list-decimal ml-6 space-y-2 mb-4">
          <li>Accessing DOM elements directly</li>
          <li>Keeping a mutable value that doesn't trigger re-renders when changed</li>
        </ol>

        <CodeBlock language="jsx">
{`import React, { useRef, useEffect } from 'react';

function TextInputWithFocus() {
  // Create a ref
  const inputRef = useRef(null);
  
  // Focus the input on mount
  useEffect(() => {
    // Current points to the mounted DOM element
    inputRef.current.focus();
  }, []);
  
  return (
    <div>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="I'll be focused on mount" 
      />
    </div>
  );
}

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Use useRef to store the interval ID
  const intervalRef = useRef(null);
  // Use useRef to track previous values without re-rendering
  const previousTimeRef = useRef(0);
  
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 0.1);
      }, 100);
    }
    
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);
  
  useEffect(() => {
    previousTimeRef.current = time;
  }, [time]);
  
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  
  return (
    <div>
      <p>Current time: {time.toFixed(1)}s</p>
      <p>Previous recorded time: {previousTimeRef.current.toFixed(1)}s</p>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}`}
        </CodeBlock>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="font-medium">⚠️ Important:</p>
          <p>
            Changing <code>ref.current</code> doesn't trigger a re-render, which makes refs perfect for values that need to persist across renders without affecting the UI. However, this also means you shouldn't use refs for values that should cause your component to re-render when they change.
          </p>
        </div>

        <h3 className="mt-6">useMemo and useCallback</h3>
        <p className="mb-4">
          These hooks are optimization hooks that help prevent unnecessary calculations and re-renders.
        </p>

        <h4 className="mt-4">useMemo</h4>
        <p className="mb-2">
          <code>useMemo</code> memoizes a computed value, recalculating it only when dependencies change:
        </p>

        <CodeBlock language="jsx">
{`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ numbers }) {
  // Without memoization, this would recalculate on every render
  const sum = useMemo(() => {
    console.log('Computing sum...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // Only recompute when numbers array changes
  
  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
}

function App() {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <ExpensiveCalculation numbers={numbers} />
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}`}
        </CodeBlock>

        <h4 className="mt-4">useCallback</h4>
        <p className="mb-2">
          <code>useCallback</code> returns a memoized version of a callback function that only changes if one of the dependencies has changed:
        </p>

        <CodeBlock language="jsx">
{`import React, { useState, useCallback } from 'react';

// Child component using React.memo for optimization
const Button = React.memo(function Button({ onClick, children }) {
  console.log(\`Rendering Button: \${children}\`);
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {children}
    </button>
  );
});

function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);
  
  // Without useCallback, this function would be recreated on every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // No dependencies, function never changes
  
  // This function depends on count, so it updates when count changes
  const incrementBy = useCallback((amount) => {
    setCount(c => c + amount);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <div className="flex gap-2 my-2">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={() => incrementBy(5)}>Increment by 5</Button>
      </div>
      <div className="mt-4">
        <button 
          onClick={() => setOtherState(!otherState)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Toggle other state: {otherState ? 'ON' : 'OFF'}
        </button>
        <p className="text-sm">
          (This button updates unrelated state to demonstrate re-renders)
        </p>
      </div>
    </div>
  );
}`}
        </CodeBlock>

        <div className="bg-pink/20 p-4 rounded-lg my-4">
          <p className="font-medium">💡 Pro Tip:</p>
          <p>
            Only use <code>useMemo</code> and <code>useCallback</code> when there's a measurable performance benefit. Premature optimization can make your code more complex without providing real benefits. Focus on these cases:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Expensive calculations</li>
            <li>Preventing unnecessary re-renders in child components</li>
            <li>Stabilizing dependencies for other hooks like useEffect</li>
          </ul>
        </div>

        <h2>Custom Hooks</h2>
        <p className="mb-4">
          One of the most powerful features of hooks is the ability to create your own custom hooks. This allows you to extract component logic into reusable functions.
        </p>

        <h3 className="mt-6">Creating Custom Hooks</h3>
        <p className="mb-2">
          Custom hooks are JavaScript functions that start with "use" and can call other hooks. Here are some examples:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div>
            <h4 className="font-medium mb-2">useLocalStorage</h4>
            <CodeBlock language="jsx">
{`import { useState, useEffect } from 'react';

// Custom hook for persisting state in localStorage
function useLocalStorage(key, initialValue) {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // Return a wrapped version of useState's setter function
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Bob');
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}`}
            </CodeBlock>
          </div>
          <div>
            <h4 className="font-medium mb-2">useFetch</h4>
            <CodeBlock language="jsx">
{`import { useState, useEffect } from 'react';

// Custom hook for data fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Reset states
    setLoading(true);
    setData(null);
    setError(null);
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users/1'
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
}`}
            </CodeBlock>
          </div>
        </div>

        <h3 className="mt-6">More Custom Hook Examples</h3>
        <div className="border rounded-lg p-4 my-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">useMediaQuery</h4>
          <CodeBlock language="jsx">
{`import { useState, useEffect } from 'react';

// Hook for responsive design
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Update the state initially and when media query match changes
    const updateMatches = () => setMatches(media.matches);
    updateMatches();
    
    // Listen for changes
    media.addEventListener('change', updateMatches);
    
    // Cleanup
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [query]);
  
  return matches;
}

// Usage
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div>
      <h1>{isMobile ? 'Mobile View' : 'Desktop View'}</h1>
      {isMobile ? (
        <MobileNavigation />
      ) : (
        <DesktopNavigation />
      )}
    </div>
  );
}`}
          </CodeBlock>
        </div>

        <div className="border rounded-lg p-4 my-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">useForm</h4>
          <CodeBlock language="jsx">
{`import { useState } from 'react';

// Hook for form handling
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched({
      ...touched,
      [name]: true
    });
  };
  
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);
    
    // If no errors, call the callback
    if (Object.keys(errors).length === 0) {
      callback(values);
    }
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };
  
  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
    setErrors
  };
}

// Usage
function SignupForm() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched
  } = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const validateForm = () => {
    // Implement your validation logic here
  };
  
  const onSubmit = (formData) => {
    console.log('Form submitted with:', formData);
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>
      
      {/* Additional form fields */}
      
      <button type="submit">Sign Up</button>
    </form>
  );
}`}
          </CodeBlock>
        </div>

        <h2>Rules of Hooks</h2>
        <p className="mb-4">
          To ensure hooks work correctly, you must follow two important rules:
        </p>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Hook Rules</h3>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <p className="font-medium">Only Call Hooks at the Top Level</p>
              <p>Don't call hooks inside loops, conditions, or nested functions. This ensures hooks are called in the same order each time a component renders.</p>
              <div className="bg-white p-2 rounded mt-2 border-l-4 border-red-500">
                <CodeBlock language="jsx">
{`// ❌ BAD: Hooks inside conditions
function Example() {
  const [count, setCount] = useState(0);
  
  if (count > 0) {
    // This breaks the rules!
    useEffect(() => {
      document.title = \`Count: \${count}\`;
    });
  }
}`}
                </CodeBlock>
              </div>
              <div className="bg-white p-2 rounded mt-2 border-l-4 border-green-500">
                <CodeBlock language="jsx">
{`// ✅ GOOD: All hooks at the top level
function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Condition inside the hook is fine
    if (count > 0) {
      document.title = \`Count: \${count}\`;
    }
  }, [count]);
}`}
                </CodeBlock>
              </div>
            </li>
            <li>
              <p className="font-medium">Only Call Hooks from React Functions</p>
              <p>Only call hooks from React function components or custom hooks. Don't call them from regular JavaScript functions or class components.</p>
              <div className="bg-white p-2 rounded mt-2">
                <CodeBlock language="jsx">
{`// ✅ GOOD: Hooks in function components
function Example() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}

// ✅ GOOD: Hooks in custom hooks
function useCustomHook() {
  const [value, setValue] = useState(0);
  return value;
}

// ❌ BAD: Hooks in regular functions
function normalFunction() {
  // This breaks the rules!
  const [count, setCount] = useState(0);
}`}
                </CodeBlock>
              </div>
            </li>
          </ol>
        </div>

        <h2>Advanced Hook Patterns</h2>
        <p className="mb-4">
          As you become more comfortable with hooks, you can explore more advanced patterns:
        </p>

        <h3 className="mt-6">Composition of Hooks</h3>
        <p className="mb-2">
          Custom hooks can use other hooks, allowing you to compose complex behavior:
        </p>

        <CodeBlock language="jsx">
{`// Compose multiple hooks into a single custom hook
function useUserProfile(userId) {
  const { data: user, loading: userLoading, error: userError } = 
    useFetch(\`https://api.example.com/users/\${userId}\`);
    
  const { data: posts, loading: postsLoading, error: postsError } = 
    useFetch(user ? \`https://api.example.com/users/\${userId}/posts\` : null);
  
  // Use localStorage to store the last visited user
  const [lastVisited, setLastVisited] = useLocalStorage('lastVisitedUser', null);
  
  // Update last visited user
  useEffect(() => {
    if (user && !userLoading) {
      setLastVisited(userId);
    }
  }, [userId, user, userLoading, setLastVisited]);
  
  return {
    user,
    posts,
    lastVisited,
    loading: userLoading || postsLoading,
    error: userError || postsError
  };
}

// Usage
function UserProfilePage({ userId }) {
  const { 
    user, 
    posts, 
    lastVisited, 
    loading, 
    error 
  } = useUserProfile(userId);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Last visited user ID: {lastVisited}</p>
      
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
        </CodeBlock>

        <h3 className="mt-6">useReducer with useContext</h3>
        <p className="mb-2">
          Combine <code>useReducer</code> with <code>useContext</code> for a lightweight Redux-like state management solution:
        </p>

        <CodeBlock language="jsx">
{`// 1. Create context
const TodoContext = React.createContext();

// 2. Create reducer
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

// 3. Create context provider
function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: []
  });
  
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// 4. Custom hook to use the context
function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}

// 5. Components using the context
function AddTodo() {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList() {
  const { state, dispatch } = useTodo();
  
  return (
    <ul>
      {state.todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          <span onClick={() => dispatch({
            type: 'TOGGLE_TODO',
            payload: todo.id
          })}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({
            type: 'DELETE_TODO',
            payload: todo.id
          })}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// 6. Top-level app with provider
function App() {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}`}
        </CodeBlock>

        <h2>Next Steps</h2>
        <p className="mb-4">
          Now that you understand React hooks, you have a powerful set of tools to build and organize your React applications. In the next lesson, we'll explore React project folder structures and organization patterns to help you build maintainable applications.
        </p>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Continue Learning</h3>
          <p className="mb-4">
            Ready to learn about organizing your React code? Move on to the next lesson where we'll explore different project folder structures and organization patterns.
          </p>
          <div className="flex justify-center">
            <a href="/react-intermediate/structure" className="btn-primary inline-flex items-center gap-2">
              Continue to Folder Structure
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ReactHooks;
