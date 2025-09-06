
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const HTMLExercise = () => {
  return (
    <ContentLayout
      title="HTML Exercise: Build a Personal Website"
      section="HTML Basics"
      currentStep={5}
      totalSteps={6}
      prevLink="/html/semantics"
      nextLink="/html/quiz"
    >
      <div>
        <h2>Bringing It All Together</h2>
        <p>
          In this final HTML exercise, we'll create a complete personal website using everything we've learned. This will be the foundation 
          that we'll improve upon as we learn CSS and JavaScript in future modules.
        </p>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Project Goal</h3>
          <p>
            Create a multi-page personal website with:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>A home page with information about yourself</li>
            <li>An about page with more details on your background</li>
            <li>A projects/portfolio page showcasing your work (real or imaginary)</li>
            <li>A contact page with a simple form</li>
            <li>Proper semantic HTML and accessibility features</li>
          </ul>
        </div>

        <h2>Step 1: Create Your Project Structure</h2>
        <p>
          First, let's create a folder for our project and the necessary HTML files:
        </p>
        <ol className="list-decimal ml-6 space-y-2 mb-6">
          <li>Create a folder named "my-website"</li>
          <li>Inside, create these files:
            <ul className="list-disc ml-6 mt-2">
              <li>index.html (home page)</li>
              <li>about.html</li>
              <li>projects.html</li>
              <li>contact.html</li>
            </ul>
          </li>
        </ol>

        <h2>Step 2: Create a Common Template</h2>
        <p>
          Let's create a basic template for consistent structure across all pages:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE_TITLE | My Personal Website</title>
</head>
<body>
  <header>
    <h1>YOUR_NAME</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Page-specific content goes here -->
  </main>

  <footer>
    <p>&copy; 2025 YOUR_NAME. All rights reserved.</p>
    <p>
      <a href="https://twitter.com/">Twitter</a> |
      <a href="https://github.com/">GitHub</a> |
      <a href="https://linkedin.com/">LinkedIn</a>
    </p>
  </footer>
</body>
</html>`}
        </CodeBlock>

        <h2>Step 3: Create the Home Page (index.html)</h2>
        <p>
          This will be your main landing page:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | My Personal Website</title>
</head>
<body>
  <header>
    <h1>YOUR_NAME</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Welcome to My Website</h2>
      <figure>
        <img src="https://placehold.co/300x300?text=Profile" alt="YOUR_NAME's profile photo">
        <figcaption>That's me!</figcaption>
      </figure>
      <p>Hello! I'm YOUR_NAME, a [your profession/interest] passionate about [something you care about].</p>
      <p>This website showcases my work and allows you to learn more about me.</p>
    </section>
    
    <section>
      <h2>Featured Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Brief description of project 1</p>
          <a href="projects.html#project1">Learn more</a>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Brief description of project 2</p>
          <a href="projects.html#project2">Learn more</a>
        </li>
      </ul>
      <p><a href="projects.html">See all projects</a></p>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 YOUR_NAME. All rights reserved.</p>
    <p>
      <a href="https://twitter.com/">Twitter</a> |
      <a href="https://github.com/">GitHub</a> |
      <a href="https://linkedin.com/">LinkedIn</a>
    </p>
  </footer>
</body>
</html>`}
        </CodeBlock>

        <h2>Step 4: Create the About Page (about.html)</h2>
        <p>Use the common template and add content about yourself:</p>

        <CodeBlock language="html">
{`<!-- Use the common template and replace main content with: -->
<main>
  <section>
    <h2>About Me</h2>
    <p>Write a couple of paragraphs about yourself, your background, education, etc.</p>
  </section>
  
  <section>
    <h2>Skills</h2>
    <ul>
      <li>Skill 1</li>
      <li>Skill 2</li>
      <li>Skill 3</li>
      <li>Skill 4</li>
      <li>Skill 5</li>
    </ul>
  </section>
  
  <section>
    <h2>Education</h2>
    <ul>
      <li>
        <h3>Degree/Course Name</h3>
        <p>Institution Name, Year</p>
      </li>
      <li>
        <h3>Another Degree/Course</h3>
        <p>Institution Name, Year</p>
      </li>
    </ul>
  </section>
  
  <aside>
    <h2>Fun Facts</h2>
    <ul>
      <li>Something interesting about you</li>
      <li>A hobby you enjoy</li>
      <li>Something unexpected</li>
    </ul>
  </aside>
</main>`}
        </CodeBlock>

        <h2>Step 5: Create the Projects Page (projects.html)</h2>
        <p>Showcase your projects (real or imaginary):</p>

        <CodeBlock language="html">
{`<!-- Use the common template and replace main content with: -->
<main>
  <section>
    <h2>My Projects</h2>
    <p>Here are some projects I've worked on:</p>
  </section>
  
  <section id="project1">
    <h3>Project 1 Name</h3>
    <img src="https://placehold.co/600x400?text=Project+1" alt="Project 1 screenshot">
    <p>Detailed description of project 1, what technologies you used, what problems you solved, etc.</p>
    <p><a href="#">View Project</a> | <a href="#">GitHub Repository</a></p>
  </section>
  
  <section id="project2">
    <h3>Project 2 Name</h3>
    <img src="https://placehold.co/600x400?text=Project+2" alt="Project 2 screenshot">
    <p>Detailed description of project 2, what technologies you used, what problems you solved, etc.</p>
    <p><a href="#">View Project</a> | <a href="#">GitHub Repository</a></p>
  </section>
  
  <section id="project3">
    <h3>Project 3 Name</h3>
    <img src="https://placehold.co/600x400?text=Project+3" alt="Project 3 screenshot">
    <p>Detailed description of project 3, what technologies you used, what problems you solved, etc.</p>
    <p><a href="#">View Project</a> | <a href="#">GitHub Repository</a></p>
  </section>
</main>`}
        </CodeBlock>

        <h2>Step 6: Create the Contact Page (contact.html)</h2>
        <p>Add a simple contact form:</p>

        <CodeBlock language="html">
{`<!-- Use the common template and replace main content with: -->
<main>
  <section>
    <h2>Contact Me</h2>
    <p>Feel free to reach out using the form below or via email at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
  </section>
  
  <section>
    <h2>Contact Form</h2>
    <form action="#" method="post">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div>
        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <div>
        <button type="submit">Send Message</button>
      </div>
    </form>
  </section>
  
  <section>
    <h2>Find Me On</h2>
    <ul>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">LinkedIn</a></li>
      <li><a href="#">Twitter</a></li>
    </ul>
  </section>
</main>`}
        </CodeBlock>

        <ExerciseBlock title="Final Challenge">
          <p>
            Complete your personal website by:
          </p>
          
          <ol className="list-decimal ml-6 space-y-2">
            <li>Creating all four HTML files using the templates above</li>
            <li>Personalizing the content with your own information (or creative placeholders)</li>
            <li>Adding at least one additional feature beyond what's shown in the templates (like a blog section, testimonials, or a photo gallery)</li>
            <li>Ensuring your HTML is valid and properly semantic</li>
            <li>Making sure all links between pages work correctly</li>
          </ol>
          
          <div className="bg-orange/20 p-4 rounded-lg mt-6">
            <p className="font-medium mb-0">
              In the next section, we'll learn CSS to style your website and make it look professional and beautiful!
            </p>
          </div>
        </ExerciseBlock>
      </div>
    </ContentLayout>
  );
};

export default HTMLExercise;
