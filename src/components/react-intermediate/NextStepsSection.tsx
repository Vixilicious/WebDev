
import React from 'react';

const NextStepsSection = () => {
  return (
    <>
      <h2>What's Next?</h2>
      <p className="mb-4">
        React's useState hook is just the beginning of state management in React. In the next lesson, we'll explore more hooks like useEffect, useContext, useReducer, and custom hooks that will give you even more power and flexibility when building React applications.
      </p>

      <div className="bg-pink/20 p-6 rounded-lg my-6">
        <h3 className="text-xl font-semibold mb-2">Continue Learning</h3>
        <p className="mb-4">
          Ready to dive deeper into React hooks? Move on to the next lesson where we'll explore the complete set of React hooks and their use cases.
        </p>
        <div className="flex justify-center">
          <a href="/react-intermediate/hooks" className="btn-primary inline-flex items-center gap-2">
            Continue to React Hooks
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default NextStepsSection;
