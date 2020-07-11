import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {

  const openMenu = () => {  //* Sidebar open function.
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => { //* Sidebar close function.
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              <FontAwesomeIcon icon={faBars} className="bar-menu" />

            </button>
            <Link to="/">WanderCommerce</Link>

          </div>
          <div className="header-links">
            <a href="cart.html">
              <FontAwesomeIcon icon={faShoppingCart} className="right-icon" />
                Cart
            </a>
            <a href="signin">
              <FontAwesomeIcon icon={faUser} className="right-icon" />
              Sign In
              </a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" component={HomeScreen} exact={true} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
