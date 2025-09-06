import React from "react";
import ContentLayout from "../../components/ContentLayout";
import CodeBlock from "@/components/CodeBlock";
import ExerciseBlock from "@/components/ExerciseBlock";

const HTMLSetup = () => {
  return (
    <ContentLayout
      title='Setting Up Your Development Environment'
      section='HTML Basics'
      currentStep={2}
      totalSteps={6}
      prevLink='/html'
      nextLink='/html/tags'
    >
      <div>
        <h2>Step 1: Download and Install Visual Studio Code</h2>
        <p>
          Before we start writing HTML, we need a good code editor.{" "}
          <strong>Visual Studio Code (VS Code)</strong> is the best free editor
          for beginners. It's made by Microsoft and used by millions of
          developers worldwide.
        </p>

        <div className='bg-blue/20 p-6 rounded-lg my-6'>
          <h3 className='text-lg font-semibold mb-2'>Why VS Code?</h3>
          <ul className='list-disc ml-6 space-y-1'>
            <li>Completely free to use</li>
            <li>Works on Windows, Mac, and Linux</li>
            <li>Highlights your code with colors (makes it easier to read)</li>
            <li>Helps you catch spelling mistakes in your code</li>
            <li>Has thousands of helpful extensions</li>
            <li>Used by professional developers everywhere</li>
          </ul>
        </div>

        <h3>Download VS Code</h3>
        <div className='border rounded-lg p-6 my-6 bg-white shadow-sm'>
          <ol className='list-decimal ml-6 space-y-4'>
            <li>
              <strong>Visit the VS Code website:</strong>
              <div className='flex justify-center my-4'>
                <a
                  href='https://code.visualstudio.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors inline-flex items-center'
                >
                  Go to VS Code Website
                  <svg
                    className='ml-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                    <polyline points='15 3 21 3 21 9'></polyline>
                    <line x1='10' y1='14' x2='21' y2='3'></line>
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <strong>Click the big "Download" button</strong> - The website
              will automatically detect your operating system (Windows, Mac, or
              Linux) and show you the right download button.
            </li>
            <li>
              <strong>Wait for the download to finish</strong> - This usually
              takes 1-3 minutes depending on your internet speed.
            </li>
          </ol>
        </div>

        <h3>Install VS Code</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-6'>
          <div className='border rounded-lg p-4 bg-white shadow-sm'>
            <h4 className='font-semibold mb-3 text-center'>🪟 Windows</h4>
            <ol className='list-decimal ml-4 space-y-2 text-sm'>
              <li>
                Find the downloaded file (usually in your Downloads folder)
              </li>
              <li>Double-click the .exe file</li>
              <li>Click "Yes" if Windows asks for permission</li>
              <li>Click "Next" through the setup wizard</li>
              <li>✅ Check "Add to PATH" (very important!)</li>
              <li>✅ Check "Create desktop icon"</li>
              <li>Click "Install" and wait</li>
              <li>Click "Finish" when done</li>
            </ol>
          </div>
          <div className='border rounded-lg p-4 bg-white shadow-sm'>
            <h4 className='font-semibold mb-3 text-center'>🍎 Mac</h4>
            <ol className='list-decimal ml-4 space-y-2 text-sm'>
              <li>Find the downloaded .zip file</li>
              <li>Double-click to unzip it</li>
              <li>Drag the VS Code app to your Applications folder</li>
              <li>Double-click VS Code in Applications</li>
              <li>Click "Open" when Mac asks if you're sure</li>
              <li>Right-click VS Code in the dock</li>
              <li>Select "Keep in Dock" for easy access</li>
            </ol>
          </div>
          <div className='border rounded-lg p-4 bg-white shadow-sm'>
            <h4 className='font-semibold mb-3 text-center'>🐧 Linux</h4>
            <ol className='list-decimal ml-4 space-y-2 text-sm'>
              <li>Open your terminal</li>
              <li>Navigate to Downloads folder</li>
              <li>
                For Ubuntu/Debian:{" "}
                <code className='text-xs'>sudo dpkg -i code*.deb</code>
              </li>
              <li>
                For Red Hat/Fedora:{" "}
                <code className='text-xs'>sudo rpm -i code*.rpm</code>
              </li>
              <li>Or use your package manager's GUI</li>
              <li>Launch from applications menu</li>
            </ol>
          </div>
        </div>

        <h2>Step 2: Create Your First Project Folder</h2>
        <p>
          Now let's create a special folder for your web development projects.
          This will keep everything organized and easy to find.
        </p>

        <div className='border rounded-lg p-6 my-6 bg-white shadow-sm'>
          <h3 className='text-lg font-semibold mb-4'>
            Creating Your Project Folder
          </h3>

          <div className='space-y-4'>
            <div>
              <h4 className='font-medium mb-2'>🪟 Windows Instructions:</h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>
                  Open File Explorer (click the folder icon on your taskbar)
                </li>
                <li>Navigate to your Desktop or Documents folder</li>
                <li>Right-click in an empty space</li>
                <li>Select "New" → "Folder"</li>
                <li>
                  Name it <strong>"MyFirstWebsite"</strong> (without quotes)
                </li>
                <li>Press Enter to create the folder</li>
              </ol>
            </div>

            <div>
              <h4 className='font-medium mb-2'>🍎 Mac Instructions:</h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>Open Finder</li>
                <li>Go to your Desktop or Documents folder</li>
                <li>Right-click (or Control+click) in an empty space</li>
                <li>Select "New Folder"</li>
                <li>
                  Name it <strong>"MyFirstWebsite"</strong>
                </li>
                <li>Press Enter to create the folder</li>
              </ol>
            </div>

            <div>
              <h4 className='font-medium mb-2'>🐧 Linux Instructions:</h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>Open your file manager</li>
                <li>Navigate to your home directory or Desktop</li>
                <li>Right-click in an empty space</li>
                <li>Select "Create Folder" or "New Folder"</li>
                <li>
                  Name it <strong>"MyFirstWebsite"</strong>
                </li>
                <li>Press Enter to create the folder</li>
              </ol>
            </div>
          </div>
        </div>

        <h2>Step 3: Open Your Project in VS Code</h2>
        <p>
          Now we'll open your project folder in VS Code. This is how
          professional developers work - they open entire project folders rather
          than individual files.
        </p>

        <div className='border rounded-lg p-6 my-6 bg-white shadow-sm'>
          <h3 className='text-lg font-semibold mb-4'>
            Opening Your Folder in VS Code
          </h3>

          <div className='bg-yellow-50 border border-yellow-200 rounded p-4 mb-4'>
            <p className='text-sm'>
              <strong>💡 Pro Tip:</strong> There are two easy ways to do this.
              Choose whichever feels more comfortable!
            </p>
          </div>

          <div className='space-y-6'>
            <div>
              <h4 className='font-medium mb-2'>
                Method 1: Right-Click Method (Easiest)
              </h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>
                  Find your <strong>"MyFirstWebsite"</strong> folder
                </li>
                <li>
                  Right-click on the folder (not inside it, but on the folder
                  itself)
                </li>
                <li>
                  Look for an option that says <strong>"Open with Code"</strong>{" "}
                  or <strong>"Open with Visual Studio Code"</strong>
                </li>
                <li>Click that option</li>
                <li>🎉 VS Code should open with your folder ready to go!</li>
              </ol>
              <div className='bg-gray-50 border rounded p-3 mt-2 text-sm'>
                <strong>Don't see "Open with Code"?</strong> No worries! Use
                Method 2 below, or restart your computer and try again
                (sometimes it takes a restart for the option to appear).
              </div>
            </div>

            <div>
              <h4 className='font-medium mb-2'>
                Method 2: Drag and Drop Method
              </h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>Open VS Code (double-click the VS Code icon)</li>
                <li>
                  Open your file manager (File Explorer on Windows, Finder on
                  Mac)
                </li>
                <li>
                  Find your <strong>"MyFirstWebsite"</strong> folder
                </li>
                <li>
                  Drag the folder from your file manager directly into the VS
                  Code window
                </li>
                <li>Drop it anywhere in the VS Code window</li>
                <li>🎉 Your folder should now be open in VS Code!</li>
              </ol>
            </div>

            <div>
              <h4 className='font-medium mb-2'>
                Method 3: Using VS Code's File Menu
              </h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>Open VS Code</li>
                <li>
                  Click <strong>"File"</strong> in the top menu
                </li>
                <li>
                  Click <strong>"Open Folder..."</strong>
                </li>
                <li>
                  Navigate to and select your <strong>"MyFirstWebsite"</strong>{" "}
                  folder
                </li>
                <li>
                  Click <strong>"Select Folder"</strong> (Windows) or{" "}
                  <strong>"Open"</strong> (Mac)
                </li>
              </ol>
            </div>
          </div>
        </div>

        <h2>Step 4: Create Your HTML and CSS Files</h2>
        <p>
          Now that VS Code is open with your project folder, let's create your
          first HTML file and CSS file. You should see your folder name in the
          sidebar on the left.
        </p>

        <div className='border rounded-lg p-6 my-6 bg-white shadow-sm'>
          <h3 className='text-lg font-semibold mb-4'>Creating Your Files</h3>

          <div className='space-y-6'>
            <div>
              <h4 className='font-medium mb-2'>Create index.html</h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>
                  Look at the left sidebar in VS Code - you should see your{" "}
                  <strong>"MyFirstWebsite"</strong> folder
                </li>
                <li>Right-click on the folder name in the sidebar</li>
                <li>
                  Select <strong>"New File"</strong>
                </li>
                <li>
                  Type <strong>"index.html"</strong> (make sure to include the
                  .html part!)
                </li>
                <li>Press Enter</li>
                <li>🎉 You now have your first HTML file!</li>
              </ol>
            </div>

            <div>
              <h4 className='font-medium mb-2'>Create styles.css</h4>
              <ol className='list-decimal ml-6 space-y-2'>
                <li>Right-click on your folder name again in the sidebar</li>
                <li>
                  Select <strong>"New File"</strong>
                </li>
                <li>
                  Type <strong>"styles.css"</strong> (make sure to include the
                  .css part!)
                </li>
                <li>Press Enter</li>
                <li>🎉 You now have your CSS file for styling!</li>
              </ol>
            </div>
          </div>

          <div className='bg-green-50 border border-green-200 rounded p-4 mt-4'>
            <p className='text-sm'>
              <strong>✅ Success!</strong> You should now see both files in your
              sidebar:
              <br />
              📁 MyFirstWebsite
              <br />
              📄 index.html
              <br />
              📄 styles.css
            </p>
          </div>
        </div>

        <h2>Step 5: Write Your First HTML Code</h2>
        <p>
          Let's add some basic HTML code to your index.html file. Click on{" "}
          <strong>index.html</strong> in the sidebar to open it, then copy and
          paste this code:
        </p>

        <CodeBlock language='html'>
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to My First Website!</h1>
    <p>This is my very first HTML page. I created it myself!</p>
    
    <h2>About Me</h2>
    <p>I'm learning web development and this is my first project.</p>
    
    <h2>My Goals</h2>
    <ul>
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn JavaScript</li>
        <li>Build amazing websites</li>
    </ul>
</body>
</html>`}
        </CodeBlock>

        <h2>Step 6: Add Some Basic CSS Styling</h2>
        <p>
          Now click on <strong>styles.css</strong> in the sidebar and add this
          CSS code to make your website look better:
        </p>

        <CodeBlock language='css'>
          {`/* This is a CSS comment - it doesn't affect the styling */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
    text-align: center;
}

h2 {
    color: #666;
}

p {
    color: #555;
}

ul {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

li {
    margin-bottom: 5px;
}`}
        </CodeBlock>

        <h2>Step 7: View Your Website</h2>
        <p>
          Now let's see your website in action! Here's how to open it in your
          web browser:
        </p>

        <div className='border rounded-lg p-6 my-6 bg-white shadow-sm'>
          <ol className='list-decimal ml-6 space-y-3'>
            <li>
              <strong>Save your files:</strong>
              <ul className='list-disc ml-6 mt-2'>
                <li>
                  Press <strong>Ctrl+S</strong> (Windows/Linux) or{" "}
                  <strong>Cmd+S</strong> (Mac) to save
                </li>
                <li>Do this for both index.html and styles.css</li>
              </ul>
            </li>
            <li>
              <strong>Find your HTML file:</strong>
              <ul className='list-disc ml-6 mt-2'>
                <li>Open your file manager (File Explorer, Finder, etc.)</li>
                <li>Navigate to your MyFirstWebsite folder</li>
                <li>You should see your index.html file</li>
              </ul>
            </li>
            <li>
              <strong>Open in browser:</strong>
              <ul className='list-disc ml-6 mt-2'>
                <li>Double-click on index.html</li>
                <li>It should open in your default web browser</li>
                <li>
                  🎉 Congratulations! You're now viewing your first website!
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className='bg-pink/20 p-6 rounded-lg my-6'>
          <h3 className='text-lg font-semibold mb-2'>🎉 Congratulations!</h3>
          <p>
            You've successfully set up your development environment and created
            your first website! You now have:
          </p>
          <ul className='list-disc ml-6 mt-2 space-y-1'>
            <li>VS Code installed and configured</li>
            <li>Your first project folder organized</li>
            <li>Your first HTML file with proper structure</li>
            <li>Your first CSS file with basic styling</li>
            <li>The ability to view your work in a web browser</li>
          </ul>
          <p className='mt-4'>
            This is exactly how professional web developers work! In the next
            lesson, we'll dive deeper into HTML tags and learn how to add more
            content to your website.
          </p>
        </div>

        <ExerciseBlock title='Practice Exercise'>
          <p>
            Now that you have everything set up, try customizing your website:
          </p>

          <ol className='list-decimal ml-6 space-y-2 mb-4'>
            <li>
              Change the title in the <code>&lt;title&gt;</code> tag to
              something personal
            </li>
            <li>
              Update the <code>&lt;h1&gt;</code> heading with your name
            </li>
            <li>
              Write a new paragraph about yourself in the "About Me" section
            </li>
            <li>Add 2 more items to your goals list</li>
            <li>Save your files and refresh your browser to see the changes</li>
          </ol>

          <div className='bg-blue-50 border border-blue-200 rounded p-4 mt-4'>
            <p className='text-sm'>
              <strong>💡 Quick Tip:</strong> Every time you make changes to your
              HTML or CSS files, save them (Ctrl+S or Cmd+S) and then refresh
              your browser (F5 or Ctrl+R) to see the updates!
            </p>
          </div>
        </ExerciseBlock>

        <h3>Exercise Solution from Previous Lesson</h3>
        <p>From our last lesson's quiz, here are the answers:</p>
        <ol className='list-decimal ml-6 space-y-2'>
          <li>
            <strong>"My Favorite Foods"</strong> would appear in the browser tab
          </li>
          <li>
            <strong>"Foods I Love"</strong> is the main heading on the page
          </li>
          <li>
            There are <strong>three</strong> items in the list: Pizza, Ice
            Cream, and Tacos
          </li>
          <li>
            The <strong>&lt;ul&gt;</strong> tag is used to create the list
            (unordered list)
          </li>
        </ol>
      </div>
    </ContentLayout>
  );
};

export default HTMLSetup;
