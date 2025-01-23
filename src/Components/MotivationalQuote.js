import React from "react";
import { useState,useEffect } from "react";
import { MotivationalQuotes } from "./Constants";
import './quote.css'


const MotivationalQuote = () =>{

    const [quote , setQuote] =  useState('Grind up')

    const generateNewQuote = ()=>{
        const totalQuotesLen = MotivationalQuotes.length;
        if(totalQuotesLen>0){
            const index =  Math.floor(Math.random() * (totalQuotesLen - 0 + 1)) + 0
            return MotivationalQuotes[index]
        }
        return "No Motivation Required";

    }

    const replaceQuote = (newQuote)=>{
        setQuote(newQuote)
    }


    useEffect (()=>{
        const initialQuote = generateNewQuote();
        replaceQuote(initialQuote); // Replace quote immediately
    
        const intervalId = setInterval(() => {
          const newQuote = generateNewQuote();
          replaceQuote(newQuote);
        }, 86400000);

        return ()=>clearInterval(intervalId)
    },[]);
   

    return (<p className="quoteStyle">
        {quote}

    </p>) 

} 

export default MotivationalQuote;