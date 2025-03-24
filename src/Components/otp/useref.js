import React,{useRef,useState,useEffect} from "react";


export const Useref = ()=>{

    const [value,setValue] = useState(0)
    const prev = useRef(0)

    useEffect(()=>{
        prev.current = value;
    },[])


    return <>
    <p>{value}</p>
    <p> {prev.current}</p> 
    <h1>Hello</h1>
    <button onClick = {()=>{setValue((prevValue)=>prevValue+1)}}>Increase</button>
    </>
}