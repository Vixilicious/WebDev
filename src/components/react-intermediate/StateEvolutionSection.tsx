
import React from 'react';

const StateEvolutionSection = () => {
  return (
    <div className="bg-orange/20 p-6 rounded-lg my-6">
      <h3 className="text-lg font-semibold mb-2">State Management Evolution</h3>
      <p className="mb-4">
        As your applications grow, you might need more advanced state management solutions:
      </p>
      <ol className="list-decimal ml-6 space-y-2">
        <li><strong>Component state</strong> - For simple components with local state</li>
        <li><strong>Lifting state up</strong> - For sharing state between related components</li>
        <li><strong>Context API</strong> - For providing state to deeply nested components</li>
        <li><strong>State management libraries</strong> - For complex application state (Redux, Zustand, Jotai, etc.)</li>
      </ol>
      <p className="mt-2">
        We'll explore the Context API and other advanced state management techniques in upcoming lessons.
      </p>
    </div>
  );
};

export default StateEvolutionSection;
