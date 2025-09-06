
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Quiz, { QuizQuestion } from '@/components/Quiz';

const cssQuizQuestions: QuizQuestion[] = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1
  },
  {
    question: "Which property is used to change the background color?",
    options: ["bgcolor", "color", "background-color", "background"],
    correctAnswer: 2
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    correctAnswer: 0
  },
  {
    question: "How do you select elements with class 'test'?",
    options: ["#test", ".test", "test", "*test"],
    correctAnswer: 1
  },
  {
    question: "What property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight", "font-size"],
    correctAnswer: 0
  },
  {
    question: "What is the default value of the position property?",
    options: ["relative", "fixed", "absolute", "static"],
    correctAnswer: 3
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    correctAnswer: 2
  },
  {
    question: "What is the correct CSS syntax to make all paragraph elements bold?",
    options: [
      "p {text-size: bold;}",
      "p {font-weight: bold;}",
      "<p style='font-weight: bold;'>",
      "p.all {font-weight: bold;}"
    ],
    correctAnswer: 1
  },
  {
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {underline: none;}",
      "a {text-decoration: no-underline;}",
      "a {decoration: no-underline;}",
      "a {text-decoration: none;}"
    ],
    correctAnswer: 3
  },
  {
    question: "Which property is used to change the left margin of an element?",
    options: ["margin", "padding-left", "margin-left", "indent"],
    correctAnswer: 2
  },
  {
    question: "What is the main axis in flexbox by default?",
    options: ["vertical", "diagonal", "horizontal", "none"],
    correctAnswer: 2
  },
  {
    question: "Which value of display makes an element behave like an inline element but with block features?",
    options: ["block", "inline", "inline-block", "flex"],
    correctAnswer: 2
  },
  {
    question: "What property allows content to be visible or hidden when it overflows its block?",
    options: ["overflow", "flow-control", "visibility", "display"],
    correctAnswer: 0
  },
  {
    question: "Which pseudo-class is used to select an element when a user hovers over it?",
    options: [":hover", ":active", ":focus", ":visited"],
    correctAnswer: 0
  },
  {
    question: "Which CSS property is used to control the spacing between lines?",
    options: ["spacing", "line-height", "line-spacing", "letter-spacing"],
    correctAnswer: 1
  },
  {
    question: "Which CSS function allows us to create a flexible grid layout?",
    options: ["float()", "flex()", "display()", "grid()"],
    correctAnswer: 3
  },
  {
    question: "What does the 'z-index' property determine?",
    options: [
      "The width of the element",
      "The height of the element",
      "The stacking order of elements",
      "The transparency of the element"
    ],
    correctAnswer: 2
  },
  {
    question: "How to select all p elements inside a div element?",
    options: ["div p", "div.p", "div + p", "p"],
    correctAnswer: 0
  },
  {
    question: "Which property is used to create space between the element's border and content?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correctAnswer: 1
  },
  {
    question: "Which value of 'justify-content' aligns flex items at the center of the container?",
    options: ["start", "end", "center", "space-around"],
    correctAnswer: 2
  }
];

const CSSQuiz = () => {
  return (
    <ContentLayout
      title="CSS Basics: Pop Quiz"
      section="CSS Basics"
      currentStep={6}
      totalSteps={6}
      prevLink="/css/exercise"
      nextLink="/javascript"
    >
      <div>
        <p className="mb-6">
          Let's test your knowledge of CSS! This quiz covers everything we've learned in the CSS Basics section.
          There are 20 questions, each with 4 possible answers. Select the answer you think is correct and click "Next"
          to proceed to the next question. At the end, you'll see your score and can review your answers.
        </p>

        <Quiz questions={cssQuizQuestions} sectionName="CSS Basics" />
      </div>
    </ContentLayout>
  );
};

export default CSSQuiz;
