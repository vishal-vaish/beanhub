"use client";

import React from "react";
import {useState} from "react";
import Image from "next/image";
import loginLoader from "@/assets/icons/loader.gif";
import loginImage from "../../assets/image/login.jpg";
import {Eye, EyeOff, UserRound} from "lucide-react";
import {Button} from "@/components/ui/button";
import {authenticateUser} from "@/lib/endpoint";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";
import {notyf} from "@/lib/notyf";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {setAccessToken} = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    try {
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
      const loginResponse = await authenticateUser(authHeader);
      if (loginResponse && loginResponse.token) {
        setAccessToken(loginResponse.token);
        router.push("/");
      }
    } catch (error: any) {
      if (error && error.status === 401) {
        setErrorMessage("Invalid credentials")
      } else {
        notyf.error("Unable to login")
      }
    } finally {
      setIsLoading(false);
    }
  }
  const LoginLoader = () => {
    return (
      <div className="flex justify-center items-center h-80">
        <Image
          src={loginLoader}
          alt="login loader"
          width={100}
          height={100}
        />
      </div>
    );
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
        {isLoading ? (
          <LoginLoader/>
        ) : (
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-full bg-transparent rounded-3xl placeholder:text-white border border-1 border-white focus:border-white focus:outline-none px-4 text-white"
              />
              <Button
                variant="fullTransparent"
                className="absolute right-[20px] top-[50%] translate-y-[-50%] text-white px-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff/> : <Eye/>}
              </Button>
            </div>

            {errorMessage && <div className="text-red-500 my-4 font-bold">{errorMessage}</div>}

            <button
              type="submit"
              className={`w-full h-[45px] border-none outline-none text-lg font-bold rounded-xl mt-5 mb-2 ${
                isLoading ? "bg-gray-400 text-gray-500" : "bg-white cursor-pointer"
              }`}
              disabled={isLoading}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;