
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const CSSExercise = () => {
  return (
    <ContentLayout
      title="CSS Exercise"
      section="CSS Basics"
      currentStep={5}
      totalSteps={5}
      prevLink="/css/styling"
      nextLink="/css/flexbox"
    >
      <div>
        <h2>Let's Apply What You've Learned</h2>
        <p>
          In this exercise, you'll create a complete web page with a header, main content area, and a styled button. 
          You'll use classes and IDs to apply specific styles and practice the CSS properties you've learned so far.
        </p>

        <h3>Exercise Overview</h3>
        <p>
          Your task is to create a simple portfolio-style webpage with the following elements:
        </p>

        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>A header with a logo/name and navigation menu</li>
          <li>A hero section with a headline and introduction</li>
          <li>A skills section with a list of skills</li>
          <li>A projects showcase section</li>
          <li>A contact section with a styled button</li>
          <li>A footer with copyright information</li>
        </ul>

        <h3>Step 1: Create the HTML Structure</h3>
        <p>
          Start by creating an <code>index.html</code> file with the following structure:
        </p>

        <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header Section -->
  <header id="main-header">
    <div class="container">
      <div class="logo">
        <h1>John Doe</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="hero">
    <div class="container">
      <h2>Web Developer & Designer</h2>
      <p class="lead">Creating beautiful and functional websites that help businesses grow.</p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p>
        Hello! I'm John, a passionate web developer with experience in creating responsive websites.
        I focus on writing clean, efficient code and designing user-friendly interfaces.
      </p>
      <p>
        When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
      </p>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">My Skills</h2>
      <div class="skills-container">
        <div class="skill">
          <h3>HTML5</h3>
          <div class="skill-level">
            <div class="skill-bar" style="width: 90%"></div>
          </div>
        </div>
        <div class="skill">
          <h3>CSS3</h3>
          <div class="skill-level">
            <div class="skill-bar" style="width: 85%"></div>
          </div>
        </div>
        <div class="skill">
          <h3>JavaScript</h3>
          <div class="skill-level">
            <div class="skill-bar" style="width: 75%"></div>
          </div>
        </div>
        <div class="skill">
          <h3>Responsive Design</h3>
          <div class="skill-level">
            <div class="skill-bar" style="width: 80%"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Recent Projects</h2>
      <div class="project-cards">
        <div class="project-card">
          <h3>E-commerce Website</h3>
          <p>A fully responsive online store with product filtering and cart functionality.</p>
          <a href="#" class="btn">View Project</a>
        </div>
        <div class="project-card">
          <h3>Portfolio Template</h3>
          <p>A modern portfolio template for creative professionals.</p>
          <a href="#" class="btn">View Project</a>
        </div>
        <div class="project-card">
          <h3>Restaurant Website</h3>
          <p>A website for a local restaurant with online reservation system.</p>
          <a href="#" class="btn">View Project</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p>Have a project in mind? Let's work together!</p>
      <a href="mailto:john@example.com" class="btn btn-primary">Contact Me</a>
    </div>
  </section>

  <!-- Footer -->
  <footer id="main-footer">
    <div class="container">
      <p>&copy; 2025 John Doe. All Rights Reserved.</p>
    </div>
  </footer>
</body>
</html>`}
        </CodeBlock>

        <h3>Step 2: Create the CSS File</h3>
        <p>
          Now, create a <code>styles.css</code> file in the same folder. Your task is to style the HTML using your CSS knowledge. Here are the requirements:
        </p>

        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Use a color scheme with at least 3 coordinated colors</li>
          <li>Style the header with a navigation menu (horizontal layout)</li>
          <li>Create hover effects for navigation links</li>
          <li>Style the sections with appropriate spacing</li>
          <li>Style the skill bars to represent skill levels visually</li>
          <li>Create styled cards for the projects section</li>
          <li>Design an attractive button for the contact section</li>
          <li>Make the layout clean and readable with appropriate typography</li>
        </ul>

        <p>
          Here's a starter CSS file with some basic styles. You should expand upon this, adding your own creative touches:
        </p>

        <CodeBlock language="css">
{`/* Base styles and reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 60px 0;
}

h1, h2, h3 {
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: #333;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

/* Add your styling below this line */

/* Header styling */
#main-header {
  /* Style your header here */
}

/* Navigation styling */
nav ul {
  /* Create a horizontal navigation menu */
}

nav a {
  /* Style the navigation links */
}

nav a:hover {
  /* Add hover effects for the links */
}

/* Hero section styling */
.hero {
  /* Create an attractive hero section */
}

/* Section titles */
.section-title {
  /* Style your section titles */
}

/* Skills section */
.skills-container {
  /* Style the skills container */
}

.skill {
  /* Style individual skills */
}

.skill-level {
  /* Style the skill level container */
}

.skill-bar {
  /* Style the skill bars with a gradient or solid color */
}

/* Project cards */
.project-cards {
  /* Create a layout for the project cards */
}

.project-card {
  /* Style individual project cards */
}

/* Buttons */
.btn {
  /* Style your basic button */
}

.btn:hover {
  /* Add hover effects */
}

.btn-primary {
  /* Style your primary button */
}

/* Footer */
#main-footer {
  /* Style the footer */
}`}
        </CodeBlock>

        <h3>Step 3: Complete Solution</h3>
        <p>
          After you've tried creating your own CSS, here's a complete solution you can reference. Remember, the best way to learn is by experimenting with your own styles first!
        </p>

        <CodeBlock language="css">
{`/* Base styles and reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 60px 0;
}

h1, h2, h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #333;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

/* Header styling */
#main-header {
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

