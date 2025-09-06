
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';

const ReactForms = () => {
  return (
    <ContentLayout
      title="Working with Forms in React"
      section="React Intermediate"
      currentStep={4}
      totalSteps={6}
      prevLink="/react-intermediate/structure"
      nextLink="/react-intermediate/api"
    >
      <div>
        <h2>Forms in React</h2>
        <p className="mb-4">
          Forms are essential for gathering user input in web applications. In React, 
          there are different approaches to working with forms, each with its own advantages.
        </p>

        <h3 className="mt-6">Controlled Components</h3>
        <p className="mb-4">
          In React, controlled components are the most common way to handle form inputs. 
          With controlled components, form data is handled by React state.
        </p>

        <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Form submission logic
    console.log('Form submitted with:', { email, password });
    setError('');
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Login</h2>
      
      {error && <div className="text-red-500">{error}</div>}
      
      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block mb-1">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Log In
      </button>
    </form>
  );
}`}
        </CodeBlock>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Benefits of Controlled Components:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Immediate access to input values for validation</li>
            <li>Ability to conditionally disable the submit button</li>
            <li>Enforcing input formats (e.g., formatting phone numbers as they're entered)</li>
            <li>Dynamic inputs that depend on each other</li>
          </ul>
        </div>

        <h3 className="mt-6">Uncontrolled Components</h3>
        <p className="mb-4">
          Uncontrolled components maintain their own internal state, and you query the DOM 
          using refs to find their current values when needed.
        </p>

        <CodeBlock language="jsx">
{`import React, { useRef } from 'react';

function UncontrolledForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    
    console.log('Form submitted with:', formData);
    
    // Reset the form
    e.target.reset();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Login (Uncontrolled)</h2>
      
      <div>
        <label htmlFor="email-uncontrolled" className="block mb-1">Email:</label>
        <input
          type="email"
          id="email-uncontrolled"
          ref={emailRef}
          className="w-full border rounded px-3 py-2"
          defaultValue=""
        />
      </div>
      
      <div>
        <label htmlFor="password-uncontrolled" className="block mb-1">Password:</label>
        <input
          type="password"
          id="password-uncontrolled"
          ref={passwordRef}
          className="w-full border rounded px-3 py-2"
          defaultValue=""
        />
      </div>
      
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Log In
      </button>
    </form>
  );
}`}
        </CodeBlock>

        <h3 className="mt-8">Handling Multiple Form Inputs</h3>
        <p className="mb-4">
          For forms with multiple inputs, you can use a single state object and 
          update specific properties based on input names:
        </p>

        <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  // Handle changes for all inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Use the input's "checked" property for checkboxes, and "value" for other inputs
    const inputValue = type === 'checkbox' ? checked : value;
    
    setFormData({
      ...formData,  // preserve existing data
      [name]: inputValue  // update only the changed field
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation would go here
    console.log('Form submitted with:', formData);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Registration Form</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-1">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block mb-1">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block mb-1">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        <label htmlFor="agreeToTerms">
          I agree to the terms and conditions
        </label>
      </div>
      
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}`}
        </CodeBlock>

        <h2 className="mt-8">Form Validation</h2>
        <p className="mb-4">
          Form validation is crucial for ensuring that user inputs meet required criteria.
          Let's explore different ways to validate forms in React.
        </p>

        <h3>Basic Client-Side Validation</h3>
        <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function ValidatedForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    // Email validation
    if (!formData.email || !/^\\S+@\\S+\\.\\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Form is valid! Submitting:', formData);
      // Submit the form data to your backend
    } else {
      console.log('Form has errors');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Validated Form</h2>
      
      <div>
        <label htmlFor="username" className="block mb-1">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={\`w-full border rounded px-3 py-2 \${errors.username ? 'border-red-500' : ''}\`}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">{errors.username}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={\`w-full border rounded px-3 py-2 \${errors.email ? 'border-red-500' : ''}\`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="password" className="block mb-1">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={\`w-full border rounded px-3 py-2 \${errors.password ? 'border-red-500' : ''}\`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>
      
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}`}
        </CodeBlock>

        <h3 className="mt-8">Using Form Libraries</h3>
        <p className="mb-4">
          For complex forms, using a library like React Hook Form or Formik can save time and reduce boilerplate code.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Popular React Form Libraries:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>React Hook Form</strong> - Performance focused with minimal re-renders and easy validation
            </li>
            <li>
              <strong>Formik</strong> - Comprehensive solution with built-in validation and error handling
            </li>
            <li>
              <strong>Final Form</strong> - Subscription-based form state management
            </li>
          </ul>
        </div>

        <h3 className="mt-6">Example with React Hook Form</h3>
        <CodeBlock language="jsx">
{`import React from 'react';
import { useForm } from 'react-hook-form';

function HookFormExample() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2>React Hook Form Example</h2>
      
      <div>
        <label htmlFor="fullName" className="block mb-1">Full Name:</label>
        <input
          id="fullName"
          className={\`w-full border rounded px-3 py-2 \${errors.fullName ? 'border-red-500' : ''}\`}
          {...register('fullName', { 
            required: 'Full name is required',
            minLength: { value: 3, message: 'Name must be at least 3 characters' }
          })}
        />
        {errors.fullName && (
          <span className="text-red-500 text-sm">{errors.fullName.message}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input
          id="email"
          className={\`w-full border rounded px-3 py-2 \${errors.email ? 'border-red-500' : ''}\`}
          {...register('email', { 
            required: 'Email is required',
            pattern: { 
              value: /^\\S+@\\S+\\.\\S+$/, 
              message: 'Please enter a valid email' 
            }
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      
      <div>
        <label htmlFor="age" className="block mb-1">Age:</label>
        <input
          id="age"
          type="number"
          className={\`w-full border rounded px-3 py-2 \${errors.age ? 'border-red-500' : ''}\`}
          {...register('age', { 
            required: 'Age is required',
            min: { value: 18, message: 'You must be at least 18 years old' },
            max: { value: 120, message: 'Invalid age' }
          })}
        />
        {errors.age && (
          <span className="text-red-500 text-sm">{errors.age.message}</span>
        )}
      </div>
      
      <div>
        <label className="block mb-1">Gender:</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            <input 
              type="radio" 
              value="male" 
              {...register('gender', { required: 'Please select a gender' })} 
            />
            Male
          </label>
          <label className="flex items-center gap-1">
            <input 
              type="radio" 
              value="female" 
              {...register('gender', { required: 'Please select a gender' })} 
            />
            Female
          </label>
          <label className="flex items-center gap-1">
            <input 
              type="radio" 
              value="other" 
              {...register('gender', { required: 'Please select a gender' })} 
            />
            Other
          </label>
        </div>
        {errors.gender && (
          <span className="text-red-500 text-sm">{errors.gender.message}</span>
        )}
      </div>
      
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}`}
        </CodeBlock>

        <h2 className="mt-8">Form Submission</h2>
        <p className="mb-4">
          When submitting forms, you typically want to send the data to a server via an API endpoint.
          Here's how to handle form submission with fetch:
        </p>

        <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({
      submitting: true,
      submitted: false,
      error: null
    });
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      console.log('Success:', data);
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message || 'Something went wrong!'
      });
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      
      {status.submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {status.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
          Error: {status.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            disabled={status.submitting}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            disabled={status.submitting}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
            disabled={status.submitting}
          />
        </div>
        
        <button 
          type="submit"
          className={\`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition \${
            status.submitting ? 'opacity-50 cursor-not-allowed' : ''
          }\`}
          disabled={status.submitting}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}`}
        </CodeBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">Best Practices for React Forms:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use controlled components for most form needs</li>
            <li>Implement client-side validation for immediate user feedback</li>
            <li>Always validate on the server side as well for security</li>
            <li>Show clear error messages near the relevant form fields</li>
            <li>Disable the submit button while submitting to prevent double submissions</li>
            <li>Provide visual feedback during form submission (loading indicators)</li>
            <li>Use proper HTML form attributes (required, type, etc.)</li>
            <li>Consider accessibility - use labels, aria attributes, and proper focus management</li>
            <li>For complex forms, break them into smaller, manageable sections</li>
          </ul>
        </div>

        <h2 className="mt-8">What's Next?</h2>
        <p className="mb-4">
          Now that you understand how to work with forms in React, the next step is to learn how to connect your React application to backend APIs to handle form submissions and fetch data.
        </p>

        <div className="flex justify-center">
          <a href="/react-intermediate/api" className="btn-primary inline-flex items-center gap-2">
            Continue to API Connection
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ReactForms;
