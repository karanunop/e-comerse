import React, { useState } from 'react';
import './nav.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("men") }}>
          <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("women") }}>
          <Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button className="login-button">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-count">0</div>
      </div>
    </div>
  );
}

export default Nav;

