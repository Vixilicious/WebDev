
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const ReactComponents = () => {
  return (
    <ContentLayout
      title="React Components & Props"
      section="React Basics"
      currentStep={5}
      totalSteps={6}
      prevLink="/react-basics/create-react-app"
      nextLink="/react-basics/exercise"
    >
      <div>
        <h2>Understanding React Components</h2>
        <p>
          Components are the building blocks of React applications. A component is a reusable piece of code that returns HTML via JSX. Components help you split the UI into independent, reusable pieces, and think about each piece in isolation.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Components Let You:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Break down complex UIs into manageable pieces</li>
            <li>Reuse UI elements across your application</li>
            <li>Keep your code organized and maintainable</li>
            <li>Think about each part of your UI in isolation</li>
            <li>Compose simple components to create complex interfaces</li>
          </ul>
        </div>

        <h2>Types of React Components</h2>
        <p>
          React provides two ways to create components: Function Components and Class Components. While class components were the standard way to create React components in the past, function components with Hooks are now the recommended approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div>
            <h3 className="font-medium mb-2">Function Components</h3>
            <CodeBlock language="jsx">
{`import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using arrow function syntax
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Simplified arrow function (implicit return)
const Greeting = (props) => <h1>Hello, {props.name}!</h1>;`}
            </CodeBlock>
          </div>
          <div>
            <h3 className="font-medium mb-2">Class Components</h3>
            <CodeBlock language="jsx">
{`import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}`}
            </CodeBlock>
            <p className="text-sm mt-2">
              <em>Note: Class components are less common in modern React development, but you might still see them in older codebases.</em>
            </p>
          </div>
        </div>

        <div className="bg-pink/20 p-4 rounded-lg my-4">
          <p className="font-medium">💡 Modern React Recommendation:</p>
          <p>Use function components with Hooks for new React code. They're simpler, have less boilerplate, and offer the same capabilities as class components with the addition of Hooks.</p>
        </div>

        <h2>Creating and Organizing Components</h2>
        <p>
          In React applications, components are typically organized into their own files. Let's see how to create and organize a simple component.
        </p>

        <h3>Step 1: Create a Component File</h3>
        <p>Create a new file named <code>Button.js</code> in the <code>src/components</code> directory:</p>

        <CodeBlock language="jsx">
{`// src/components/Button.js
import React from 'react';
import './Button.css'; // We'll create this later

function Button(props) {
  return (
    <button 
      className="custom-button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;`}
        </CodeBlock>

        <h3>Step 2: Create a CSS File for the Component (Optional)</h3>
        <p>Create a new file named <code>Button.css</code> in the same directory:</p>

        <CodeBlock language="css">
{`.custom-button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: #45a049;
}

.custom-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}`}
        </CodeBlock>

        <h3>Step 3: Use the Component in Your App</h3>
        <p>Import and use the Button component in your <code>App.js</code>:</p>

        <CodeBlock language="jsx">
{`import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button was clicked!');
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <Button onClick={handleClick}>Click Me</Button>
      </header>
    </div>
  );
}

export default App;`}
        </CodeBlock>

        <h2>Understanding Props</h2>
        <p>
          Props (short for "properties") are a way of passing data from parent to child components in React. They are similar to function arguments and can be accessed using the <code>props</code> object.
        </p>

        <h3>Passing and Accessing Props</h3>
        <CodeBlock language="jsx">
{`// Parent component passing props
function App() {
  return (
    <div>
      <Greeting name="John" age={30} isAdmin={true} />
    </div>
  );
}

// Child component receiving props
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
      {props.isAdmin && <p>You have admin privileges.</p>}
    </div>
  );
}`}
        </CodeBlock>

        <h3>Props Destructuring</h3>
        <p>
          For cleaner code, you can destructure props directly in the function parameters:
        </p>

        <CodeBlock language="jsx">
{`function Greeting({ name, age, isAdmin }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      {isAdmin && <p>You have admin privileges.</p>}
    </div>
  );
}`}
        </CodeBlock>

        <h3>Default Props</h3>
        <p>
          You can provide default values for props in case they're not passed:
        </p>

        <CodeBlock language="jsx">
{`function Greeting({ name = 'Guest', age = 0, isAdmin = false }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      {isAdmin && <p>You have admin privileges.</p>}
    </div>
  );
}

// Alternatively, set default props as a static property
Greeting.defaultProps = {
  name: 'Guest',
  age: 0,
  isAdmin: false
};`}
        </CodeBlock>

        <h3>The children Prop</h3>
        <p>
          The <code>children</code> prop is a special prop that contains the content between opening and closing tags when using a component:
        </p>

        <CodeBlock language="jsx">
{`// Card component
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Using the Card component with children
function App() {
  return (
    <div>
      <Card title="Welcome">
        <p>This is a paragraph inside the Card component.</p>
        <button>Click me</button>
      </Card>
    </div>
  );
}`}
        </CodeBlock>

        <h2>Composing Components</h2>
        <p>
          React's component model encourages composition over inheritance. You can build complex UIs by combining simpler components.
        </p>

        <CodeBlock language="jsx">
{`// Button component
function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

// Input component
function Input({ label, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
}

// Form component that composes Button and Input
function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', username, password);
  };
  
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <Input 
        label="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <Input 
        label="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
}`}
        </CodeBlock>

        <h2>Props vs. State</h2>
        <p>
          Understanding the difference between props and state is crucial in React:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2">Props</h3>
            <ul className="list-disc ml-4 space-y-1">
              <li>Passed from parent to child</li>
              <li>Read-only (cannot be modified)</li>
              <li>Help make components reusable</li>
              <li>Changes in props cause component re-render</li>
              <li>Used to configure a component</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2">State</h3>
            <ul className="list-disc ml-4 space-y-1">
              <li>Managed within the component</li>
              <li>Can be modified using setState/useState</li>
              <li>Changes over time based on user actions</li>
              <li>Changes in state cause component re-render</li>
              <li>Used for data that changes</li>
            </ul>
          </div>
        </div>

        <ExerciseBlock title="Practice: Building a User Profile Card Component">
          <p>
            Let's create a reusable user profile card component that can be used to display different users.
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a <code>UserCard</code> component that accepts props for user details</li>
            <li>Style the component with CSS</li>
            <li>Use the component to display multiple users in the App</li>
          </ol>
          
          <p className="mt-4">
            Here's the solution:
          </p>
          
          <h4 className="font-medium mb-2">UserCard.js</h4>
          <CodeBlock language="jsx">
{`import React from 'react';
import './UserCard.css';

function UserCard({ name, role, imageUrl, bio, email }) {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <img 
          src={imageUrl || 'https://via.placeholder.com/100'} 
          alt={name} 
          className="user-image"
        />
        <div className="user-info">
          <h3>{name}</h3>
          <p className="user-role">{role}</p>
          <a href={\`mailto:\${email}\`} className="user-email">{email}</a>
        </div>
      </div>
      <div className="user-bio">
        <p>{bio || 'No bio available'}</p>
      </div>
      <div className="user-card-footer">
        <button className="contact-btn">Contact</button>
        <button className="profile-btn">View Profile</button>
      </div>
    </div>
  );
}

export default UserCard;`}
          </CodeBlock>
          
          <h4 className="font-medium mb-2 mt-4">UserCard.css</h4>
          <CodeBlock language="css">
{`.user-card {
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.user-card-header {
  display: flex;
  padding: 16px;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.user-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  margin-left: 16px;
}

.user-info h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.user-role {
  margin: 4px 0;
  color: #666;
  font-size: 14px;
}

.user-email {
  display: block;
  font-size: 13px;
  color: #3498db;
  text-decoration: none;
}

.user-email:hover {
  text-decoration: underline;
}

.user-bio {
  padding: 16px;
  font-size: 14px;
  color: #444;
  line-height: 1.5;
  min-height: 80px;
}

.user-card-footer {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #f8f9fa;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.contact-btn {
  background-color: #3498db;
  color: white;
}

.contact-btn:hover {
  background-color: #2980b9;
}

.profile-btn {
  background-color: #e9ecef;
  color: #333;
}

.profile-btn:hover {
  background-color: #dee2e6;
}`}
          </CodeBlock>
          
          <h4 className="font-medium mb-2 mt-4">App.js</h4>
          <CodeBlock language="jsx">
{`import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Frontend Developer',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Passionate about creating beautiful and responsive web interfaces with React.',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'UX Designer',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Designing intuitive user experiences with a focus on accessibility and usability.',
      email: 'jane.smith@example.com'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Backend Developer',
      imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Building robust and scalable API solutions using Node.js and Python.',
      email: 'alex.johnson@example.com'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <main className="user-card-container">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            role={user.role}
            imageUrl={user.imageUrl}
            bio={user.bio}
            email={user.email}
          />
        ))}
      </main>
    </div>
  );
}

export default App;`}
          </CodeBlock>
          
          <h4 className="font-medium mb-2 mt-4">Additional CSS for App.css</h4>
          <CodeBlock language="css">
{`.user-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}`}
          </CodeBlock>
          
          <p className="mt-4">
            This example demonstrates:
          </p>
          <ul className="list-disc ml-6">
            <li>Creating a reusable component with props</li>
            <li>Providing default values for optional props</li>
            <li>Styling a component with CSS</li>
            <li>Rendering a list of components with unique keys</li>
            <li>Component composition and organization</li>
          </ul>
        </ExerciseBlock>

        <h2>Component Best Practices</h2>
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Tips for Writing Good Components</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Keep components focused:</strong> Each component should do one thing well</li>
            <li><strong>Name props clearly:</strong> Use descriptive, consistent naming conventions</li>
            <li><strong>Destructure props:</strong> Makes the code cleaner and easier to read</li>
            <li><strong>Use PropTypes or TypeScript:</strong> Define props interface for better documentation and type checking</li>
            <li><strong>Extract complex logic:</strong> Move complex logic out of render functions</li>
            <li><strong>Avoid deeply nested component structures:</strong> Flatten the hierarchy when possible</li>
            <li><strong>Keep stateful logic minimal:</strong> Lift state up when needed or use context for shared state</li>
          </ul>
        </div>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Bring it All Together</h3>
          <p className="mb-4">
            Now that you understand the basics of React components and props, it's time to apply these concepts by building a complete React application in the next lesson.
          </p>
          <div className="flex justify-center">
            <a href="/react-basics/exercise" className="btn-primary inline-flex items-center gap-2">
              Continue to React Exercise
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

export default ReactComponents;
