"use client";

import {
  createContext,
  ReactNode, useContext, useEffect,
  useState,
} from "react";
import {AuthContext} from "@/context/AuthContext";
import {getUserProfile} from "@/lib/endpoint";
import {User} from "@/models/domain/user";

type UserContextDataType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
export const UserContext = createContext<UserContextDataType>({
  user: null,
  setUser: () => {},
});

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const {accessToken} = useContext(AuthContext);

  useEffect(() => {
    if (!accessToken) return;
    getUserProfile(accessToken)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, [accessToken]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within an UserContextProvider");
  }

  return context;
};
