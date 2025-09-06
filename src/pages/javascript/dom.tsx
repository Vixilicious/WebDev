
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const JavaScriptDOM = () => {
  return (
    <ContentLayout
      title="DOM Manipulation with JavaScript"
      section="JavaScript Basics"
      currentStep={4}
      totalSteps={6}
      prevLink="/javascript/basics"
      nextLink="/javascript/async"
    >
      <div>
        <h2>What is the DOM?</h2>
        <p>
          The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree of objects that JavaScript can manipulate.
        </p>
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">DOM Key Concepts</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>The DOM represents the document as a tree of nodes</li>
            <li>Elements, attributes, and text are all nodes in the DOM tree</li>
            <li>JavaScript can access and modify these nodes</li>
            <li>Changes to the DOM are reflected in the browser display</li>
            <li>The DOM is language-independent (works with any programming language)</li>
          </ul>
        </div>

        <h2>Accessing DOM Elements</h2>
        <p>
          JavaScript provides several methods to select elements from the DOM:
        </p>

        <CodeBlock language="javascript">
{`// Select a single element by ID
const main = document.getElementById('main');

// Select elements by CSS selector (returns first match)
const firstParagraph = document.querySelector('p');
const navItem = document.querySelector('.nav-item');
const submitButton = document.querySelector('#submit');

// Select multiple elements by CSS selector (returns NodeList)
const allParagraphs = document.querySelectorAll('p');
const navItems = document.querySelectorAll('.nav-item');

// Select elements by tag name
const divs = document.getElementsByTagName('div');

// Select elements by class name
const highlights = document.getElementsByClassName('highlight');

// Traversing from an element
const parent = element.parentNode;
const children = element.children;
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;`}
        </CodeBlock>

        <div className="bg-pink/20 p-4 rounded-lg my-4">
          <p className="font-medium">💡 Best Practice:</p>
          <p>Use <code>querySelector</code> and <code>querySelectorAll</code> for most selections. They're powerful, consistent, and use the familiar CSS selector syntax.</p>
        </div>

        <h2>Modifying the DOM</h2>
        <p>
          Once you've selected elements, you can manipulate them in various ways:
        </p>

        <h3>Changing Element Content</h3>
        <CodeBlock language="javascript">
{`// Change text content
element.textContent = 'New text content';

// Change HTML content
element.innerHTML = '<span>New HTML content</span>';

// Get text content
const text = element.textContent;

// Set input value
document.getElementById('username').value = 'johndoe';`}
        </CodeBlock>

        <h3>Modifying Element Attributes</h3>
        <CodeBlock language="javascript">
{`// Get attribute value
const src = img.getAttribute('src');

// Set attribute
element.setAttribute('data-id', '123');

// Remove attribute
element.removeAttribute('disabled');

// Check if element has attribute
const hasClass = element.hasAttribute('class');

// Direct property access (for common attributes)
element.id = 'newId';
element.href = 'https://example.com';
element.src = 'image.jpg';
element.title = 'Tooltip text';`}
        </CodeBlock>

        <h3>Working with CSS Classes</h3>
        <CodeBlock language="javascript">
{`// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('disabled');

// Toggle a class (add if absent, remove if present)
element.classList.toggle('highlight');

// Replace a class
element.classList.replace('old-class', 'new-class');

// Check if element has a class
const isActive = element.classList.contains('active');

// Old way (not recommended)
element.className = 'btn primary large';  // Overwrites all existing classes`}
        </CodeBlock>

        <h3>Changing Element Styles</h3>
        <CodeBlock language="javascript">
{`// Setting individual style properties
element.style.color = 'blue';
element.style.fontSize = '16px';
element.style.marginTop = '20px';

// Note: CSS properties with hyphens are camelCased in JavaScript
element.style.backgroundColor = '#f0f0f0';
element.style.borderRadius = '4px';

// Getting computed style (actual style after CSS is applied)
const computedStyle = window.getComputedStyle(element);
const actualColor = computedStyle.color;
const actualWidth = computedStyle.width;`}
        </CodeBlock>

        <h2>Creating and Manipulating Elements</h2>
        <p>
          JavaScript can dynamically create, insert, and remove elements in the DOM:
        </p>

        <h3>Creating Elements</h3>
        <CodeBlock language="javascript">
{`// Create a new element
const newDiv = document.createElement('div');

// Set content and attributes
newDiv.textContent = 'Hello, world!';
newDiv.className = 'new-element';
newDiv.setAttribute('data-created', 'dynamically');

// Create a text node
const textNode = document.createTextNode('Just some text');`}
        </CodeBlock>

        <h3>Adding Elements to the DOM</h3>
        <CodeBlock language="javascript">
{`// Append element as last child
parent.appendChild(newDiv);

// Insert before a specific child
parent.insertBefore(newDiv, referenceNode);

// Modern methods (better browser support)
parent.append(newDiv, textNode);  // Append multiple nodes
parent.prepend(newDiv);  // Insert at the beginning
referenceNode.before(newDiv);  // Insert before reference
referenceNode.after(newDiv);  // Insert after reference
referenceNode.replaceWith(newDiv);  // Replace reference node`}
        </CodeBlock>

        <h3>Removing Elements</h3>
        <CodeBlock language="javascript">
{`// Remove a node from its parent
element.remove();

// Older approach
const parent = element.parentNode;
parent.removeChild(element);

// Remove all children of an element
while (parent.firstChild) {
  parent.removeChild(parent.firstChild);
}

// Modern way to clear all children
parent.innerHTML = '';`}
        </CodeBlock>

        <h2>Handling DOM Events</h2>
        <p>
          Events allow JavaScript to react to user actions like clicks, input, and more:
        </p>

        <h3>Adding Event Listeners</h3>
        <CodeBlock language="javascript">
{`// Modern way to add event listeners
element.addEventListener('click', function(event) {
  console.log('Element clicked!');
  console.log(event); // Event object contains useful information
});

// Using arrow function
element.addEventListener('mouseover', (event) => {
  console.log('Mouse over element');
});

// Named function reference
function handleChange(event) {
  console.log('Value changed to: ' + event.target.value);
}
inputElement.addEventListener('change', handleChange);

// Removing event listeners (must use the same function reference)
inputElement.removeEventListener('change', handleChange);`}
        </CodeBlock>

        <h3>Common DOM Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded-md p-4 bg-white">
            <h4 className="font-medium mb-2">Mouse Events</h4>
            <ul className="list-disc ml-4 text-sm">
              <li><code>click</code>: Mouse click on element</li>
              <li><code>dblclick</code>: Double click</li>
              <li><code>mouseover</code>: Mouse enters element</li>
              <li><code>mouseout</code>: Mouse leaves element</li>
              <li><code>mousedown</code>: Mouse button pressed</li>
              <li><code>mouseup</code>: Mouse button released</li>
              <li><code>mousemove</code>: Mouse moved over element</li>
            </ul>
          </div>
          <div className="border rounded-md p-4 bg-white">
            <h4 className="font-medium mb-2">Keyboard Events</h4>
            <ul className="list-disc ml-4 text-sm">
              <li><code>keydown</code>: Key pressed down</li>
              <li><code>keyup</code>: Key released</li>
              <li><code>keypress</code>: Key pressed (character)</li>
            </ul>
          </div>
          <div className="border rounded-md p-4 bg-white">
            <h4 className="font-medium mb-2">Form Events</h4>
            <ul className="list-disc ml-4 text-sm">
              <li><code>submit</code>: Form submitted</li>
              <li><code>change</code>: Input value changed</li>
              <li><code>focus</code>: Element receives focus</li>
              <li><code>blur</code>: Element loses focus</li>
              <li><code>input</code>: Value changes as user types</li>
            </ul>
          </div>
          <div className="border rounded-md p-4 bg-white">
            <h4 className="font-medium mb-2">Document/Window Events</h4>
            <ul className="list-disc ml-4 text-sm">
              <li><code>load</code>: Page finished loading</li>
              <li><code>resize</code>: Window resized</li>
              <li><code>scroll</code>: Document scrolled</li>
              <li><code>DOMContentLoaded</code>: HTML loaded, DOM built</li>
            </ul>
          </div>
        </div>

        <h3>The Event Object</h3>
        <CodeBlock language="javascript">
{`document.getElementById('myButton').addEventListener('click', function(event) {
  // Common event properties
  console.log(event.type);      // "click"
  console.log(event.target);    // The element that triggered the event
  console.log(event.currentTarget); // The element the listener is attached to
  
  // Mouse event specific properties
  console.log(event.clientX, event.clientY);   // Mouse position relative to viewport
  console.log(event.button);    // Which mouse button was pressed
  
  // Keyboard event specific properties
  // console.log(event.key);       // Key value ("a", "Enter", etc.)
  // console.log(event.keyCode);   // Key code (deprecated)
  // console.log(event.ctrlKey);   // Whether Ctrl was pressed during event
  
  // Prevent default behavior (like form submission or link navigation)
  event.preventDefault();
  
  // Stop event propagation (bubbling up to parent elements)
  event.stopPropagation();
});`}
        </CodeBlock>

        <h2>Asynchronous JavaScript & APIs</h2>
        <p>
          Modern web applications often need to fetch data from servers or APIs. JavaScript handles this with asynchronous operations.
        </p>

        <h3>Fetch API for Data Retrieval</h3>
        <CodeBlock language="javascript">
{`// Basic fetch request
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log('Data received:', data);
    // Do something with the data
    displayData(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
    showErrorMessage(error.message);
  });

// Function to display data in the DOM
function displayData(data) {
  const container = document.getElementById('data-container');
  
  // Clear previous content
  container.innerHTML = '';
  
  // Create elements for each item
  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.name;
    container.appendChild(div);
  });
}`}
        </CodeBlock>

        <h3>Async/Await for Cleaner Asynchronous Code</h3>
        <p>
          The async/await syntax makes asynchronous code easier to read and write:
        </p>

        <CodeBlock language="javascript">
{`// Async function with try/catch error handling
async function fetchUserData(userId) {
  try {
    // Await pauses execution until the Promise resolves
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`Failed to fetch user: \${response.status}\`);
    }
    
    // Parse JSON response
    const userData = await response.json();
    
    // Display the user data
    displayUserProfile(userData);
    
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    showErrorNotification(error.message);
    return null;
  }
}

// Using the async function
document.getElementById('loadUser').addEventListener('click', async () => {
  const userId = document.getElementById('userId').value;
  const loadingIndicator = document.getElementById('loading');
  
  try {
    // Show loading indicator
    loadingIndicator.style.display = 'block';
    
    // Call the async function
    const userData = await fetchUserData(userId);
    
    if (userData) {
      console.log('User data loaded successfully');
    }
  } finally {
    // Always hide loading indicator when done
    loadingIndicator.style.display = 'none';
  }
});

// Function to display user profile
function displayUserProfile(user) {
  const profileContainer = document.getElementById('profile');
  
  profileContainer.innerHTML = \`
    <h2>\${user.name}</h2>
    <p>Email: \${user.email}</p>
    <p>Location: \${user.location || 'Not specified'}</p>
  \`;
}`}
        </CodeBlock>

        <h3>Posting Data to an API</h3>
        <CodeBlock language="javascript">
{`async function createNewPost(postData) {
  try {
    const response = await fetch('https://api.example.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include auth token if needed
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(postData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to create post: ' + response.status);
    }
    
    const createdPost = await response.json();
    return createdPost;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

// Example usage with form submission
document.getElementById('postForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  
  try {
    const newPost = await createNewPost({ title, content });
    console.log('Post created:', newPost);
    
    // Show success message
    showNotification('Post created successfully!');
    
    // Reset form
    event.target.reset();
  } catch (error) {
    // Show error message
    showNotification('Error: ' + error.message, 'error');
  }
});`}
        </CodeBlock>

        <ExerciseBlock title="Interactive Image Gallery with API">
          <p>
            Let's build a simple image gallery that fetches images from an API and allows users to filter them by category.
          </p>
          
          <p>Create a new HTML file with the following code:</p>
          
          <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery with API</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    .controls {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    .category-button {
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      padding: 8px 16px;
      margin: 0 5px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s;
    }
    .category-button.active {
      background-color: #4CAF50;
      color: white;
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .gallery-item {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .gallery-item:hover {
      transform: translateY(-5px);
    }
    .gallery-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }
    .gallery-item .info {
      padding: 10px;
    }
    .gallery-item h3 {
      margin: 0;
      font-size: 16px;
    }
    .gallery-item p {
      margin: 5px 0 0;
      color: #666;
      font-size: 14px;
    }
    .loading {
      text-align: center;
      font-size: 20px;
      padding: 40px;
    }
    .error {
      color: #D32F2F;
      text-align: center;
      padding: 20px;
      border: 1px solid #D32F2F;
      border-radius: 4px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>Image Gallery</h1>
  
  <div class="controls">
    <button class="category-button active" data-category="all">All</button>
    <button class="category-button" data-category="nature">Nature</button>
    <button class="category-button" data-category="city">City</button>
    <button class="category-button" data-category="technology">Technology</button>
    <button class="category-button" data-category="food">Food</button>
  </div>
  
  <div id="gallery" class="gallery">
    <div class="loading">Loading images...</div>
  </div>
  
  <script>
    // DOM elements
    const gallery = document.getElementById('gallery');
    const categoryButtons = document.querySelectorAll('.category-button');
    
    // State
    let images = [];
    let currentCategory = 'all';
    
    // Function to fetch images from the Pexels API
    async function fetchImages() {
      try {
        // Show loading state
        gallery.innerHTML = '<div class="loading">Loading images...</div>';
        
        // For this exercise, we'll use a mock API response instead of a real API to avoid API key requirements
        // In a real application, you would use something like:
        // const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=20', {
        //   headers: {
        //     'Authorization': 'your-api-key-here'
        //   }
        // });
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockImages = [
          { id: 1, src: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg", 
            title: "Mountain Landscape", category: "nature" },
          { id: 2, src: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg", 
            title: "Tropical Beach", category: "nature" },
          { id: 3, src: "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg", 
            title: "Forest Path", category: "nature" },
          { id: 4, src: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg", 
            title: "City Skyline", category: "city" },
          { id: 5, src: "https://images.pexels.com/photos/1561863/pexels-photo-1561863.jpeg", 
            title: "Urban Street", category: "city" },
          { id: 6, src: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg", 
            title: "City Lights", category: "city" },
          { id: 7, src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg", 
            title: "Laptop Workspace", category: "technology" },
          { id: 8, src: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg", 
            title: "Modern Gadgets", category: "technology" },
          { id: 9, src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg", 
            title: "Gourmet Meal", category: "food" },
          { id: 10, src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", 
            title: "Pancakes", category: "food" }
        ];
        
        // Store the images
        images = mockImages;
        
        // Render the gallery
        renderGallery();
      } catch (error) {
        console.error('Error fetching images:', error);
        gallery.innerHTML = \`
          <div class="error">
            <p>Failed to load images. Please try again later.</p>
            <p>\${error.message}</p>
          </div>
        \`;
      }
    }
    
    // Function to render the gallery based on current category
    function renderGallery() {
      // Clear the gallery
      gallery.innerHTML = '';
      
      // Filter images by category
      const filteredImages = currentCategory === 'all' 
        ? images 
        : images.filter(image => image.category === currentCategory);
      
      // Check if we have images to display
      if (filteredImages.length === 0) {
        gallery.innerHTML = \`
          <div class="error">
            <p>No images found in the "\${currentCategory}" category.</p>
          </div>
        \`;
        return;
      }
      
      // Create gallery items for each image
      filteredImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = \`
          <img src="\${image.src}" alt="\${image.title}">
          <div class="info">
            <h3>\${image.title}</h3>
            <p>Category: \${image.category}</p>
          </div>
        \`;
        
        // Add click event to show larger image or details
        galleryItem.addEventListener('click', () => {
          alert(\`You clicked on "\${image.title}"\`);
          // In a real app, you might show a modal with a larger image
        });
        
        gallery.appendChild(galleryItem);
      });
    }
    
    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update current category
        currentCategory = button.dataset.category;
        
        // Re-render the gallery
        renderGallery();
      });
    });
    
    // Initial fetch
    fetchImages();
  </script>
</body>
</html>`}
          </CodeBlock>
          
          <p className="mt-4">
            This exercise demonstrates:
          </p>
          <ul className="list-disc ml-6">
            <li>Using <code>async/await</code> for API interactions</li>
            <li>DOM manipulation to create and update elements</li>
            <li>Event handling for user interactions</li>
            <li>Filtering and rendering data based on user selection</li>
            <li>Error handling for API requests</li>
            <li>CSS grid for responsive layout</li>
          </ul>
        </ExerciseBlock>
        
        <p>
          In the next lesson, we'll apply everything we've learned in a comprehensive JavaScript exercise.
        </p>
      </div>
    </ContentLayout>
  );
};

export default JavaScriptDOM;
