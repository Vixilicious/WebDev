
import React from 'react';

const ComponentLifecycleSection = () => {
  return (
    <>
      <h2>Component Lifecycle and State</h2>
      <p className="mb-4">
        Understanding how state interacts with the component lifecycle is crucial for building robust React applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded p-4 bg-white">
          <h3 className="font-semibold mb-2">Initial Render</h3>
          <ol className="list-decimal ml-4 text-sm">
            <li>Component is called with props</li>
            <li>useState initializers are evaluated</li>
            <li>Component renders with initial state values</li>
            <li>React commits changes to the DOM</li>
          </ol>
        </div>
        <div className="border rounded p-4 bg-white">
          <h3 className="font-semibold mb-2">State Update</h3>
          <ol className="list-decimal ml-4 text-sm">
            <li>State update function is called</li>
            <li>React schedules a re-render</li>
            <li>Component function is called again</li>
            <li>Previous state is replaced with new state</li>
            <li>Component renders with new state values</li>
            <li>React updates the DOM efficiently</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ComponentLifecycleSection;
