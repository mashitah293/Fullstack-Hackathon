import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src="computer.jpeg" alt="Company Logo" className="company-logo" />
          <h3>MAXCOMP Sales & Services</h3>
        </div>
        <div className="footer-column">
          <ul>
            <h4>Go To:</h4>
            <li><a href="/">Home</a></li>
            <li><a href="/Product.js">Products</a></li>
            <li><a href="/Addtocart.js">Add To Cart</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Address: Kuantan,Pahang</p>
          <p>Phone: +6012 345 6789</p>
          <p>Email: maxcompsales@example.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} MAXCOMP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
