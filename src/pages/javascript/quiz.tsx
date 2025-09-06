
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Quiz, { QuizQuestion } from '@/components/Quiz';

const javascriptQuizQuestions: QuizQuestion[] = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "variable"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is not a primitive data type in JavaScript?",
    options: ["string", "boolean", "array", "number"],
    correctAnswer: 2
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    ],
    correctAnswer: 1
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "x", "=="],
    correctAnswer: 1
  },
  {
    question: "What will '2' + 2 be in JavaScript?",
    options: ["4", "22", "2 + 2", "NaN"],
    correctAnswer: 1
  },
  {
    question: "Which function is used to parse a string to an integer?",
    options: ["Integer.parse()", "parseInt()", "parseInteger()", "int()"],
    correctAnswer: 1
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msg('Hello World')",
      "alert('Hello World')",
      "alertBox('Hello World')",
      "msgBox('Hello World')"
    ],
    correctAnswer: 1
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "create myFunction()"
    ],
    correctAnswer: 2
  },
  {
    question: "How to write an IF statement for executing code if 'x' is equal to 10?",
    options: ["if x = 10", "if (x == 10)", "if x == 10 then", "if (x = 10)"],
    correctAnswer: 1
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
      "for i = 1 to 5 do"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the correct way to write a JavaScript object?",
    options: [
      "var person = {firstName:'John', lastName:'Doe'}",
      "var person = {firstName = 'John', lastName = 'Doe'}",
      "var person = (firstName:'John', lastName:'Doe')",
      "var person = (firstName = 'John', lastName = 'Doe')"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the correct way to access the first element of an array named 'fruits'?",
    options: ["fruits(0)", "fruits[0]", "fruits.first()", "fruits.one"],
    correctAnswer: 1
  },
  {
    question: "Which method is used to add elements to the end of an array?",
    options: ["push()", "append()", "add()", "insert()"],
    correctAnswer: 0
  },
  {
    question: "How do you round the number 5.25 to the nearest integer?",
    options: ["Math.rnd(5.25)", "Math.round(5.25)", "rnd(5.25)", "round(5.25)"],
    correctAnswer: 1
  },
  {
    question: "How do you find the largest number of 2 and 4?",
    options: ["Math.ceil(2,4)", "Math.max(2,4)", "Math.highest(2,4)", "ceil(2,4)"],
    correctAnswer: 1
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    correctAnswer: 2
  },
  {
    question: "What is the correct way to write a JavaScript comment?",
    options: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "#This is a comment"],
    correctAnswer: 1
  },
  {
    question: "What keyword is used to define a JavaScript class?",
    options: ["class", "className", "classDefine", "struct"],
    correctAnswer: 0
  },
  {
    question: "Which method converts a JavaScript object to a JSON string?",
    options: ["JSON.parse()", "JSON.toString()", "JSON.stringify()", "JSON.convert()"],
    correctAnswer: 2
  },
  {
    question: "What does async/await help us accomplish in JavaScript?",
    options: [
      "It makes variables static",
      "It makes functions run in parallel",
      "It simplifies working with promises",
      "It increases execution speed"
    ],
    correctAnswer: 2
  }
];

const JavaScriptQuiz = () => {
  return (
    <ContentLayout
      title="JavaScript Basics: Pop Quiz"
      section="JavaScript Basics"
      currentStep={6}
      totalSteps={6}
      prevLink="/javascript/exercise"
      nextLink="/react-basics"
    >
      <div>
        <p className="mb-6">
          Let's test your knowledge of JavaScript! This quiz covers everything we've learned in the JavaScript Basics section.
          There are 20 questions, each with 4 possible answers. Select the answer you think is correct and click "Next"
          to proceed to the next question. At the end, you'll see your score and can review your answers.
        </p>

        <Quiz questions={javascriptQuizQuestions} sectionName="JavaScript Basics" />
      </div>
    </ContentLayout>
  );
};

export default JavaScriptQuiz;
