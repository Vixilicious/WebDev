
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const UseStateSection = () => {
  return (
    <>
      <h2>Using useState Hook</h2>
      <p className="mb-4">
        The <code>useState</code> hook is the most basic way to add state to a functional component. It returns a stateful value and a function to update it.
      </p>

      <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" with initial value of 0
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
      </CodeBlock>

      <h3 className="mt-6">useState Syntax and Behavior</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
          <h4 className="font-medium mb-2">Basic Usage</h4>
          <CodeBlock language="jsx">
{`const [state, setState] = useState(initialValue);

// Using the state
console.log(state);

// Updating the state
setState(newValue);`}
          </CodeBlock>
        </div>
        <div>
          <h4 className="font-medium mb-2">With Function Update</h4>
          <CodeBlock language="jsx">
{`const [count, setCount] = useState(0);

// Using previous state value
setCount(prevCount => prevCount + 1);

// This is safer when updates depend on
// previous state values`}
          </CodeBlock>
        </div>
      </div>
    </>
  );
};

export default UseStateSection;
