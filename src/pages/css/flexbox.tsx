
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const CSSFlexbox = () => {
  return (
    <ContentLayout
      title="Flexbox Basics"
      section="CSS Basics"
      currentStep={6}
      totalSteps={6}
      prevLink="/css/exercise"
      nextLink="/javascript"
    >
      <div>
        <h2>Introduction to Flexbox</h2>
        <p>
          Flexbox (Flexible Box Layout) is a one-dimensional layout method designed for arranging items in rows or columns.
          It makes it much easier to design flexible, responsive layouts without using floats or positioning.
        </p>

        <p>
          Before Flexbox, creating certain layouts in CSS was difficult and often required hacks or workarounds. Flexbox solves many common layout problems like:
        </p>

        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Vertically centering content</li>
          <li>Creating equal-height columns</li>
          <li>Distributing space between items</li>
          <li>Changing the visual order of elements</li>
          <li>Creating flexible layouts that adapt to different screen sizes</li>
        </ul>

        <h3>The Flex Container and Flex Items</h3>
        <p>
          To use Flexbox, you need to understand two key concepts:
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-lg font-semibold">Flex Container</h4>
              <p>The parent element that has <code>display: flex</code> or <code>display: inline-flex</code> applied to it.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Flex Items</h4>
              <p>The direct children of the flex container. These items are automatically arranged according to flex properties.</p>
            </div>
          </div>
        </div>

        <p>Here's a simple example of a flex container with three flex items:</p>

        <CodeBlock language="html">
{`<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`}
        </CodeBlock>

        <CodeBlock language="css">
{`.flex-container {
  display: flex;
  /* Flex container properties go here */
}

.flex-item {
  /* Flex item properties go here */
}`}
        </CodeBlock>

        <h3>Flex Container Properties</h3>

        <h4 className="mt-6">1. flex-direction</h4>
        <p>
          Establishes the main axis, defining the direction flex items are placed.
        </p>

        <CodeBlock language="css">
{`.flex-container {
  display: flex;
  
  /* Different values for flex-direction */
  flex-direction: row;            /* Default: left to right */
  flex-direction: row-reverse;    /* right to left */
  flex-direction: column;         /* top to bottom */
  flex-direction: column-reverse; /* bottom to top */
}`}
        </CodeBlock>

        <div className="grid grid-cols-2 gap-6 my-6">
          <div>
            <h5 className="font-semibold mb-2">row (default)</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex flex-row gap-2">
                <div className="bg-pink/40 p-2 rounded-sm">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">row-reverse</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex flex-row-reverse gap-2">
                <div className="bg-pink/40 p-2 rounded-sm">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">column</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex flex-col gap-2">
                <div className="bg-pink/40 p-2 rounded-sm">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">column-reverse</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex flex-col-reverse gap-2">
                <div className="bg-pink/40 p-2 rounded-sm">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm">Item 3</div>
              </div>
            </div>
          </div>
        </div>

        <h4>2. justify-content</h4>
        <p>
          Defines how flex items are aligned along the main axis (horizontally for row, vertically for column).
        </p>

        <CodeBlock language="css">
{`.flex-container {
  display: flex;
  
  /* Different values for justify-content */
  justify-content: flex-start;    /* Default: items at the start */
  justify-content: flex-end;      /* items at the end */
  justify-content: center;        /* items at the center */
  justify-content: space-between; /* items with equal space between them */
  justify-content: space-around;  /* items with equal space around them */
  justify-content: space-evenly;  /* items with equal space between and at the ends */
}`}
        </CodeBlock>

        <div className="space-y-6 my-6">
          <div>
            <h5 className="font-semibold mb-2">flex-start (default)</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex justify-start gap-2">
                <div className="bg-orange/40 p-2 rounded-sm w-20 text-center">Item 1</div>
                <div className="bg-orange/60 p-2 rounded-sm w-20 text-center">Item 2</div>
                <div className="bg-orange/80 p-2 rounded-sm w-20 text-center">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">center</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex justify-center gap-2">
                <div className="bg-orange/40 p-2 rounded-sm w-20 text-center">Item 1</div>
                <div className="bg-orange/60 p-2 rounded-sm w-20 text-center">Item 2</div>
                <div className="bg-orange/80 p-2 rounded-sm w-20 text-center">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">space-between</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex justify-between">
                <div className="bg-orange/40 p-2 rounded-sm w-20 text-center">Item 1</div>
                <div className="bg-orange/60 p-2 rounded-sm w-20 text-center">Item 2</div>
                <div className="bg-orange/80 p-2 rounded-sm w-20 text-center">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">space-around</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex justify-around">
                <div className="bg-orange/40 p-2 rounded-sm w-20 text-center">Item 1</div>
                <div className="bg-orange/60 p-2 rounded-sm w-20 text-center">Item 2</div>
                <div className="bg-orange/80 p-2 rounded-sm w-20 text-center">Item 3</div>
              </div>
            </div>
          </div>
        </div>

        <h4>3. align-items</h4>
        <p>
          Defines how flex items are aligned along the cross axis (vertically for row, horizontally for column).
        </p>

        <CodeBlock language="css">
{`.flex-container {
  display: flex;
  height: 150px; /* Added to show alignment effects */
  
  /* Different values for align-items */
  align-items: flex-start;   /* items aligned at the start of the cross axis */
  align-items: flex-end;     /* items aligned at the end of the cross axis */
  align-items: center;       /* items centered along the cross axis */
  align-items: stretch;      /* Default: items stretched to fill the container */
  align-items: baseline;     /* items aligned by their text baseline */
}`}
        </CodeBlock>

        <div className="grid grid-cols-2 gap-6 my-6">
          <div>
            <h5 className="font-semibold mb-2">stretch (default)</h5>
            <div className="bg-zinc-100 p-4 rounded-md h-32">
              <div className="flex h-full align-stretch gap-2">
                <div className="bg-pink/40 p-2 rounded-sm flex-1">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm flex-1">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm flex-1">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">center</h5>
            <div className="bg-zinc-100 p-4 rounded-md h-32">
              <div className="flex h-full items-center gap-2">
                <div className="bg-pink/40 p-2 rounded-sm">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">flex-start</h5>
            <div className="bg-zinc-100 p-4 rounded-md h-32">
              <div className="flex h-full items-start gap-2">
                <div className="bg-pink/40 p-2 rounded-sm">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm">Item 3</div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">flex-end</h5>
            <div className="bg-zinc-100 p-4 rounded-md h-32">
              <div className="flex h-full items-end gap-2">
                <div className="bg-pink/40 p-2 rounded-sm">Item 1</div>
                <div className="bg-pink/60 p-2 rounded-sm">Item 2</div>
                <div className="bg-pink/80 p-2 rounded-sm">Item 3</div>
              </div>
            </div>
          </div>
        </div>

        <h4>4. flex-wrap</h4>
        <p>
          Controls whether flex items are forced onto one line or can wrap onto multiple lines.
        </p>

        <CodeBlock language="css">
{`.flex-container {
  display: flex;
  
  /* Different values for flex-wrap */
  flex-wrap: nowrap;       /* Default: all items on one line */
  flex-wrap: wrap;         /* items wrap onto multiple lines */
  flex-wrap: wrap-reverse; /* items wrap onto multiple lines in reverse */
}`}
        </CodeBlock>

        <div className="space-y-6 my-6">
          <div>
            <h5 className="font-semibold mb-2">nowrap (default)</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex flex-nowrap overflow-x-auto">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`bg-orange/${40 + (i * 5)} p-2 rounded-sm shrink-0 w-20 text-center mx-1`}>Item {i+1}</div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">wrap</h5>
            <div className="bg-zinc-100 p-4 rounded-md">
              <div className="flex flex-wrap">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`bg-orange/${40 + (i * 5)} p-2 rounded-sm w-20 text-center m-1`}>Item {i+1}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h3>Flex Item Properties</h3>
        <p>
          While the container properties control the overall layout, individual flex items can have their own properties:
        </p>

        <h4>1. flex-grow</h4>
        <p>
          Determines how much a flex item can grow relative to other flex items.
        </p>

        <CodeBlock language="css">
{`.flex-container {
  display: flex;
}

.flex-item-1 {
  flex-grow: 1; /* This item will grow */
}

.flex-item-2 {
  flex-grow: 2; /* This item will grow twice as much as item-1 */
}

.flex-item-3 {
  flex-grow: 0; /* Default: This item won't grow */
}`}
        </CodeBlock>

        <div className="my-6">
          <div className="bg-zinc-100 p-4 rounded-md">
            <div className="flex gap-2">
              <div className="bg-pink/40 p-2 rounded-sm flex-grow">flex-grow: 1</div>
              <div className="bg-pink/60 p-2 rounded-sm flex-grow-[2]">flex-grow: 2</div>
              <div className="bg-pink/80 p-2 rounded-sm w-20">flex-grow: 0</div>
            </div>
          </div>
        </div>

        <h4>2. flex-shrink</h4>
        <p>
          Determines how much a flex item will shrink relative to other items when there isn't enough space.
        </p>

        <CodeBlock language="css">
{`.flex-item-1 {
  flex-shrink: 1; /* Default: This item can shrink */
}

.flex-item-2 {
  flex-shrink: 2; /* This item will shrink twice as much as item-1 */
}

.flex-item-3 {
  flex-shrink: 0; /* This item won't shrink */
}`}
        </CodeBlock>

        <h4>3. flex-basis</h4>
        <p>
          Sets the initial size of a flex item before growing or shrinking.
        </p>

        <CodeBlock language="css">
{`.flex-item {
  flex-basis: 200px; /* Sets the initial width (for row) or height (for column) */
}`}
        </CodeBlock>

        <h4>4. flex Shorthand</h4>
        <p>
          A shorthand property for flex-grow, flex-shrink, and flex-basis.
        </p>

        <CodeBlock language="css">
{`.flex-item {
  /* flex: grow shrink basis */
  flex: 1 1 auto;  /* grow: 1, shrink: 1, basis: auto */
  
  /* Common presets */
  flex: auto;      /* Same as: 1 1 auto */
  flex: none;      /* Same as: 0 0 auto */
  flex: 1;         /* Same as: 1 1 0% */
}`}
        </CodeBlock>

        <h4>5. order</h4>
        <p>
          Controls the order in which flex items appear without changing the HTML.
        </p>

        <CodeBlock language="css">
{`.flex-item-1 {
  order: 3; /* Will appear third */
}

.flex-item-2 {
  order: 1; /* Will appear first */
}

.flex-item-3 {
  order: 2; /* Will appear second */
}`}
        </CodeBlock>

        <div className="my-6">
          <div className="bg-zinc-100 p-4 rounded-md">
            <div className="flex gap-2">
              <div className="bg-orange/40 p-2 rounded-sm order-3">order: 3 (Item 1)</div>
              <div className="bg-orange/60 p-2 rounded-sm order-1">order: 1 (Item 2)</div>
              <div className="bg-orange/80 p-2 rounded-sm order-2">order: 2 (Item 3)</div>
            </div>
          </div>
        </div>

        <h3>Common Flexbox Patterns</h3>

        <h4>1. Centering an Element (Horizontally and Vertically)</h4>
        <CodeBlock language="css">
{`.centered-container {
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center;     /* Vertical centering */
  height: 300px;           /* Set a height to see vertical centering */
}`}
        </CodeBlock>

        <div className="my-6">
          <div className="bg-zinc-100 p-4 rounded-md h-40">
            <div className="flex justify-center items-center h-full">
              <div className="bg-pink/60 p-4 rounded-sm">Perfectly Centered</div>
            </div>
          </div>
        </div>

        <h4>2. Navigation Bar</h4>
        <CodeBlock language="css">
{`.navbar {
  display: flex;
  justify-content: space-between; /* Logo on left, nav links on right */
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem; /* Space between links */
}`}
        </CodeBlock>

        <div className="my-6">
          <div className="bg-zinc-100 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <div className="font-bold text-orange-dark">Logo</div>
              <div className="flex gap-4">
                <a href="#" className="text-pink-dark">Home</a>
                <a href="#" className="text-pink-dark">About</a>
                <a href="#" className="text-pink-dark">Services</a>
                <a href="#" className="text-pink-dark">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <h4>3. Card Layout</h4>
        <CodeBlock language="css">
{`.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, basis */
  /* This creates cards that are at least 300px wide and will grow to fill space */
}`}
        </CodeBlock>

        <div className="my-6">
          <div className="bg-zinc-100 p-4 rounded-md">
            <div className="flex flex-wrap gap-4">
              <div className="bg-orange/30 p-4 rounded-md flex-1 min-w-[200px]">
                <h5 className="font-bold mb-2">Card 1</h5>
                <p>This is some sample content for the first card.</p>
              </div>
              <div className="bg-orange/40 p-4 rounded-md flex-1 min-w-[200px]">
                <h5 className="font-bold mb-2">Card 2</h5>
                <p>This is some sample content for the second card.</p>
              </div>
              <div className="bg-orange/50 p-4 rounded-md flex-1 min-w-[200px]">
                <h5 className="font-bold mb-2">Card 3</h5>
                <p>This is some sample content for the third card.</p>
              </div>
            </div>
          </div>
        </div>

        <ExerciseBlock title="Practice Exercise: Center a Card Layout">
          <p>
            Let's create a simple card layout exercise using Flexbox to center content both vertically and horizontally:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new HTML file with the following content:
              <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Card Layout</title>
  <link rel="stylesheet" href="flex-cards.css">
</head>
<body>
  <div class="container">
    <h1>My Flexbox Cards</h1>
    
    <div class="card-layout">
      <div class="card">
        <div class="card-icon">🚀</div>
        <h2>Feature One</h2>
        <p>This is a description of the first feature that this product offers.</p>
        <button class="card-button">Learn More</button>
      </div>
      
      <div class="card">
        <div class="card-icon">💡</div>
        <h2>Feature Two</h2>
        <p>This is a description of the second feature that this product offers.</p>
        <button class="card-button">Learn More</button>
      </div>
      
      <div class="card">
        <div class="card-icon">🔒</div>
        <h2>Feature Three</h2>
        <p>This is a description of the third feature that this product offers.</p>
        <button class="card-button">Learn More</button>
      </div>
    </div>
  </div>
</body>
</html>`}
              </CodeBlock>
            </li>
            <li>Create a CSS file named <code>flex-cards.css</code> and use Flexbox properties to:
              <ul className="list-disc ml-6 mt-1">
                <li>Center the container in the viewport</li>
                <li>Arrange the cards in a row with equal spacing</li>
                <li>Make the cards wrap on smaller screens</li>
                <li>Center the content inside each card</li>
                <li>Add a hover effect for the cards</li>
              </ul>
            </li>
          </ol>
          
          <p className="mt-4">
            Here's a reference CSS file that you can use:
          </p>
          
          <CodeBlock language="css">
{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.container {
  max-width: 1200px;
  width: 100%;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.card-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1 1 300px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

h2 {
  color: #444;
  margin-bottom: 15px;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-button {
  margin-top: auto;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #45a049;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
  }
}`}
          </CodeBlock>
          
          <p>
            When you've completed this exercise, experiment with different flex properties to see how they affect the layout.
            Try changing the flex-direction to column, adjusting the justify-content, or modifying the flex-grow values for different cards.
          </p>
        </ExerciseBlock>
        
        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">Flexbox vs. Grid</h4>
          <p>While Flexbox is perfect for one-dimensional layouts (rows OR columns), CSS Grid is designed for two-dimensional layouts (rows AND columns). Here's when to use each:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li><strong>Use Flexbox</strong> for: Navigation bars, card layouts, centering content, and simple linear layouts</li>
            <li><strong>Use Grid</strong> for: Full-page layouts, complex grid systems, and two-dimensional alignment needs</li>
          </ul>
          <p className="mt-2">They work well together! You can use Grid for the overall page layout, and Flexbox for components within that layout.</p>
        </div>
        
        <p>
          Congratulations! You've now learned the fundamentals of Flexbox, one of the most powerful tools in modern CSS layout.
          In our next lesson, we'll introduce JavaScript and explore how it can add interactivity to your web pages.
        </p>
      </div>
    </ContentLayout>
  );
};

export default CSSFlexbox;
