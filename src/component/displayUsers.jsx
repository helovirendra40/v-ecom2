import React from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
// import ApiData from '../app/Api';
// import ApiData from '../app/Api';
// console.log(ApiData)
const arr = [1];
const DisplayUsers = () => {
    
  return (
    
      <div className='displayUsers'>

        {
            arr.length > 0 ? <><div className='d-flex py-2 justify-content-between align-items-center'>
            
                    <p className='mb-0'>Veerndra Gangwar</p>
                        
            <MdOutlineDeleteForever className='dealetIcon' />        
          </div>
          <hr className='my-0' />
          </>
           : <h2>No user here</h2>
        }
      </div>
  )
}

export default DisplayUsers
