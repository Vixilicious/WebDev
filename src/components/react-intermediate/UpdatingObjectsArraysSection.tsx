
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const UpdatingObjectsArraysSection = () => {
  return (
    <>
      <h3 className="mt-6">Updating Objects and Arrays</h3>
      <p className="mb-4">
        When updating objects or arrays in state, you need to create a new object or array rather than modifying the existing one:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
          <h4 className="font-medium mb-2">Updating Objects</h4>
          <CodeBlock language="jsx">
{`function UserProfile() {
  const [user, setUser] = useState({
    name: 'John',
    email: 'john@example.com'
  });
  
  // Update a property in an object
  const updateEmail = (newEmail) => {
    // WRONG: This mutates the original object
    // user.email = newEmail;
    // setUser(user);
    
    // CORRECT: Create a new object with updated values
    setUser({
      ...user,
      email: newEmail
    });
  };
  
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => updateEmail('john.doe@example.com')}>
        Update Email
      </button>
    </div>
  );
}`}
          </CodeBlock>
        </div>
        <div>
          <h4 className="font-medium mb-2">Updating Arrays</h4>
          <CodeBlock language="jsx">
{`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build an app', completed: false }
  ]);
  
  // Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    
    // Create a new array with the new todo
    setTodos([...todos, newTodo]);
  };
  
  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };
  
  // Display todos
  return (
    <div>
      <button onClick={() => addTodo('New task')}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </div>
    </>
  );
};

export default UpdatingObjectsArraysSection;
