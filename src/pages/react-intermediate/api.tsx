
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const ReactAPI = () => {
  return (
    <ContentLayout
      title="API Connection with React"
      section="React Intermediate"
      currentStep={5}
      totalSteps={6}
      prevLink="/react-intermediate/forms"
      nextLink="/react-intermediate/project"
    >
      <div>
        <h2>Fetching Data in React Applications</h2>
        <p className="mb-4">
          Modern React applications often need to interact with APIs to fetch, create, update, or delete data. Let's explore different approaches for connecting your React application to APIs.
        </p>

        <h2>Using useEffect with fetch API and Async/Await</h2>
        <p className="mb-4">
          The most basic way to fetch data in React is using the <code>useEffect</code> hook combined with the browser's native <code>fetch</code> API and async/await syntax.
        </p>

        <CodeBlock language="jsx">
{`import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an async function inside useEffect
    async function fetchUserData() {
      try {
        setLoading(true);
        // Fetch the data
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        
        // Check if the request was successful
        if (!response.ok) {
          throw new Error(\`API error: \${response.status}\`);
        }
        
        // Parse the JSON response
        const data = await response.json();
        
        // Update state with the fetched data
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    
    // Call the async function
    fetchUserData();
    
    // Optional: Return a cleanup function
    return () => {
      // Cancel any pending operations if the component unmounts
      // (For fetch API, we could use AbortController, but that's omitted for simplicity)
    };
  }, [userId]); // Re-run effect when userId changes
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data found</div>;
  
  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Render more user details */}
    </div>
  );
}`}
        </CodeBlock>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Important Notes:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>You cannot make <code>useEffect</code> callback directly async; instead, define an async function inside it.</li>
            <li>Always handle loading states and errors when working with APIs.</li>
            <li>Add appropriate dependencies to the <code>useEffect</code> dependency array.</li>
            <li>Consider implementing cleanup to avoid memory leaks or race conditions.</li>
          </ul>
        </div>

        <h2>Using Axios for API Requests</h2>
        <p className="mb-4">
          Axios is a popular HTTP client that provides a more powerful and flexible way to make API requests compared to the native fetch API.
        </p>

        <CodeBlock language="jsx">
{`import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an axios instance with default config
    const api = axios.create({
      baseURL: 'https://api.example.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${localStorage.getItem('token')}\`
      }
    });
    
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await api.get('/products');
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
    
    // Cleanup function
    return () => {
      // Axios provides a way to cancel requests
      // This is omitted for brevity
    };
  }, []);
  
  // Component rendering logic
  // ...
}`}
        </CodeBlock>

        <h2>React Query for Data Fetching</h2>
        <p className="mb-4">
          React Query is a library that provides hooks for fetching, caching, and updating asynchronous data in React. It simplifies many common data fetching patterns and reduces boilerplate code.
        </p>

        <CodeBlock language="jsx">
{`import React from 'react';
import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

// Create a client
const queryClient = new QueryClient();

// API functions
const fetchPosts = async () => {
  const response = await axios.get('https://api.example.com/posts');
  return response.data;
};

const createPost = async (newPost) => {
  const response = await axios.post('https://api.example.com/posts', newPost);
  return response.data;
};

// Root component with provider
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}

// Component that uses React Query
function Posts() {
  // Fetch posts with useQuery
  const { 
    data: posts, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
  
  // Create a new post with useMutation
  const { 
    mutate: addPost,
    isPending: isCreating
  } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch posts after a successful creation
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  
  // Form state for new post
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle('');
    setContent('');
  };
  
  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error loading posts: {error.message}</div>;
  
  return (
    <div>
      <h1>Posts</h1>
      
      {/* Post list */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      
      {/* New post form */}
      <form onSubmit={handleSubmit}>
        <h2>Add New Post</h2>
        <div>
          <label>Title:</label>
          <input 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea 
            value={content} 
            onChange={e => setContent(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" disabled={isCreating}>
          {isCreating ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}`}
        </CodeBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Benefits of React Query:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Automatic caching:</strong> Results are cached by default, improving performance</li>
            <li><strong>Automatic refetching:</strong> Data is refreshed when the user refocuses the window or reconnects</li>
            <li><strong>Pagination and infinite scrolling:</strong> Built-in support for common data fetching patterns</li>
            <li><strong>Background updates:</strong> Updates data in the background without disrupting the user experience</li>
            <li><strong>Optimistic updates:</strong> Updates the UI immediately before the server confirms the change</li>
            <li><strong>Server state synchronization:</strong> Keeps client and server state in sync</li>
          </ul>
        </div>

        <h2>Handling Loading and Error States</h2>
        <p className="mb-4">
          Properly handling loading and error states is crucial for creating a good user experience:
        </p>

        <CodeBlock language="jsx">
{`import React from 'react';
import { useQuery } from '@tanstack/react-query';

function DataDisplay({ queryFn, queryKey }) {
  const { 
    data,
    isLoading,
    isFetching,
    isError,
    error
  } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });

  return (
    <div className="data-container">
      {/* Loading state */}
      {isLoading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading data...</p>
        </div>
      )}
      
      {/* Error state */}
      {isError && (
        <div className="error-state">
          <h3>Something went wrong</h3>
          <p>{error.message || 'Unknown error'}</p>
          <button onClick={() => queryClient.invalidateQueries({ queryKey })}>
            Try again
          </button>
        </div>
      )}
      
      {/* Success state with background refetch indicator */}
      {data && (
        <div className="data-view">
          {isFetching && <div className="refresh-indicator" />}
          
          {/* Render your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}`}
        </CodeBlock>

        <h2>Authentication with APIs</h2>
        <p className="mb-4">
          Handling authentication when connecting to APIs often involves managing tokens and authenticated requests:
        </p>

        <CodeBlock language="jsx">
{`import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create an auth context
const AuthContext = createContext(null);

// Auth provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Setup axios interceptors for authentication
  useEffect(() => {
    // Setup request interceptor to add token to all requests
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = \`Bearer \${token}\`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Setup response interceptor to handle auth errors
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // Handle 401 Unauthorized errors
        if (error.response && error.response.status === 401) {
          // Clear user data and redirect to login
          logout();
          // Redirect to login page
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );

    // Attempt to get user data if token exists
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get('https://api.example.com/me');
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
          logout();
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUser();

    // Cleanup interceptors on unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token]);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('https://api.example.com/login', {
        email,
        password,
      });
      
      const { token, user } = response.data;
      
      // Save token and user data
      localStorage.setItem('token', token);
      setToken(token);
      setUser(user);
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Auth context value
  const value = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading authentication...</div>}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}`}
        </CodeBlock>

        <h2>Real-time Data with WebSockets</h2>
        <p className="mb-4">
          For applications that require real-time updates, WebSockets provide a persistent connection between client and server:
        </p>

        <CodeBlock language="jsx">
{`import React, { useState, useEffect, useRef } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [connected, setConnected] = useState(false);
  const socketRef = useRef(null);

  // Connect to WebSocket when component mounts
  useEffect(() => {
    // Create WebSocket connection
    socketRef.current = new WebSocket('wss://api.example.com/chat');

    // Connection opened
    socketRef.current.addEventListener('open', (event) => {
      console.log('Connected to the chat server');
      setConnected(true);
    });

    // Listen for messages
    socketRef.current.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    });

    // Connection closed
    socketRef.current.addEventListener('close', (event) => {
      console.log('Disconnected from the chat server');
      setConnected(false);
    });

    // Connection error
    socketRef.current.addEventListener('error', (event) => {
      console.error('WebSocket error:', event);
      setConnected(false);
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  // Send a message
  const sendMessage = (e) => {
    e.preventDefault();
    
    if (input.trim() && socketRef.current && connected) {
      const message = {
        text: input.trim(),
        sender: 'me',
        timestamp: new Date().toISOString(),
      };
      
      socketRef.current.send(JSON.stringify(message));
      setInput('');
    }
  };

  return (
    <div className="chat-app">
      <div className="status-bar">
        Status: {connected ? 'Connected' : 'Disconnected'}
      </div>
      
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={\`message \${msg.sender === 'me' ? 'sent' : 'received'}\`}
          >
            <span className="message-text">{msg.text}</span>
            <span className="message-time">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
      
      <form onSubmit={sendMessage} className="message-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          disabled={!connected}
        />
        <button type="submit" disabled={!connected || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}`}
        </CodeBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Ready to Practice?</h3>
          <p className="mb-4">
            In the next lesson, we'll bring all these concepts together in a final project where you'll build a complete React application with API connectivity.
          </p>
          <div className="flex justify-center">
            <a href="/react-intermediate/project" className="btn-primary inline-flex items-center gap-2">
              Continue to Final Project
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

export default ReactAPI;
