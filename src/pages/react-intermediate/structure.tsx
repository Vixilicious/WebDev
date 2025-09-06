
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const ReactStructure = () => {
  return (
    <ContentLayout
      title="React Folder Structure and Organization"
      section="React Intermediate"
      currentStep={3}
      totalSteps={6}
      prevLink="/react-intermediate/hooks"
      nextLink="/react-intermediate/forms"
    >
      <div>
        <h2>Common React Project Structures</h2>
        <p className="mb-4">
          Organizing your React application with a clear and consistent folder structure makes it easier to maintain, scale, and collaborate on your codebase.
          Here are several approaches to structuring your React projects:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">1. Feature-Based Structure</h3>
            <p>Group files by feature or domain rather than by file type.</p>
            <CodeBlock language="text">
{`src/
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   └── index.js
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.js
│   └── settings/
│       ├── components/
│       ├── hooks/
│       └── index.js
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── App.js`}
            </CodeBlock>
            <p className="mt-2 text-sm text-zinc-600">Benefits: Encapsulates related code, making it easier to understand feature boundaries and improving maintainability.</p>
          </div>
          
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">2. Type-Based Structure</h3>
            <p>Group files by their technical role.</p>
            <CodeBlock language="text">
{`src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Modal.jsx
├── hooks/
│   ├── useAuth.js
│   └── useFetch.js
├── contexts/
│   ├── ThemeContext.js
│   └── AuthContext.js
├── utils/
│   ├── api.js
│   └── helpers.js
├── pages/
│   ├── Home.jsx
│   └── Profile.jsx
└── App.js`}
            </CodeBlock>
            <p className="mt-2 text-sm text-zinc-600">Benefits: Simple and straightforward for smaller applications. Easier for new developers to understand where specific types of files belong.</p>
          </div>
        </div>

        <h2>Feature-Based Organization</h2>
        <p className="mb-4">
          Feature-based organization is often considered a more scalable approach for medium to large applications.
          Here's how to effectively implement a feature-based structure:
        </p>
        
        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Best Practices for Feature-Based Structure</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Isolate feature code:</strong> Each feature should be as independent as possible with clear boundaries
            </li>
            <li>
              <strong>Shared components:</strong> Place reusable components that are used across multiple features in a separate "shared" or "common" directory
            </li>
            <li>
              <strong>Feature-specific state:</strong> Keep state management logic close to the feature it belongs to
            </li>
            <li>
              <strong>Clear exports:</strong> Use index.js files to explicitly control what gets exported from each feature
            </li>
            <li>
              <strong>Consistent naming:</strong> Use the same subdirectory names across features (e.g., each feature has its own "components" folder)
            </li>
          </ul>
        </div>

        <h2>Component Categorization</h2>
        <p className="mb-4">
          Breaking down your components into meaningful categories can help create a more organized and maintainable codebase:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium mb-2 text-pink">UI Components</h3>
            <p className="text-sm">Simple, reusable components focused on presentation. They should be highly reusable and not contain business logic.</p>
            <p className="text-xs mt-2 text-zinc-500">Example: Button, Card, Input, Modal</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Container Components</h3>
            <p className="text-sm">Components that fetch data or manage state and pass it down to presentational components.</p>
            <p className="text-xs mt-2 text-zinc-500">Example: UserList, ProductGrid, CheckoutForm</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Page Components</h3>
            <p className="text-sm">Top-level components that represent entire pages in your application.</p>
            <p className="text-xs mt-2 text-zinc-500">Example: HomePage, UserProfilePage, SettingsPage</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Layout Components</h3>
            <p className="text-sm">Components that handle the arrangement of other components.</p>
            <p className="text-xs mt-2 text-zinc-500">Example: Navbar, Sidebar, Footer, Grid</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium mb-2 text-pink">HOCs & Wrappers</h3>
            <p className="text-sm">Higher-order components or context providers that add functionality to other components.</p>
            <p className="text-xs mt-2 text-zinc-500">Example: withAuth, ThemeProvider, ErrorBoundary</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium mb-2 text-pink">Feature Components</h3>
            <p className="text-sm">Components that are specific to a particular feature or domain of your application.</p>
            <p className="text-xs mt-2 text-zinc-500">Example: CheckoutStepper, UserAvatar, ProductCard</p>
          </div>
        </div>

        <h2>Component Naming Conventions</h2>
        <p className="mb-4">
          Consistent naming conventions help make your codebase more navigable and intuitive:
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Component Naming Best Practices</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Pascal Case:</strong> Always use PascalCase for component names (e.g., <code>UserProfile</code>, not <code>userProfile</code>)
            </li>
            <li>
              <strong>Descriptive Names:</strong> Choose names that clearly describe what the component does or represents
            </li>
            <li>
              <strong>Prefix UI Components:</strong> Consider using a prefix for purely visual components (e.g., <code>UI</code> or <code>Base</code> - <code>UIButton</code>, <code>BaseInput</code>)
            </li>
            <li>
              <strong>Suffix for HOCs:</strong> Use <code>with</code> prefix for Higher Order Components (e.g., <code>withAuthentication</code>, <code>withTheme</code>)
            </li>
            <li>
              <strong>Context Components:</strong> Suffix context providers with <code>Provider</code> or <code>Context</code> (e.g., <code>AuthProvider</code>, <code>ThemeContext</code>)
            </li>
            <li>
              <strong>Container Suffix:</strong> Some teams suffix container components with <code>Container</code> (e.g., <code>UserListContainer</code>)
            </li>
            <li>
              <strong>Page Suffix:</strong> Components that represent entire pages can have a <code>Page</code> suffix (e.g., <code>ProfilePage</code>)
            </li>
            <li>
              <strong>File Name Match:</strong> The file name should match the component name (e.g., <code>Button.jsx</code> for <code>Button</code> component)
            </li>
          </ul>
        </div>

        <h2>Managing Assets and Styles</h2>
        <p className="mb-4">
          There are several approaches to organizing assets and styles in a React application:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">Co-located Assets</h3>
            <p>Place assets next to the components that use them.</p>
            <CodeBlock language="text">
{`src/
├── features/
│   └── profile/
│       ├── components/
│       │   ├── Avatar.jsx
│       │   ├── avatar.css
│       │   └── avatar.svg
│       └── ProfilePage.jsx`}
            </CodeBlock>
            <p className="mt-2 text-sm text-zinc-600">Benefits: Makes it clear which assets belong to which components, easier to clean up unused assets.</p>
          </div>
          
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-2 text-pink">Centralized Assets</h3>
            <p>Group all assets by type in dedicated folders.</p>
            <CodeBlock language="text">
{`src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── components/
│       ├── button.css
│       └── modal.css
└── components/`}
            </CodeBlock>
            <p className="mt-2 text-sm text-zinc-600">Benefits: Easier to find all assets of a certain type, better for projects with design systems or shared themes.</p>
          </div>
        </div>

        <h2>Best Practices for Scalable React Applications</h2>
        <p className="mb-4">
          Applying these organizational principles can help your React application scale effectively:
        </p>
        
        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Absolute imports:</strong> Configure your build system to use absolute imports instead of relative imports to improve readability
            </li>
            <li>
              <strong>Index files:</strong> Use index.js files to simplify imports and create public APIs for your modules
            </li>
            <li>
              <strong>Lazy loading:</strong> Implement code-splitting with React.lazy() and Suspense to improve initial load time
            </li>
            <li>
              <strong>Consistent patterns:</strong> Establish and document patterns for common tasks like data fetching, state management, and error handling
            </li>
            <li>
              <strong>Test proximity:</strong> Keep tests close to the components they test (e.g., Button.jsx and Button.test.jsx in the same folder)
            </li>
            <li>
              <strong>Documentation:</strong> Include README.md files in key directories to explain the purpose and organization of that section
            </li>
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ReactStructure;
