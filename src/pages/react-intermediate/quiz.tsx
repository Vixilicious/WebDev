
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Quiz, { QuizQuestion } from '@/components/Quiz';

const reactIntermediateQuizQuestions: QuizQuestion[] = [
  {
    question: "What React hook is used to perform side effects?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 0
  },
  {
    question: "What React hook is used for context API consumption?",
    options: ["useContext", "useState", "useReducer", "useRef"],
    correctAnswer: 0
  },
  {
    question: "Which hook would you use to store a value that doesn't trigger re-renders?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    correctAnswer: 2
  },
  {
    question: "When does useLayoutEffect run compared to useEffect?",
    options: [
      "After all DOM mutations",
      "Before browser paints DOM changes",
      "Only when certain props change",
      "Only once during component mounting"
    ],
    correctAnswer: 1
  },
  {
    question: "Which hook would you use to memoize an expensive calculation?",
    options: ["useCallback", "useMemo", "useCompute", "useCalculation"],
    correctAnswer: 1
  },
  {
    question: "Which React hook replaces componentDidMount lifecycle method?",
    options: [
      "useState",
      "useEffect with empty dependency array",
      "useLayoutEffect",
      "useRef"
    ],
    correctAnswer: 1
  },
  {
    question: "What pattern is used to share stateful logic between components?",
    options: ["HOC Pattern", "Render Props Pattern", "Custom Hooks", "All of these"],
    correctAnswer: 3
  },
  {
    question: "What is state lifting in React?",
    options: [
      "Moving state from a parent to a child component",
      "Moving state from a child to a parent component",
      "Storing state in localStorage",
      "Using useState with an initial higher value"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of React.memo?",
    options: [
      "To create a memoized version of a component",
      "To log component renders to memory",
      "To create a new React element",
      "To improve state management"
    ],
    correctAnswer: 0
  },
  {
    question: "What does the useCallback hook do?",
    options: [
      "Creates a memoized callback function",
      "Calls a function after component updates",
      "Creates a callback queue",
      "Manages component callbacks"
    ],
    correctAnswer: 0
  },
  {
    question: "In a feature-based folder structure for React apps, what would typically be at the top level?",
    options: [
      "Components and utility functions",
      "Feature folders (e.g., auth, dashboard, etc.)",
      "CSS files",
      "Configuration files"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a controlled component in React?",
    options: [
      "A component that controls other components",
      "A component where form data is handled by React state",
      "A component with strict prop types",
      "A component with multiple renders"
    ],
    correctAnswer: 1
  },
  {
    question: "What is React Query primarily used for?",
    options: [
      "Client-side state management",
      "Server state management and data fetching",
      "GraphQL querying",
      "Database operations"
    ],
    correctAnswer: 1
  },
  {
    question: "Which React hook would you use to sync with an external system?",
    options: [
      "useState",
      "useContext",
      "useEffect",
      "useExternalSync"
    ],
    correctAnswer: 2
  },
  {
    question: "When naming React components, which convention is typically followed?",
    options: [
      "camelCase (e.g. userProfile)",
      "PascalCase (e.g. UserProfile)",
      "snake_case (e.g. user_profile)",
      "kebab-case (e.g. user-profile)"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the recommended way to handle form validation in React?",
    options: [
      "Using HTML5 validation attributes only",
      "Using alert() for validation errors",
      "Using a form library like Formik or React Hook Form",
      "Writing custom validation for each input field"
    ],
    correctAnswer: 2
  },
  {
    question: "When fetching data in a React component, what is best practice?",
    options: [
      "Always fetch in componentDidMount",
      "Always fetch on user interaction only",
      "Handle loading, success, and error states",
      "Avoid async operations in components"
    ],
    correctAnswer: 2
  },
  {
    question: "What is a side effect in React?",
    options: [
      "When a component renders unexpectedly",
      "Operations that affect something outside component scope (API calls, DOM updates)",
      "When props change causes state changes",
      "Any function that returns JSX"
    ],
    correctAnswer: 1
  },
  {
    question: "Which folder structure approach separates code by domain/feature rather than type?",
    options: [
      "Technical separation approach",
      "Feature-based approach",
      "Package-by-layer approach",
      "Component-centric approach"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the React way to conditionally apply a CSS class?",
    options: [
      "Using if-else statements in the render method",
      "Using switch statements in the render method",
      "Using the className property with a ternary operator or template literals",
      "Using the style attribute exclusively"
    ],
    correctAnswer: 2
  }
];

const ReactIntermediateQuiz = () => {
  return (
    <ContentLayout
      title="React Intermediate: Pop Quiz"
      section="React Intermediate"
      currentStep={7}
      totalSteps={7}
      prevLink="/react-intermediate/project"
      nextLink="#"
    >
      <div>
        <p className="mb-6">
          Let's test your knowledge of intermediate React concepts! This quiz covers everything we've learned in the React Intermediate section.
          There are 20 questions, each with 4 possible answers. Select the answer you think is correct and click "Next"
          to proceed to the next question. At the end, you'll see your score and can review your answers.
        </p>

        <Quiz questions={reactIntermediateQuizQuestions} sectionName="React Intermediate" />
      </div>
    </ContentLayout>
  );
};

export default ReactIntermediateQuiz;
