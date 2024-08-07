import React, { useState, useEffect } from "react";
import ApiData from "../app/Api";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


// const  = [];
const wishlistItm = [];

const Navbar = () => {
  const [filterCategory, setFilterCategory] = useState([]);
  const cartItems = useSelector((state)=>state.cart);
  const wishlistItm = useSelector((state)=>state.wishlist);
// console.log(wishlistItm);
  useEffect(() => {
    // Extract category names
    const categoryNames = ApiData.map((item) => item.category);
    // Get unique category names
    const uniqueCategories = [...new Set(categoryNames)];
    // Update state
    setFilterCategory(uniqueCategories);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary1">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" href="#">
            V-ECOM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {filterCategory.map((category, index) => (
                <li className="nav-item" key={index}>
                  <Link to={`/${category}`} className="nav-link" href="#">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
            <Link to={'/wishlist'} className="position-relative mb-0">
                <FaHeart className="naveIcon" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {
                    wishlistItm.length > 0 ? wishlistItm.length : 0
                  }
                  {/* <span className="visually-hidden">unread messages</span> */}
                </span>
              </Link>
              <Link to={'/cart'} className="position-relative mb-0 me-2">
              <FaShoppingCart  className="naveIcon" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {
                    cartItems.length > 0 ? cartItems.length : 0 
                  }
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
