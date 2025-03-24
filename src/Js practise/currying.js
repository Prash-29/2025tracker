function multiply(x,y){
    console.log(x*y)
}

let multiply2 = multiply.bind(this,2,3)

let multiply3 = multiply.bind(this,3,3)

multiply2(4)

multiply2(5)

multiply3(8,3)

// create reusable functions

//closure 

var multiply = function (x){
    return function(y){
        console.log(x*y)
    }
}

multiply(10)(20)

