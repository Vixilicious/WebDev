
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const TerminalBasics = () => {
  return (
    <ContentLayout
      title="Terminal Basics"
      section="React Basics"
      currentStep={3}
      totalSteps={6}
      prevLink="/react-basics/setup"
      nextLink="/react-basics/create-react-app"
    >
      <div>
        <h2>Why Learn Terminal Commands?</h2>
        <p>
          As a React developer, you'll need to use the terminal (also called command line or command prompt) to perform important tasks like:
        </p>
        <ul className="list-disc ml-6 space-y-1 my-4">
          <li>Creating new React projects</li>
          <li>Running development servers</li>
          <li>Installing packages with npm or yarn</li>
          <li>Building your application for production</li>
          <li>Using version control with Git</li>
        </ul>
        <p>
          Don't worry if this seems intimidating at first - you'll only need to learn a handful of commands to get started, and you'll become more comfortable with practice.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Terminal vs. Command Prompt vs. PowerShell</h3>
          <p className="mb-4">
            Different operating systems have different default command-line interfaces:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold">macOS Terminal</h4>
              <p className="text-sm">Uses Bash or Zsh (default since macOS Catalina)</p>
            </div>
            <div>
              <h4 className="font-semibold">Windows Command Prompt</h4>
              <p className="text-sm">Traditional Windows command interpreter (cmd.exe)</p>
            </div>
            <div>
              <h4 className="font-semibold">Windows PowerShell</h4>
              <p className="text-sm">More powerful alternative to Command Prompt</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              <strong>For Windows users:</strong> We recommend using either Windows PowerShell, Windows Terminal, or installing Windows Subsystem for Linux (WSL) for a more consistent experience with macOS/Linux.
            </p>
          </div>
        </div>

        <h2>Opening the Terminal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="font-medium mb-2">macOS</h3>
            <ol className="list-decimal ml-4 text-sm space-y-1">
              <li>Open Finder</li>
              <li>Go to Applications → Utilities → Terminal</li>
              <li><strong>Or</strong> use Spotlight (Cmd+Space) and search for "Terminal"</li>
            </ol>
          </div>
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="font-medium mb-2">Windows (Command Prompt)</h3>
            <ol className="list-decimal ml-4 text-sm space-y-1">
              <li>Press Win+R to open Run dialog</li>
              <li>Type "cmd" and press Enter</li>
              <li><strong>Or</strong> search for "Command Prompt" in the Start menu</li>
            </ol>
          </div>
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="font-medium mb-2">Windows (PowerShell)</h3>
            <ol className="list-decimal ml-4 text-sm space-y-1">
              <li>Press Win+X and select "Windows PowerShell" or "Windows Terminal"</li>
              <li><strong>Or</strong> search for "PowerShell" in the Start menu</li>
            </ol>
          </div>
        </div>

        <h3>VS Code's Integrated Terminal</h3>
        <p>
          VS Code has a built-in terminal that's very convenient for development. To open it:
        </p>
        <ul className="list-disc ml-6 space-y-1 my-4">
          <li>Press <code>Ctrl+`</code> (backtick) or Cmd+` on macOS</li>
          <li><strong>Or</strong> go to View → Terminal in the menu</li>
          <li><strong>Or</strong> use the Command Palette (Ctrl+Shift+P) and type "Terminal: Create New Terminal"</li>
        </ul>

        <div className="border rounded-lg p-4 bg-white my-6">
          <div className="bg-gray-800 rounded-t-md p-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-xs ml-4">Terminal - bash</div>
          </div>
          <div className="bg-black text-green-400 p-4 font-mono text-sm rounded-b-md">
            <p>user@computer:~/projects$ <span className="animate-pulse">_</span></p>
          </div>
        </div>

        <h2>Basic Terminal Commands</h2>
        <p>
          Here are some essential commands that work on macOS, Linux, and Windows (PowerShell). Note that some commands might be slightly different in Windows Command Prompt.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Command</th>
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-mono">pwd</td>
                <td className="border p-2">Print working directory (shows current location)</td>
                <td className="border p-2 font-mono">pwd</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">ls</td>
                <td className="border p-2">List files and directories in current location</td>
                <td className="border p-2 font-mono">ls</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">cd</td>
                <td className="border p-2">Change directory</td>
                <td className="border p-2 font-mono">cd projects</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">mkdir</td>
                <td className="border p-2">Create a new directory</td>
                <td className="border p-2 font-mono">mkdir my-react-app</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">touch</td>
                <td className="border p-2">Create a new file</td>
                <td className="border p-2 font-mono">touch README.md</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">rm</td>
                <td className="border p-2">Remove files</td>
                <td className="border p-2 font-mono">rm unnecessary-file.txt</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">rm -r</td>
                <td className="border p-2">Remove directories recursively</td>
                <td className="border p-2 font-mono">rm -r old-directory</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">cp</td>
                <td className="border p-2">Copy files</td>
                <td className="border p-2 font-mono">cp file.txt backup.txt</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">mv</td>
                <td className="border p-2">Move or rename files</td>
                <td className="border p-2 font-mono">mv file.txt new-name.txt</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">clear</td>
                <td className="border p-2">Clear the terminal screen</td>
                <td className="border p-2 font-mono">clear</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange/20 p-4 rounded-lg my-4">
          <p className="text-sm">
            <strong>Note for Windows Command Prompt users:</strong> Some commands are different in Windows CMD:
          </p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li><code>dir</code> instead of <code>ls</code></li>
            <li><code>cd</code> alone shows current directory (instead of <code>pwd</code>)</li>
            <li><code>type nul &gt; filename</code> instead of <code>touch filename</code></li>
            <li><code>del</code> instead of <code>rm</code> for files</li>
            <li><code>rmdir /s /q</code> instead of <code>rm -r</code> for directories</li>
          </ul>
        </div>

        <h3>Navigation Shortcuts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">Path Shortcuts</h4>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="pr-4 py-1 font-mono">.</td>
                  <td>Current directory</td>
                </tr>
                <tr>
                  <td className="pr-4 py-1 font-mono">..</td>
                  <td>Parent directory</td>
                </tr>
                <tr>
                  <td className="pr-4 py-1 font-mono">~</td>
                  <td>Home directory</td>
                </tr>
                <tr>
                  <td className="pr-4 py-1 font-mono">/</td>
                  <td>Root directory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">Example Navigation Commands</h4>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="pr-4 py-1 font-mono">cd ..</td>
                  <td>Go up one directory</td>
                </tr>
                <tr>
                  <td className="pr-4 py-1 font-mono">cd ~</td>
                  <td>Go to home directory</td>
                </tr>
                <tr>
                  <td className="pr-4 py-1 font-mono">cd ../../folder</td>
                  <td>Go up two levels, then into "folder"</td>
                </tr>
                <tr>
                  <td className="pr-4 py-1 font-mono">cd -</td>
                  <td>Go to previous directory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Node.js and npm for React Development</h2>
        <p>
          React development requires Node.js and npm (Node Package Manager). Here's how to install them:
        </p>

        <div className="border rounded-lg p-6 bg-white my-6">
          <h3 className="text-xl font-semibold mb-4">Installing Node.js and npm</h3>
          
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <p className="font-medium">Visit the Node.js website</p>
              <p className="text-sm">Go to <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://nodejs.org</a></p>
            </li>
            <li>
              <p className="font-medium">Download the LTS (Long Term Support) version</p>
              <p className="text-sm">This is recommended for most users and provides stability</p>
            </li>
            <li>
              <p className="font-medium">Run the installer</p>
              <p className="text-sm">Follow the installation wizard instructions</p>
            </li>
            <li>
              <p className="font-medium">Verify the installation</p>
              <p className="text-sm">Open your terminal and run:</p>
              <CodeBlock language="bash">
                node --version
                npm --version
              </CodeBlock>
              <p className="text-sm mt-2">You should see version numbers displayed for both</p>
            </li>
          </ol>
        </div>

        <h2>Running Node.js Scripts</h2>
        <p>
          In React development, you'll often run scripts defined in your project's <code>package.json</code> file:
        </p>

        <CodeBlock language="bash">
{`# Run the development server
npm start

# Build the project for production
npm run build

# Run tests
npm test

# Run a custom script defined in package.json
npm run my-script-name`}
        </CodeBlock>

        <h2>npm for Package Management</h2>
        <p>
          npm is used to install and manage packages (libraries, frameworks, tools) for your projects.
        </p>

        <h3>Common npm Commands</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Command</th>
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-mono">npm init</td>
                <td className="border p-2">Initialize a new project (creates package.json)</td>
                <td className="border p-2 font-mono">npm init</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">npm install <i>package</i></td>
                <td className="border p-2">Install a package</td>
                <td className="border p-2 font-mono">npm install react</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">npm install -g <i>package</i></td>
                <td className="border p-2">Install a package globally</td>
                <td className="border p-2 font-mono">npm install -g create-vite</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">npm install --save-dev <i>package</i></td>
                <td className="border p-2">Install a package as a development dependency</td>
                <td className="border p-2 font-mono">npm install --save-dev jest</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">npm uninstall <i>package</i></td>
                <td className="border p-2">Remove a package</td>
                <td className="border p-2 font-mono">npm uninstall lodash</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">npm update <i>package</i></td>
                <td className="border p-2">Update a package</td>
                <td className="border p-2 font-mono">npm update react</td>
              </tr>
              <tr>
                <td className="border p-2 font-mono">npm list</td>
                <td className="border p-2">List installed packages</td>
                <td className="border p-2 font-mono">npm list --depth=0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Managing Projects with Terminal</h2>
        <p>
          Let's walk through a typical workflow of creating and managing a React project using terminal commands:
        </p>

        <div className="border rounded-lg p-4 my-6">
          <h3 className="font-semibold mb-2">Example React Project Workflow</h3>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              Create a new directory for your projects
              <CodeBlock language="bash">
                mkdir react-projects
              </CodeBlock>
            </li>
            <li>
              Navigate to that directory
              <CodeBlock language="bash">
                cd react-projects
              </CodeBlock>
            </li>
            <li>
              Create a new React project (we'll learn more about this in the next lesson)
              <CodeBlock language="bash">
                npx create-vite my-first-react-app --template react
              </CodeBlock>
            </li>
            <li>
              Navigate into your new project
              <CodeBlock language="bash">
                cd my-first-react-app
              </CodeBlock>
            </li>
            <li>
              Install dependencies
              <CodeBlock language="bash">
                npm install
              </CodeBlock>
            </li>
            <li>
              Start the development server
              <CodeBlock language="bash">
                npm run dev
              </CodeBlock>
            </li>
            <li>
              When you're done developing, stop the server with Ctrl+C
            </li>
            <li>
              Install an additional package
              <CodeBlock language="bash">
                npm install axios
              </CodeBlock>
            </li>
            <li>
              Build for production
              <CodeBlock language="bash">
                npm run build
              </CodeBlock>
            </li>
          </ol>
        </div>

        <h2>Tips for Using the Terminal Effectively</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-pink/20 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li><strong>Up/Down arrows</strong>: Navigate command history</li>
              <li><strong>Tab</strong>: Auto-complete file and directory names</li>
              <li><strong>Ctrl+C</strong>: Cancel current command</li>
              <li><strong>Ctrl+L</strong> or <strong>clear</strong>: Clear the screen</li>
              <li><strong>Ctrl+A</strong>: Move cursor to beginning of line</li>
              <li><strong>Ctrl+E</strong>: Move cursor to end of line</li>
            </ul>
          </div>
          <div className="bg-pink/20 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Best Practices</h3>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li>Use <strong>Tab completion</strong> to avoid typing errors</li>
              <li>Be careful with <strong>rm</strong> commands (they can't be undone)</li>
              <li>Use <strong>--help</strong> flag to see command options</li>
              <li>Keep project directories organized</li>
              <li>Use meaningful names for files and folders</li>
              <li>Save commonly used commands in a text file for reference</li>
            </ul>
          </div>
        </div>

        <h3>Reading Error Messages</h3>
        <p>
          When you run commands in the terminal, you might encounter error messages. Don't panic! Error messages are helpful indicators of what went wrong:
        </p>

        <div className="border rounded-lg p-4 bg-white my-6">
          <div className="bg-black text-white p-4 font-mono text-sm rounded-md mb-4">
            <p className="text-red-400">Error: Cannot find module 'react'</p>
            <p>Require stack:</p>
            <p>- /Users/username/projects/my-app/src/App.js</p>
            <p>- /Users/username/projects/my-app/src/index.js</p>
          </div>
          
          <p className="text-sm mb-2">
            This error indicates that the React module is missing. The solution would be to install React:
          </p>
          
          <CodeBlock language="bash">
            npm install react
          </CodeBlock>
        </div>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Getting Help</h3>
          <p>
            If you're unsure what a command does or how to use it, there are several ways to get help:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>
              <strong>Use the --help flag:</strong>
              <CodeBlock language="bash">
                npm --help
              </CodeBlock>
            </li>
            <li>
              <strong>Use the man command (macOS/Linux):</strong>
              <CodeBlock language="bash">
                man ls
              </CodeBlock>
            </li>
            <li>
              <strong>Search online:</strong> Stack Overflow and official documentation are your friends
            </li>
          </ul>
        </div>

        <h2>Ready for React Development</h2>
        <p>
          Now that you understand the basics of using the terminal, you're ready to start creating React applications! In the next lesson, we'll learn how to create a new React project using Vite, a modern build tool that makes React development fast and efficient.
        </p>
        
        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Practice Makes Perfect</h3>
          <p>
            The terminal might feel intimidating at first, but with practice, it will become a powerful tool in your development workflow. Start by using the commands you've learned in this lesson, and gradually incorporate more advanced commands as you become comfortable.
          </p>
          <div className="mt-4 text-center">
            <a href="/react-basics/create-react-app" className="btn-primary inline-flex items-center gap-2">
              Continue to Creating a React App
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

export default TerminalBasics;
