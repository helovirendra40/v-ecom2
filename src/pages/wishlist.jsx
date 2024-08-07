import React from 'react'
import Card from '../component/card'
// import ApiData from '../app/Api'
import { useSelector } from 'react-redux'
import { RiEmotionUnhappyLine } from "react-icons/ri";

const Wishlist = () => {
  const wishlistItm = useSelector((state)=>state.wishlist);
  console.log(wishlistItm)
  return (
    <>
    <div className='container-fluid'>

    <h2 className='mb-0 text-center'>My Wishlist</h2>
    </div>
    {
      wishlistItm.length > 0 ? <Card ApiData={wishlistItm} /> : <div className='w-100 min-height-250 d-flex justify-content-center align-items-center'> <RiEmotionUnhappyLine /></div>
    }
      
    </>
  )
}

export default Wishlist
