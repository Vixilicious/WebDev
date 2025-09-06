
import React from 'react';

const StateVsPropsSection = () => {
  return (
    <>
      <h2>When to Use State vs Props</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
          <h3 className="font-semibold mb-2">Use State When:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Data changes over time</li>
            <li>Data is owned by this component</li>
            <li>Data shouldn't be passed from parent</li>
            <li>Data controls UI or behavior</li>
            <li>User interactions change data</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Use Props When:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Data is passed from parent</li>
            <li>Data doesn't change within component</li>
            <li>Data is configuration information</li>
            <li>Parent controls the data</li>
            <li>Child needs to report changes to parent</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StateVsPropsSection;
