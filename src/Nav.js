import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GoogleIcon from '@mui/icons-material/Google';
function Navgo() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#778DA9' }}>
      <Container>
        <Navbar.Brand href="/" target="_blank"><img src="shophere.png" alt="Logo" className="d-inline-block align-top" style={{ height: '40px', width: 'auto' }} />ShopHere</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home<><HomeIcon /></></Nav.Link>
            <Nav.Link href="/Product.js">Product<><StorefrontIcon /></></Nav.Link>
            <Nav.Link href="/shopping-list">Add To Cart<><ChecklistIcon /></></Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.facebook.com/MAXCOMPKTN/" target="_blank">Facebook<><FacebookIcon /></></NavDropdown.Item>
              <NavDropdown.Item href="https://shopee.com.my/btcom.my?is_from_login=true" target="_blank">Shopee<><ShoppingBasketIcon /></></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.google.com/" target="_blank">Google<><GoogleIcon /></></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navgo;