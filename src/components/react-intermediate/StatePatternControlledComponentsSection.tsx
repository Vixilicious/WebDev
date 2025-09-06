
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const StatePatternControlledComponentsSection = () => {
  return (
    <>
      <h3 className="mt-6">Controlled Components</h3>
      <p className="mb-4">
        A pattern where form elements are controlled by React state:
      </p>

      <CodeBlock language="jsx">
{`function ControlledForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', email, password);
    // Process form submission...
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}`}
      </CodeBlock>
    </>
  );
};

export default StatePatternControlledComponentsSection;
