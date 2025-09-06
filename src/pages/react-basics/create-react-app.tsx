
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const CreateReactApp = () => {
  return (
    <ContentLayout
      title="Creating Your First React App"
      section="React Basics"
      currentStep={4}
      totalSteps={6}
      prevLink="/react-basics/terminal"
      nextLink="/react-basics/components"
    >
      <div>
        <h2>Getting Started with Create React App</h2>
        <p>
          Create React App (CRA) is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">What Does Create React App Do?</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Creates a project structure with best practices</li>
            <li>Sets up a development server with hot reloading</li>
            <li>Includes build scripts for development and production</li>
            <li>Configures testing tools</li>
            <li>Includes support for modern JavaScript features</li>
            <li>Handles CSS, images, fonts, and other assets</li>
            <li>Optimizes your app for production</li>
          </ul>
        </div>

        <h2>Creating a New React Application</h2>
        <p>
          To create a new React application, you can use either npx (recommended) or npm:
        </p>

        <CodeBlock language="bash">
{`# Using npx (recommended)
npx create-react-app my-react-app

# OR using npm
npm init react-app my-react-app

# OR using Yarn
yarn create react-app my-react-app`}
        </CodeBlock>

        <p className="mt-4">
          This will create a directory called <code>my-react-app</code> with a complete React application setup. Once the installation is complete, you'll see instructions for the next steps:
        </p>

        <div className="border rounded-lg p-4 my-4 bg-gray-800 text-gray-100 font-mono text-sm overflow-auto">
          <p>Success! Created my-react-app at /path/to/my-react-app</p>
          <p>Inside that directory, you can run several commands:</p>
          <p className="mt-2">
            <span className="text-green-400">npm start</span>
            <br />
            Starts the development server.
          </p>
          <p className="mt-2">
            <span className="text-green-400">npm test</span>
            <br />
            Starts the test runner.
          </p>
          <p className="mt-2">
            <span className="text-green-400">npm run build</span>
            <br />
            Bundles the app into static files for production.
          </p>
          <p className="mt-2">
            <span className="text-green-400">npm run eject</span>
            <br />
            Removes this tool and copies build dependencies, configuration files
            and scripts into the app directory.
          </p>
          <p className="mt-4">
            We suggest that you begin by typing:
          </p>
          <p className="mt-2">
            <span className="text-yellow-400">cd my-react-app</span>
            <br />
            <span className="text-yellow-400">npm start</span>
          </p>
        </div>

        <h2>The Project Structure</h2>
        <p>
          Let's take a look at the project structure that Create React App generates:
        </p>

        <div className="border rounded-lg p-4 my-4 bg-gray-800 text-gray-100 font-mono text-sm overflow-auto">
          <pre>{`my-react-app/
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── .gitignore
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   └── robots.txt
  └── src/
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── reportWebVitals.js
      └── setupTests.js`}</pre>
        </div>

        <p className="mt-4">Let's review the key files and directories:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold mb-2">package.json</h3>
            <p className="text-sm">
              Contains dependencies and scripts needed for your project.
            </p>
          </div>
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold mb-2">public/index.html</h3>
            <p className="text-sm">
              The HTML template for your app. React will inject your components into the <code>div</code> with id "root".
            </p>
          </div>
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold mb-2">src/index.js</h3>
            <p className="text-sm">
              The JavaScript entry point where React is initialized and the main App component is rendered.
            </p>
          </div>
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold mb-2">src/App.js</h3>
            <p className="text-sm">
              The main component of your application. This is where you'll start building your UI.
            </p>
          </div>
        </div>

        <h2>Running Your React Application</h2>
        <p>
          To start your React application, navigate to the project directory and run the start script:
        </p>

        <CodeBlock language="bash">
{`cd my-react-app
npm start`}
        </CodeBlock>

        <p className="mt-4">
          This will start the development server and open your application in a browser window, usually at <code>http://localhost:3000/</code>. The page will automatically reload if you make changes to the code.
        </p>

        <div className="bg-pink/20 p-4 rounded-lg my-4">
          <p className="font-medium">💡 Hot Reloading:</p>
          <p>
            Create React App includes "hot reloading", which means that when you make changes to your code, the application will automatically refresh to show those changes without losing the current state.
          </p>
        </div>

        <h2>Understanding the Default React App</h2>
        <p>
          Let's look at the main files that make up the default React application:
        </p>

        <h3>public/index.html</h3>
        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!-- This is where your React app will be mounted -->
  </body>
</html>`}
        </CodeBlock>

        <h3>src/index.js</h3>
        <CodeBlock language="javascript">
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();`}
        </CodeBlock>

        <h3>src/App.js</h3>
        <CodeBlock language="javascript">
{`import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;`}
        </CodeBlock>

        <h2>Making Your First Changes</h2>
        <p>
          Let's modify the default application to create something of our own. Open <code>src/App.js</code> and replace its contents with the following:
        </p>

        <CodeBlock language="javascript">
{`import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
        <div className="counter">
          <h2>Counter: {count}</h2>
          <div className="buttons">
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
          </div>
        </div>
        <p>
          Edit <code>src/App.js</code> to make more changes.
        </p>
      </header>
    </div>
  );
}

export default App;`}
        </CodeBlock>

        <p className="mt-4">
          Let's also update the CSS to style our counter. Open <code>src/App.css</code> and add the following at the end:
        </p>

        <CodeBlock language="css">
{`.counter {
  margin: 20px 0;
  padding: 20px;
  background-color: #282c34;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}

button {
  padding: 8px 16px;
  font-size: 18px;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  color: #282c34;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #21a1c9;
}`}
        </CodeBlock>

        <p className="mt-4">
          Save both files, and you should see your changes reflected immediately in the browser. You have now created a simple counter app with React!
        </p>

        <h2>Building for Production</h2>
        <p>
          When you're ready to deploy your application, you can create an optimized production build by running:
        </p>

        <CodeBlock language="bash">
          npm run build
        </CodeBlock>

        <p className="mt-4">
          This command creates a <code>build</code> directory with a production build of your app. The files in this directory are optimized and minified, making them ready for deployment to a web server.
        </p>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="font-medium">📦 Deployment Options:</p>
          <p>
            After building your app, you can deploy it to various platforms:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Static hosting services like Netlify, Vercel, or GitHub Pages</li>
            <li>Cloud providers like AWS, Google Cloud, or Azure</li>
            <li>Traditional web servers by copying the build folder</li>
          </ul>
        </div>

        <ExerciseBlock title="Practice Exercise: Create a Todo List App">
          <p>
            Let's create a simple todo list application using React. This will help you practice the concepts you've learned so far.
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new React app called "todo-list-app"</li>
            <li>Replace the content of App.js with a todo list component</li>
            <li>Add the ability to add, toggle, and remove todos</li>
          </ol>
          
          <p className="mt-4">
            Here's the solution for <code>App.js</code>:
          </p>
          
          <CodeBlock language="javascript">
{`import React, { useState } from 'react';
import './App.css';

function App() {
  // State for todo list and input value
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Style the application', completed: false }
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  // Generate a unique ID (in a real app, you might use a library for this)
  const generateId = () => Math.floor(Math.random() * 100000);

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;
    
    const newTodo = {
      id: generateId(),
      text: newTodoText,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Remove a todo
  const removeTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <div className="todo-app">
        <h1>Todo List</h1>
        
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button type="submit">Add Todo</button>
        </form>
        
        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="empty-message">No todos yet! Add one above.</li>
          ) : (
            todos.map(todo => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="todo-text">{todo.text}</span>
                <button 
                  className="delete-btn"
                  onClick={() => removeTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
        
        <div className="todo-stats">
          <span>{todos.filter(todo => !todo.completed).length} items left</span>
        </div>
      </div>
    </div>
  );
}

export default App;`}
          </CodeBlock>
          
          <p className="mt-4">
            And here's the CSS for <code>App.css</code>:
          </p>
          
          <CodeBlock language="css">
{`.App {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.todo-app {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  padding: 20px;
}

h1 {
  color: #333;
  margin-top: 0;
}

.todo-form {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #388e3c;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}

.todo-text {
  flex: 1;
  margin-left: 10px;
  text-align: left;
}

li.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  background-color: #f44336;
  margin-left: 10px;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

.todo-stats {
  margin-top: 15px;
  color: #666;
  font-size: 0.9em;
  text-align: left;
}

.empty-message {
  color: #888;
  font-style: italic;
}`}
          </CodeBlock>
        </ExerciseBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">What's Next?</h3>
          <p className="mb-4">
            Now that you've created your first React application, it's time to learn more about React components and props - the fundamental building blocks for creating more complex React applications.
          </p>
          <div className="flex justify-center">
            <a href="/react-basics/components" className="btn-primary inline-flex items-center gap-2">
              Continue to Components & Props
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

export default CreateReactApp;
