// promise was introduced to get rid of callback hell , to have better controll over code
// promise - obj storing eventual complete of async operation
// a promise will always have resolve and reject inside it -- 

function handleCart(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve('Data got'),1000)
    })
}

//something returning promise - need .then to read resolved data , .catch to read error

// const cart =()=>{
//     handleCart().then((data)=>{
//         console.log(data)
//         //return data // here whts happening , though i am passing data , its wrapping it in promises sending to next state
//         return Promise.resolve(data) // --- Same -- // promise.resolve - return a promise passed to next level //
//     })
//     .then((data)=>{
//         console.log('second',data)
//         return Promise.reject(data)
//     })
//     .catch((error)=>Promise.reject('Stopped at 2')) // in this case third is also printed , because no catch below it // here catch also returning Promise.resolve(undefined) by default 
//     //so reject the promise their , it goes to last catch .. end of code
//     .then((data)=>{
//         console.log('third',data)
//     })
//     .catch((error)=>console.error(error)) // .catch can be common or level wise // checks for all the level above it mentioned , below fuction goes on !!!
// }

// cart()

//resolve >>> reject || if we use same timwout
const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('1 resolved'),1000)
    //setTimeout(()=>{reject('1 rejected',1000)})
})

const pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('2 resolved')},5000)
    //setTimeout(()=>reject('2 rejected') , 5000)
})

const pr3 = new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve('3 resolved'),10000)
    setTimeout(()=>{reject('3 rejected',10000)})
})


const prAll = Promise.all([pr, pr2, pr3]).then((data)=>{   // waits for first failed case
               console.log('All case success' , data)
            })
            .catch((error)=>{
                console.error('All case failure' , error)                
            }) ;
const prAny = Promise.any([pr, pr2, pr3]).then((data)=>{  // waits for first passed case
                console.log('Any case success' , data)
            })
            .catch((error)=>{
                console.error('Any case failure' , error)                
            }) ;
const prAllSettled = Promise.allSettled([pr, pr2, pr3]).then((data)=>{ // waits for all 
                console.log('Settled case success' , data)
            })
            .catch((error)=>{
                console.error('Settled case failure' , error)                
            }) ;
const prRace = Promise.race([pr, pr2, pr3]).then((data)=>{  // first any settled case
                console.log('Race case success' , data)
            })
            .catch((error)=>{
                console.error('Race case failure' , error)                
            }) ;

// const data = Promise.resolve('answer')
// data.then((data)=>console.log(data))

