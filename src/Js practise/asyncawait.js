// async - await to handle async operations in js
// async function always returns a promise 
// it will - make code inside to run synchronously - inside it
// await keyword is used async function
// await is used beside a promise or function returning promise
// await returns resolved value from promise || await will do .then of returned promise work !!

// const data = await Promise.resolve('answeer') ===
// const pr = Promise.resolve('answer)
//pr.then((answer)=> {
// const data = answer
// }) 

//questions - does async blocks main-thread -- no --  it just removes fuction from callstack , and gets back when line await is used is resolved
// but meanwhile callstack can execute any other function coming -- thats why we keep loading //(disables user action )

//  no one can stop js

const p1 =  new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('Namste 5000')
    },10000)
})

const p2 =  new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('Namste 1000')
    },5000)
})

async function value(){

    const data1 = await p1;
    console.log(data1)

    const data2 = await p2;
    console.log(data2)
        
    return 'returned Promise'
}

const resolvedPromise=await value()
console.log(resolvedPromise)