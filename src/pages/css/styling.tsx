
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const CSSProperties = () => {
  return (
    <ContentLayout
      title="CSS Styling Properties"
      section="CSS Basics"
      currentStep={4}
      totalSteps={5}
      prevLink="/css/selectors"
      nextLink="/css/exercise"
    >
      <div>
        <h2>Common CSS Properties</h2>
        <p>
          CSS offers hundreds of properties to style HTML elements. In this lesson, we'll focus on the most commonly used ones
          to help you get started with styling your web pages effectively.
        </p>

        <h3>Text Styling Properties</h3>

        <CodeBlock language="css">
{`/* Text color */
p {
  color: #333;          /* Using hex color */
  color: rgb(51,51,51); /* Using RGB */
  color: rgba(51,51,51,0.8); /* Using RGBA with opacity */
}

/* Font properties */
h1 {
  font-family: 'Arial', sans-serif;  /* Font family with fallbacks */
  font-size: 2rem;                   /* Font size (2x the root size) */
  font-weight: bold;                 /* Font weight */
  font-style: italic;                /* Font style */
}

/* Text properties */
p {
  text-align: center;                /* Alignment (left, right, center, justify) */
  text-decoration: underline;        /* Decoration (underline, line-through, etc) */
  text-transform: uppercase;         /* Capitalization */
  line-height: 1.5;                  /* Line spacing */
  letter-spacing: 1px;               /* Character spacing */
  text-shadow: 2px 2px 4px #aaa;     /* Text shadow */
}`}
        </CodeBlock>

        <h3>Box Model Properties</h3>
        <p>
          The box model is fundamental to CSS layout. It consists of content, padding, border, and margin:
        </p>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">The CSS Box Model</h4>
          <div className="flex flex-col items-center">
            <div className="bg-orange/20 p-4 text-center w-full max-w-md">
              <div className="bg-orange/40 p-4">
                <div className="bg-orange/80 p-4">
                  <div className="bg-orange p-4 text-zinc-800 font-bold">
                    Content
                  </div>
                  <div className="text-sm mt-1">Padding</div>
                </div>
                <div className="text-sm mt-1">Border</div>
              </div>
              <div className="text-sm mt-1">Margin</div>
            </div>
          </div>
        </div>

        <CodeBlock language="css">
{`/* Width and height */
.box {
  width: 200px;              /* Width of the content area */
  height: 150px;             /* Height of the content area */
  max-width: 100%;           /* Maximum width (good for responsiveness) */
  min-height: 100px;         /* Minimum height */
}

/* Padding (space inside the border) */
.box {
  padding: 20px;             /* All sides 20px */
  padding: 10px 20px;        /* Top/bottom 10px, left/right 20px */
  padding: 10px 20px 15px;   /* Top 10px, left/right 20px, bottom 15px */
  padding: 10px 20px 15px 5px; /* Top, right, bottom, left (clockwise) */
  
  /* Individual sides */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 5px;
}

/* Border */
.box {
  border: 1px solid black;   /* Width, style, color shorthand */
  
  /* Individual properties */
  border-width: 1px;
  border-style: solid;       /* solid, dashed, dotted, etc. */
  border-color: black;
  
  /* Individual sides */
  border-top: 2px dashed red;
  
  /* Rounded corners */
  border-radius: 5px;        /* All corners */
  border-radius: 10px 5px;   /* Top-left/bottom-right, top-right/bottom-left */
  border-radius: 50%;        /* Creates a circle (with equal width/height) */
}

/* Margin (space outside the border) */
.box {
  margin: 20px;              /* All sides */
  margin: 10px auto;         /* Top/bottom 10px, auto centers horizontally */
  
  /* Individual sides (same pattern as padding) */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}`}
        </CodeBlock>

        <h3>Background Properties</h3>

        <CodeBlock language="css">
{`/* Background color */
div {
  background-color: #f0f0f0;
}

/* Background image */
header {
  background-image: url('image.jpg');
  background-repeat: no-repeat;    /* no-repeat, repeat, repeat-x, repeat-y */
  background-position: center top; /* Positioning the background image */
  background-size: cover;          /* cover, contain, or specific dimensions */
}

/* Background shorthand */
section {
  background: #f0f0f0 url('pattern.png') no-repeat center / cover;
}`}
        </CodeBlock>

        <h3>Display and Positioning</h3>

        <CodeBlock language="css">
{`/* Display property */
div {
  display: block;          /* Block elements take full width */
  display: inline;         /* Inline elements only take necessary width */
  display: inline-block;   /* Inline placement with block features */
  display: flex;           /* Flexbox layout (more on this in Flexbox lesson) */
  display: grid;           /* CSS Grid layout */
  display: none;           /* Hides the element */
}

/* Position property */
.box {
  position: static;        /* Default flow (not positioned) */
  position: relative;      /* Relative to its normal position */
  position: absolute;      /* Relative to nearest positioned ancestor */
  position: fixed;         /* Relative to viewport (stays on screen while scrolling) */
  position: sticky;        /* Hybrid of relative and fixed */
  
  /* Used with non-static positioning */
  top: 20px;               /* Distance from top reference */
  right: 10px;             /* Distance from right reference */
  bottom: 15px;            /* Distance from bottom reference */
  left: 5px;               /* Distance from left reference */
  z-index: 2;              /* Controls stacking order (higher appears on top) */
}`}
        </CodeBlock>

        <h3>Colors and Opacity</h3>

        <CodeBlock language="css">
{`/* Different ways to specify colors */
div {
  color: red;                /* Named color */
  color: #ff0000;            /* Hex color (6 digits) */
  color: #f00;               /* Hex shorthand (3 digits) */
  color: rgb(255, 0, 0);     /* RGB */
  color: rgba(255, 0, 0, 0.5); /* RGBA (with alpha transparency) */
  color: hsl(0, 100%, 50%);  /* HSL (hue, saturation, lightness) */
  color: hsla(0, 100%, 50%, 0.5); /* HSLA (with alpha) */
}

/* Opacity */
.transparent-box {
  opacity: 0.5;              /* 0 is completely transparent, 1 is fully opaque */
}`}
        </CodeBlock>

        <h3>Advanced Properties</h3>

        <CodeBlock language="css">
{`/* Box shadow */
.card {
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3); /* Horizontal, vertical, blur, color */
  box-shadow: 0 0 10px rgba(0,0,0,0.1), 0 5px 20px rgba(0,0,0,0.2); /* Multiple shadows */
}

/* CSS Transitions */
button {
  background-color: blue;
  color: white;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Property name, duration, timing function */
}

button:hover {
  background-color: darkblue;
  transform: scale(1.05); /* The transition will animate between the states */
}

/* CSS Transforms */
.rotate {
  transform: rotate(45deg);
}

.scale {
  transform: scale(1.5);     /* 1.5x normal size */
}

.translate {
  transform: translateX(20px) translateY(-10px); /* Move right 20px, up 10px */
}

.skew {
  transform: skew(10deg);
}`}
        </CodeBlock>

        <h3>CSS Units</h3>
        <p>
          CSS offers various units for specifying sizes:
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">Common CSS Units</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>px</strong> - Pixels (fixed size)</li>
            <li><strong>%</strong> - Percent (relative to parent element)</li>
            <li><strong>em</strong> - Relative to font-size of the element</li>
            <li><strong>rem</strong> - Relative to font-size of root element</li>
            <li><strong>vw/vh</strong> - Relative to viewport width/height (1vw = 1% of viewport width)</li>
            <li><strong>ch</strong> - Width of the "0" character</li>
            <li><strong>vmin/vmax</strong> - Relative to smaller/larger viewport dimension</li>
          </ul>
        </div>

        <CodeBlock language="css">
{`/* Examples of unit usage */
body {
  font-size: 16px;          /* Base font size */
}

h1 {
  font-size: 2rem;          /* 2x the root font size */
}

p {
  font-size: 1em;           /* 1x the parent's font size */
  line-height: 1.5;         /* 1.5x the font size */
  margin-bottom: 1.5em;     /* 1.5x the font size as margin */
}

.container {
  width: 80%;               /* 80% of parent width */
  max-width: 1200px;        /* Maximum width in pixels */
  margin: 0 auto;           /* Center horizontally */
}

.hero {
  height: 50vh;             /* 50% of viewport height */
}

.responsive-element {
  padding: 2vw;             /* Padding scales with viewport width */
  font-size: calc(16px + 1vw); /* Base size plus responsive addition */
}`}
        </CodeBlock>

        <ExerciseBlock title="Practice Exercise: Styling a Card">
          <p>
            Let's apply what you've learned by creating and styling a simple card component:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Create a new HTML file with the following content:
              <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Properties Practice</title>
  <link rel="stylesheet" href="card-styles.css">
</head>
<body>
  <div class="container">
    <h1>My Profile Card</h1>
    
    <div class="card">
      <div class="card-header">
        <div class="profile-picture"></div>
        <h2 class="name">Jane Doe</h2>
        <p class="title">Web Developer</p>
      </div>
      
      <div class="card-body">
        <p class="bio">
          A passionate web developer with experience in HTML, CSS, and JavaScript. 
          Loves creating beautiful and functional websites.
        </p>
        
        <div class="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>
      
      <div class="card-footer">
        <a href="#" class="button primary-button">Contact Me</a>
        <a href="#" class="button secondary-button">Portfolio</a>
      </div>
    </div>
  </div>
</body>
</html>`}
              </CodeBlock>
            </li>
            <li>Create a CSS file named <code>card-styles.css</code> and implement the following styles:
              <ul className="list-disc ml-6 mt-1">
                <li>Style the body with a nice background color and font</li>
                <li>Create a container with max-width and center it</li>
                <li>Style the card with border, shadow, background, border-radius</li>
                <li>Style the profile picture as a circle</li>
                <li>Style the card header, body, and footer sections differently</li>
                <li>Create nice-looking buttons with hover effects</li>
              </ul>
            </li>
          </ol>
          
          <p className="mt-4">
            Here's a reference CSS file that you can use as guidance:
          </p>
          
          <CodeBlock language="css">
{`/* Base styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f5f9;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 20px;
}

/* Container */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

/* Card styling */
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensures the content doesn't overflow rounded corners */
}

/* Card header */
.card-header {
  background-color: #3498db;
  color: white;
  padding: 30px 20px 20px;
  text-align: center;
  position: relative;
}

.profile-picture {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin: 0 auto 15px;
  border: 4px solid white;
  
  /* Optional: add a placeholder gradient or image */
  background-image: linear-gradient(45deg, #f1c40f, #e67e22);
}

.name {
  margin: 0;
  font-size: 1.8rem;
}

.title {
  margin-top: 5px;
  opacity: 0.9;
  font-weight: normal;
  font-size: 1rem;
}

/* Card body */
.card-body {
  padding: 20px;
}

.bio {
  border-left: 3px solid #3498db;
  padding-left: 15px;
  margin-bottom: 20px;
}

.skills h3 {
  color: #2c3e50;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.skills ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.skills li {
  background-color: #f0f5f9;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #3498db;
}

/* Card footer */
.card-footer {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eee;
  background-color: #fafafa;
}

/* Buttons */
.button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.primary-button {
  background-color: #3498db;
  color: white;
}

.primary-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.secondary-button {
  background-color: white;
  color: #3498db;
  border: 1px solid #3498db;
}

.secondary-button:hover {
  background-color: #f0f5f9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}`}
          </CodeBlock>
          
          <p className="mt-4">
            Once you've completed this exercise, you'll have a better understanding of how different CSS properties work together to create an appealing design. Feel free to modify the card further or experiment with different properties.
          </p>
        </ExerciseBlock>
        
        <p>
          These are just some of the most common CSS properties you'll use. As you continue learning, you'll discover many more properties and techniques for styling web pages. In our next lesson, you'll apply these properties in a comprehensive CSS exercise.
        </p>
      </div>
    </ContentLayout>
  );
};

export default CSSProperties;
