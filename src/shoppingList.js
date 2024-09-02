import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';

function ShoppingList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Shopping Cart</h1>
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.images[0]} alt={item.title} style={{ width: '100px' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button 
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2"></td>
                  <td className="text-end"><strong>Total Price:</strong></td>
                  <td>${calculateTotalPrice()}</td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="text-center mt-4">
            <Link to="/" className="btn btn-secondary">Back to Products</Link>
            <Link to="/checkout" className="btn btn-primary ms-2">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;



