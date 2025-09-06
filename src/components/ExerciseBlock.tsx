
import React from 'react';

interface ExerciseBlockProps {
  title: string;
  children: React.ReactNode;
}

const ExerciseBlock = ({ title, children }: ExerciseBlockProps) => {
  return (
    <div className="exercise-block border-2 border-orange-dark rounded-lg p-6 my-8 bg-orange/15 shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-zinc-800 flex items-center">
        <span className="mr-2 text-2xl">✏️</span>
        {title}
      </h3>
      <div className="text-zinc-700">
        {children}
      </div>
    </div>
  );
};

export default ExerciseBlock;
