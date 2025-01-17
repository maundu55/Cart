import React from 'react'
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to='/'>Shop</Link>
        <Link to='/cart'>Cart</Link>
        <CgShoppingCart size={32}/>
      </div>
    </div>
  );
}

export default Navbar