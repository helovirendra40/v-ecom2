import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ApiData from "../app/Api";
import "./productDetail.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";
import { addTowishlist } from "../app/slices/wishlistSlice";
import Card from "../component/card";

const ProductDetails = () => {
  const { id } = useParams();
  const filteId = parseInt(id);
  const filteredProducts = ApiData.filter((curElem) => curElem.id === filteId);

  const related_product_cate = filteredProducts[0].category;

  const dispatch = useDispatch();

  // add to cart
  const addtocart = (e) => {
    dispatch(addToCart(e));
    console.log(e);
  };

  // add to wishlist

  const wishlist = (e) => {
    dispatch(addTowishlist(e));
  };
  const relatedPro = ApiData.filter((curElem) => {
    return curElem.category === related_product_cate;
  });

  const relatedProfour = relatedPro.slice(0, 4);
  return (
    <>
      <div className="container my-5">
        {filteredProducts.map((curElem, ind) => {
          return (
            <div className="row" key={ind}>
              <div className="col-md-5">
                <div className="main-img">
                  <img
                    className="img-fluid"
                    src={curElem.thumbnail}
                    alt="ProductS"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="main-description px-2">
                  <div className="category text-bold">
                    Category: {curElem.category}
                  </div>
                  <div className="product-title text-bold my-3">
                    {curElem.title}
                  </div>

                  <div className="price-area my-4">
                    {/* <p className="old-price mb-1"><del>$100</del> <span className="old-price-discount text-danger">(20% off)</span></p> */}
                    <p className="new-price text-bold mb-1">
                      Rs. {curElem.price} / Stock {curElem.stock}
                    </p>
                    <p className="text-secondary mb-1">
                      (Additional tax may apply on checkout)
                    </p>
                  </div>

                  <div className="buttons d-flex my-5">
                    <div className="block">
                      <button
                        className="shadow btn btn-warning  "
                        onClick={() => wishlist(curElem)}
                      >
                        Wishlist
                      </button>
                    </div>
                    {curElem.stock > 0 ? (
                      <div className="block">
                        <button
                          className="shadow btn btn-warning"
                          onClick={() => addtocart(curElem)}
                        >
                          Add to cart
                        </button>
                      </div>
                    ) : (
                      <div className="block">
                        <button className="shadow btn btn-secondary">
                          Out Of Stock
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="product-details my-4">
                  <p className="details-title text-color mb-1">
                    Product Details
                  </p>
                  <p className="description">{curElem.description}</p>
                </div>

                <div className="row questions bg-light p-3">
                  <div className="col-md-1 icon">
                    <FaRocketchat />
                  </div>
                  <div className="col-md-11 text">
                    Have a question about our products at E-Store? Feel free to
                    contact our representatives via live chat or email.
                  </div>
                </div>

                <div className="delivery my-4">
                  <p className="font-weight-bold mb-0">
                    <span>
                      <TbTruckDelivery />
                    </span>{" "}
                    <b>Delivery done in 3 days from date of purchase</b>{" "}
                  </p>
                  <p className="text-secondary">
                    Order now to get this product delivery
                  </p>
                </div>
                <div className="delivery-options my-4">
                  <p className="font-weight-bold mb-0">
                    <span>
                      <FaFilter />
                    </span>{" "}
                    <b>Delivery options</b>{" "}
                  </p>
                  <p className="text-secondary">View delivery options here</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container similar-products my-4">
        <hr />
        <p className="display-5">Similar Products</p>
        <Card ApiData={relatedProfour} />
      </div>
    </>
  );
};

export default ProductDetails;
