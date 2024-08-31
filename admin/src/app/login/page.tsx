"use client";

import React, { createContext, useContext, useState } from "react";
import Image from "next/image";
import loginImage from "../../assets/image/login.jpg";
import { Eye, UserRound } from "lucide-react";
import { signIn } from "@/lib/endpoint";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setAccessToken } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async(e:any) => {
    setErrorMessage("");
    e.preventDefault();
    try {
      const signInBody = {
        username,
        password
      }
      const data = await signIn(signInBody);
      setAccessToken(data.accessToken, data.isAdmin);    
       console.log("redirecting");
      router.push("/");
    } catch (error:any) {
      if(error.status) {
        setErrorMessage("Invalid Credentails");
      }
      console.error('Login error:', error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <Image
        src={loginImage}
        alt="Background image"
        fill
        className="object-cover z-[-1]"
      />
      <div className="w-[420px] bg-transparent text-black text-center backdrop-blur-md border rounded-xl p-3">
        <form onSubmit={handleSubmit}>
          <h1 className="my-5 text-2xl font-bold text-white">Login</h1>
          <div className="w-full h-[50px] my-[30px] relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full h-full bg-transparent rounded-3xl placeholder:text-white border border-1 border-white focus:border-white focus:outline-none px-4 text-white"
            />

            <UserRound
              size={20}
              className="absolute right-[20px] top-[50%] translate-y-[-50%] text-white"
            />
          </div>
          <div className="w-full h-[50px] my-[10px] relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-full bg-transparent rounded-3xl placeholder:text-white border border-1 border-white focus:border-white focus:outline-none px-4 text-white"
            />
            <Eye
              size={20}
              className="absolute right-[20px] top-[50%] translate-y-[-50%] text-white"
            />
          </div>

          {errorMessage && <div className="text-red-500 my-4">{errorMessage}</div>}

          {/* <div className="flex justify-between mx-5 text-white">
            <label>
              <input type="checkbox" className="mr-[5px]" />
              Remember me
            </label>
            <a href="a" className="text-base hover:underline">
              Forgot Password?
            </a>
          </div> */}

          <button
            type="submit"
            className="w-full h-[45px] bg-white border-none outline-none cursor-pointer text-lg font-bold rounded-xl mt-5 mb-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
