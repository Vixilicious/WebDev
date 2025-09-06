
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import StateIntroSection from '@/components/react-intermediate/StateIntroSection';
import UseStateSection from '@/components/react-intermediate/UseStateSection';
import StateDataTypesSection from '@/components/react-intermediate/StateDataTypesSection';
import UpdatingStateSection from '@/components/react-intermediate/UpdatingStateSection';
import UpdatingObjectsArraysSection from '@/components/react-intermediate/UpdatingObjectsArraysSection';
import StateRulesSection from '@/components/react-intermediate/StateRulesSection';
import ComplexStateExample from '@/components/react-intermediate/ComplexStateExample';
import ComponentLifecycleSection from '@/components/react-intermediate/ComponentLifecycleSection';
import StateVsPropsSection from '@/components/react-intermediate/StateVsPropsSection';
import StateEvolutionSection from '@/components/react-intermediate/StateEvolutionSection';
import StateManagementPatterns from '@/components/react-intermediate/StateManagementPatterns';
import NextStepsSection from '@/components/react-intermediate/NextStepsSection';

const ReactStateManagement = () => {
  return (
    <ContentLayout
      title="React State Management"
      section="React Intermediate"
      currentStep={1}
      totalSteps={6}
      prevLink="/react-basics/exercise"
      nextLink="/react-intermediate/hooks"
    >
      <div>
        <StateIntroSection />
        <UseStateSection />
        <StateDataTypesSection />
        <UpdatingStateSection />
        <UpdatingObjectsArraysSection />
      </div>

      <StateRulesSection />
      <ComplexStateExample />
      <ComponentLifecycleSection />
      <StateVsPropsSection />
      <StateEvolutionSection />
      <StateManagementPatterns />
      <NextStepsSection />
    </ContentLayout>
  );
};

export default ReactStateManagement;
