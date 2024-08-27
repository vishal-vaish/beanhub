import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AuthContextType = {
  accessToken: string | null;
  saveAccessToken: (accessToken: string) => Promise<void>;
  removeAccessToken: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const saveAccessToken = async (token: string) => {
    try {
      await AsyncStorage.setItem("accessToken", token);
      setAccessToken(token);
    } catch (error) {
      console.error("Error storing accessToken", error);
    }
  };

  const removeAccessToken = async () => {
    try {
      await AsyncStorage.removeItem("accessToken");
      setAccessToken(null);
    } catch (error) {
      console.error("Error removing accessToken", error);
    }
  };

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("accessToken");
        if (storedToken) {
          setAccessToken(storedToken);
        }
      } catch (error) {
        console.error("Error loading accessToken", error);
      }
    };

    loadToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, saveAccessToken, removeAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
