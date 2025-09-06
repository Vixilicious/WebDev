
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const HTMLSemantics = () => {
  return (
    <ContentLayout
      title="Semantics & Accessibility"
      section="HTML Basics"
      currentStep={4}
      totalSteps={5}
      prevLink="/html/tags"
      nextLink="/html/exercise"
    >
      <div>
        <h2>What is Semantic HTML?</h2>
        <p>
          Semantic HTML means using HTML elements that clearly describe their meaning to both the browser and the developer. 
          Instead of just using <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> for everything, semantic elements provide 
          context about the content they contain.
        </p>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Why Use Semantic HTML?</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Improves accessibility for screen readers and assistive technologies</li>
            <li>Enhances SEO (Search Engine Optimization)</li>
            <li>Makes your code more readable and easier to maintain</li>
            <li>Provides consistent structure across websites</li>
          </ul>
        </div>

        <h2>Common Semantic Elements</h2>
        <p>
          HTML5 introduced many semantic elements to better structure web pages:
        </p>

        <CodeBlock language="html">
{`<header>Site or section header</header>

<nav>Navigation links</nav>

<main>Main content of the page</main>

<article>Self-contained content (like a blog post)</article>

<section>Thematic grouping of content</section>

<aside>Content tangentially related to the main content</aside>

<footer>Site or section footer</footer>

<figure>Self-contained content, typically with an image
  <img src="image.jpg" alt="Description">
  <figcaption>Caption for the figure</figcaption>
</figure>`}
        </CodeBlock>

        <h3>Page Structure Example</h3>
        <p>
          Here's how you might structure a simple blog post page using semantic HTML:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog Post</title>
</head>
<body>
  <header>
    <h1>My Web Development Blog</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Learning Semantic HTML</h2>
        <p>Posted on <time datetime="2025-05-01">May 1, 2025</time></p>
      </header>
      
      <section>
        <h3>Introduction</h3>
        <p>Semantic HTML improves the structure of web pages...</p>
      </section>
      
      <section>
        <h3>Benefits</h3>
        <p>Using semantic elements has several advantages...</p>
      </section>
      
      <figure>
        <img src="semantic-html.jpg" alt="Diagram of semantic HTML elements">
        <figcaption>Visual representation of semantic HTML page structure</figcaption>
      </figure>
      
      <aside>
        <h3>Related Posts</h3>
        <ul>
          <li><a href="#">Introduction to CSS</a></li>
          <li><a href="#">HTML Forms Explained</a></li>
        </ul>
      </aside>
    </article>
  </main>

  <footer>
    <p>&copy; 2025 My Web Development Blog</p>
  </footer>
</body>
</html>`}
        </CodeBlock>

        <h2>Accessibility Basics</h2>
        <p>
          Web accessibility ensures that websites are usable by everyone, including people with disabilities. Here are some basic accessibility practices:
        </p>

        <h3>1. Use Alt Text for Images</h3>
        <CodeBlock language="html">
{`<!-- Good -->
<img src="cat.jpg" alt="Orange tabby cat playing with a ball">

<!-- Also good for decorative images -->
<img src="divider.png" alt="">`}
        </CodeBlock>

        <h3>2. Use Proper Heading Hierarchy</h3>
        <p>
          Don't skip heading levels (e.g., going from <code>&lt;h1&gt;</code> directly to <code>&lt;h3&gt;</code>). Follow a logical structure.
        </p>

        <h3>3. Label Form Elements</h3>
        <CodeBlock language="html">
{`<!-- Good -->
<label for="name">Name:</label>
<input type="text" id="name" name="name">

<!-- Avoid -->
<p>Name:</p>
<input type="text" name="name">`}
        </CodeBlock>

        <h3>4. Use ARIA Attributes When Necessary</h3>
        <p>
          ARIA (Accessible Rich Internet Applications) attributes provide additional information to assistive technologies.
        </p>

        <CodeBlock language="html">
{`<button aria-label="Close" aria-expanded="false">
  <span class="icon">X</span>
</button>`}
        </CodeBlock>

        <h3>5. Provide Text Alternatives for Media</h3>
        <CodeBlock language="html">
{`<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="captions.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>`}
        </CodeBlock>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Accessibility Checklist</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Use semantic HTML elements appropriately</li>
            <li>Include alt text for all meaningful images</li>
            <li>Ensure sufficient color contrast</li>
            <li>Make sure all interactive elements are keyboard accessible</li>
            <li>Test your site with a screen reader</li>
            <li>Use proper heading hierarchy</li>
            <li>Label all form elements</li>
          </ul>
        </div>

        <ExerciseBlock title="Practice Exercise">
          <p>
            Let's improve the recipe page from the previous lesson by making it more semantic and accessible:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2 mb-4">
            <li>Take your recipe.html file from the previous exercise</li>
            <li>Replace generic divs with semantic elements:
              <ul className="list-disc ml-6 mt-2">
                <li>Add a <code>&lt;header&gt;</code> for the top part with the recipe name</li>
                <li>Wrap the main content in a <code>&lt;main&gt;</code> tag</li>
                <li>Use <code>&lt;section&gt;</code> elements for ingredients and instructions</li>
                <li>Add a <code>&lt;footer&gt;</code> with your name as the author</li>
                <li>Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for your recipe image</li>
              </ul>
            </li>
            <li>Improve accessibility:
              <ul className="list-disc ml-6 mt-2">
                <li>Ensure your image has a descriptive alt text</li>
                <li>Use proper heading hierarchy (h1, h2, etc.)</li>
                <li>Add a <code>&lt;time&gt;</code> element for when the recipe was created</li>
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
  <header>
    <h1>Chocolate Chip Cookies</h1>
  </header>
  
  <main>
    <figure>
      <img src="https://placehold.co/600x400?text=Cookies" alt="Fresh baked chocolate chip cookies on a plate">
      <figcaption>Homemade chocolate chip cookies</figcaption>
    </figure>
    
    <p>These delicious cookies are perfect for any occasion. Recipe created on <time datetime="2025-05-02">May 2, 2025</time></p>
    
    <section>
      <h2>Ingredients</h2>
      <ul>
        <!-- Add ingredients here -->
      </ul>
    </section>
    
    <section>
      <h2>Instructions</h2>
      <ol>
        <!-- Add instructions here -->
      </ol>
    </section>
    
    <aside>
      <h3>Chef's Tips</h3>
      <p>For extra gooey cookies, refrigerate the dough for 24 hours before baking!</p>
    </aside>
  </main>
  
  <footer>
    <p>Recipe by: Your Name</p>
    <p><a href="https://www.allrecipes.com">Find more recipes</a></p>
  </footer>
</body>
</html>`}
          </CodeBlock>
          
          <p className="mt-4">
            Complete the recipe by filling in the ingredients and instructions. In the next lesson, we'll put everything together in a comprehensive HTML exercise!
          </p>
        </ExerciseBlock>
      </div>
    </ContentLayout>
  );
};

export default HTMLSemantics;
