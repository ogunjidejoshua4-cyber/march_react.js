import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

import { privateInstance } from '../api/api';
import { useNavigate } from 'react-router-dom';

// const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//     const [user, setUser] = React.useState(null);

//     const login = (userData) => {
//         setIsAuthenticated(true);
//         setUser(userData);
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
export const AuthProvider = ({ children }) => {


    const [user, setUser] = useState();
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const isAuthenticated = Boolean(token)


    const login = ({user, token}) =>{
      setToken(token || null)
      setUser(user || null)

      if (user && token) {
        localStorage.setItem("token",  token)
        localStorage.setItem("user", JSON.stringify(user))
      }

        setLoading(false)
    }

    const logOut = ()=>{
      console.log("hello");
      
      localStorage.clear('token')
      localStorage.clear('user')
      setUser(null)
      setToken(null)
    }

    const getCurrentUser = async()=>{
      console.log("running ......");
      
      try {
        const response = await privateInstance.get("api/auth/currentUser")
        console.log(response.data.token, "from here....."  );

        
        if (response) {
          // localStorage.setItem("token", response.token)
          navigate("/")
        }
      } catch (error) {
        console.log(error.response.data.message);
        navigate("/login")
        
      }
    }


    useEffect(()=> {
      const savedToken = localStorage.getItem("token")
      const savedUser = localStorage.getItem("user")

      try {
        if (savedToken) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setToken(savedToken)
        }
        if (savedUser) {
          const preSavedUser = JSON.parse(savedUser)
          setUser(preSavedUser)
        }
        getCurrentUser()

      } catch (error) {
        console.log(error);
        
      }

      setLoading(false)
    }, [])
    

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, logOut, login, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
