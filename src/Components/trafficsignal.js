import React,{useState} from "react";
import { useRef } from "react";

const signals = {
    red: 2,
    yellow : 3,
    green : 4,
}

const circle= {
    green : 'red',
    red : 'yellow',
    yellow : "green"

}


export const Traffic = ()=>{

    const [value , setValue] = useState("")
    const saveIntervals = useRef([])



    const handleClick = (e) =>{
        handleRecursive('green')
    }

    function handleRecursive(initialValue){
        setValue(initialValue)
        const timer = signals[initialValue];
        const color = initialValue;
        const interval = setTimeout(()=>{handleRecursive(circle[color])},timer*1000)
        console.log("interval",interval)
        saveIntervals.current[0]= interval
    }

    const handleStop = ()=>{
        console.log('at close',saveIntervals)
        saveIntervals.current.forEach(clearInterval)
        saveIntervals.current = []
        setValue("")
    }


    return <>
    <button type="primary" style={{marginTop : "20px"}} onClick={handleClick}> Start</button>
    <div style={{display : "flex",margin: "0 auto",flexDirection : "column" , justifyContent : "space-between" , alignItems : "center" , height: "100px",width:"40px",marginTop:"50px", border:"2px solid black" }}>
    {Object.keys(signals).map((row,index)=>{
        return <div key= {index} style={{height : "20px" ,width : "20px" , borderRadius : "50%" , border: "2px solid black" , backgroundColor : (value == row) ? row : ""}} ></div>
    })}
    </div>
    <button onClick={handleStop} style={{marginTop:"10px"}} >Stop</button>

    </>
}