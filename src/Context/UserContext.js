import React, { useState,useEffect } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuth,setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('userEmail')) setIsAuth(true)
  },[])

  const logout = () => {
      setIsAuth(false)
      setUserData({})
      if(localStorage.getItem('userEmail')) {  localStorage.removeItem('userEmail')}
  }


  const context = {
    userData, setUserData,
    isAuth,setIsAuth,logout
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  ) 
}

export default UserContext;
