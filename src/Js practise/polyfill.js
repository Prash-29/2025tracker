console.log('Hi from polyfills');


Array.prototype.customMap = function(callBack){
    const array = this
    const n = array.length;
    if(array.length == 0){
        throw new Error('array is empty')
    }
    const tempArray = []
    for(let i=0;i<n;i++){
        tempArray[i] = callBack(array[i],i,array);
    }
    return tempArray
}

const customReducer = function(callBack,initialValue){
    const array = this;
    if (typeof callBack != 'function'){
        throw new Error('parameter is not fucntion type')
    }
    let n=array.length;
    let answer = initialValue;
    //const answer = 
    for(let i=0;i<n;i++){
        answer = callBack(array[i],answer)
    }
    return answer
}

Array.prototype.customReducer = customReducer;

const myarr = [1,2,3,4]
// const myArr2 =[]
// try{
//     myArr2.customMap((row,index)=>{
//         console.log('Data',row,index)
//     })
// }
// catch(error){
//     console.error('error',error.message)
// }

// myarr.map((row,index)=>{
//     console.log('Data',row,index)
// })

console.log(myarr.customReducer((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0))