#main-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 28px;
  margin: 0;
  color: #3498db;
}

/* Navigation styling */
nav ul {
  display: flex;
}

nav li {
  margin-left: 20px;
}

nav a {
  color: #2c3e50;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: #3498db;
  color: white;
}

/* Hero section styling */
.hero {
  background: linear-gradient(to right, #3498db, #2c3e50);
  color: white;
  text-align: center;
  padding: 100px 0;
}

.hero h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: white;
}

.hero .lead {
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
}

/* Section titles */
.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: #3498db;
}

/* About section */
.about {
  background-color: white;
}

.about p {
  max-width: 800px;
  margin: 0 auto 20px;
  text-align: center;
}

/* Skills section */
.skills {
  background-color: #f8f9fa;
}

.skills-container {
  max-width: 800px;
  margin: 0 auto;
}

.skill {
  margin-bottom: 20px;
}

.skill h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.skill-level {
  background-color: #ddd;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(to right, #3498db, #2c3e50);
  border-radius: 5px;
}

/* Project cards */
.project-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
  color: #3498db;
  font-size: 20px;
}

.project-card p {
  margin-bottom: 15px;
  color: #555;
}

/* Contact section */
.contact {
  background-color: #2c3e50;
  color: white;
  text-align: center;
}

.contact .section-title {
  color: white;
}

.contact p {
  margin-bottom: 30px;
  font-size: 18px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #d0d0d0;
  transform: translateY(-2px);
}

.btn-primary {
  background-color: #3498db;
  color: white;
  padding: 12px 30px;
  font-size: 18px;
}

.btn-primary:hover {
  background-color: #2980b9;
}

/* Footer */
#main-footer {
  background-color: #1a252f;
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
}`}
        </CodeBlock>

        <h3>Step 4: Extension Challenges</h3>
        <p>
          Once you've completed the basic exercise, try these extension challenges to further enhance your CSS skills:
        </p>

        <ol className="list-decimal ml-6 space-y-1 mb-6">
          <li>Make the design responsive with media queries</li>
          <li>Add animations to elements using CSS transitions or keyframes</li>
          <li>Create a toggle button for a mobile navigation menu</li>
          <li>Add a simple contact form with styled input fields</li>
          <li>Use CSS variables for your color scheme</li>
          <li>Use pseudo-elements to add decorative features</li>
        </ol>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h4 className="text-lg font-semibold mb-2">Resources for Further Learning</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Mozilla Developer Network (MDN): <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="text-pink-dark hover:underline">CSS Documentation</a></li>
            <li>CSS Tricks: <a href="https://css-tricks.com" target="_blank" rel="noopener noreferrer" className="text-pink-dark hover:underline">Tutorials and Articles</a></li>
            <li>Google Fonts: <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer" className="text-pink-dark hover:underline">Free Web Fonts</a></li>
            <li>Coolors: <a href="https://coolors.co" target="_blank" rel="noopener noreferrer" className="text-pink-dark hover:underline">Color Scheme Generator</a></li>
          </ul>
        </div>

        <p>
          Congratulations on completing the CSS exercise! In the next lesson, we'll learn about Flexbox, a powerful CSS layout mode that makes it easier to design flexible responsive layouts.
        </p>
      </div>
    </ContentLayout>
  );
};

export default CSSExercise;
