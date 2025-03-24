import React,{useState,useEffect} from "react";



const ProgressionBar =(props)=>{
    console.log('props',props)
    return <>
        <div className="outerBar" style={{width: "80%" , height:"20px" ,marginBottom:"5px",marginLeft:"auto",marginRight:"auto",border:"1px solid black",borderRadius:"20px",overflow:"hidden"}}>
            <div className="innerBar" style={{backgroundColor : `${props.color}`,borderRadius:"20px",height:"100%", transform : `translatex(${props.value - 100}%)`,transition:"transform 2s ease-in", }}></div>
        </div>
    </>
}




export const Progress = ()=>{

    const requiredArray = ['red','blue','green','pink','yellow']

    const delayMap = {
        red : 1 , blue : 2, green: 2, pink:4, yellow:5
    }

    const [value,setValue] = useState(new Array(5).fill(0))


    const handleClick = ()=>{
        recursiveCall(0)
    }

    const recursiveCall = (index)=>{
        if(index==5){
            return
        }

        setValue((prevValue)=>{
            let newArray = [...prevValue];
            newArray[index] = 100
            return newArray
        })
        
        setTimeout(()=>{
            recursiveCall(index+1)
        },delayMap[requiredArray[index]]*1000)
    }

    return (<div style={{position:"relative",top:"40px"}}>
        <button type="primary" style={{marginBottom : "10px"}} onClick={handleClick}> Start</button>
       {requiredArray.map((color,index) =>  <ProgressionBar color={color} value={value[index]} key={index}/>)}
       <button type="primary" style={{marginTop : "10px"}}> Stop</button>
    </div>

    )
}