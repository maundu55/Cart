import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'><CgShoppingCart size={32} color='orange'/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar