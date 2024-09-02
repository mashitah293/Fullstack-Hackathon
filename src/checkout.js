import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';

function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Checkout</h1>
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div>
              <div className="table-container">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img src={item.images[0]} alt={item.title} />
                        </td>
                        <td>{item.title}</td>
                        <td>${item.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2" className="text-end"><strong>Total Price:</strong></td>
                      <td>${calculateTotalPrice()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="payment-options-container">
                <h5>Payment Options:</h5>
                <form>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="cash" value="cash" />
                    <label className="form-check-label" htmlFor="cash">
                      Cash
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="online" value="online" />
                    <label className="form-check-label" htmlFor="online">
                      Online Banking
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="credit-card" value="credit-card" />
                    <label className="form-check-label" htmlFor="credit-card">
                      Credit Card
                    </label>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">Complete Purchase</button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="text-center mt-4">
            <Link to="/shopping-list" className="btn btn-secondary">Back to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;


