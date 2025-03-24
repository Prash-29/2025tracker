import React from 'react';
import './style.css'

export const BaseComponent = (props)=>{
    return (
        <>
        <div style = {props.customClass}>
            <button className= 'buttonClass' onClick={props.handleAddClick}>+</button>
            <span>{props.fileName}</span>
        </div>
        </>
    )
}