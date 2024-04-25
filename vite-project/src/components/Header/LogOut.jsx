import { useDispatch } from "react-redux";
import React from 'react'
import { logout } from "../../store/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function LogOut() {
const dispatch = useDispatch();
const navigate = useNavigate();
const user= useSelector((state)=>state.auth.userData);
      console.log(user);
const logouthandler= async ()=>{
    try {
      
      await axios.post("http://localhost:8000/api/v1/users/logout")
     dispatch(logout());
    alert("Logout Successfull ✔️")
    navigate("/login");
      
    } catch (error) {
      console.log(error.message);
    }
}

  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logouthandler}
    >Logout</button>
  )
}

export default LogOut