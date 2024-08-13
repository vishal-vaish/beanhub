import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  accessToken: string | null | undefined;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

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

export const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const [accessToken, setAccessToken]
    = useState<string | null | undefined>(null);

  const login = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('accessToken', token);
    setAccessToken(token);
  };

  console.log(accessToken);

  const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  useEffect(() => {
    const loadAccessToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('accessToken');
        if (storedToken) {
          setAccessToken(storedToken);
        } else {
          setAccessToken(undefined);
        }
      } catch (error) {
        console.error('Failed to load access token', error);
      }
    };
    loadAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={{accessToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
