
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const StateIntroSection = () => {
  return (
    <div>
      <h2>Understanding State in React</h2>
      <p className="mb-4">
        State is one of the most important concepts in React. It's how components remember things, respond to user interaction, and update the UI dynamically. In this lesson, we'll dive deep into React's state management capabilities.
      </p>

      <div className="bg-orange/20 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-2">What is State?</h3>
        <p className="mb-2">State represents the parts of your application that can change over time. It's like memory for your components, allowing them to:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Track user interactions</li>
          <li>Remember input values</li>
          <li>Control component behavior</li>
          <li>Store and display dynamic data</li>
        </ul>
      </div>
    </div>
  );
};

export default StateIntroSection;
