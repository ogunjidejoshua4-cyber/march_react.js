export const Userlist = () => {
    //react interpolation
    const name = 'favour';
    const age = 66
    const user = {
        name: "favour",
        age:70,
        gender:"female"
    }
    const userList = [
        {
            name:"john",
            age:40,
            gender:"male",
        },
        {
            name:"john",
            age:30,
            gender:"male",
        },
        {
            name:"Ayo",
            age:60,
            gender:"female",
        },
        
    ]

    return(
        <>  
        {/* <h1>Name: {name}</h1> */}
        {/* <h1>Age: {age}</h1> */}
        <ul>
            <li>{user.name}</li>
            <li>{user.gender}</li>
            <li>{user.age}</li>
           
        </ul>
        
        {/* <div>{userList.map((per,i) => {
            const cap = per.name.toUpperCase()
            return <ul key={i}>
                <li>{cap}</li>
                <li>{per.age}</li>
                <li>{per.gender}</li>
            </ul>
        })}</div> */}
        

        <div>{userList.map((per,i) => {
            const cap = per.name.toUpperCase()
            return <ul key={i}>
                <li>{cap}</li>
                <li>{per.age}</li>
                <li>{per.gender}</li>
            </ul>
        })}</div>
        </>
    )
}