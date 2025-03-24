import React, { use } from "react";
import { useState, useEffect } from "react";


export const XO = () =>{

    // useEffect(()=>{
    //     setInput([new Array(9).fill('')])
    // },[])

    const [currentPlayer , setCurrentPlayer] = useState(0)

    const [input,setInput]=useState(new Array(9).fill(''))

    const players = [{playerName : 'Prashanth', Symbol:'X'},{playerName : 'Sai', Symbol : 'o'}]

    const handleInputChange = (e,index)=>{
        let {playerName,Symbol} = players[currentPlayer]
        if( e.target.value.toLowerCase() == Symbol.toLowerCase()){
            const prevInput = [...input]
            prevInput[index]=e.target.value.toLowerCase()
            setInput(prevInput)
            //validate winner || use prevInput
            setCurrentPlayer(1-currentPlayer)

            // ? check current symbol is winner or not ?
        }
        else{
            //wrong input
            alert(`Wrong input Your symbol is ${Symbol}`)
        }
        
        
    }

    return (
        <>

        <h5>Player1 : {players[0].playerName}</h5>

        <h5>Player2 : {players[1].playerName}</h5>

        <div>
        <text>Current Player :</text>
        <span>{players[currentPlayer].playerName}</span>
        <hr/>
        <text>His Symbol :</text>
        <span>{players[currentPlayer].Symbol}</span>
        </div>

        {input.map((ele , index)=>{
            return  (<>
            <input key={index} value={input[index]} onChange={(e)=>{handleInputChange(e,index)}}></input> 
            {(index+1)%3 === 0 ? <br></br> : ""}
            </>)
        })}
        </>
    )

}