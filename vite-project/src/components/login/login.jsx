import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Data from "../../Data";
import axios from "axios";
import { login as authLogin } from "../../store/authSlice";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    try {
      console.log(data);
      const user = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        data
      );

      if (user) {
        dispatch(authLogin(user));
        console.log(user);
        return navigate("/");
      }

      // const userData =await axios.POST("localhost:8000", data);
      // if(userData) dispatch(authLogin(userData));
      // navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-slate-700">
      <div
        className={`mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10 bg-slate-800`}
      >
        <div className="mb-2 flex justify-center">
          {/* <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span> */}
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
        {/* {on submit data of form pass to handelerSubmit parameter.} */}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Data
              label="Email:"
              placeholder="Enter your email"
              type="email"
              //..register ka matlab hota hai ki khi aur register likhe to value over write na ho jai email is register name name is always true and second is object .

              //resister track the input field of form when we submited form that time handeler containing the values of all registered input fields.
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
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

            <button
              type="submit"
              className="className={`px-4 py-2 rounded-lg w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
