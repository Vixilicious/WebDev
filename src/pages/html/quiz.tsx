
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Quiz, { QuizQuestion } from '@/components/Quiz';

const htmlQuizQuestions: QuizQuestion[] = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText Multiple Language",
      "HyperTool Multi Language"
    ],
    correctAnswer: 0
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1
  },
  {
    question: "Which element is used for a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correctAnswer: 2
  },
  {
    question: "Which of the following is not a semantic HTML5 element?",
    options: ["<article>", "<section>", "<header>", "<span>"],
    correctAnswer: 3
  },
  {
    question: "Which attribute is used to define inline styles?",
    options: ["class", "styles", "style", "font"],
    correctAnswer: 2
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<end>", "<section>"],
    correctAnswer: 1
  },
  {
    question: "Which element creates a dropdown list?",
    options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"],
    correctAnswer: 2
  },
  {
    question: "Which HTML attribute is used to define the character encoding?",
    options: ["encoding", "charset", "character", "lang"],
    correctAnswer: 1
  },
  {
    question: "Which element is used to define navigation links?",
    options: ["<navigation>", "<links>", "<nav>", "<menu>"],
    correctAnswer: 2
  },
  {
    question: "What is the correct HTML element for inserting an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correctAnswer: 1
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: [
      "<checkbox>",
      "<input type='check'>",
      "<input type='checkbox'>",
      "<check>"
    ],
    correctAnswer: 2
  },
  {
    question: "Which doctype is correct for HTML5?",
    options: [
      "<!DOCTYPE HTML5>",
      "<!DOCTYPE html>",
      "<DOCTYPE HTML>",
      "<!DOCTYPE HTML PUBLIC>"
    ],
    correctAnswer: 1
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
    options: ["title", "alt", "src", "description"],
    correctAnswer: 1
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<important>", "<strong>", "<b>", "<emphasize>"],
    correctAnswer: 1
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<meta>", "<title>", "<head>", "<header>"],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the <meta> tag?",
    options: [
      "To style HTML elements",
      "To create meta-fictional content",
      "To define metadata about an HTML document",
      "To create mathematical equations"
    ],
    correctAnswer: 2
  },
  {
    question: "Which element is used to define a table in HTML?",
    options: ["<table>", "<tab>", "<tbl>", "<grid>"],
    correctAnswer: 0
  },
  {
    question: "Which tag is used to create a numbered list?",
    options: ["<nl>", "<ol>", "<ul>", "<list>"],
    correctAnswer: 1
  },
  {
    question: "Which attribute is used to specify where to send the form-data when a form is submitted?",
    options: ["destination", "submit", "method", "action"],
    correctAnswer: 3
  },
  {
    question: "What is the purpose of the <figcaption> element?",
    options: [
      "To create a figure element",
      "To add a caption to a figure element",
      "To define a figure as important",
      "To link to image sources"
    ],
    correctAnswer: 1
  }
];

const HTMLQuiz = () => {
  return (
    <ContentLayout
      title="HTML Basics: Pop Quiz"
      section="HTML Basics"
      currentStep={6}
      totalSteps={6}
      prevLink="/html/exercise"
      nextLink="/css"
    >
      <div>
        <p className="mb-6">
          Let's test your knowledge of HTML! This quiz covers everything we've learned in the HTML Basics section.
          There are 20 questions, each with 4 possible answers. Select the answer you think is correct and click "Next"
          to proceed to the next question. At the end, you'll see your score and can review your answers.
        </p>

        <Quiz questions={htmlQuizQuestions} sectionName="HTML Basics" />
      </div>
    </ContentLayout>
  );
};

export default HTMLQuiz;
