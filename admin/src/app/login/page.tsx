"use client";

import React, {useEffect} from "react";
import {useState} from "react";
import Image from "next/image";
import loginLoader from "../../../public/icons/loader.gif";
import loginImage from "../../../public/image/login image.png";
import loginTopRightImage from "../../../public/image/login-topRight.png";
import loginLeftBottomImage from "../../../public/image/login-leftBottom.png";
import beanHubLogoIcon from "../../../public/icons/Beanhub-logo.png";
import loginBean1Image from "../../../public/image/bean1.png";
import loginBean2Image from "../../../public/image/bean2.png";
import {Eye, EyeOff, UserRound} from "lucide-react";
import {Button} from "@/components/ui/button";
import {authenticateUser} from "@/lib/endpoint";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";
import {notyf} from "@/lib/notyf";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {setAccessToken} = useAuth();
  const router = useRouter();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isPcScreen= windowHeight < 768;

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
        setErrorMessage("Invalid credentials");
      } else {
        notyf.error("Unable to login");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const LoginLoader = () => {
    return (
      <div className="flex justify-center items-center h-60">
        <Image
          src={loginLoader}
          alt="login loader"
          width={100}
          height={100}
        />
      </div>
    );
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={loginImage}
          alt="Background image"
          className="object-fill w-full h-full z-[-1]"
        />
        <div className="absolute inset-0 bg-black opacity-10"/>
      </div>

      <Image
        src={loginTopRightImage}
        alt="top-right-image"
        className="absolute top-0 right-0 sm:z-[-1] z-[-5]"
      />

      <Image
        src={loginLeftBottomImage}
        alt="left-bottom-image"
        className="absolute bottom-0 left-0 sm:z-[-1] z-[-5]"
      />

      <div className={`absolute right-[18vw] ${isPcScreen ? "top-[15%]" : "top-[25%]"}`}>
        <div className="w-full flex justify-center mb-10">
        <Image
          src={beanHubLogoIcon}
          alt="beanHub-icon"
          className=""
        />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`flex justify-center bg-white bg-opacity-10 backdrop-blur-sm flex-col p-10 pt-8 rounded-3xl text-center relative ${
            isPcScreen ? "w-[27rem]" : "w-[30rem]"
          }`}
        >
          <Image
            src={loginBean1Image}
            alt="login-bean1-image"
            className="absolute bottom-[-20%] right-[-15%]"
          />

          <Image
            src={loginBean2Image}
            alt="login-bean1-image"
            className="absolute bottom-[-60%] right-[-10%]"
          />

          {isLoading ? (
            <LoginLoader/>
          ) : (
            <>
              <h1 className={`text-white mb-5 tracking-wide ${isPcScreen ? "text-3xl" : "text-[3rem]"}`}>Login</h1>
              <div className="mb-[20px] relative">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full h-[50px] bg-white bg-opacity-10 rounded-3xl placeholder:text-white border border-white/50 focus:border-white focus:outline-none px-4 text-white backdrop-blur-sm shadow-inner"
                />
                <UserRound
                  size={20}
                  className="absolute right-[20px] top-[50%] translate-y-[-50%] text-white"
                />
              </div>
              <div className="mb-[20px] relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-[50px] bg-white bg-opacity-10 rounded-3xl placeholder:text-white border border-white/50 focus:border-white focus:outline-none px-4 text-white backdrop-blur-sm shadow-inner"
                />
                <Button
                  type="button"
                  variant="fullTransparent"
                  className="absolute right-[20px] top-[50%] translate-y-[-50%] text-white px-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff/> : <Eye/>}
                </Button>
              </div>

              {errorMessage && (
                <div className="text-red-500 my-2 tracking-wide font-bold">{errorMessage}</div>
              )}

              <button
                type="submit"
                className={`w-full h-[45px] border-none outline-none text-lg font-bold rounded-3xl ${
                  isLoading
                    ? "bg-yellow-100"
                    : "bg-yellow-600 text-white cursor-pointer hover:bg-opacity-90"
                } shadow-lg transition duration-300 ${
                  isPcScreen ? "": "mb-5 mt-2"
                }`}
                disabled={isLoading}
              >
                Login
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
