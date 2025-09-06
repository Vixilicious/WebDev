import React from "react";
import ContentLayout from "@/components/ContentLayout";
import CodeBlock from "@/components/CodeBlock";
import ExerciseBlock from "@/components/ExerciseBlock";
import FirstDoc from "../../assets/images/step-firstDoc.png";
import RenameDoc from "../../assets/images/step-renameDoc.png";
import Notes from "../../assets/images/notes.png";

const HTMLSetup = () => {
  return (
    <ContentLayout
      title='Setting up HTML Files'
      section='HTML Basics'
      currentStep={2}
      totalSteps={5}
      prevLink='/html'
      nextLink='/html/tags'
    >
      <div>
        <h2>Creating Your First HTML File</h2>
        <p>Learning HTML is easy and fun. You only need two things:</p>
        <ol>
          <li>
            <strong>A text editor</strong> Let's use notepad that already exists
            on your computer! <br /> If you want a more complex editor you could
            also use VS Code.
          </li>
          <br />
          <li>
            <strong>A web browser</strong> (such as Google Chrome, Firefox or
            Edge)
          </li>
        </ol>
        <br />
        <p className='text-[22px]'>
          <strong>Step 1: Create a Folder for you website</strong>
        </p>
        <ol className='list-decimal ml-6 space-y-2 mb-6'>
          <li>
            Right-click on your Desktop or somewhere else you want your project.
          </li>
          <li>
            Click on <strong>"New" → "Folder"</strong>.
          </li>
          <li>
            Name the folder "<strong>MyWebsite</strong>"
          </li>
          <li>
            <strong>Inside</strong> the folder you will right-click again and
            click on "New" → "Textdocument". (Picture below)
          </li>
          <img src={FirstDoc} alt='' className='w-2/3' />
          <li>
            Then name your new text document to:
            <code className='bg-pink/20 px-1 py-0.5 rounded'>index.html</code>
          </li>
          <img src={RenameDoc} alt='' className='w-2/3' />
          <li>
            If Windows asks "Are you sure you want to change the file
            extension?", click <strong>"Yes"</strong>{" "}
          </li>
          <div className='bg-orange/20 p-5 rounded-lg my-5'>
            <p>
              <strong>Good to know!</strong> <br />
              When someone visits your website, the web browser automatically
              looks for a file called{" "}
              <code className='bg-pink/20 px-1 py-0.5 rounded'>index.html</code>
              . It's like the "front door" of your website - the first page
              people see! This file acts as the homepage of your website and is
              displayed by default.
            </p>
          </div>
          <li>
            Now, double-click your index.html file. It should open in your web
            browser (like Chrome, Safari, Edge, or Opera) and show your website.
            Right now, your website will just be a blank white page, because you
            haven’t added any content yet.
            <strong> Keep this browser tab open</strong>—you’ll use it to see
            your changes as you build your website!
          </li>
          <div className='bg-orange/20 p-5 rounded-lg my-5'>
            <p>
              <strong>Good to know!</strong> <br />
              Keep this browser tab open! You’ll use it to check your website
              every time you make changes.
            </p>
          </div>
          <li>
            Next step is to open the same file again but this time you click on
            it <strong>once</strong> and then right-click on it, choose
            <strong> → "Open with → Notes or Notepad"</strong>
          </li>
        </ol>

        <p className='text-[22px]'>
          <strong>Step 2: Now to the FUN part! Let's start coding!</strong>
        </p>
        <p>
          Every HTML file has a standard layout (your HTML file is the one with
          the name <strong>index.html</strong>). Start your project by copying
          the code below and paste it into your "index.html" file in Notepad or
          Notes:
        </p>

        <CodeBlock language='html'>
          {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>

<h1>Hello, World!</h1>

</body>
</html>`}
        </CodeBlock>
        <p>
          {" "}
          <strong>
            Save the file (press the keyboard symbol "Ctrl" (hold the Ctrl) and
            then click the letter "S" on you keyboard. Or click on File (on the
            top right of your index.html document) then → Save).
          </strong>
        </p>

        <h3>Breaking Down the Structure:</h3>
        <ul className='list-disc ml-6 space-y-2 mb-6'>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;!DOCTYPE html&gt;
            </code>
            : Tells the browser this is an HTML5 document
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;html&gt;
            </code>
            : The root element that hold all other HTML elements/tags
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              lang="en"
            </code>
            : This tells what the language of the document is (English in this
            case)
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;head&gt;
            </code>
            : This section contains information that works behind the scenes to
            help your web page function properly. You don’t need to know exactly
            what each part does right now—just include it in your HTML template.
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;meta charset="UTF-8"&gt;
            </code>
            : This is a little note for your computer. It helps your website
            display all the letters and emojis the right way from the code you
            write.
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;meta name="viewport"...&gt;
            </code>
            : Makes your website responsive on mobile devices
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;title&gt;
            </code>
            : Sets the title shown in the browser tab
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;body&gt;
            </code>
            : Contains all the content visible to users
          </li>
          <li>
            <code className='text-pink-dark bg-pink/20 px-1 py-0.5 rounded'>
              &lt;!-- ... --&gt;
            </code>
            : HTML comments (not visible in the browser)
          </li>
        </ul>

        <p>
          {" "}
          <strong>
            Once you've saved the file you can see the changes in the browser
            tab that I mentioned you to keep open.
          </strong>
        </p>

        <ExerciseBlock title='Practice Exercise'>
          <p>Let's create a simple personal profile page:</p>

          <ol className='list-decimal ml-6 space-y-2 mb-4'>
            <li>
              Create a new file named <code>profile.html</code> in the same
              folder that your <code>index.html</code> is in.
            </li>
            <li>Use the HTML template above again.</li>
            <li>Change the title (browser tab name) to "My Profile"</li>
            <li>
              Inside the <code>&lt;body&gt;</code> tags, add:
              <ul className='list-disc ml-6 mt-2'>
                <li>
                  A big heading with your name (use the <code>&lt;h1&gt;</code>{" "}
                  "Your name here" then <code>&lt;/h1&gt;</code> tag).
                </li>
                <li>
                  A short paragraph about yourself (use the{" "}
                  <code>&lt;p&gt;</code> "About yourself here"{" "}
                  <code>&lt;/p&gt;</code> tag).
                </li>
                <li>
                  Another heading for "My Hobbies" (use a smaller heading tag,{" "}
                  <code>&lt;h2&gt;</code>"My Hobbies"<code>&lt;/h2&gt;</code>).
                </li>
                <li>
                  <strong> A list of at least three hobbies:</strong> A{" "}
                  <em>list</em> is a way to show several things, one after
                  another, like a shopping list. In HTML, you make a list using
                  these tags:
                  <ul className='list-disc ml-6 mt-2'>
                    <li>
                      <code>&lt;ul&gt;</code> starts the list (it stands for
                      "unordered list" and makes bullet points).
                    </li>
                    <li>
                      <code>&lt;li&gt;</code> is for each thing in your list (it
                      stands for "list item").
                    </li>
                  </ul>
                  For example:
                  <CodeBlock language='html'>
                    {`<ul>
  <li>Drawing</li>
  <li>Reading</li>
  <li>Playing soccer</li>
</ul>`}
                  </CodeBlock>
                  This will show three hobbies, each with a dot (bullet) in
                  front.
                </li>
              </ul>
            </li>
            <li>
              Create three <code>&lt;li&gt;</code>
              <code>&lt;/li&gt;</code> with the hobbies between them and then
              save the file and open it in a browser that I told you to keep
              open. Remember to reload your website after you save it so it
              updates the info. You can reload by holding "Ctrl" then clicking
              "R" while on the website for your page.
            </li>
          </ol>

          <p>Here's a hint of what your code might look like:</p>

          <CodeBlock language='html'>
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Profile</title>
</head>
<body>
  <h1>Your Name</h1>
  <p>Write something about yourself here...</p>
  
  <h2>My Hobbies</h2>
  <ul>
    <li>Hobby 1</li>
    <li>Hobby 2</li>
    <li>Hobby 3</li>
  </ul>
</body>
</html>`}
          </CodeBlock>

          <p className='mt-4'>
            In the next lesson, we'll learn more about common HTML tags and how
            to use them effectively!
          </p>
        </ExerciseBlock>

        <h3>Exercise Solution from Previous Lesson</h3>
        <p>From our last lesson, here are the answers to our questions:</p>
        <ol className='list-decimal ml-6 space-y-2'>
          <li>"My Favorite Foods" would appear in the browser tab</li>
          <li>"Foods I Love" is the main heading on the page</li>
          <li>
            There are three items in the list: Pizza, Ice Cream, and Tacos
          </li>
          <li>
            The <code>&lt;ul&gt;</code> tag is used to create the list
            (unordered list)
          </li>
        </ol>
      </div>
    </ContentLayout>
  );
};

export default HTMLSetup;
