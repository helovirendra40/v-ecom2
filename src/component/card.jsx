import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
// import { addToCart } from "../app/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";
import { addTowishlist, deleteToWishlist } from "../app/slices/wishlistSlice";



const Card = ({ApiData}) => {
    const dispatch = useDispatch();
    const wishlistItm = useSelector((state)=>state.wishlist);
const wishlistIndex = wishlistItm.map((curElem)=>{
  return curElem.id;
});
// console.log(wishlistIndex);
// // Add product to cart
  const addtocart = (e)=>{
    dispatch(addToCart(e));
  }
  // add to wishlist

  const wishlist = (e) =>{
dispatch(addTowishlist(e))
  }

  // remove wishlist
  const removeWish = (e)=>{
    dispatch(deleteToWishlist(e))
  }
  return (
    <>
      <div className="container-fluid bg-trasparent mb-4 p-3 position-relative">
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {
            ApiData.map((curElem, ind)=>{
                return(
                    <div className="col hp" key={ind}>
            <div className="card h-100 shadow-sm">
              <Link to={`/product-details/${curElem.id}`}>
                <img
                  src={curElem.images[0]}
                  className="card-img-top"
                  alt={curElem.title}
                />
              </Link>
                    {
                        curElem.brand != null ? <div className="label-top shadow-sm">
                        <Link to={`/product-details/${curElem.id}`}
                          className="text-white"
                        >
                            {curElem.brand}
                          {/* {curElem.brand} */}
                        </Link>
                      </div>: ""
                    }
              
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success1">
                  Rs. {curElem.price}
                  </span>

                  <span className="float-end">
                    <a
                      href="#"
                      className="small text-muted text-uppercase aff-link"
                    >
                      reviews
                    </a>
                  </span>
                </div>
                <h5 className="card-title">
                  
                  <Link to={`/product-details/${curElem.id}`}>
                  
                  {curElem.title}
                  </Link>
                </h5>

                <div className="d-grid gap-2 my-4">{
                  curElem.stock > 0 ? <button className="btn btn-warning bold-btn" onClick={()=>addtocart(curElem)}>
                  add to cart</button> : <button className="shadow btn btn-secondary">Out Of Stock</button>
                  }
                  
                </div>
                <div className="clearfix mb-1">
                  <span className="float-start">
                    <a href="#">
                      <i className="fas fa-question-circle"></i>
                    </a>
                  </span>

                  <span className="float-end">
                    {
                      wishlistIndex.includes(curElem.id) ? <i class="fa fa-heart" aria-hidden="true" onClick={()=>removeWish(curElem)} ></i> : <i className="far fa-heart" onClick={()=>wishlist(curElem)}></i>
                      
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
                )
            })
          }
          
        </div>
      </div>
    </>
  );
};

export default Card;
