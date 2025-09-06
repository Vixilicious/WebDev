
import React from 'react';
import ContentLayout from '@/components/ContentLayout';

const Resources = () => {
  return (
    <ContentLayout
      title="Resources & Cheatsheets"
      section="Learning Resources"
      currentStep={1}
      totalSteps={1}
      prevLink="/"
      nextLink="/"
    >
      <div>
        <h2>Coming Soon!</h2>
        <p className="mb-4">
          This resources page is under development. Check back later for helpful cheatsheets and learning materials.
        </p>
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Resource Overview:</h3>
          <p>
            We're working on compiling a comprehensive set of resources including:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>HTML cheatsheets</li>
            <li>CSS reference guides</li>
            <li>JavaScript syntax guides</li>
            <li>React patterns and best practices</li>
            <li>Recommended learning materials</li>
            <li>Useful development tools</li>
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Resources;
