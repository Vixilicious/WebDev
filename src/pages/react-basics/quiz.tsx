
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Quiz, { QuizQuestion } from '@/components/Quiz';

const reactBasicsQuizQuestions: QuizQuestion[] = [
  {
    question: "What is React?",
    options: [
      "A JavaScript framework for creating server applications",
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system"
    ],
    correctAnswer: 1
  },
  {
    question: "Who maintains React?",
    options: ["Google", "Amazon", "Facebook (Meta)", "Microsoft"],
    correctAnswer: 2
  },
  {
    question: "What is JSX?",
    options: [
      "A JavaScript extension that allows writing HTML in React",
      "A new JavaScript framework",
      "A plugin for running JavaScript",
      "A database format for React"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A lightweight copy of the real DOM",
      "A DOM that only exists on virtual machines",
      "A way to virtually connect to remote DOMs",
      "The DOM implementation used for VR applications"
    ],
    correctAnswer: 0
  },
  {
    question: "In React, what function is called to render HTML elements?",
    options: ["render()", "ReactDOM.render()", "ReactDOM()", "createElement()"],
    correctAnswer: 1
  },
  {
    question: "What is a React component?",
    options: [
      "A JavaScript class or function that returns HTML elements",
      "A CSS library",
      "A type of HTML tag",
      "A database model"
    ],
    correctAnswer: 0
  },
  {
    question: "How can you create a component in React?",
    options: [
      "By using only JavaScript classes",
      "By using only JavaScript functions",
      "By using either JavaScript functions or classes",
      "By using React.createComponent()"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the correct way to pass data from parent to child component in React?",
    options: ["Using state", "Using refs", "Using props", "Using context"],
    correctAnswer: 2
  },
  {
    question: "What command is used to create a new React application using Create React App?",
    options: [
      "npm create-react-app",
      "npx create-react-app myApp",
      "npm build react-app",
      "react-create-new myApp"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the 'key' prop when rendering lists in React?",
    options: [
      "It is optional and does nothing",
      "It helps React identify which items have changed, added, or removed",
      "It assigns CSS styles to list items",
      "It defines the text content of the list item"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the extension of React component files?",
    options: [".jsx or .tsx", ".react", ".js only", ".component"],
    correctAnswer: 0
  },
  {
    question: "How do you handle forms in React?",
    options: [
      "By using jQuery for form submission",
      "Forms are not supported in React",
      "By using controlled or uncontrolled components",
      "By using HTML form tag only"
    ],
    correctAnswer: 2
  },
  {
    question: "How do you add comments in JSX?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "{/* This is a comment */}"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the purpose of React fragments?",
    options: [
      "To create animations",
      "To group multiple elements without adding extra nodes to the DOM",
      "To split the app into multiple pages",
      "To save memory usage"
    ],
    correctAnswer: 1
  },
  {
    question: "How do you import CSS files in React components?",
    options: [
      "CSS cannot be used in React",
      "import style from 'style.css'",
      "import './style.css'",
      "<link rel='stylesheet' href='style.css'/>"
    ],
    correctAnswer: 2
  },
  {
    question: "What happens when you call setState() in React?",
    options: [
      "The state updates immediately and the component re-renders",
      "The state object is replaced entirely",
      "The state update is scheduled, and the component re-renders",
      "Nothing until you call forceUpdate()"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of props.children in React?",
    options: [
      "To display child data from a database",
      "To reference parent components",
      "To access nested elements or components",
      "To create new component instances"
    ],
    correctAnswer: 2
  },
  {
    question: "What tool can you use to debug React applications?",
    options: ["React Inspector", "React Debugger", "React DevTools", "React Console"],
    correctAnswer: 2
  },
  {
    question: "What is prop drilling in React?",
    options: [
      "A drilling technique for DOM manipulation",
      "Passing props through intermediate components to reach deep child components",
      "A way to create holes in components",
      "A React optimization process"
    ],
    correctAnswer: 1
  },
  {
    question: "Which package is commonly used for routing in React applications?",
    options: [
      "react-navigator",
      "react-routing",
      "react-router",
      "react-routes"
    ],
    correctAnswer: 2
  }
];

const ReactBasicsQuiz = () => {
  return (
    <ContentLayout
      title="React Basics: Pop Quiz"
      section="React Basics"
      currentStep={7}
      totalSteps={7}
      prevLink="/react-basics/exercise"
      nextLink="/react-intermediate"
    >
      <div>
        <p className="mb-6">
          Let's test your knowledge of React basics! This quiz covers everything we've learned in the React Basics section.
          There are 20 questions, each with 4 possible answers. Select the answer you think is correct and click "Next"
          to proceed to the next question. At the end, you'll see your score and can review your answers.
        </p>

        <Quiz questions={reactBasicsQuizQuestions} sectionName="React Basics" />
      </div>
    </ContentLayout>
  );
};

export default ReactBasicsQuiz;
