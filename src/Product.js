import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'; // Import the CSS file

function Product() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Set initial filtered data
      })
      .catch((e) => {
        console.log("There is something wrong");
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredData(data);
    } else if (selectedCategory === 'Miscellaneous') {
      // Assuming 'Miscellaneous' is the label for 'Other' in the API
      setFilteredData(data.filter(product => product.category.name === 'Miscellaneous'));
    } else {
      setFilteredData(data.filter(product => product.category.name === selectedCategory));
    }
  }, [selectedCategory, data]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...storedCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            <h4>Filter by Category</h4>
            <ul className="list-group">
              <li className="list-group-item" onClick={() => handleCategoryChange('All')}>All</li>
              <li className="list-group-item" onClick={() => handleCategoryChange('Clothes')}>Clothes</li>
              <li className="list-group-item" onClick={() => handleCategoryChange('Furniture')}>Furniture</li>
              <li className="list-group-item" onClick={() => handleCategoryChange('Electronics')}>Electronics</li>
              <li className="list-group-item" onClick={() => handleCategoryChange('Miscellaneous')}>Miscellaneous</li>
            </ul>
          </div>
        </div>

        <div className="col-md-9">
          <div><h1 style={{ textAlign: 'center' }}>List of Products</h1>
            <div className="container">
              <div className="row">
                {filteredData.map((product) => (
                  <div key={product.id} className="col-md-4 mb-4">
                    <div className="card">
                      <img className="card-img-top" src={product.images[0]} alt={product.title} />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">
                          <strong>Price:</strong> ${product.price}
                        </p>
                        <Badge bg="success">Category: {product.category.name}</Badge>{' '}
                        <Badge bg="warning" text="dark">Rating: {product.rating}</Badge>
                        <button 
                          className="btn btn-primary mt-2" 
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">Go to Home</Link>
      </div>
    </div>
  );
}

export default Product;







