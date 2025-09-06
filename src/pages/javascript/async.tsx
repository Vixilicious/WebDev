
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const JavaScriptAsync = () => {
  return (
    <ContentLayout
      title="Asynchronous JavaScript with Async/Await"
      section="JavaScript Basics"
      currentStep={5}
      totalSteps={6}
      prevLink="/javascript/dom"
      nextLink="/javascript/exercise"
    >
      <div>
        <h2>Introduction to Asynchronous JavaScript</h2>
        <p>
          JavaScript is single-threaded, meaning it can only execute one operation at a time. However, web applications often need to perform tasks that take time, like:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>Fetching data from APIs</li>
          <li>Reading/writing files (in Node.js)</li>
          <li>Performing complex calculations</li>
          <li>Waiting for user actions</li>
        </ul>
        <p>
          This is where asynchronous programming comes in. It allows your code to perform long-running operations without blocking the main thread, keeping your application responsive.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Evolution of Asynchronous JavaScript</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium mb-1">Callbacks</h4>
              <p className="text-sm">The original approach to async operations. Functions are passed as arguments and called when an operation completes.</p>
            </div>
            <div className="bg-white p-4 rounded-md">
              <h4 className="font-medium mb-1">Promises</h4>
              <p className="text-sm">Objects representing the eventual completion (or failure) of an async operation. Allows chaining with .then() and .catch().</p>
            </div>
            <div className="bg-white p-4 rounded-md border-2 border-pink">
              <h4 className="font-medium mb-1">Async/Await</h4>
              <p className="text-sm">Built on promises, provides a cleaner, more readable syntax that looks like synchronous code.</p>
            </div>
          </div>
        </div>

        <h2>Understanding Promises</h2>
        <p>
          Before diving into async/await, it's important to understand promises, as async/await is built on top of them.
        </p>

        <h3 className="mt-6">What is a Promise?</h3>
        <p>
          A promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected</li>
          <li><strong>Fulfilled:</strong> The operation completed successfully</li>
          <li><strong>Rejected:</strong> The operation failed</li>
        </ul>

        <CodeBlock language="javascript">
{`// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  
  if (success) {
    // Operation completed successfully
    resolve('Operation successful!');
  } else {
    // Operation failed
    reject('Operation failed!');
  }
});

// Using a promise
myPromise
  .then(result => {
    console.log(result); // 'Operation successful!'
  })
  .catch(error => {
    console.error(error); // 'Operation failed!'
  });`}
        </CodeBlock>

        <h2>Introducing Async/Await</h2>
        <p>
          Async/await is a modern syntax for working with promises that makes asynchronous code look and behave more like synchronous code. This makes it easier to read and reason about.
        </p>

        <h3 className="mt-6">The async Keyword</h3>
        <p>
          When you add the <code>async</code> keyword to a function, it:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>Automatically returns a promise</li>
          <li>Allows the use of <code>await</code> inside the function</li>
        </ul>

        <CodeBlock language="javascript">
{`// Async function declaration
async function myAsyncFunction() {
  return 'Hello from async!';
}

// This is equivalent to:
function myPromiseFunction() {
  return Promise.resolve('Hello from async!');
}

// Both are used the same way:
myAsyncFunction().then(result => console.log(result)); // 'Hello from async!'`}
        </CodeBlock>

        <h3 className="mt-6">The await Keyword</h3>
        <p>
          The <code>await</code> keyword can only be used inside an async function. It:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-4">
          <li>Pauses the execution of the async function until the promise is resolved</li>
          <li>Returns the resolved value of the promise</li>
          <li>Throws an error if the promise is rejected</li>
        </ul>

        <CodeBlock language="javascript">
{`async function getUser() {
  try {
    // Wait for the promise to resolve
    const response = await fetch('https://api.example.com/users/1');
    
    // Once the fetch promise resolves, we wait for the json promise
    const user = await response.json();
    
    console.log(user);
    return user;
  } catch (error) {
    // This catches any errors in the try block
    console.error('Error fetching user:', error);
  }
}`}
        </CodeBlock>

        <h2>Working with Fetch API</h2>
        <p>
          The Fetch API is a modern interface for making HTTP requests, and it returns promises. It's an excellent example of how to use async/await.
        </p>

        <CodeBlock language="javascript">
{`// Fetch with promises
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Same operation with async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the async function
fetchData();`}
        </CodeBlock>

        <div className="bg-pink/20 p-4 rounded-lg my-4">
          <p className="font-medium">💡 Pro Tip:</p>
          <p>
            Notice how the async/await version looks more like regular synchronous code. This makes it easier to understand the flow of execution, especially when dealing with complex operations.
          </p>
        </div>

        <h2>Error Handling with Async/Await</h2>
        <p>
          There are two main ways to handle errors with async/await:
        </p>

        <h3 className="mt-6">1. Try/Catch Blocks</h3>
        <p>
          The most common approach is to wrap your await statements in a try/catch block:
        </p>

        <CodeBlock language="javascript">
{`async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    // You could also rethrow the error or return a default value
    return { error: true, message: error.message };
  }
}`}
        </CodeBlock>

        <h3 className="mt-6">2. Handling Rejected Promises</h3>
        <p>
          You can also handle errors at the call site by using .catch() with the returned promise:
        </p>

        <CodeBlock language="javascript">
{`async function fetchUserData(userId) {
  const response = await fetch(\`https://api.example.com/users/\${userId}\`);
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  return await response.json();
}

// Handle errors at the call site
fetchUserData(1)
  .then(userData => {
    console.log('User data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
        </CodeBlock>

        <h2>Parallel vs Sequential Execution</h2>

        <h3 className="mt-6">Sequential Execution</h3>
        <p>
          When you await each promise one after another, they run sequentially:
        </p>

        <CodeBlock language="javascript">
{`async function fetchSequential() {
  console.time('sequential');
  
  // These run one after another
  const user = await fetchUserData(1);
  const posts = await fetchUserPosts(1);
  const comments = await fetchPostComments(posts[0].id);
  
  console.timeEnd('sequential');
  return { user, posts, comments };
}`}
        </CodeBlock>

        <h3 className="mt-6">Parallel Execution</h3>
        <p>
          For independent operations, you can run them in parallel for better performance:
        </p>

        <CodeBlock language="javascript">
{`async function fetchParallel() {
  console.time('parallel');
  
  // Start all fetch requests simultaneously
  const userPromise = fetchUserData(1);
  const postsPromise = fetchUserPosts(1);
  
  // Wait for both to complete
  const [user, posts] = await Promise.all([userPromise, postsPromise]);
  
  // This one depends on the result of posts
  const comments = await fetchPostComments(posts[0].id);
  
  console.timeEnd('parallel');
  return { user, posts, comments };
}`}
        </CodeBlock>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="font-medium">⚠️ Note:</p>
          <p>
            <code>Promise.all()</code> runs promises in parallel and waits for all of them to resolve. However, if any promise rejects, the entire operation fails. For more resilient error handling, consider <code>Promise.allSettled()</code>.
          </p>
        </div>

        <h2>Real-World Example: Weather App API Call</h2>
        <p>
          Let's build a function to fetch weather data from a public API using async/await:
        </p>

        <CodeBlock language="javascript">
{`async function getWeatherData(city) {
  const API_KEY = 'your_api_key'; // Replace with your actual API key
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&units=metric&appid=\${API_KEY}\`;
  
  try {
    // Fetch data from the API
    const response = await fetch(url);
    
    // Check if the request was successful
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(\`City "\${city}" not found\`);
      }
      throw new Error(\`Weather API error: \${response.status}\`);
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Extract relevant information
    const weather = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      icon: \`https://openweathermap.org/img/wn/\${data.weather[0].icon}@2x.png\`
    };
    
    return weather;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

// Using the function
async function displayWeather() {
  try {
    const weatherData = await getWeatherData('London');
    console.log(\`Current weather in \${weatherData.city}: \${weatherData.temperature}°C, \${weatherData.description}\`);
    
    // You could update UI elements here
    document.getElementById('temperature').textContent = \`\${weatherData.temperature}°C\`;
    document.getElementById('description').textContent = weatherData.description;
    document.getElementById('weather-icon').src = weatherData.icon;
  } catch (error) {
    console.error('Failed to display weather:', error);
    // Show error message to user
    document.getElementById('weather-container').innerHTML = 
      \`<p class="error">Failed to load weather data: \${error.message}</p>\`;
  }
}`}
        </CodeBlock>

        <h2>Best Practices for Async/Await</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Always Handle Errors</h3>
            <p className="text-sm">Use try/catch blocks or .catch() to handle errors gracefully. Unhandled promise rejections can cause your application to crash.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Avoid Mixing Promise Syntax</h3>
            <p className="text-sm">Stick with async/await throughout your code for consistency. Mixing .then() chains with async/await can make code harder to follow.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Use Parallel Execution</h3>
            <p className="text-sm">When possible, use Promise.all() to run independent asynchronous operations concurrently for better performance.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Be Careful with Loops</h3>
            <p className="text-sm">Using await inside a loop executes sequentially. Use Promise.all() with map() for parallel execution.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Top-Level await</h3>
            <p className="text-sm">Modern JavaScript allows top-level await in modules, but it's still best practice to wrap async code in functions.</p>
          </div>
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Clean Timeouts</h3>
            <p className="text-sm">For async operations with timeouts, ensure you clean up timers to prevent memory leaks.</p>
          </div>
        </div>

        <ExerciseBlock title="Practice: Fetching and Displaying Data with Async/Await">
          <p>
            Let's practice using async/await by creating a function that fetches data from the JSONPlaceholder API and displays it on a web page.
          </p>
          
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <strong>Create an HTML file</strong> with a button and a container for displaying the data.
            </li>
            <li>
              <strong>Write an async function</strong> that fetches user data from <code>https://jsonplaceholder.typicode.com/users</code>.
            </li>
            <li>
              <strong>Add error handling</strong> to gracefully handle any issues that might occur during the fetch.
            </li>
            <li>
              <strong>Display the fetched data</strong> in the container when the button is clicked.
            </li>
          </ol>
          
          <p className="font-medium mt-4">
            Here's a template to get you started:
          </p>
          
          <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async/Await Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-bottom: 20px;
    }
    button:hover {
      background-color: #45a049;
    }
    .user-card {
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 4px;
    }
    .error {
      color: red;
      padding: 10px;
      border: 1px solid red;
      border-radius: 4px;
      background-color: #ffebee;
    }
    .loading {
      color: #666;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h1>User Directory</h1>
  <button id="fetch-btn">Fetch Users</button>
  <div id="user-container"></div>

  <script>
    // 1. Select the elements
    const fetchButton = document.getElementById('fetch-btn');
    const userContainer = document.getElementById('user-container');
    
    // 2. Add click event listener to the button
    fetchButton.addEventListener('click', async () => {
      // TODO: Implement the fetchUsers function and call it here
    });
    
    // 3. Create the async function to fetch users
    async function fetchUsers() {
      // TODO: Implement this function
      // - Show loading state
      // - Fetch data from the API
      // - Handle errors
      // - Display the users
    }
    
    // 4. Create a function to display the users
    function displayUsers(users) {
      // TODO: Implement this function
      // - Create HTML for each user
      // - Append the HTML to the user container
    }
  </script>
</body>
</html>`}
          </CodeBlock>
          
          <p className="mt-4">
            Click below to see a possible solution:
          </p>
          
          <details className="mt-2 mb-4">
            <summary className="cursor-pointer font-medium text-pink hover:underline">View Solution</summary>
            <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async/Await Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-bottom: 20px;
    }
    button:hover {
      background-color: #45a049;
    }
    .user-card {
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 4px;
    }
    .error {
      color: red;
      padding: 10px;
      border: 1px solid red;
      border-radius: 4px;
      background-color: #ffebee;
    }
    .loading {
      color: #666;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h1>User Directory</h1>
  <button id="fetch-btn">Fetch Users</button>
  <div id="user-container"></div>

  <script>
    // 1. Select the elements
    const fetchButton = document.getElementById('fetch-btn');
    const userContainer = document.getElementById('user-container');
    
    // 2. Add click event listener to the button
    fetchButton.addEventListener('click', async () => {
      try {
        await fetchUsers();
      } catch (error) {
        showError(error.message);
      }
    });
    
    // 3. Create the async function to fetch users
    async function fetchUsers() {
      // Show loading state
      userContainer.innerHTML = '<p class="loading">Loading users...</p>';
      
      try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if the request was successful
        if (!response.ok) {
          throw new Error(\`API error: \${response.status}\`);
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Display the users
        displayUsers(users);
      } catch (error) {
        // Handle errors
        console.error('Error fetching users:', error);
        throw error; // Re-throw to be handled by the caller
      }
    }
    
    // 4. Create a function to display the users
    function displayUsers(users) {
      // Clear the loading message
      userContainer.innerHTML = '';
      
      // Check if we have users
      if (users.length === 0) {
        userContainer.innerHTML = '<p>No users found.</p>';
        return;
      }
      
      // Create HTML for each user
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        userCard.innerHTML = \`
          <h2>\${user.name}</h2>
          <p><strong>Email:</strong> \${user.email}</p>
          <p><strong>Phone:</strong> \${user.phone}</p>
          <p><strong>Website:</strong> <a href="https://\${user.website}" target="_blank">\${user.website}</a></p>
          <p><strong>Company:</strong> \${user.company.name}</p>
          <p><strong>Address:</strong> \${user.address.street}, \${user.address.suite}, \${user.address.city}, \${user.address.zipcode}</p>
        \`;
        
        // Append the card to the container
        userContainer.appendChild(userCard);
      });
    }
    
    // Helper function to show errors
    function showError(message) {
      userContainer.innerHTML = \`<p class="error">Error: \${message}</p>\`;
    }
  </script>
</body>
</html>`}
            </CodeBlock>
          </details>
        </ExerciseBlock>

        <h2>Async/Await in Modern JavaScript</h2>
        <p>
          Since its introduction in ES2017, async/await has become the standard way to write asynchronous code in JavaScript. It's supported in all modern browsers and Node.js environments, making it a reliable choice for new projects.
        </p>
        <p>
          As you continue learning JavaScript and move into frameworks like React, you'll find that async/await is essential for tasks like:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Fetching data from APIs</li>
          <li>Handling form submissions</li>
          <li>Loading resources asynchronously</li>
          <li>Managing state in complex applications</li>
        </ul>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Ready to Practice?</h3>
          <p className="mb-4">
            Now that you understand the basics of async/await, you're ready to apply this knowledge in real projects. The next lesson will bring everything together in a comprehensive JavaScript exercise.
          </p>
          <div className="flex justify-center">
            <a href="/javascript/exercise" className="btn-primary inline-flex items-center gap-2">
              Continue to JavaScript Exercise
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default JavaScriptAsync;
