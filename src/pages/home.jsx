import React from 'react'
import Card from '../component/card'
import ApiData from '../app/Api'


const Home = () => {
  return (
    <>
     <Card ApiData={ApiData} /> 
    </>
  )
}

export default Home
