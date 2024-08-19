import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  accessToken: string;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  accessToken: "",
  login: () => {},
  logout: () => {},
});

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({children}:AuthProviderProps) => {
  const [accessToken, setAccessToken]
    = useState<string>("");

  const login = async (): Promise<void> => {
    await AsyncStorage.setItem('accessToken', accessToken);
    setAccessToken(accessToken);
  };

  console.log(accessToken);

  const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem('accessToken');
    setAccessToken("");
  };

  useEffect(() => {
    const loadAccessToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('accessToken');
        if (storedToken) {
          setAccessToken(storedToken);
        }
      } catch (error) {
        console.error('Failed to load access token', error);
      }
    };
    loadAccessToken();
  }, []);

  useEffect(() => {
    const mockedAccessToken = "aslknfkjsdgjfksdfgk;jsdgsdfgb;jskdgbsdf;";
    setAccessToken(mockedAccessToken);
  }, []);

  return (
    <AuthContext.Provider value={{accessToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
