
import React from 'react';
import StatePatternControlledComponentsSection from './StatePatternControlledComponentsSection';
import StateLiftingSection from './StateLiftingSection';

const StateManagementPatterns = () => {
  return (
    <>
      <h2>Common State Management Patterns</h2>
      <StatePatternControlledComponentsSection />
      <StateLiftingSection />
    </>
  );
};

export default StateManagementPatterns;
