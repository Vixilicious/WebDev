
import React from 'react';
import ContentLayout from '../../components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const VSCodeSetup = () => {
  return (
    <ContentLayout
      title="Setting Up VS Code for React Development"
      section="React Basics"
      currentStep={2}
      totalSteps={6}
      prevLink="/react-basics"
      nextLink="/react-basics/terminal"
    >
      <div>
        <h2>Visual Studio Code: The Developer's Editor</h2>
        <p>
          Visual Studio Code (VS Code) is a free, lightweight code editor developed by Microsoft. It has become the editor of choice for many web developers, especially those working with React, due to its speed, powerful features, and extensive ecosystem of extensions.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Why VS Code for React Development?</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Excellent JavaScript and TypeScript support</li>
            <li>JSX and React syntax highlighting</li>
            <li>IntelliSense code completion</li>
            <li>Integrated terminal</li>
            <li>Debugging capabilities</li>
            <li>Git integration</li>
            <li>Rich extension marketplace</li>
          </ul>
        </div>

        <h2>Downloading and Installing VS Code</h2>

        <div className="border rounded-lg p-6 my-6 bg-white">
          <h3 className="text-xl font-semibold mb-4">Step 1: Download VS Code</h3>
          <p className="mb-4">Visit the official VS Code website and download the appropriate version for your operating system:</p>
          
          <div className="flex justify-center mb-6">
            <a 
              href="https://code.visualstudio.com/download" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
            >
              Visit VS Code Download Page
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-md p-4 text-center">
              <h4 className="font-medium mb-2">Windows</h4>
              <p className="text-sm">Download the Windows installer (.exe) and follow the installation wizard.</p>
            </div>
            <div className="border rounded-md p-4 text-center">
              <h4 className="font-medium mb-2">macOS</h4>
              <p className="text-sm">Download the macOS version (.dmg), open it and drag VS Code to Applications folder.</p>
            </div>
            <div className="border rounded-md p-4 text-center">
              <h4 className="font-medium mb-2">Linux</h4>
              <p className="text-sm">Download .deb/.rpm package or use the package manager for your distribution.</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 my-6 bg-white">
          <h3 className="text-xl font-semibold mb-4">Step 2: Install VS Code</h3>
          
          <div className="mb-6">
            <h4 className="font-medium mb-2">Windows Installation</h4>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Double-click the downloaded .exe file</li>
              <li>Accept the agreement and click Next</li>
              <li>Choose installation location (or keep the default) and click Next</li>
              <li>Select additional tasks (recommended: Add "Open with Code" action and add to PATH)</li>
              <li>Click Install and wait for the installation to complete</li>
              <li>Click Finish to complete the setup</li>
            </ol>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-2">macOS Installation</h4>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Open the downloaded .dmg file</li>
              <li>Drag the VS Code icon to the Applications folder</li>
              <li>Optionally, add VS Code to your Dock</li>
            </ol>
            <p className="mt-2 text-sm italic">Note: You may need to right-click and select "Open" the first time you run VS Code due to macOS security settings.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Linux Installation</h4>
            <p className="mb-2">For Debian/Ubuntu:</p>
            <CodeBlock language="bash">
              sudo dpkg -i downloaded-vscode-file.deb
              sudo apt install -f # To install dependencies if needed
            </CodeBlock>
            
            <p className="mb-2 mt-4">For Red Hat/Fedora:</p>
            <CodeBlock language="bash">
              sudo rpm -i downloaded-vscode-file.rpm
            </CodeBlock>
          </div>
        </div>

        <h2>Essential VS Code Extensions for React Development</h2>
        <p>
          VS Code's functionality can be extended with plugins from the Extension Marketplace. Here are some essential extensions for React development:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium flex items-center">
              <span className="w-6 h-6 rounded bg-orange flex items-center justify-center text-white mr-2">E</span>
              ESLint
            </h3>
            <p className="text-sm mt-1">Integrates ESLint into VS Code to highlight and fix code quality and style issues.</p>
            <div className="mt-2">
              <CodeBlock language="bash">
                code --install-extension dbaeumer.vscode-eslint
              </CodeBlock>
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium flex items-center">
              <span className="w-6 h-6 rounded bg-pink flex items-center justify-center text-white mr-2">P</span>
              Prettier
            </h3>
            <p className="text-sm mt-1">Code formatter that enforces a consistent style by parsing your code and reprinting it.</p>
            <div className="mt-2">
              <CodeBlock language="bash">
                code --install-extension esbenp.prettier-vscode
              </CodeBlock>
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium flex items-center">
              <span className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white mr-2">R</span>
              ES7+ React/Redux/React-Native snippets
            </h3>
            <p className="text-sm mt-1">Code snippets for React, Redux, and React Native to speed up development.</p>
            <div className="mt-2">
              <CodeBlock language="bash">
                code --install-extension dsznajder.es7-react-js-snippets
              </CodeBlock>
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium flex items-center">
              <span className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white mr-2">T</span>
              Tailwind CSS IntelliSense
            </h3>
            <p className="text-sm mt-1">Provides autocomplete, syntax highlighting, and linting for Tailwind CSS.</p>
            <div className="mt-2">
              <CodeBlock language="bash">
                code --install-extension bradlc.vscode-tailwindcss
              </CodeBlock>
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium flex items-center">
              <span className="w-6 h-6 rounded bg-green-500 flex items-center justify-center text-white mr-2">D</span>
              DotENV
            </h3>
            <p className="text-sm mt-1">Support for .env files which are commonly used in React projects.</p>
            <div className="mt-2">
              <CodeBlock language="bash">
                code --install-extension mikestead.dotenv
              </CodeBlock>
            </div>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-medium flex items-center">
              <span className="w-6 h-6 rounded bg-red-500 flex items-center justify-center text-white mr-2">I</span>
              Import Cost
            </h3>
            <p className="text-sm mt-1">Displays the size of imported packages to help keep bundle size in check.</p>
            <div className="mt-2">
              <CodeBlock language="bash">
                code --install-extension wix.vscode-import-cost
              </CodeBlock>
            </div>
          </div>
        </div>

        <h3>Installing Extensions in VS Code</h3>
        <div className="border rounded-lg p-6 my-6 bg-white">
          <p className="mb-4">There are several ways to install extensions in VS Code:</p>
          
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong>From the Extensions View</strong>
              <ol className="list-disc ml-6 mt-2">
                <li>Click the Extensions icon in the Activity Bar on the side of the window (or press Ctrl+Shift+X)</li>
                <li>Search for the extension you want</li>
                <li>Click the Install button</li>
              </ol>
              <div className="mt-2 border rounded p-2 bg-gray-50">
                <div className="relative">
                  <img src="https://microsoft.github.io/vscode-codicons/dist/svg/extensions.svg" alt="Extensions Icon" className="w-8 h-8" />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      1
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center mt-1">Extensions Icon</p>
              </div>
            </li>
            <li>
              <strong>From the Command Palette</strong>
              <ol className="list-disc ml-6 mt-2">
                <li>Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (macOS) to open the Command Palette</li>
                <li>Type "ext install" followed by the extension name</li>
                <li>Select the extension from the list and press Enter</li>
              </ol>
            </li>
            <li>
              <strong>From the VS Code Marketplace Website</strong>
              <ol className="list-disc ml-6 mt-2">
                <li>Visit the <a href="https://marketplace.visualstudio.com/vscode" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">VS Code Marketplace</a></li>
                <li>Find the extension you want</li>
                <li>Click the "Install" button, which will open VS Code and prompt you to install</li>
              </ol>
            </li>
          </ol>
        </div>

        <h2>Configuring VS Code for React Development</h2>

        <h3>Setting Up Format on Save</h3>
        <p>
          Configure VS Code to automatically format your code when you save a file:
        </p>

        <ol className="list-decimal ml-6 space-y-2 my-4">
          <li>Press Ctrl+, (Windows/Linux) or Cmd+, (macOS) to open Settings</li>
          <li>Search for "format on save"</li>
          <li>Check the box for "Editor: Format On Save"</li>
        </ol>

        <div className="border rounded-lg p-4 my-4 bg-gray-100">
          <p className="text-sm">Alternatively, add this to your <code>settings.json</code> file:</p>
          <CodeBlock language="json">
{`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}`}
          </CodeBlock>
        </div>

        <h3>Custom Settings for React Development</h3>
        <p>
          Here are some recommended settings for React development:
        </p>

        <CodeBlock language="json">
{`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.rulers": [80],
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.singleQuote": true
}`}
        </CodeBlock>

        <h3>Creating Useful Code Snippets</h3>
        <p>
          Create custom code snippets for frequently used React patterns:
        </p>

        <ol className="list-decimal ml-6 space-y-2 my-4">
          <li>Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (macOS) to open the Command Palette</li>
          <li>Type "snippets" and select "Preferences: Configure User Snippets"</li>
          <li>Select "javascriptreact.json" (for .jsx files) or "typescriptreact.json" (for .tsx files)</li>
          <li>Add custom snippets</li>
        </ol>

        <p>Here's an example of useful React snippets:</p>

        <CodeBlock language="json">
{`{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "const $\{1:ComponentName} = () => {",
      "  return (",
      "    <div>",
      "      $\{0}",
      "    </div>",
      "  );",
      "};",
      "",
      "export default $\{1:ComponentName};"
    ],
    "description": "React Functional Component"
  },
  "React useState Hook": {
    "prefix": "usestate",
    "body": [
      "const [$\{1:state}, set$\{1:state.charAt(0).toUpperCase() + 1:state.slice(1)}] = useState($\{2:initialState});"
    ],
    "description": "React useState Hook"
  },
  "React useEffect Hook": {
    "prefix": "useeffect",
    "body": [
      "useEffect(() => {",
      "  $\{0}",
      "  return () => {",
      "    // Cleanup",
      "  };",
      "}, [$\{1:dependencies}]);"
    ],
    "description": "React useEffect Hook"
  }
}`}
        </CodeBlock>

        <h2>Additional VS Code Tips for React Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>Ctrl+Space</strong>: Trigger suggestions</li>
              <li><strong>F12</strong>: Go to definition</li>
              <li><strong>Alt+F12</strong>: Peek definition</li>
              <li><strong>Shift+Alt+F</strong>: Format document</li>
              <li><strong>Ctrl+`</strong>: Toggle integrated terminal</li>
              <li><strong>Ctrl+B</strong>: Toggle sidebar</li>
            </ul>
          </div>
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold mb-2">Multi-Window Editing</h3>
            <p className="text-sm">
              Split your editor to view and edit multiple files side by side:
            </p>
            <ul className="space-y-1 text-sm mt-2">
              <li>Drag a tab to the side of the editor</li>
              <li>Use <strong>Ctrl+\</strong> to split the current editor</li>
              <li>Use <strong>Ctrl+1</strong>, <strong>Ctrl+2</strong> to switch between editor groups</li>
            </ul>
          </div>
        </div>

        <h2>VS Code and GitHub Integration</h2>
        <p>
          VS Code has excellent Git integration out of the box:
        </p>

        <ol className="list-decimal ml-6 space-y-2 my-4">
          <li>Click on the Source Control icon in the Activity Bar (or press Ctrl+Shift+G)</li>
          <li>Initialize a repository if needed</li>
          <li>Stage changes by clicking the + button next to modified files</li>
          <li>Commit changes by entering a message and pressing Ctrl+Enter</li>
          <li>Push changes using the "..." menu or the status bar</li>
        </ol>

        <p>
          For even better GitHub integration, consider installing the GitHub Pull Requests extension.
        </p>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Ready for React Development</h3>
          <p className="mb-4">
            Now that you have VS Code set up with the right extensions and configurations, you're ready to start building React applications. In the next lesson, we'll learn about terminal basics, which are essential for running commands to create and manage React projects.
          </p>
          <div className="flex justify-center">
            <a href="/react-basics/terminal" className="btn-primary inline-flex items-center gap-2">
              Continue to Terminal Basics
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

export default VSCodeSetup;
