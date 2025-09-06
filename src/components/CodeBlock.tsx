
import React from 'react';

interface CodeBlockProps {
  language?: string;
  children: React.ReactNode;
}

const CodeBlock = ({ language = 'html', children }: CodeBlockProps) => {
  return (
    <div className="relative group mt-4 mb-6">
      <div className="code-block bg-zinc-800 text-white p-4 rounded-md overflow-x-auto font-mono text-sm shadow-md">
        <div className="absolute top-0 right-0 mr-2 mt-2 bg-zinc-700 text-xs px-2 py-1 rounded text-white/90">
          {language}
        </div>
        <pre className="overflow-x-auto">
          <code>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
