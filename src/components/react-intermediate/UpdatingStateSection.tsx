
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const UpdatingStateSection = () => {
  return (
    <>
      <h2>Updating State</h2>

      <h3 className="mt-6">Basic State Updates</h3>
      <CodeBlock language="jsx">
{`function Counter() {
  const [count, setCount] = useState(0);
  
  // Basic update
  const increment = () => {
    setCount(count + 1);
  };
  
  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}`}
      </CodeBlock>

      <h3 className="mt-6">Functional Updates</h3>
      <p className="mb-4">
        When your new state depends on the previous state, use the functional form of the state updater:
      </p>
      <CodeBlock language="jsx">
{`function Counter() {
  const [count, setCount] = useState(0);
  
  // When to use functional updates
  const incrementThreeTimes = () => {
    // WRONG: This won't work as expected
    // All three calls use the same 'count' value
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    
    // CORRECT: Using functional updates
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <button onClick={incrementThreeTimes}>
      Count: {count}
    </button>
  );
}`}
      </CodeBlock>

      <div className="bg-orange/20 p-4 rounded-lg my-4">
        <p className="font-medium">⚠️ Important:</p>
        <p>
          State updates in React may be batched for performance reasons, which means multiple state updates within the same event handler can be processed in a single update. Using the functional update form ensures you're always working with the latest state.
        </p>
      </div>
    </>
  );
};

export default UpdatingStateSection;
