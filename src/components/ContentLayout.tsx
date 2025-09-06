
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProgressTracker from './ProgressTracker';

interface ContentLayoutProps {
  children: React.ReactNode;
  title: string;
  section: string;
  currentStep: number;
  totalSteps: number;
  prevLink?: string;
  nextLink?: string;
}

const ContentLayout = ({ 
  children, 
  title, 
  section,
  currentStep,
  totalSteps,
  prevLink,
  nextLink
}: ContentLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="md:ml-64 w-full min-h-[calc(100vh-61px)] px-4 md:px-8 py-6">
          <div className="max-w-3xl mx-auto">
            <ProgressTracker section={section} currentStep={currentStep} totalSteps={totalSteps} />
            <h1 className="text-3xl font-bold mb-8 gradient-text">{title}</h1>
            
            <div className="prose max-w-none">
              {children}
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
              {prevLink ? (
                <a 
                  href={prevLink} 
                  className="btn-outline flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  Previous Lesson
                </a>
              ) : (
                <div></div>
              )}
              
              {nextLink && (
                <a 
                  href={nextLink} 
                  className="btn-primary flex items-center gap-2"
                >
                  Next Lesson
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContentLayout;
