
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const CSSSelectors = () => {
  return (
    <ContentLayout
      title="CSS Selectors, Classes & IDs"
      section="CSS Basics"
      currentStep={3}
      totalSteps={5}
      prevLink="/css/external"
      nextLink="/css/styling"
    >
      <div>
        <h2>Understanding CSS Selectors</h2>
        <p>
          CSS selectors are patterns used to select and style HTML elements. They are the bridge between your HTML document and the styles you want to apply.
          Understanding selectors is crucial for effective CSS usage.
        </p>

        <h3>Basic Selectors</h3>
        <p>There are several types of selectors in CSS:</p>
        
        <h4>1. Element Selectors</h4>
        <p>
          These target HTML elements directly by their tag name. For example, to style all paragraphs:
        </p>

        <CodeBlock language="css">
{`p {
  color: blue;
  line-height: 1.6;
}

h1 {
  font-size: 32px;
  color: purple;
}`}
        </CodeBlock>

        <h4>2. Class Selectors</h4>
        <p>
          Class selectors target elements with a specific class attribute. They start with a dot (.):
        </p>

        <CodeBlock language="css">
{`.important {
  font-weight: bold;
  color: red;
}

.highlight {
  background-color: yellow;
}`}
        </CodeBlock>

        <p>In your HTML, you would apply these classes like this:</p>

        <CodeBlock language="html">
{`<p class="important">This text is important!</p>
<span class="highlight">This text is highlighted</span>

<!-- An element can have multiple classes -->
<p class="important highlight">This is both important and highlighted!</p>`}
        </CodeBlock>

        <h4>3. ID Selectors</h4>
        <p>
          ID selectors target a specific element with a unique ID attribute. They start with a hash (#):
        </p>

        <CodeBlock language="css">
{`#header {
  background-color: #333;
  color: white;
}

#main-content {
  margin: 20px;
  padding: 15px;
}`}
        </CodeBlock>

        <p>In your HTML, you would apply these IDs like this:</p>

        <CodeBlock language="html">
{`<header id="header">This is the header</header>
<main id="main-content">This is the main content area</main>`}
        </CodeBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">Class vs. ID</h4>
          <p>Understanding the difference between classes and IDs is important:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Classes</strong> can be used on multiple elements and are perfect for styling groups of elements that share the same style.</li>
            <li><strong>IDs</strong> should be unique to a single element on the page and are better for specific, one-off styling or JavaScript targeting.</li>
            <li><strong>Specificity</strong>: ID selectors have higher specificity than class selectors, meaning they will override class styles if there's a conflict.</li>
          </ul>
        </div>

        <h3>Advanced Selectors</h3>
        
        <h4>1. Combined Selectors</h4>
        <p>
          You can combine selectors to target specific elements:
        </p>

        <CodeBlock language="css">
{`/* Target paragraphs with the "note" class */
p.note {
  font-style: italic;
}

/* Target h2 elements inside the element with ID "sidebar" */
#sidebar h2 {
  font-size: 18px;
}`}
        </CodeBlock>

        <h4>2. Descendant Selectors</h4>
        <p>
          A space between selectors targets descendants:
        </p>

        <CodeBlock language="css">
{`/* Target any <a> elements inside <nav> */
nav a {
  color: blue;
  text-decoration: none;
}

/* Target any <p> elements inside the element with class "content" */
.content p {
  line-height: 1.8;
}`}
        </CodeBlock>

        <h4>3. Child Selectors</h4>
        <p>
          The {'>'} symbol targets direct children only:
        </p>

        <CodeBlock language="css">
{`/* Target <li> elements that are direct children of <ul> */
ul > li {
  list-style-type: square;
}`}
        </CodeBlock>

        <h4>4. Adjacent Sibling Selectors</h4>
        <p>
          The + symbol targets an element that directly follows another:
        </p>

        <CodeBlock language="css">
{`/* Target <h2> elements that come immediately after <h1> */
h1 + h2 {
  margin-top: 0;
}`}
        </CodeBlock>

        <h3>Attribute Selectors</h3>
        <p>
          You can also select elements based on their attributes:
        </p>

        <CodeBlock language="css">
{`/* Target all <a> elements with href attribute */
a[href] {
  color: blue;
}

/* Target all <a> elements with href starting with "https" */
a[href^="https"] {
  color: green;
}

/* Target all inputs with type="text" */
input[type="text"] {
  border: 1px solid #ccc;
}`}
        </CodeBlock>

        <h3>Pseudo-classes and Pseudo-elements</h3>
        
        <h4>Pseudo-classes</h4>
        <p>
          Pseudo-classes select elements based on state or position:
        </p>

        <CodeBlock language="css">
{`/* Style links when hovered */
a:hover {
  text-decoration: underline;
}

/* Style the first child of its parent */
li:first-child {
  font-weight: bold;
}

/* Style odd-numbered rows in a table */
tr:nth-child(odd) {
  background-color: #f2f2f2;
}`}
        </CodeBlock>

        <h4>Pseudo-elements</h4>
        <p>
          Pseudo-elements let you style specific parts of an element:
        </p>

        <CodeBlock language="css">
{`/* Add content before an element */
.note::before {
  content: "📝 ";
}

/* Style the first line of a paragraph */
p::first-line {
  font-weight: bold;
}

/* Style the first letter of a paragraph */
p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 5px;
}`}
        </CodeBlock>

        <ExerciseBlock title="Practice Exercise: Using CSS Selectors">
          <p>
            Let's practice using different types of CSS selectors:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new HTML file with the following content:
              <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Selectors Practice</title>
  <link rel="stylesheet" href="selectors.css">
</head>
<body>
  <header id="main-header">
    <h1>CSS Selectors</h1>
    <p>Learning how to target HTML elements with precision</p>
  </header>
  
  <nav>
    <ul>
      <li><a href="#basics">Basics</a></li>
      <li><a href="#advanced">Advanced</a></li>
      <li><a href="#practice">Practice</a></li>
    </ul>
  </nav>
  
  <main>
    <section id="basics" class="content-section">
      <h2>Basic Selectors</h2>
      <p>CSS provides several ways to select HTML elements.</p>
      <p class="highlight">Class selectors start with a dot (.)</p>
      <p>Element selectors target specific HTML tags.</p>
      <p class="highlight">ID selectors start with a hash (#)</p>
    </section>
    
    <section id="advanced" class="content-section">
      <h2>Advanced Selectors</h2>
      <p>You can combine selectors for more precise targeting.</p>
      <div class="example">
        <h3>Example</h3>
        <p>This is an <a href="#">example link</a> inside a paragraph.</p>
        <p>This is another <a href="https://example.com">external link</a>.</p>
      </div>
    </section>
  </main>
  
  <footer>
    <p>Practice exercise for CSS selectors</p>
    <p><small>Created for learning purposes</small></p>
  </footer>
</body>
</html>`}
              </CodeBlock>
            </li>
            <li>Create a CSS file named <code>selectors.css</code> and try to implement the following styles:
              <ul className="list-disc ml-6 mt-1">
                <li>Style the <code>body</code> with a font family and max width</li>
                <li>Style the <code>header</code> with a background color using its ID</li>
                <li>Style all <code>p</code> elements with a line height and margin</li>
                <li>Style paragraphs with the <code>highlight</code> class differently</li>
                <li>Style all links (<code>a</code>) within the <code>nav</code> section</li>
                <li>Style only external links (those starting with "https")</li>
                <li>Style the first paragraph in the footer differently</li>
              </ul>
            </li>
          </ol>
          
          <p className="mt-4">
            Here's a starter CSS file that you can use as a reference or starting point:
          </p>
          
          <CodeBlock language="css">
{`/* Base styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* ID selector for the header */
#main-header {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

/* Element selectors */
h1 {
  color: #333;
}

h2 {
  color: #444;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

p {
  margin-bottom: 15px;
}

/* Class selector */
.highlight {
  background-color: #fffacd;
  padding: 5px;
  border-left: 3px solid #ffd700;
}

/* Descendant selector */
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  background-color: #333;
}

nav li {
  margin: 0;
}

nav a {
  display: block;
  padding: 10px 15px;
  color: white;
  text-decoration: none;
}

nav a:hover {
  background-color: #555;
}

/* Child selector */
.content-section > h2 {
  margin-top: 30px;
}

/* Attribute selector */
a[href^="https"] {
  color: green;
  text-decoration: underline;
}

/* Pseudo-elements */
.content-section p::first-letter {
  font-size: 1.2em;
  font-weight: bold;
}

/* Pseudo-class */
footer p:first-child {
  font-weight: bold;
}`}
          </CodeBlock>
          
          <p>
            Try to understand how each selector works and experiment with different combinations. This will help you build a strong foundation for CSS styling.
          </p>
        </ExerciseBlock>
        
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">Selector Specificity</h4>
          <p>Understanding specificity is crucial when working with CSS:</p>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Inline styles (style attribute) have the highest specificity</li>
            <li>ID selectors (#id) have the next highest specificity</li>
            <li>Class selectors (.class), attribute selectors, and pseudo-classes</li>
            <li>Element selectors and pseudo-elements have the lowest specificity</li>
          </ol>
          <p className="mt-2 mb-0">
            When styles conflict, the more specific selector wins. If specificity is equal, the last defined style wins.
          </p>
        </div>
        
        <p>
          In the next lesson, we'll explore common CSS styling properties and how to use them to create beautiful, well-designed web pages.
        </p>
      </div>
    </ContentLayout>
  );
};

export default CSSSelectors;
