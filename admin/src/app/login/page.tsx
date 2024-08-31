import React from "react";
import Image from "next/image";
import loginImage from "../../assets/image/login.jpg";
import { Eye, UserRound } from "lucide-react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <Image
        src={loginImage}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />
      <div className="w-[420px] bg-transparent text-black text-center backdrop-blur-md border rounded-md p-3">
        <form action="">
          <h1 className="my-5 text-2xl font-bold text-white">Login</h1>
          <div className="w-full h-[50px] my-[30px] relative">
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full h-full bg-transparent rounded-3xl placeholder:text-white border border-1 border-white focus:border-white focus:outline-none px-4 text-white"
            />

            <UserRound
              size={20}
              className="absolute right-[20px] top-[50%] translate-y-[-50%] text-white"
            />
          </div>
          <div className="w-full h-[50px] my-[30px] relative">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full h-full bg-transparent rounded-3xl placeholder:text-white border border-1 border-white focus:border-white focus:outline-none px-4 text-white"
            />
            <Eye
              size={20}
              className="absolute right-[20px] top-[50%] translate-y-[-50%] text-white"
            />
          </div>

          <div className="flex justify-between mx-5 text-white">
            <label>
              <input type="checkbox" className="mr-[5px]" />
              Remember me
            </label>
            <a href="a" className="text-base hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-[45px] bg-white border-none outline-none cursor-pointer text-lg font-bold rounded-xl mt-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
