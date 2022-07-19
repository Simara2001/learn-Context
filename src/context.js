import React, {useState, useContext, useEffect} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  return (
    <AppContext.Provider value={{loading, setLoading, isError, setError}}>
      {children}
    </AppContext.Provider>
  );
}; 
//ruchnoy hook yaratdik 
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export {AppContext, AppProvider};