import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import * as Location from 'expo-location';

interface UserContextProps {
  location: Location.LocationObject | null;
  errorMsg: string | null;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserDetails = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('userUser must be used within an AuthProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({children}: UserProviderProps): JSX.Element => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {

      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <UserContext.Provider value={{location, errorMsg}}>
      {children}
    </UserContext.Provider>
  );
};
