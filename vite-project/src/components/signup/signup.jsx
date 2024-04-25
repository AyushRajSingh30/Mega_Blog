import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form"
import Data from "../../Data"
import axios from "axios";


function Signup() {
    const navigate = useNavigate()
    
    const {register, handleSubmit} = useForm()

    const signup = async(data) => {
        const {email, password} = data;
        console.log("email :", email, "password :", password);
        try {

            const user= await axios.post("http://localhost:8000/api/v1/users/register", data);
            console.log("user :", user.data);

             if(user){
                (navigate("/login"));
               
               return  alert("Account Created Successfully!👍");
             }
           // const userData =await axios.POST("localhost:8000", data);
                // if(userData) dispatch(authLogin(userData));
                // navigate("/")
          
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full bg-slate-700'
    >
        <div className={`mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10 bg-slate-800`}>
        <div className="mb-2 flex justify-center">
                    {/* <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span> */}
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">Have Account Login</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login
                    </Link>
        </p>
        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
        <form onSubmit={handleSubmit(signup)} className='mt-8'>
            <div className='space-y-5'>
            <Data
                label="fullName:"
                type="fullName"
                placeholder="Enter your fullName"
              
                {...register("fullName", {
                    required: true,
                })}
                />

<Data
                label="username:"
                placeholder="Enter your username"
                type="username"
                //..register ka matlab hota hai ki khi aur register likhe to value over write na ho jai email is register name name is always true and second is object .
                {...register("username", {
                    required: true,
                })}
                />
                <Data
                label="Email:"
                placeholder="Enter your email"
                type="email"
                //..register ka matlab hota hai ki khi aur register likhe to value over write na ho jai email is register name name is always true and second is object .
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Data
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />

                <button type='submit'
                className='className={`px-4 py-2 rounded-lg w-full'>
              Signup
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup