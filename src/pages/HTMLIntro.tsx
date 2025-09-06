import React from "react";
import ContentLayout from "@/components/ContentLayout";
import CodeBlock from "@/components/CodeBlock";
import ExerciseBlock from "@/components/ExerciseBlock";
import Tab from "../assets/images/browsertab.png";

const HTMLIntro = () => {
  return (
    <ContentLayout
      title='Introduction to HTML'
      section='HTML Basics'
      currentStep={1}
      totalSteps={6}
      nextLink='/html/setup'
    >
      <div>
        <h2>What is HTML?</h2>
        <p>
          <strong>HTML</strong> (HyperText Markup Language) is the standard
          language used to create web pages. Think of HTML as the skeleton of a
          website - it provides the structure and defines the content that
          appears on a web page.
        </p>
        <p>
          HTML uses <strong>tags</strong> to define different types of content,
          such as headings, paragraphs, images, links, and more. These tags tell
          your web browser how to display the content.
        </p>
        <div className='bg-pink/20 p-6 rounded-lg my-6'>
          <h3 className='text-lg font-semibold mb-2'>HTML Key Points</h3>
          <ul className='list-disc ml-6 space-y-2'>
            <li>
              HTML stands for <strong>HyperText Markup Language</strong>
            </li>
            <li>
              It's not a programming language but a{" "}
              <strong>markup language</strong>
            </li>
            <li>
              HTML documents have a <strong>.html</strong> file extension.
              Example: <strong>"nameOfFileHere.html"</strong>
            </li>
            <li>
              Web browsers read HTML files and render them into visible web
              pages. <em>"Render"</em> is how the browser transforms written
              code into the actual web page you see and use.
            </li>
            <li>
              HTML elements are represented by <strong>tags</strong>
            </li>
          </ul>
        </div>
        <h2>HTML Structure</h2>
        <p>
          Every HTML document follows a basic structure. Here's what a simple
          HTML document looks like:
        </p>
        <CodeBlock language='html'>
          {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`}
        </CodeBlock>
        <h3>Let's break down this structure:</h3>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;!DOCTYPE html&gt;
            </code>
            : This line is like a note at the very top that tells the browser,
            “Hey, this page uses the latest version of HTML!”
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;html&gt;
            </code>
            : This is the big container that holds everything on the web page.
            It’s like the outside box of a puzzle and the rest of the pieces go
            inside it.
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;head&gt;
            </code>
            : Contains meta-information about the document (title, character
            set, styles, etc.), this part is not visible on the actual web page.
            It’s where you put behind-the-scenes information (meta-information),
            such as the page’s name, instructions for the browser, or links to
            styles that make your page look nice.
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;title&gt;
            </code>
            : This sets the name of your web page. You’ll see this name at the
            top of your browser tab, not on the page itself.
          </li>
          <p>
            <strong>
              In the image below you see the browser tab, and to change that
              name you use the tag: <br />
              <code>&lt;title&gt;</code>Browser tab name here!
              <code>&lt;/title&gt;</code>
            </strong>
          </p>
          <img src={Tab} alt='' className='h-24' />
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;body&gt;
            </code>
            : This is where all the stuff you want people to see goes—like text,
            pictures, buttons, and links. If you want anything to show up on the
            page, put it in here!
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;h1&gt;
            </code>
            : This is a big, bold title or headline for your page. It’s the
            largest kind of heading you can use, like the main title of a
            newspaper article. h1 means "heading 1" because it's the number 1
            biggest title.
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;p&gt;
            </code>
            : This tag stands for “paragraph.” It’s used for regular text—like
            sentences and paragraphs you want people to read.
          </li>
        </ul>
        <h2>HTML Tags</h2>
        <p>
          HTML tags are like special codes that tell the browser how to show
          things on your web page. Tags are always inside angle brackets:{" "}
          <code>&lt; &gt;</code> and usually come in pairs:
        </p>
        <ul>
          <li>
            <strong>The opening/starting tag:</strong> Tells the browser to
            start doing something. It's like a signal that tells the browser,
            “Begin this part!”
            <br /> Example: <code>&lt;p&gt;</code> (start a paragraph)
          </li>
          <li>
            <strong>The closing/ending tag:</strong> Tells the browser to stop.
            And this signals the browser and tells is "Okay, you can stop this
            part now!". It looks almost the same, but has a "/" before the name.{" "}
            <br /> Example: <code>&lt;/p&gt;</code> (end the paragraph)
          </li>
        </ul>
        <p>
          <strong>The pattern looks like this:</strong>
        </p>
        <CodeBlock language='html'>
          {`<tagname>Content goes here...</tagname>`}
        </CodeBlock>
        <ul>
          <li>
            <code>&lt;tagname&gt;</code> is the opening tag.
          </li>
          <li>"Content goes here..." is what will show up on the web page.</li>
          <li>
            <code>&lt;/tagname&gt;</code> is the closing tag (notice the "/"
            before the "tagname" that indicates it's the closing tag).
          </li>
        </ul>

        <p>
          <strong>For example, to create a paragraph:</strong>
        </p>
        <p>
          To write a paragraph on your web page, you use the{" "}
          <code>&lt;p&gt;</code> tag:
        </p>
        <CodeBlock language='html'>{`<p>This is a paragraph.</p>`}</CodeBlock>
        <ul>
          <li>
            <code>&lt;p&gt;</code> is the opening tag.
          </li>
          <li>"This is a paragraph." is the text you want people to read.</li>
          <li>
            <code>&lt;/p&gt;</code> is the closing tag (notice the "/" before
            the "p" that indicates it's the closing tag).
          </li>
        </ul>
        <h3>Some tags are self-closing:</h3>
        <p>
          Some tags don't need a closing tag because they don't wrap around any
          content. <br /> These are called <strong>self-closing tags.</strong>
        </p>
        <CodeBlock language='html'>
          {`<img src="image.jpg" alt="Description of the image">`}
        </CodeBlock>
        <ul>
          <li>
            <code>&lt;img&gt;</code> is the tag that shows an image.
          </li>
          <li>
            <strong> src="image.jpg"</strong> tells the browser where to find
            the image file.
          </li>
          <li>
            <strong> alt="Description of the image"</strong>
            describes the image for people who can't see it.
          </li>
          <li>
            <strong>
              You don't need a closing <code>&lt;/img&gt;</code> tag!
            </strong>
          </li>
        </ul>
        <p>
          In the next lesson, we'll learn how to set up an HTML file and start
          writing our first HTML document.
        </p>
        <ExerciseBlock title='Practice Exercise'>
          <p>
            Let's see if you can identify what would appear on a web page from
            this HTML code:
          </p>

          <CodeBlock language='html'>
            {`<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Foods</title>
  </head>
  <body>
    <h1>Foods I Love</h1>
    <p>Here are some of my favorite foods:</p>
    <ul>
      <li>Pizza</li>
      <li>Ice Cream</li>
      <li>Tacos</li>
    </ul>
  </body>
</html>`}
          </CodeBlock>

          <p className='mt-4'>
            Look at the code above and try to answer these questions:
          </p>

          <ol className='list-decimal ml-6 space-y-2'>
            <li>
              What words will you see at the very top of your browser tab?
            </li>
            <li>
              What is the main, biggest, boldest heading on the actual page?
            </li>
            <li>How many food items are listed?</li>
            <li>
              Which tag is used to make the list of foods?
              <br />
              <em>
                {" "}
                Hint: Look for the tag that wraps around all the food items, not
                the individual ones. It starts with “u” and means “unordered
                list”!
              </em>
            </li>
          </ol>

          <p className='mt-4'>
            Take a guess! Don’t worry if you’re not sure — you’ll discover all
            the answers in the next lesson!
          </p>
        </ExerciseBlock>
      </div>
    </ContentLayout>
  );
};

export default HTMLIntro;
