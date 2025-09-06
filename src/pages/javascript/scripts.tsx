
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const JavaScriptScripts = () => {
  return (
    <ContentLayout
      title="Adding JavaScript to Your Pages"
      section="JavaScript Basics"
      currentStep={2}
      totalSteps={5}
      prevLink="/javascript"
      nextLink="/javascript/basics"
    >
      <div>
        <h2>How to Include JavaScript in HTML</h2>
        <p>
          There are several ways to add JavaScript code to your HTML pages. Let's explore the different methods.
        </p>

        <h3>1. Inline JavaScript</h3>
        <p>
          You can add JavaScript directly to an HTML element using event attributes like <code>onclick</code>, <code>onload</code>, etc.
        </p>
        <CodeBlock language="html">
{`<button onclick="alert('Hello, World!')">Click Me</button>`}
        </CodeBlock>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="font-medium">⚠️ Note:</p>
          <p>While inline JavaScript is quick to implement, it's generally not recommended for larger applications as it mixes HTML structure with behavior, making code harder to maintain.</p>
        </div>

        <h3>2. Internal JavaScript with Script Tags</h3>
        <p>
          You can include JavaScript in your HTML file by placing it within <code>&lt;script&gt;</code> tags in the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> section.
        </p>
        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Internal JavaScript Example</title>
  
  <script>
    // JavaScript in the head section
    function greetFromHead() {
      console.log("Hello from the head section!");
    }
    
    // This runs when the page begins to load
    greetFromHead();
  </script>
</head>
<body>
  <h1>Internal JavaScript Example</h1>
  <button id="myButton">Click Me</button>
  
  <script>
    // JavaScript in the body section
    function greetFromBody() {
      alert("Hello from the body section!");
    }
    
    // Add event listener to button
    document.getElementById("myButton").addEventListener("click", greetFromBody);
  </script>
</body>
</html>`}
        </CodeBlock>

        <h3>3. External JavaScript Files</h3>
        <p>
          For larger applications, it's best practice to place your JavaScript code in separate files and link them to your HTML document using the <code>src</code> attribute of the <code>&lt;script&gt;</code> tag.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div>
            <h4 className="font-medium mb-2">HTML File (index.html)</h4>
            <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>External JavaScript Example</title>
  <!-- Link to external JavaScript file -->
  <script src="script.js" defer></script>
</head>
<body>
  <h1>External JavaScript Example</h1>
  <button id="myButton">Click Me</button>
</body>
</html>`}
            </CodeBlock>
          </div>
          <div>
            <h4 className="font-medium mb-2">JavaScript File (script.js)</h4>
            <CodeBlock language="javascript">
{`// This code is in an external file
function greet() {
  alert("Hello from an external JavaScript file!");
}

// Add event listener when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myButton").addEventListener("click", greet);
});`}
            </CodeBlock>
          </div>
        </div>

        <h2>Script Placement and Loading</h2>
        <p>
          Where you place your <code>&lt;script&gt;</code> tags in the HTML document affects how and when the JavaScript code runs.
        </p>

        <h3>Script in the Head</h3>
        <p>
          When you place scripts in the <code>&lt;head&gt;</code> section:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>Scripts load before the HTML body is parsed</li>
          <li>Can cause page rendering delays if scripts are large</li>
          <li>You may not be able to access DOM elements in the body unless you wait for the DOM content to load</li>
        </ul>

        <h3>Script in the Body</h3>
        <p>
          When you place scripts at the end of the <code>&lt;body&gt;</code> section:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>HTML content loads and displays before scripts run</li>
          <li>Better perceived performance as content appears faster</li>
          <li>DOM elements are available to be manipulated by the script</li>
        </ul>

        <h3>Using Attributes to Control Script Loading</h3>
        <p>
          Modern browsers provide attributes to control how scripts load:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded p-4 bg-white">
            <h4 className="font-semibold mb-2">defer</h4>
            <CodeBlock language="html">
{`<script src="script.js" defer></script>`}
            </CodeBlock>
            <ul className="list-disc ml-4 mt-2 text-sm">
              <li>Downloads the script while the HTML is being parsed</li>
              <li>Executes the script after the HTML is fully parsed</li>
              <li>Preserves the order of multiple deferred scripts</li>
              <li><strong>Best practice</strong> for most external scripts</li>
            </ul>
          </div>
          <div className="border rounded p-4 bg-white">
            <h4 className="font-semibold mb-2">async</h4>
            <CodeBlock language="html">
{`<script src="analytics.js" async></script>`}
            </CodeBlock>
            <ul className="list-disc ml-4 mt-2 text-sm">
              <li>Downloads the script while the HTML is being parsed</li>
              <li>Executes as soon as it's downloaded, possibly before HTML is fully parsed</li>
              <li>Does not guarantee execution order of multiple async scripts</li>
              <li>Best for scripts that don't depend on DOM or other scripts</li>
            </ul>
          </div>
        </div>

        <h2>Best Practices for Including JavaScript</h2>
        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">JavaScript Loading Recommendations</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use external JavaScript files to separate behavior from structure</li>
            <li>Use the <code>defer</code> attribute for most scripts that interact with the DOM</li>
            <li>Place scripts at the end of the <code>&lt;body&gt;</code> if not using <code>defer</code> or <code>async</code></li>
            <li>Use <code>async</code> for independent scripts like analytics that don't need to run in a specific order</li>
            <li>Avoid inline JavaScript for maintainable code</li>
            <li>Minimize the number of script files to reduce HTTP requests (or use bundling tools)</li>
          </ul>
        </div>

        <ExerciseBlock title="Practice: Adding JavaScript to a Web Page">
          <p>
            Let's practice adding JavaScript to a web page using different methods:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new HTML file named <code>javascript-practice.html</code></li>
            <li>Include an internal script in the head that defines a function to change the text color</li>
            <li>Create an external JavaScript file with a function to change the background color</li>
            <li>Add buttons that use both inline JavaScript and event listeners from the external file</li>
          </ol>
          
          <p className="mt-4">
            Here's a reference solution:
          </p>
          
          <h4 className="font-medium mb-2">HTML File (javascript-practice.html)</h4>
          <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
      transition: background-color 0.5s;
    }
    h1 {
      transition: color 0.5s;
    }
    .button-container {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
  </style>
  
  <script>
    // Internal script in the head
    function changeTextColor(color) {
      document.querySelector('h1').style.color = color;
    }
  </script>
  
  <!-- Link to external JavaScript with defer attribute -->
  <script src="javascript-practice.js" defer></script>
</head>
<body>
  <h1>JavaScript Integration Practice</h1>
  
  <div class="button-container">
    <!-- Using inline JavaScript -->
    <button onclick="changeTextColor('blue')">Blue Text</button>
    <button onclick="changeTextColor('red')">Red Text</button>
    
    <!-- Using event listeners from external file -->
    <button id="bgBlue">Blue Background</button>
    <button id="bgGreen">Green Background</button>
  </div>
  
  <p id="status">Click the buttons to see JavaScript in action!</p>
</body>
</html>`}
          </CodeBlock>
          
          <h4 className="font-medium mb-2 mt-4">JavaScript File (javascript-practice.js)</h4>
          <CodeBlock language="javascript">
{`// External JavaScript file

// Function to change background color
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  document.getElementById('status').textContent = 'Background changed to ' + color + '!';
}

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to buttons
  document.getElementById('bgBlue').addEventListener('click', function() {
    changeBackgroundColor('#e6f2ff');
  });
  
  document.getElementById('bgGreen').addEventListener('click', function() {
    changeBackgroundColor('#e6ffe6');
  });
  
  // Log that external JavaScript has loaded
  console.log('External JavaScript file loaded successfully!');
});`}
          </CodeBlock>
          
          <p className="mt-4">
            Open the HTML file in your browser and interact with the buttons to see the different JavaScript integration methods in action. Don't forget to check the console for the log message from the external file!
          </p>
        </ExerciseBlock>
        
        <div className="bg-orange/20 p-4 rounded-lg my-6">
          <h3 className="font-medium mb-2">💡 Pro Tip:</h3>
          <p>
            Use the browser's developer tools (F12 or Ctrl+Shift+I) to debug your JavaScript. The Console panel shows errors and your console.log() messages, while the Sources panel lets you set breakpoints and inspect variables during execution.
          </p>
        </div>
        
        <p>
          In the next lesson, we'll dive into JavaScript variables, functions, and core programming concepts.
        </p>
      </div>
    </ContentLayout>
  );
};

export default JavaScriptScripts;
