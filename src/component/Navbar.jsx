
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import authContext  from '../context/authContext';
import themeContext from '../context/themeContext';

const Navbar = () => {
     // const {cart} = useContext(authContext)
    const {toggleTheme} = useContext(themeContext)
    const {isAuthenticated, logOut} = useContext(authContext
    )
    return (
        <div>
            <ul style={{ display: "flex", width: "50%", justifyContent: "space-between" }}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/Product "}>Product</Link></li>
                <li><Link to={"about"}>About</Link></li>
                <li><Link to={"contactpage"}>Contact</Link></li>
                {/* <li><Link to={"login"}>Login</Link></li> */}
                <li><Link to={"signup"}>Signup</Link></li>
                <li><Link to={"addproduct"}>Add Product</Link></li>
                {isAuthenticated? <button onClick={logOut}>Log out</button> :  <li><Link to={"login"}>Login</Link></li>}
                {/* <li>cart:{cart}</li> */}

            </ul>

            <button onClick={toggleTheme}>toggle</button>
        </div>
    )
}

export default Navbar
