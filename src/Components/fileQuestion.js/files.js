import React, { useState,useEffect } from 'react';
import { BaseComponent } from './filebutton';
const generateUniqueId = require('generate-unique-id');

export const Files = (props) => {
    //const [filesData , setFilesData ] = useState([])
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const response = await fetch('url');
    //         const outputData = await response.json();
    //         setFilesData(outputData);
    //     }
    //     fetchData()

    //     return ()=> console.log('clear')
    // },[])

    const [files, setFiles] = useState([
        { id:1,fileName: '1', children: [
                                    { id:3,fileName: '1a', children: [], level: 2 }
                                ], level: 1 },
        { id:2,fileName: '2', children: [], level: 1 }
    ]);

    const handleClick =(level,parentId)=>{
        
        const handlePrompt = ()=>{
            let fileName = prompt('Please enter your File Name')
            if(!fileName){
                handlePrompt()
            }
            return fileName
        }
        const fileName = handlePrompt()
        const uniqueId = generateUniqueId()
        //add to list || level 
        const fileObj = { fileName:fileName , children:[],level:level+1,id:uniqueId}
        const prevData = JSON.parse(JSON.stringify(files))
        var dfs = (prevData)=>{
            for(let i=0;i<prevData.length;i++){
                if(prevData[i].id == parentId){
                    prevData[i].children = [...prevData[i].children ,fileObj ]
                    return []
                }
                else{
                    dfs(prevData[i].children)
                }
            }

        }
        dfs(prevData)
        setFiles(prevData)
    }

    const renderFiles = (filesArray)=>{
        return (
            <>
            {filesArray.map((row, index,array) =>
            <>
            <div  className= 'file-container' style={{'marginLeft' : `${row.level*10}px`,'display':'flex'}}>
                <button className='button-element'><span style={{'display':'flex','justifyContent':'center'}} onClick={()=>{handleClick(row.level,row.id)}}>+</span></button>
                <text>{row.fileName}</text>
            </div>
            {row.children.length > 0 && renderFiles(row.children)}
            </>
            )}
            </>
        )
    }
    return (
        <>
            {renderFiles(files)}
        </>
    );
};
