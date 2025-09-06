
import React from 'react';

const StateRulesSection = () => {
  return (
    <>
      <h2>State Update Rules and Best Practices</h2>

      <div className="bg-pink/20 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold mb-2">Rules for Working with State</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>State is immutable</strong> - Always create new objects/arrays when updating state.</li>
          <li><strong>State updates may be asynchronous</strong> - Don't rely on state values for calculating the next state directly.</li>
          <li><strong>State updates trigger re-renders</strong> - Optimize by avoiding unnecessary state changes.</li>
          <li><strong>Keep state minimal</strong> - Only store values that affect rendering or behavior.</li>
          <li><strong>Lift state up</strong> - When multiple components need the same state, move it to their closest common ancestor.</li>
          <li><strong>Use multiple states</strong> - Split complex state into multiple state variables if they update independently.</li>
        </ul>
      </div>
    </>
  );
};

export default StateRulesSection;
