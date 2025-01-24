import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginData,setLoginData] = useState("");

       const [isExpand, setIsExpand] = useState(true);
  


  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
       setLoading(false);
     });
     return () => unsubscribe();
   }, []);

   if (loading) return <p>Loading...</p>;

  return (
    <AppContext.Provider value={{ user, setUser,isExpand,setIsExpand,setLoginData,loginData }}>
      {children}
    </AppContext.Provider>
  );
}