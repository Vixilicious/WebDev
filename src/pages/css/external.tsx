
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const CSSExternal = () => {
  return (
    <ContentLayout
      title="External CSS Files"
      section="CSS Basics"
      currentStep={2}
      totalSteps={5}
      prevLink="/css"
      nextLink="/css/selectors"
    >
      <div>
        <h2>Linking External CSS Files</h2>
        <p>
          While inline and internal CSS have their uses, the best practice for most websites is to use <strong>external CSS files</strong>. 
          This approach separates your content (HTML) from its presentation (CSS), making your code more maintainable and easier to work with.
        </p>

        <h3>How to Link an External CSS File</h3>
        <p>
          To connect an external CSS file to your HTML document, you'll use the <code>&lt;link&gt;</code> element in the <code>&lt;head&gt;</code> section:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This page is styled with an external CSS file.</p>
</body>
</html>`}
        </CodeBlock>

        <h3>File Structure</h3>
        <p>
          A common approach is to organize your files in folders. Here's a typical structure for a simple website:
        </p>

        <CodeBlock language="text">
{`mywebsite/
│
├── index.html
├── about.html
├── contact.html
│
├── css/
│   ├── styles.css
│   └── responsive.css
│
├── js/
│   └── script.js
│
└── images/
    ├── logo.png
    └── background.jpg`}
        </CodeBlock>

        <p>
          With this structure, you would link to your CSS file like this:
        </p>

        <CodeBlock language="html">
{`<link rel="stylesheet" href="css/styles.css">`}
        </CodeBlock>

        <h3>Benefits of External CSS</h3>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">Why Use External CSS?</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Separation of concerns</strong> - Keep content (HTML) separate from presentation (CSS)</li>
            <li><strong>Reusability</strong> - Apply the same styles to multiple pages</li>
            <li><strong>Caching</strong> - Browsers can cache CSS files, improving page load times</li>
            <li><strong>Easier maintenance</strong> - Update styles in one place instead of across many HTML files</li>
            <li><strong>Collaboration</strong> - Allows designers and developers to work more effectively together</li>
          </ul>
        </div>

        <h3>Using Multiple CSS Files</h3>
        <p>
          For larger projects, you might split your CSS across multiple files for better organization:
        </p>

        <CodeBlock language="html">
{`<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/typography.css">
<link rel="stylesheet" href="css/components.css">`}
        </CodeBlock>

        <p>
          The browser loads these files in the order they appear in your HTML, so styles in later files will override conflicting styles in earlier files.
        </p>

        <h3>Creating Your First External CSS File</h3>
        <p>
          Let's create a simple external CSS file that can be used across multiple HTML pages:
        </p>

        <CodeBlock language="css">
{`/* styles.css */

/* Reset some default browser styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Set base styles for the body */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Style headings */
h1 {
  color: #0066cc;
  margin-bottom: 20px;
}

h2 {
  color: #0099cc;
  margin: 20px 0 10px;
}

/* Style paragraphs */
p {
  margin-bottom: 15px;
}

/* Style links */
a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Add a simple navigation style */
nav {
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}`}
        </CodeBlock>

        <ExerciseBlock title="Practice Exercise: Create an External CSS File">
          <p>
            Let's practice creating and linking an external CSS file:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new folder for your project</li>
            <li>Inside that folder, create two files:
              <ul className="list-disc ml-6 mt-1">
                <li><code>index.html</code></li>
                <li><code>styles.css</code></li>
              </ul>
            </li>
            <li>In <code>index.html</code>, add the basic HTML structure with a link to your CSS file:
              <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <h2>About This Site</h2>
    <p>This is a simple website styled with an external CSS file.</p>
    
    <h2>Why I'm Learning CSS</h2>
    <p>CSS helps make websites look beautiful and professional.</p>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>
</html>`}
              </CodeBlock>
            </li>
            <li>Now, in <code>styles.css</code>, add some styles:
              <CodeBlock language="css">
{`/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Header styles */
header {
  margin-bottom: 30px;
}

h1 {
  color: #0066cc;
  margin-bottom: 15px;
}

/* Navigation styles */
nav ul {
  list-style: none;
  background-color: #f4f4f4;
  padding: 10px;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #0066cc;
}

/* Content styles */
main {
  margin-bottom: 30px;
}

h2 {
  color: #0099cc;
  margin: 20px 0 10px;
}

p {
  margin-bottom: 15px;
}

/* Footer styles */
footer {
  border-top: 1px solid #ddd;
  padding-top: 10px;
  text-align: center;
  font-size: 0.9em;
  color: #666;
}`}
              </CodeBlock>
            </li>
            <li>Open <code>index.html</code> in your browser to see the styled page</li>
          </ol>
          
          <p className="mt-4">
            Try creating additional HTML pages (<code>about.html</code>, <code>contact.html</code>) that link to the same CSS file. 
            Notice how you can maintain consistent styling across all pages by updating just one file.
          </p>
        </ExerciseBlock>
        
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">Pro Tip</h4>
          <p className="mb-0">
            When linking to CSS files, you can use relative paths or absolute paths:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li><strong>Relative path:</strong> <code>href="css/styles.css"</code> (relative to the current file)</li>
            <li><strong>Absolute path:</strong> <code>href="/css/styles.css"</code> (relative to the root directory)</li>
            <li><strong>Full URL:</strong> <code>href="https://example.com/css/styles.css"</code></li>
          </ul>
        </div>
        
        <p>
          In the next lesson, we'll learn about different types of CSS selectors and how to target specific elements.
        </p>
      </div>
    </ContentLayout>
  );
};

export default CSSExternal;
