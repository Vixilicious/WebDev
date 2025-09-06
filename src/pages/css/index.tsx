
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const CSSIntro = () => {
  return (
    <ContentLayout
      title="Introduction to CSS"
      section="CSS Basics"
      currentStep={1}
      totalSteps={5}
      nextLink="/css/external"
    >
      <div>
        <h2>What is CSS?</h2>
        <p>
          <strong>CSS</strong> (Cascading Style Sheets) is the language used to style and layout web pages.
          While HTML provides the structure and content of a page, CSS controls how that content looks and is positioned.
        </p>

        <p>
          With CSS, you can change colors, fonts, spacing, create layouts, add animations, and make your websites responsive
          to different screen sizes.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">CSS Key Points</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>CSS stands for <strong>Cascading Style Sheets</strong></li>
            <li>It controls the <strong>visual presentation</strong> of HTML elements</li>
            <li>CSS allows <strong>separation</strong> of content (HTML) from presentation (CSS)</li>
            <li>One CSS file can style multiple HTML pages</li>
            <li>CSS uses <strong>selectors</strong> to target HTML elements</li>
          </ul>
        </div>

        <h2>Adding CSS to HTML</h2>
        <p>
          There are three ways to include CSS in your HTML documents:
        </p>

        <h3>1. Inline CSS</h3>
        <p>
          Inline CSS applies styles directly to individual HTML elements using the <code>style</code> attribute:
        </p>

        <CodeBlock language="html">
{`<p style="color: blue; font-size: 16px;">This is a blue paragraph.</p>`}
        </CodeBlock>

        <h3>2. Internal CSS</h3>
        <p>
          Internal CSS is defined within a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section of an HTML document:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
    
    h1 {
      color: red;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>This is a red heading</h1>
  <p>This is a blue paragraph.</p>
</body>
</html>`}
        </CodeBlock>

        <h3>3. External CSS</h3>
        <p>
          External CSS is written in a separate file with a <code>.css</code> extension and linked to the HTML document:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is a styled heading</h1>
  <p>This is a styled paragraph.</p>
</body>
</html>`}
        </CodeBlock>

        <p>
          And in <code>styles.css</code>:
        </p>

        <CodeBlock language="css">
{`p {
  color: blue;
  font-size: 16px;
}

h1 {
  color: red;
  text-align: center;
}`}
        </CodeBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Best Practice</h3>
          <p>
            External CSS is the preferred method for most websites because it:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Separates your CSS from your HTML</li>
            <li>Makes your code more maintainable</li>
            <li>Allows you to apply the same styles to multiple pages</li>
            <li>Improves page load times (the browser can cache the CSS file)</li>
          </ul>
        </div>

        <h2>CSS Syntax</h2>
        <p>
          CSS consists of <strong>selectors</strong> and <strong>declaration blocks</strong>:
        </p>

        <CodeBlock language="css">
{`selector {
  property: value;
  property: value;
}`}
        </CodeBlock>

        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li>
            <strong>Selector:</strong> Points to the HTML element you want to style
          </li>
          <li>
            <strong>Declaration Block:</strong> Contains one or more declarations surrounded by curly braces
          </li>
          <li>
            <strong>Declaration:</strong> A property and its value, separated by a colon
          </li>
          <li>
            <strong>Property:</strong> The style attribute you want to change (like color, font-size, margin)
          </li>
          <li>
            <strong>Value:</strong> The specific setting for the property (like red, 16px, 10px)
          </li>
        </ul>

        <h2>Basic CSS Properties</h2>
        <p>
          Let's look at some common CSS properties:
        </p>

        <h3>Text Styling</h3>
        <CodeBlock language="css">
{`p {
  color: #333;               /* Text color */
  font-family: Arial, sans-serif; /* Font */
  font-size: 16px;           /* Font size */
  font-weight: bold;         /* Font weight: normal, bold, 400, 700, etc. */
  text-align: center;        /* Text alignment: left, right, center, justify */
  text-decoration: underline; /* Underline, overline, line-through */
  line-height: 1.5;          /* Line height */
}`}
        </CodeBlock>

        <h3>Background and Border</h3>
        <CodeBlock language="css">
{`div {
  background-color: #f0f0f0;  /* Background color */
  border: 1px solid black;    /* Border width, style, color */
  border-radius: 5px;         /* Rounded corners */
  width: 300px;               /* Width */
  height: 200px;              /* Height */
}`}
        </CodeBlock>

        <h3>Spacing</h3>
        <CodeBlock language="css">
{`div {
  margin: 10px;               /* Space outside the element */
  padding: 15px;              /* Space inside the element */
}

/* Specific sides */
div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  
  /* Shorthand: top right bottom left */
  margin: 10px 20px 10px 20px;
}`}
        </CodeBlock>

        <ExerciseBlock title="Practice Exercise">
          <p>
            Let's add some simple styles to an HTML document:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new HTML file named <code>styled-page.html</code></li>
            <li>Add the following HTML:
              <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Page</title>
  <!-- Add your internal CSS here -->
  <style>
    /* Add your CSS rules here */
  </style>
</head>
<body>
  <h1>Welcome to My Page</h1>
  
  <p class="intro">This is an introduction paragraph. It should stand out from the other paragraphs.</p>
  
  <h2>About Me</h2>
  
  <p>This is a regular paragraph with some information about me.</p>
  
  <p>Here's another paragraph with more details.</p>
  
  <div class="highlight-box">
    <h3>My Skills</h3>
    <ul>
      <li>HTML</li>
      <li>CSS (learning)</li>
      <li>Photography</li>
    </ul>
  </div>
</body>
</html>`}
              </CodeBlock>
            </li>
            <li>Add the following CSS within the <code>&lt;style&gt;</code> tags:
              <ul className="list-disc ml-6 mt-2">
                <li>Style the <code>body</code> with a light background color and a nice font family</li>
                <li>Make the <code>h1</code> centered and give it a different color</li>
                <li>Style the paragraph with class "intro" differently than other paragraphs</li>
                <li>Create a highlight box with a border, background color, and padding</li>
              </ul>
            </li>
          </ol>
          
          <p>
            Here's a starting point for your CSS:
          </p>
          
          <CodeBlock language="css">
{`body {
  /* Add styles for the body */
}

h1 {
  /* Add styles for the h1 */
}

.intro {
  /* Add styles for the intro paragraph */
}

p {
  /* Add styles for all paragraphs */
}

.highlight-box {
  /* Add styles for the highlight box */
}`}
          </CodeBlock>
          
          <p className="mt-4">
            Open the HTML file in your browser to see the styles applied. Experiment with different properties and values!
          </p>
          
          <p>
            In the next lesson, we'll learn about external CSS files and how to organize your CSS more effectively.
          </p>
        </ExerciseBlock>
      </div>
    </ContentLayout>
  );
};

export default CSSIntro;
