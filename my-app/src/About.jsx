import { useState } from "react";
import Child from "./Componets/Child";
import Child2 from "./Componets/Child2";

function About() {
    const name="prajkta"

    const obj={
        city:"pune",
        num:90
    }

    const abc=()=>{
        console.log("i am function")
    }

    return (
        <div>
            
        <Child name={name} data={obj} abc={abc}/>
        <Child2 data={name} obj={obj} abc={abc}/>
        </div>
    )
}
export default About
