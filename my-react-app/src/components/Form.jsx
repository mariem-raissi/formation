import React,{useState,useContext, useEffect} from "react";
import { Context } from "./Context";
export function Form(){
    const theme=useContext(Context);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");
    useEffect(()=>{
        console.log("count has changed:",count);

    },[count]);

    return(
        <div>
            <h1>home page-theme:{theme}</h1>
            <input type="text " placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
            <input type="email " placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
          <input type="number " placeholder="age" onChange={(e)=>setAge(e.target.value)}></input>
       <button onClick={()=>alert(`Name: ${name},email:${email},Age:${age}`)}>submit</button>
        
        </div>
    );
}