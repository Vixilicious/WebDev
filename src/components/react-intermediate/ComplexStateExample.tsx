
import React from 'react';
import CodeBlock from '@/components/CodeBlock';

const ComplexStateExample = () => {
  return (
    <>
      <h2>Complex State Management Example</h2>
      <p className="mb-4">
        Let's look at a more complex example that uses multiple state variables and derived state:
      </p>

      <CodeBlock language="jsx">
{`import React, { useState } from 'react';

function ShoppingCart() {
  // State for cart items
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15, quantity: 2 }
  ]);
  
  // State for customer information
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: ''
  });
  
  // State for UI state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  
  // Derived state (calculated from existing state)
  const subtotal = items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  const discount = couponCode === 'SAVE20' ? subtotal * 0.2 : 0;
  const total = subtotal - discount;
  
  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };
  
  // Remove item from cart
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  // Update customer information
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value
    });
  };
  
  // Begin checkout process
  const startCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setIsCheckingOut(true);
  };
  
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      
      {/* Cart items */}
      <div className="cart-items">
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name} - \${item.price}</span>
                <div>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Order summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: \${subtotal.toFixed(2)}</p>
        
        {/* Coupon code */}
        <div>
          <input
            type="text"
            placeholder="Coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          {discount > 0 && <p>Discount: -\${discount.toFixed(2)}</p>}
        </div>
        
        <p><strong>Total: \${total.toFixed(2)}</strong></p>
        
        <button onClick={startCheckout}>Checkout</button>
      </div>
      
      {/* Checkout form */}
      {isCheckingOut && (
        <div className="checkout-form">
          <h2>Checkout</h2>
          <form>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleCustomerChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleCustomerChange}
                required
              />
            </div>
            <div>
              <label>Address:</label>
              <textarea
                name="address"
                value={customer.address}
                onChange={handleCustomerChange}
                required
              />
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
      )}
    </div>
  );
}`}
      </CodeBlock>
    </>
  );
};

export default ComplexStateExample;
