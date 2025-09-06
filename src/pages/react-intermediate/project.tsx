
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const ReactProject = () => {
  return (
    <ContentLayout
      title="React Final Project"
      section="React Intermediate"
      currentStep={6}
      totalSteps={6}
      prevLink="/react-intermediate/api"
      nextLink="#"
    >
      <div>
        <h2>Coming Soon!</h2>
        <p className="mb-4">
          This final project for the React Intermediate section is under development.
        </p>
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Project Overview:</h3>
          <p>
            In this final project, you'll create a complete React application that incorporates all the skills you've learned in the React Intermediate section, including:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Advanced state management</li>
            <li>Using multiple React hooks</li>
            <li>Organized folder structure</li>
            <li>Form handling and validation</li>
            <li>API integration</li>
            <li>Authentication</li>
            <li>Routing</li>
            <li>Styling with CSS or a component library</li>
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ReactProject;
