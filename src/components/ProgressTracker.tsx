
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressTrackerProps {
  section: string;
  currentStep: number;
  totalSteps: number;
}

const ProgressTracker = ({ section, currentStep, totalSteps }: ProgressTrackerProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="mb-8 mt-2">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-zinc-700">{section}</span>
        <span className="text-sm font-medium text-zinc-700">{currentStep}/{totalSteps}</span>
      </div>
      <Progress 
        value={progressPercentage} 
        className="h-2 bg-zinc-200" 
      />
    </div>
  );
};

export default ProgressTracker;
