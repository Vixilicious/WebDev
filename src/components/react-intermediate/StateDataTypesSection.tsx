
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const StateDataTypesSection = () => {
  return (
    <>
      <h3 className="mt-6">State with Different Data Types</h3>
      <p className="mb-4">
        State can hold any type of JavaScript value - numbers, strings, booleans, arrays, objects, or even functions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">Number</h4>
          <CodeBlock language="jsx">
{`const [count, setCount] = useState(0);
const [price, setPrice] = useState(19.99);`}
          </CodeBlock>
        </div>
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">String</h4>
          <CodeBlock language="jsx">
{`const [name, setName] = useState('');
const [title, setTitle] = useState('React App');`}
          </CodeBlock>
        </div>
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">Boolean</h4>
          <CodeBlock language="jsx">
{`const [isLoading, setIsLoading] = useState(false);
const [showModal, setShowModal] = useState(true);`}
          </CodeBlock>
        </div>
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">Array</h4>
          <CodeBlock language="jsx">
{`const [items, setItems] = useState([]);
const [tags, setTags] = useState(['react', 'javascript']);`}
          </CodeBlock>
        </div>
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">Object</h4>
          <CodeBlock language="jsx">
{`const [user, setUser] = useState({ name: '', email: '' });
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: ''
});`}
          </CodeBlock>
        </div>
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <h4 className="font-medium mb-2">Complex Data</h4>
          <CodeBlock language="jsx">
{`const [settings, setSettings] = useState({
  theme: 'dark',
  notifications: {
    email: true,
    push: false,
    sms: true
  }
});`}
          </CodeBlock>
        </div>
      </div>
    </>
  );
};

export default StateDataTypesSection;
