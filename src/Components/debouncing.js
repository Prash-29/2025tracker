import react,{useState} from "react"

export const InputDebounce = ()=>{

    const [data,setData] = useState()

    const debounce = function(timeout,paramFunction){
        let timeoutId;
        return function (){
            if(timeoutId){
                clearTimeout(timeoutId) 
            }
            timeoutId=setTimeout(()=>{
                paramFunction()
            },timeout)
        }
    }


    const handleChange =(e)=>{
        console.log('clicked',e.target.value.slice(e.target.value))
    }
    
    const handleDebounceChange = debounce(10000,handleChange);

    return <>
        <label for="username">Search</label>
        <input onChange={handleDebounceChange} type="text" name="username"></input>
    </>
}