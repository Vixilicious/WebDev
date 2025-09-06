
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const StateLiftingSection = () => {
  return (
    <>
      <h3 className="mt-6">State Lifting</h3>
      <p className="mb-4">
        When multiple components need access to the same state, lift the state to their common parent:
      </p>

      <CodeBlock language="jsx">
{`function Parent() {
  // State is lifted to the parent
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildA count={count} onIncrement={increment} />
      <ChildB count={count} />
    </div>
  );
}

// Child components receive state as props
function ChildA({ count, onIncrement }) {
  return (
    <div>
      <h2>Child A</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

function ChildB({ count }) {
  return (
    <div>
      <h2>Child B</h2>
      <p>Count: {count}</p>
    </div>
  );
}`}
      </CodeBlock>
    </>
  );
};

export default StateLiftingSection;
