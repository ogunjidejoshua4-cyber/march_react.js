import { useContext, useState } from "react"
import "./App.css";
// import { Button } from "./class_doing/Button.jsx";
// // import { Button } from "./Button.jsx";
// import { Card1 } from "./class_doing/card1.js";
// import { Card2 } from "./class_doing/card2.js";
// import { Card3 } from "./class_doing/card3.js";
// import { Userlist } from "./class_doing/UserList.js";
// import { UsestateComponent } from "./UsestateComponent.jsx";
// // import { UsestateComponent } from "./UsestateComponent"
// import Timer from "./class_doing/Timer.js"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pagess/Home"
import { About } from "./pagess/About"
import { Contact } from "./pagess/Contact"
import Navbar from "./component/Navbar"
import { Login } from "./pagess/Login"
import { NotFound } from "./component/NotFound"
import { Product } from "./pagess/Product"
import { AddProduct } from "./pagess/AddProduct"
import { Signup } from "./pagess/signup"
import themeContext from "./context/themeContext";
// import VerifyEmail from "./pagess/verify-email";



// import second  from "./Button.module.css";

function App() {


  const {theme}=useContext(themeContext)
  
  

  return (
   

     <div className={`app ${theme}`}>
    {/* <Userlist /> */}
    {/* <UsestateComponent /> */}
      <div className="container">
        {/* <h1 style={{ color: "yellow", backgroundColor: "black" }}>hello world</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magni impedit nam culpa ducimus, fuga praesentium sunt voluptatibus tempora doloribus alias distinctio at rem cumque quam, repellat quidem vel exercitationem.</p>
        
          <div className={second.box}>
              <h2>hello world</h2>
          </div>
         <Button /> */}
         
         {/* <div className="card">
          < Card1 />
          < Card2 />
          < Card3 />
         </div>
         
         <Button text={"submit"} />
         <Button text={"login"} /> */}

         
      </div>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="contactpage" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}


      </Routes> 

   </div>
  )
}

export default App
