
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const JavaScriptBasics = () => {
  return (
    <ContentLayout
      title="JavaScript Variables & Functions"
      section="JavaScript Basics"
      currentStep={3}
      totalSteps={5}
      prevLink="/javascript/scripts"
      nextLink="/javascript/dom"
    >
      <div>
        <h2>JavaScript Variables</h2>
        <p>
          Variables are containers for storing data values. In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.
        </p>

        <h3>Variable Declaration</h3>
        <CodeBlock language="javascript">
{`// Using var (older way, avoid in modern JavaScript)
var name = "John";

// Using let (modern way, can be reassigned)
let age = 30;
age = 31; // This is allowed

// Using const (for values that shouldn't change)
const PI = 3.14159;
// PI = 3.14; // This would cause an error`}
        </CodeBlock>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="font-medium">🔑 Modern Best Practice:</p>
          <p>Use <code>const</code> by default for all variables. Only use <code>let</code> when you need to reassign a value. Avoid using <code>var</code> in modern JavaScript.</p>
        </div>

        <h3>Variable Scope</h3>
        <p>
          Variables have different scopes depending on how they're declared:
        </p>

        <CodeBlock language="javascript">
{`// Global scope
const globalVariable = "I'm available everywhere";

function exampleFunction() {
  // Function scope
  const functionVariable = "I'm only available inside this function";
  
  if (true) {
    // Block scope
    let blockVariable = "I'm only available inside this block";
    var notReallyBlockScoped = "I'm actually function scoped despite being in a block";
  }
  
  console.log(notReallyBlockScoped); // This works!
  // console.log(blockVariable); // This would error - blockVariable is not defined here
}

// console.log(functionVariable); // This would error - functionVariable is not defined here`}
        </CodeBlock>

        <h2>Data Types in JavaScript</h2>
        <p>
          JavaScript has several built-in data types:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Primitive Types</h4>
            <ul className="list-disc ml-4 space-y-1">
              <li><code>String</code>: Text data</li>
              <li><code>Number</code>: Integers and floating-point numbers</li>
              <li><code>Boolean</code>: true or false</li>
              <li><code>undefined</code>: Variable declared but not assigned</li>
              <li><code>null</code>: Intentional absence of any value</li>
              <li><code>Symbol</code>: Unique identifier</li>
              <li><code>BigInt</code>: For very large integers</li>
            </ul>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Reference Types</h4>
            <ul className="list-disc ml-4 space-y-1">
              <li><code>Object</code>: Collection of key-value pairs</li>
              <li><code>Array</code>: Ordered list of values</li>
              <li><code>Function</code>: Reusable blocks of code</li>
              <li><code>Date</code>: Date and time values</li>
              <li><code>RegExp</code>: Regular expressions</li>
              <li><code>Map</code>, <code>Set</code>: Collections</li>
            </ul>
          </div>
        </div>

        <h2>Arrays and Array Methods</h2>
        <p>
          Arrays are ordered collections of values. They can store multiple values in a single variable.
        </p>

        <h3>Creating Arrays</h3>
        <CodeBlock language="javascript">
{`// Array literal syntax (recommended)
const fruits = ["Apple", "Banana", "Cherry"];

// Using the Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Empty array
const emptyArray = [];

// Array with mixed data types
const mixedArray = [1, "Hello", true, null, {name: "John"}, [1, 2, 3]];

// Accessing array elements (zero-based indexing)
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Cherry"

// Getting array length
console.log(fruits.length); // 3`}
        </CodeBlock>

        <h3>Basic Array Methods</h3>
        <CodeBlock language="javascript">
{`const fruits = ["Apple", "Banana", "Cherry"];

// Adding elements
fruits.push("Date");              // Adds to the end: ["Apple", "Banana", "Cherry", "Date"]
fruits.unshift("Apricot");        // Adds to the beginning: ["Apricot", "Apple", "Banana", "Cherry", "Date"]

// Removing elements
const lastFruit = fruits.pop();   // Removes from the end, returns "Date"
const firstFruit = fruits.shift(); // Removes from the beginning, returns "Apricot"

// Finding elements
const bananaIndex = fruits.indexOf("Banana"); // Returns 1
const hasCherry = fruits.includes("Cherry");   // Returns true

// Combining arrays
const moreFruits = ["Elderberry", "Fig"];
const allFruits = fruits.concat(moreFruits); // ["Apple", "Banana", "Cherry", "Elderberry", "Fig"]

// Creating a string from an array
const fruitsString = fruits.join(", ");  // "Apple, Banana, Cherry"

// Creating a new array from part of an existing array
const someFruits = fruits.slice(0, 2);   // ["Apple", "Banana"] (end index not included)

// Modifying the original array by removing/replacing elements
fruits.splice(1, 1, "Blueberry"); // Removes 1 element at index 1, adds "Blueberry"
// fruits is now ["Apple", "Blueberry", "Cherry"]`}
        </CodeBlock>

        <h3>Advanced Array Methods</h3>
        <p>
          JavaScript provides powerful higher-order array methods that take functions as arguments:
        </p>

        <CodeBlock language="javascript">
{`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach: Executes a function for each element
numbers.forEach(function(number) {
  console.log(number * 2);
});

// Using arrow function syntax (modern way)
numbers.forEach(number => console.log(number * 2));

// map: Creates a new array by transforming each element
const doubled = numbers.map(number => number * 2);
// doubled is [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter: Creates a new array with elements that pass a test
const evenNumbers = numbers.filter(number => number % 2 === 0);
// evenNumbers is [2, 4, 6, 8, 10]

// find: Returns the first element that passes a test
const firstLargeNumber = numbers.find(number => number > 5);
// firstLargeNumber is 6

// reduce: Reduces the array to a single value
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum is 55 (1+2+3+4+5+6+7+8+9+10)

// some: Tests if at least one element passes a test
const hasLargeNumbers = numbers.some(number => number > 8);
// hasLargeNumbers is true

// every: Tests if all elements pass a test
const allPositive = numbers.every(number => number > 0);
// allPositive is true

// sort: Sorts the elements of an array
const unsortedNumbers = [5, 2, 8, 1, 4];
unsortedNumbers.sort(); // [1, 2, 4, 5, 8]

// For custom sorting (e.g., descending)
unsortedNumbers.sort((a, b) => b - a); // [8, 5, 4, 2, 1]`}
        </CodeBlock>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="font-medium">💡 Important to know:</p>
          <p><code>map</code>, <code>filter</code>, and <code>reduce</code> don't modify the original array. They return new arrays, which aligns with functional programming principles of immutability.</p>
        </div>

        <h2>JavaScript Functions</h2>
        <p>
          Functions are blocks of code designed to perform a particular task. They run when something calls them.
        </p>

        <h3>Function Declaration</h3>
        <CodeBlock language="javascript">
{`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const sayHello = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function (ES6+)
const greetPerson = (name) => {
  return "Hello, " + name + "!";
};

// Simplified arrow function (one-liner)
const greetQuickly = name => "Hello, " + name + "!";

// Calling functions
console.log(greet("Alice")); // "Hello, Alice!"
console.log(sayHello("Bob")); // "Hello, Bob!"
console.log(greetPerson("Charlie")); // "Hello, Charlie!"
console.log(greetQuickly("Dave")); // "Hello, Dave!"`}
        </CodeBlock>

        <h3>Function Parameters and Arguments</h3>
        <CodeBlock language="javascript">
{`// Basic parameters
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// Default parameters
function greetWithDefault(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greetWithDefault()); // "Hello, Guest!"
console.log(greetWithDefault("Alex")); // "Hello, Alex!"

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Destructuring parameters
function displayPerson({firstName, lastName, age}) {
  return firstName + " " + lastName + " is " + age + " years old.";
}
console.log(displayPerson({firstName: "John", lastName: "Doe", age: 30})); // "John Doe is 30 years old."`}
        </CodeBlock>

        <h2>Async/Await</h2>
        <p className="mb-4">
          Async/await is a modern JavaScript syntax for working with asynchronous code, making it easier to read and write.
        </p>

        <h3>Basic Async/Await Syntax</h3>
        <CodeBlock language="javascript">
{`// An async function declaration
async function fetchData() {
  // Your code here
}

// Async arrow function
const getData = async () => {
  // Your code here
};

// Using await inside an async function
async function fetchUserData() {
  // Your code here
}
`}
        </CodeBlock>

        <h3>Working with Promises</h3>
        <CodeBlock language="javascript">
{`// Using async/await with promises
async function getUserData() {
  // Your code here
}
`}
        </CodeBlock>

        <h3>Error Handling with Try/Catch</h3>
        <CodeBlock language="javascript">
{`// Error handling with async/await
async function fetchWithErrorHandling() {
  // Your code here
}
`}
        </CodeBlock>

        <h3>Practical Async/Await Example</h3>
        <CodeBlock language="javascript">
{`// A real-world example
async function fetchFromAPI() {
  // Your code here
}
`}
        </CodeBlock>

        <ExerciseBlock title="Practice: Working with Arrays and Functions">
          <p>
            Let's create a simple to-do list application to practice working with arrays and functions:
          </p>
          
          <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Todo App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      margin-left: 5px;
    }
    .delete-btn {
      background-color: #f44336;
    }
    .input-container {
      display: flex;
      margin-bottom: 20px;
    }
    input[type="text"] {
      flex-grow: 1;
      padding: 8px;
    }
  </style>
</head>
<body>
  <h1>My Todo List</h1>
  
  <div class="input-container">
    <input type="text" id="taskInput" placeholder="Add new task...">
    <button id="addBtn">Add</button>
  </div>
  
  <ul id="taskList"></ul>
  
  <div>
    <button id="clearCompleted">Clear Completed</button>
    <button id="filterAll">All</button>
    <button id="filterActive">Active</button>
    <button id="filterCompleted">Completed</button>
  </div>
  
  <p id="stats">Total: 0, Completed: 0</p>
  
  <script>
    // Initialize our tasks array
    const tasks = [
      { id: 1, text: "Learn HTML", completed: true },
      { id: 2, text: "Master CSS", completed: false },
      { id: 3, text: "Understand JavaScript", completed: false }
    ];
    
    // DOM elements
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");
    const clearCompletedBtn = document.getElementById("clearCompleted");
    const filterAllBtn = document.getElementById("filterAll");
    const filterActiveBtn = document.getElementById("filterActive");
    const filterCompletedBtn = document.getElementById("filterCompleted");
    const statsElement = document.getElementById("stats");
    
    let currentFilter = "all";
    
    // Function to render the tasks
    const renderTasks = () => {
      // Clear current list
      taskList.innerHTML = "";
      
      // Filter tasks based on current filter
      const filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true; // "all" filter
      });
      
      // Map tasks to list items
      filteredTasks.forEach(task => {
        const li = document.createElement("li");
        
        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTaskStatus(task.id));
        
        // Create task text
        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) {
          span.classList.add("completed");
        }
        
        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => deleteTask(task.id));
        
        // Append elements to list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        // Append list item to the list
        taskList.appendChild(li);
      });
      
      // Update stats
      updateStats();
    };
    
    // Function to add a new task
    const addTask = (text) => {
      // Create new task with unique ID
      const newTaskId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
      
      const newTask = {
        id: newTaskId,
        text: text,
        completed: false
      };
      
      // Add to tasks array
      tasks.push(newTask);
      
      // Render updated tasks
      renderTasks();
    };
    
    // Function to toggle task status
    const toggleTaskStatus = (id) => {
      // Find task and toggle its completed status
      const task = tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
        renderTasks();
      }
    };
    
    // Function to delete a task
    const deleteTask = (id) => {
      // Find index of task with given id
      const taskIndex = tasks.findIndex(task => task.id === id);
      
      // Remove task if found
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
      }
    };
    
    // Function to clear all completed tasks
    const clearCompleted = () => {
      // Filter out completed tasks
      const activeTasks = tasks.filter(task => !task.completed);
      
      // Replace tasks array with active tasks
      tasks.length = 0; // Clear array
      tasks.push(...activeTasks); // Add active tasks back
      
      renderTasks();
    };
    
    // Function to update stats
    const updateStats = () => {
      const total = tasks.length;
      const completed = tasks.filter(task => task.completed).length;
      statsElement.textContent = \`Total: \${total}, Completed: \${completed}\`;
    };
    
    // Event Listeners
    addBtn.addEventListener("click", () => {
      const text = taskInput.value.trim();
      if (text) {
        addTask(text);
        taskInput.value = ""; // Clear input
      }
    });
    
    // Allow pressing Enter to add a task
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const text = taskInput.value.trim();
        if (text) {
          addTask(text);
          taskInput.value = ""; // Clear input
        }
      }
    });
    
    clearCompletedBtn.addEventListener("click", clearCompleted);
    
    filterAllBtn.addEventListener("click", () => {
      currentFilter = "all";
      renderTasks();
    });
    
    filterActiveBtn.addEventListener("click", () => {
      currentFilter = "active";
      renderTasks();
    });
    
    filterCompletedBtn.addEventListener("click", () => {
      currentFilter = "completed";
      renderTasks();
    });
    
    // Initial render
    renderTasks();
  </script>
</body>
</html>`}
          </CodeBlock>
          
          <p className="mt-4">
            This exercise demonstrates:
          </p>
          <ul className="list-disc ml-6">
            <li>Creating and manipulating arrays of objects</li>
            <li>Using array methods like <code>filter</code>, <code>find</code>, <code>findIndex</code>, <code>map</code>, and <code>splice</code></li>
            <li>Defining and calling functions with different syntaxes</li>
            <li>Event handling with DOM elements</li>
            <li>Implementing CRUD operations (Create, Read, Update, Delete)</li>
          </ul>
        </ExerciseBlock>
        
        <p>
          In the next lesson, we'll learn how to manipulate the Document Object Model (DOM) to dynamically update web pages.
        </p>
      </div>
    </ContentLayout>
  );
};

export default JavaScriptBasics;
