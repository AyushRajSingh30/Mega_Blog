import React from 'react'
import { useSelector } from 'react-redux';
import { json } from 'react-router-dom';
import authSlice from '../../store/authSlice';
function Home() {
  
  const authStatus=useSelector((state)=>state.auth.status)

 if(authStatus){
  console.log(authStatus);
  return (<h1>Hello User😎</h1>)
 }

  return (
    <>
    console.log(authSlice)
    <h1>Please Login</h1>
  </>
  )
}

export default Home