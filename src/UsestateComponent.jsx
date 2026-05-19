import { useState } from "react";
import { Button } from "./Button.jsx";

export const UsestateComponent = () => {
    const [nam, setName] = useState("Rohit");
    const [number, setNumber] = useState(0)  ;


const handleChangeName = () => {
    // alert("Name Changed")

    if(nam === "Rohit"){
        setName("Favour")
    } else {
        setName("Rohit")
    }
}
const handleIncrement = () => {
    setNumber(number + 1)
}
const handleDecrement = () => {
    setNumber(number - 1)
}
if(number < 0){
    setNumber(0)
}


return (
    <div>
        <h1>{nam}</h1>
        {/* <button onClick={handleChangeName}>Change Name</button> */}
        <Button function={handleChangeName} text={"Change Name"} />
        {/* <Button onClick={handleIncrement}  text={"Increment"} /> */}
        <h1>{number}</h1>
       
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        
    </div>
 )
} 




  