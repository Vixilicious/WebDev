
import React from 'react';
import ContentLayout from '@/components/ContentLayout';

const Glossary = () => {
  return (
    <ContentLayout
      title="Web Development Glossary"
      section="Learning Resources"
      currentStep={1}
      totalSteps={1}
      prevLink="/"
      nextLink="/"
    >
      <div>
        <h2>Coming Soon!</h2>
        <p className="mb-4">
          This glossary page is under development. Check back later for a comprehensive list of web development terms and definitions.
        </p>
        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Glossary Overview:</h3>
          <p>
            We're working on compiling definitions for common terms in:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>HTML terminology</li>
            <li>CSS concepts</li>
            <li>JavaScript paradigms</li>
            <li>React ecosystem terms</li>
            <li>Web development best practices</li>
            <li>Programming fundamentals</li>
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Glossary;
