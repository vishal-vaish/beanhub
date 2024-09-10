"use client";

import {useRouter} from "next/navigation";
import {
  createContext,
  ReactNode, useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Cookies from "universal-cookie";

type AuthContextDataType = {
  accessToken: string;
  setAccessToken: (token: string, isAdmin?: string) => void;
  removeAccessToken: () => void;
};
export const AuthContext = createContext<AuthContextDataType>({
  accessToken: "",
  setAccessToken: () => {
  },
  removeAccessToken: () => {
  },
});

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [accessToken, setAccessTokenState] = useState<string>("");
  const cookies = useMemo(() => new Cookies(), []);
  const router = useRouter();

  useEffect(() => {
    const storedToken = cookies.get("beanHubAccessToken");
    if (storedToken) {
      setAccessTokenState(storedToken);
    }
  }, []);

  const setAccessToken = (token: string) => {
    setAccessTokenState(token);
    const cookieOptions = {
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    };
    cookies.set("beanHubAccessToken", token, cookieOptions);
  };

  const removeAccessToken = () => {
    setAccessTokenState("");
    cookies.remove('beanHubAccessToken', {path: '/'});
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

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return context;
};
