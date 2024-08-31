"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import Cookies from "universal-cookie";

type AuthContextDataType = {
  accessToken: string;
  setAccessToken: (token: string, isAdmin?:string) => void;
  removeAccessToken: () => void;
};
export const AuthContext = createContext<AuthContextDataType>({
  accessToken: "",
  setAccessToken: () => {},
  removeAccessToken: () => {},
});

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [accessToken, setAccessTokenState] = useState<string>("");
  const cookies = useMemo(() => new Cookies(), []);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAccessTokenState(storedToken);
    }
  }, []);

  const setAccessToken = (token: string, isAdmin?:string) => {
    setAccessTokenState(token);
    const cookieOptions = {
      path: "/",
      expires: new Date(Date.now() + 7 * 24 *60 * 60 * 1000),
    };
    cookies.set("accessToken", token, cookieOptions);
    if(isAdmin) {
    localStorage.setItem("isAdmin",isAdmin);
    }
  };

  const removeAccessToken = () => {
    setAccessTokenState("");
    cookies.remove('accessToken', {path: '/login'});
    localStorage.removeItem("isAdmin")
    router.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        removeAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
