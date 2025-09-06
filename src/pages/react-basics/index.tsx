
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const ReactBasics = () => {
  return (
    <ContentLayout
      title="Introduction to React"
      section="React Basics"
      currentStep={1}
      totalSteps={6}
      prevLink="/javascript/exercise"
      nextLink="/react-basics/setup"
    >
      <div>
        <h2>What is React?</h2>
        <p className="mb-4">
          React is a JavaScript library for building user interfaces. Created by Facebook (now Meta), React has become one of the most popular frameworks for web development due to its efficiency, flexibility, and component-based architecture.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Key Features of React</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state, then compose them to make complex UIs</li>
            <li><strong>Declarative:</strong> Design simple views for each state in your application, and React efficiently updates and renders the right components when data changes</li>
            <li><strong>Virtual DOM:</strong> A lightweight representation of the real DOM for optimal rendering performance</li>
            <li><strong>JSX:</strong> A syntax extension that lets you write HTML-like code in JavaScript</li>
            <li><strong>One-way data flow:</strong> Data flows down from parent to child components, making code more predictable and easier to debug</li>
            <li><strong>Rich ecosystem:</strong> Vast collection of libraries, tools, and community support</li>
          </ul>
        </div>

        <h2>Why Learn React?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">High Demand</h3>
            <p>React developers are among the most sought-after in the industry, with competitive salaries and abundant opportunities.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">Component Reusability</h3>
            <p>Build components once and reuse them throughout your application, saving time and reducing code duplication.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">Performance</h3>
            <p>React's Virtual DOM ensures that only necessary updates reach the browser, resulting in faster rendering and better user experience.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">Ecosystem</h3>
            <p>Access to tools like Redux for state management, React Router for navigation, and frameworks like Next.js for server-side rendering.</p>
          </div>
        </div>

        <h2>React vs Vanilla JavaScript</h2>
        <p className="mb-4">
          To understand React's advantages, let's compare how you'd create a simple counter in both vanilla JavaScript and React:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div>
            <h3 className="font-medium mb-2">Vanilla JavaScript</h3>
            <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>Counter in Vanilla JS</title>
</head>
<body>
  <div>
    <h1>Counter: <span id="value">0</span></h1>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
  </div>

  <script>
    // Get DOM elements
    const valueEl = document.getElementById('value');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    
    // Initialize state
    let count = 0;
    
    // Update the DOM to reflect state
    function updateUI() {
      valueEl.textContent = count;
    }
    
    // Event handlers
    incrementBtn.addEventListener('click', function() {
      count++;
      updateUI();
    });
    
    decrementBtn.addEventListener('click', function() {
      count--;
      updateUI();
    });
  </script>
</body>
</html>`}
            </CodeBlock>
          </div>
          <div>
            <h3 className="font-medium mb-2">React</h3>
            <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function Counter() {
  // State declaration with useState hook
  const [count, setCount] = useState(0);
  
  // Event handlers
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  // Component rendering
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;`}
            </CodeBlock>
          </div>
        </div>

        <div className="bg-pink/20 p-4 rounded-lg my-4">
          <p className="font-medium">Key Differences:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>In vanilla JS, you manually select DOM elements and update them</li>
            <li>In React, you declare what the UI should look like based on the current state</li>
            <li>React automatically updates the DOM when state changes</li>
            <li>React code is more declarative and less imperative</li>
            <li>React components encapsulate both the markup and logic</li>
          </ul>
        </div>

        <h2>React Core Concepts</h2>

        <h3 className="mt-6">1. Components</h3>
        <p className="mb-4">
          Components are the building blocks of React applications. They are reusable, self-contained pieces of code that return HTML via JSX.
        </p>
        <CodeBlock language="jsx">
{`// A simple React component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
<Greeting name="World" />`}
        </CodeBlock>

        <h3 className="mt-6">2. Props</h3>
        <p className="mb-4">
          Props (short for properties) are read-only inputs to components. They allow you to pass data from parent to child components.
        </p>
        <CodeBlock language="jsx">
{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}`}
        </CodeBlock>

        <h3 className="mt-6">3. State</h3>
        <p className="mb-4">
          State is a JavaScript object that represents the parts of a component that can change. Whenever state changes, React re-renders the component.
        </p>
        <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>
      <p>This post has {likes} likes</p>
    </div>
  );
}`}
        </CodeBlock>

        <h3 className="mt-6">4. JSX</h3>
        <p className="mb-4">
          JSX is a syntax extension for JavaScript that looks similar to XML/HTML. It makes React code more readable and expressive.
        </p>
        <CodeBlock language="jsx">
{`// This JSX:
const element = (
  <div className="greeting">
    <h1>Hello, world!</h1>
    <p>Welcome to React</p>
  </div>
);

// Gets transformed to this JavaScript:
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello, world!'),
  React.createElement('p', null, 'Welcome to React')
);`}
        </CodeBlock>

        <h2>Setting Up for React Development</h2>
        <p className="mb-4">
          Before diving deeper into React, you'll need to set up your development environment. This involves:
        </p>
        <ol className="list-decimal ml-6 space-y-2 mb-6">
          <li>Installing Node.js and npm (Node Package Manager)</li>
          <li>Setting up a code editor like Visual Studio Code</li>
          <li>Learning to use terminal/command line for running React commands</li>
          <li>Creating your first React application</li>
        </ol>
        <p>
          In the following lessons, we'll guide you through these setup steps and then dive into building your first React components.
        </p>

        <h2>React in the Modern Web Ecosystem</h2>
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">React Ecosystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium mb-1">Core Libraries</h4>
              <ul className="text-sm">
                <li>React Router</li>
                <li>Redux / Context API</li>
                <li>React Query</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium mb-1">Frameworks</h4>
              <ul className="text-sm">
                <li>Next.js</li>
                <li>Gatsby</li>
                <li>Remix</li>
                <li>Create React App</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium mb-1">Build Tools</h4>
              <ul className="text-sm">
                <li>Webpack</li>
                <li>Babel</li>
                <li>ESLint</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Ready to Start with React?</h3>
          <p className="mb-4">
            In the next lesson, we'll set up Visual Studio Code, the preferred editor for React development. Then, we'll cover terminal basics and create our first React application.
          </p>
          <div className="flex justify-center">
            <a href="/react-basics/setup" className="btn-primary inline-flex items-center gap-2">
              Continue to VS Code Setup
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

export default ReactBasics;
