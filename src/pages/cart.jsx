import React, { useEffect, useState } from 'react';
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { addToCart, decreamentItem, deleteAllCart, deleteToCart } from '../app/slices/cartSlice';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const carts = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  // delete poduct 
  const deleteItem = (e)=>{
    dispatch(deleteToCart(e))
  }

  // increse product

  const IncBtn = (e)=>{
    dispatch(addToCart(e))
      }

      // decrese product

  const DecBtn = (e)=>{
    dispatch(decreamentItem(e))
      }

      // Empty cart
      const empty = ()=>{
        dispatch(deleteAllCart())
      }

      
  //Count total products

  let temp1=0;
  let sum1 = 0;
  const totalitems = carts.map((curELem)=>{
    sum1 = curELem.qnty;
    temp1 = sum1;
    return temp1    
  });
  const total = totalitems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

// total price
const finalPrice = ()=>{
  let totlatemp=0;
  carts.map((curELem,ind)=>{
    totlatemp = curELem.price * curELem.qnty + totlatemp
    setTotalPrice(totlatemp)
  })
};

useEffect(()=>{
  finalPrice();
  // alert(finalPrice)
},[finalPrice])


  return (
    <>
      <div className='cartContainer bg-light mt-3'>
        <div className='cartHeader px-2 bg-dark d-flex justify-content-between align-items-center'>
            <div className='text-white'>Items {total}</div>
            {
                carts.length > 0 ? <button className='btn btn-danger' onClick={()=>empty()}>Empty</button>:""
            }
        </div>
        
        {
            carts.length == 0 ? 
            <div className='emptyCartContainer'>
              <RiShoppingBag3Fill className='emptyIcon' />
            </div> : <table className="table table-responsive bg-light">
             <thead>
                 <tr>
                     <th>Delete</th>
                     <th>Image</th>
                     <th>Price</th>
                     <th>Qnty</th>
                     <th>Price</th>
                 </tr>
             </thead>
             <tbody>

              {
                carts.map((curELem,ind)=>{
                  return(
<tr key={ind}>
                     <td>
                     <MdDeleteForever onClick={()=>deleteItem(curELem)} />
                     </td>
                     <td>
                        <Link to={`/product-details/${curELem.id}`}><img src={curELem.thumbnail} alt='' /></Link>
                     </td>
                     <td>Rs. {curELem.price}</td>
                     <td>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-link-light' onClick={curELem.qnty <=1?()=>deleteItem(curELem.id):()=>DecBtn(curELem)}>-</button>
                            <input type='text' className='disabled' value={curELem.qnty} readOnly />
                            <button className='btn btn-link-light' onClick={()=>IncBtn(curELem)}>+</button>
                        </div>
                     </td>
                     <td >Rs. {(curELem.qnty * curELem.price).toFixed(2)}</td>
                 </tr>
                  )
                })
              }
             
             </tbody>
             <tfoot>
              <tr>
                <td colSpan={4} className='text-end'>Qnty : {total}</td>
                <td className='text-end'>Total : {totalPrice.toFixed(2)}</td>
              </tr>
             </tfoot>
         </table>
        }
      </div>
    </>
  )
}

export default Cart
