import { useState } from "react"
const Contact=()=>{
    const[name,setName]=useState("sambodhi")
    // const[lname,setLname]=useState("kurware")


    function Onclick(){
        setName("snehal")
    }

return(
    <div>
        <h1>events</h1>
        {name}
        <br />
        {/* {lname} */}

        <br />
        <button onClick={Onclick}>Clickme</button> <br />
        {/* <button onClick={()=>setLname("patil")}>Click lname</button> */}
        
       

    </div>
)
}
export default Contact