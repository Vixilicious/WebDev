
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const HTMLTags = () => {
  return (
    <ContentLayout
      title="Common HTML Tags"
      section="HTML Basics"
      currentStep={3}
      totalSteps={5}
      prevLink="/html/setup"
      nextLink="/html/semantics"
    >
      <div>
        <h2>Essential HTML Tags</h2>
        <p>
          HTML uses various tags to structure content. Here are some of the most common ones you'll use in almost every project:
        </p>

        <h3>Headings</h3>
        <p>
          HTML provides six levels of headings, from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).
        </p>

        <CodeBlock language="html">
{`<h1>This is a Level 1 Heading</h1>
<h2>This is a Level 2 Heading</h2>
<h3>This is a Level 3 Heading</h3>
<h4>This is a Level 4 Heading</h4>
<h5>This is a Level 5 Heading</h5>
<h6>This is a Level 6 Heading</h6>`}
        </CodeBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Best Practice</h3>
          <p className="mb-0">
            A page should only have one <code>&lt;h1&gt;</code> heading for proper document structure and SEO. Use headings in hierarchical order (don't skip levels).
          </p>
        </div>

        <h3>Paragraphs</h3>
        <p>
          Paragraphs are created with the <code>&lt;p&gt;</code> tag.
        </p>

        <CodeBlock language="html">
{`<p>This is a paragraph of text. HTML will automatically wrap the text and create proper spacing.</p>
<p>This is a second paragraph. Notice the space that appears between paragraphs.</p>`}
        </CodeBlock>

        <h3>Links</h3>
        <p>
          Links (or anchors) are created with the <code>&lt;a&gt;</code> tag and the <code>href</code> attribute.
        </p>

        <CodeBlock language="html">
{`<a href="https://www.example.com">Visit Example Website</a>
<a href="contact.html">Contact Us</a>
<a href="#section">Jump to Section</a>`}
        </CodeBlock>

        <h3>Images</h3>
        <p>
          Images are added using the <code>&lt;img&gt;</code> tag with <code>src</code> and <code>alt</code> attributes.
        </p>

        <CodeBlock language="html">
{`<img src="image.jpg" alt="Description of the image">
<img src="https://www.example.com/image.jpg" alt="External image" width="300" height="200">`}
        </CodeBlock>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Important!</h3>
          <p className="mb-0">
            Always include an <code>alt</code> attribute for accessibility. It helps screen readers describe the image to visually impaired users and displays if the image fails to load.
          </p>
        </div>

        <h3>Lists</h3>
        <p>
          HTML supports ordered lists (<code>&lt;ol&gt;</code>), unordered lists (<code>&lt;ul&gt;</code>), and definition lists (<code>&lt;dl&gt;</code>).
        </p>

        <CodeBlock language="html">
{`<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<!-- Definition List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}
        </CodeBlock>

        <h3>Divs and Spans</h3>
        <p>
          <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are container elements used for grouping and styling.
        </p>

        <CodeBlock language="html">
{`<!-- div is a block-level element -->
<div>
  <p>This is inside a div.</p>
  <p>This is also inside the same div.</p>
</div>

<!-- span is an inline element -->
<p>This text has <span>some special styling</span> in the middle.</p>`}
        </CodeBlock>

        <h3>Line Breaks and Horizontal Rules</h3>
        <p>
          <code>&lt;br&gt;</code> creates a line break, and <code>&lt;hr&gt;</code> creates a horizontal rule (line).
        </p>

        <CodeBlock language="html">
{`<p>This is line one.<br>This is line two.</p>

<p>Section one.</p>
<hr>
<p>Section two.</p>`}
        </CodeBlock>

        <h3>Tables</h3>
        <p>
          Tables are created using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (table row), <code>&lt;th&gt;</code> (table header), and <code>&lt;td&gt;</code> (table data) tags.
        </p>

        <CodeBlock language="html">
{`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Sarah</td>
    <td>30</td>
  </tr>
</table>`}
        </CodeBlock>

        <h3>Forms and Input Elements</h3>
        <p>
          Forms collect user input using the <code>&lt;form&gt;</code> tag and various input elements.
        </p>

        <CodeBlock language="html">
{`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br>
  
  <label for="message">Message:</label><br>
  <textarea id="message" name="message" rows="4" cols="40"></textarea><br>
  
  <input type="submit" value="Submit">
</form>`}
        </CodeBlock>

        <ExerciseBlock title="Practice Exercise">
          <p>
            Let's create a simple recipe page using various HTML tags:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a file named <code>recipe.html</code></li>
            <li>Use the HTML template from the previous lesson</li>
            <li>Add a title: "My Favorite Recipe"</li>
            <li>In the body, include:
              <ul className="list-disc ml-6 mt-2">
                <li>A heading with the recipe name</li>
                <li>An image related to the recipe (use any placeholder image URL)</li>
                <li>A description paragraph</li>
                <li>A heading for "Ingredients" followed by an unordered list</li>
                <li>A heading for "Instructions" followed by an ordered list</li>
                <li>A link at the bottom to a cooking website</li>
              </ul>
            </li>
          </ol>
          
          <p>
            Here's a starter template:
          </p>
          
          <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Favorite Recipe</title>
</head>
<body>
  <h1>Chocolate Chip Cookies</h1>
  <img src="https://placehold.co/600x400?text=Cookies" alt="Chocolate Chip Cookies">
  
  <p>These delicious cookies are perfect for any occasion...</p>
  
  <h2>Ingredients</h2>
  <ul>
    <!-- Add ingredients here -->
  </ul>
  
  <h2>Instructions</h2>
  <ol>
    <!-- Add instructions here -->
  </ol>
  
  <p><a href="https://www.allrecipes.com">Find more recipes</a></p>
</body>
</html>`}
          </CodeBlock>
          
          <p className="mt-4">
            Complete the recipe by filling in the ingredients and instructions lists. In the next lesson, we'll learn about semantic HTML!
          </p>
        </ExerciseBlock>
      </div>
    </ContentLayout>
  );
};

export default HTMLTags;
