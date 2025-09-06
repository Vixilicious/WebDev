
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const JavaScriptIntro = () => {
  return (
    <ContentLayout
      title="Introduction to JavaScript"
      section="JavaScript Basics"
      currentStep={1}
      totalSteps={5}
      prevLink="/css/flexbox"
      nextLink="/javascript/scripts"
    >
      <div>
        <h2>What is JavaScript?</h2>
        <p>
          JavaScript is a programming language that brings interactivity and dynamic behavior to websites. While HTML provides the structure and CSS handles the presentation, JavaScript adds behavior and functionality to web pages.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">JavaScript Key Points</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>JavaScript is a <strong>programming language</strong> that runs in the browser</li>
            <li>It enables <strong>interactive</strong> web pages and user experiences</li>
            <li>JavaScript can <strong>modify HTML content and CSS styles</strong> after a page has loaded</li>
            <li>It can <strong>respond to user actions</strong> like clicks, form submissions, and key presses</li>
            <li>JavaScript is <strong>not related to Java</strong> despite the similar name</li>
            <li>Modern JavaScript is also used for <strong>server-side development</strong> with Node.js</li>
          </ul>
        </div>

        <h2>What Can JavaScript Do?</h2>
        <p>
          JavaScript has evolved from a simple scripting language to a powerful programming language that can be used for a wide variety of tasks. Here are some common things JavaScript can do on a web page:
        </p>

        <h3>Change HTML Content</h3>
        <p>
          JavaScript can manipulate the content of HTML elements:
        </p>

        <CodeBlock language="javascript">
{`// Change the text of an element with ID "demo"
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// Create a new element and add it to the page
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created with JavaScript";
document.body.appendChild(newParagraph);`}
        </CodeBlock>

        <h3>Change CSS Styles</h3>
        <p>
          JavaScript can change how elements look by modifying their CSS properties:
        </p>

        <CodeBlock language="javascript">
{`// Change the background color of an element
document.getElementById("demo").style.backgroundColor = "lightblue";

// Hide an element
document.getElementById("hide-me").style.display = "none";

// Show an element
document.getElementById("show-me").style.display = "block";`}
        </CodeBlock>

        <h3>React to Events</h3>
        <p>
          JavaScript can execute code when specific events occur, like when a user clicks a button:
        </p>

        <CodeBlock language="javascript">
{`// Run code when a button is clicked
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button was clicked!");
});

// Change text when mouse hovers over an element
document.getElementById("hoverElement").addEventListener("mouseover", function() {
  this.textContent = "You're hovering over me!";
});

document.getElementById("hoverElement").addEventListener("mouseout", function() {
  this.textContent = "Hover over me";
});`}
        </CodeBlock>

        <h3>Validate Forms</h3>
        <p>
          JavaScript can check form input before it's submitted to the server:
        </p>

        <CodeBlock language="javascript">
{`document.getElementById("myForm").addEventListener("submit", function(event) {
  const email = document.getElementById("email").value;
  
  // Check if email is valid
  if (!email.includes("@")) {
    // Prevent form submission
    event.preventDefault();
    
    // Show error message
    document.getElementById("error-message").textContent = "Please enter a valid email address";
  }
});`}
        </CodeBlock>

        <h3>Create Dynamic Content</h3>
        <p>
          JavaScript can update content based on conditions or data:
        </p>

        <CodeBlock language="javascript">
{`// Get the current hour
const hour = new Date().getHours();
let greeting;

// Change greeting based on time of day
if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

// Update the page content
document.getElementById("greeting").textContent = greeting;`}
        </CodeBlock>

        <h2>JavaScript in the Browser Environment</h2>
        <p>
          When JavaScript runs in a browser, it has access to several important objects:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">window</h4>
            <p className="text-sm">The global object that represents the browser window. It contains methods like <code>alert()</code>, <code>setTimeout()</code>, and properties like <code>location</code>.</p>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">document</h4>
            <p className="text-sm">Represents the web page loaded in the browser. It provides methods to access and manipulate HTML elements like <code>getElementById()</code> and <code>querySelector()</code>.</p>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">console</h4>
            <p className="text-sm">Provides access to the browser's debugging console. The most common method is <code>console.log()</code> for debugging.</p>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">localStorage</h4>
            <p className="text-sm">Allows you to store data in the browser that persists even after the browser is closed.</p>
          </div>
        </div>

        <h2>JavaScript Syntax Basics</h2>
        <p>
          Before diving deeper into JavaScript, let's look at some basic syntax:
        </p>

        <h3>Variables and Data Types</h3>
        <p>
          Variables are containers for storing data. JavaScript has several data types:
        </p>

        <CodeBlock language="javascript">
{`// String (text)
let name = "John";

// Number
let age = 25;
let price = 19.99;

// Boolean (true/false)
let isActive = true;

// Array (collection of values)
let colors = ["red", "green", "blue"];

// Object (collection of key-value pairs)
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Undefined (a variable without a value)
let undefinedVar;

// Null (represents the absence of any value)
let emptyValue = null;`}
        </CodeBlock>

        <h3>Comments</h3>
        <p>
          Comments are notes in the code that are not executed. They help explain the code:
        </p>

        <CodeBlock language="javascript">
{`// This is a single-line comment

/*
This is a 
multi-line comment
*/`}
        </CodeBlock>

        <h3>Basic Operators</h3>
        <p>
          JavaScript supports various operators for performing calculations and comparisons:
        </p>

        <CodeBlock language="javascript">
{`// Arithmetic operators
let sum = 5 + 10;     // Addition
let difference = 10 - 5;  // Subtraction
let product = 5 * 10;   // Multiplication
let quotient = 10 / 5;   // Division
let remainder = 10 % 3;  // Modulus (remainder)

// Assignment operators
let x = 10;   // Assign value
x += 5;       // Same as: x = x + 5
x -= 3;       // Same as: x = x - 3
x *= 2;       // Same as: x = x * 2
x /= 4;       // Same as: x = x / 4

// Comparison operators
let isEqual = 5 == "5";       // Equal to (value only): true
let isStrictEqual = 5 === "5"; // Strict equal to (value and type): false
let isNotEqual = 5 != 8;      // Not equal to: true
let isGreater = 10 > 5;       // Greater than: true
let isLess = 5 < 10;          // Less than: true

// Logical operators
let and = (5 > 3) && (10 > 5);  // Logical AND: true
let or = (5 > 10) || (10 > 5);  // Logical OR: true
let not = !(5 > 10);            // Logical NOT: true`}
        </CodeBlock>

        <h3>Console Output for Debugging</h3>
        <p>
          When learning JavaScript, it's helpful to use <code>console.log()</code> to see the output of your code:
        </p>

        <CodeBlock language="javascript">
{`// Output a simple message
console.log("Hello, JavaScript!");

// Output a variable value
let score = 85;
console.log("Your score:", score);

// Output multiple values
console.log("Name:", "John", "Age:", 30);

// Output an object
const user = { id: 1, name: "Alice", role: "Admin" };
console.log(user);

// Format console output
console.log("User %s has role %s", user.name, user.role);

// Error message
console.error("Something went wrong!");

// Warning message
console.warn("This feature is deprecated");`}
        </CodeBlock>

        <ExerciseBlock title="Practice Exercise: Your First JavaScript">
          <p>
            Let's write a simple HTML page with some JavaScript code to get started:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new HTML file named <code>first-javascript.html</code></li>
            <li>Add the following HTML code:
              <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First JavaScript</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .output-box {
      background-color: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px;
      margin: 10px 0;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 8px 16px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h1>My First JavaScript</h1>
  
  <h2>1. Displaying Content</h2>
  <div id="output1" class="output-box">Content will appear here</div>
  <button onclick="showMessage()">Show Message</button>
  
  <h2>2. Changing Styles</h2>
  <div id="output2" class="output-box">Hover over me</div>
  
  <h2>3. Working with Variables</h2>
  <div id="output3" class="output-box"></div>
  <button onclick="calculateAndDisplay()">Calculate</button>
  
  <script>
    // Function to show a message
    function showMessage() {
      // TODO: Change the content of output1 to "Hello, JavaScript World!"
    }
    
    // TODO: Add event listeners to change output2 background color on hover
    
    // Function to calculate and display results
    function calculateAndDisplay() {
      // TODO: Create variables for two numbers, calculate their sum, difference, product, and quotient
      // and display the results in output3
    }
    
    // TODO: Add code to display the current date and time when the page loads
  </script>
</body>
</html>`}
              </CodeBlock>
            </li>
            <li>Complete the TODOs in the JavaScript code:
              <ul className="list-disc ml-6 mt-1">
                <li>Change the content of output1 when the button is clicked</li>
                <li>Add event listeners to change output2's background color on hover</li>
                <li>Implement the calculateAndDisplay function to show calculations</li>
                <li>Add code to display the current date and time when the page loads</li>
              </ul>
            </li>
          </ol>
          
          <p className="mt-4">
            Here's a reference solution for the JavaScript parts:
          </p>
          
          <CodeBlock language="javascript">
{`// Function to show a message
function showMessage() {
  document.getElementById("output1").innerHTML = "Hello, JavaScript World!";
}

// Add event listeners to change output2 background color on hover
const output2 = document.getElementById("output2");

output2.addEventListener("mouseover", function() {
  this.style.backgroundColor = "#ffcccb";  // Light red
  this.textContent = "Mouse is over me!";
});

output2.addEventListener("mouseout", function() {
  this.style.backgroundColor = "#f0f0f0";  // Original color
  this.textContent = "Hover over me";
});

// Function to calculate and display results
function calculateAndDisplay() {
  // Create variables and perform calculations
  const num1 = 10;
  const num2 = 5;
  
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  
  // Display the results
  document.getElementById("output3").innerHTML = \`
    <p>Using numbers: \${num1} and \${num2}</p>
    <p>Sum: \${sum}</p>
    <p>Difference: \${difference}</p>
    <p>Product: \${product}</p>
    <p>Quotient: \${quotient}</p>
  \`;
}

// Display the current date and time when the page loads
window.addEventListener("load", function() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  
  // Create a paragraph at the bottom of the page
  const dateTimePara = document.createElement("p");
  dateTimePara.textContent = "Page loaded at: " + dateTimeString;
  document.body.appendChild(dateTimePara);
});`}
          </CodeBlock>
          
          <p>
            Open the HTML file in your browser and interact with the elements to see JavaScript in action!
          </p>
        </ExerciseBlock>
        
        <p>
          In the next lesson, we'll learn how to include JavaScript in your HTML pages using different methods and explore best practices for organizing your code.
        </p>
      </div>
    </ContentLayout>
  );
};

export default JavaScriptIntro;
