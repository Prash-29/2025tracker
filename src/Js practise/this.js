"use strict";


// value of this keyword in function - undefined 

// but js replace (undefined , null) of this value with window  

function x(){
    console.log(this)
}

//x() -- undefined

//value of this is determined by how function is called in runtime :

const obj = {
    val : '123'
}
x.call(obj) //--  obj

//global space

//console.log(this) // global space - global object --- 

// js | in browsers , global obj is window --- window is created : upon running js file

// because browswer provide - window obj , apis , 



///inside a object - it behave differently

const obj2 ={
    a:10,
    x: function(){    //function inside a obj is called a method
        console.log(this)
    }
}

obj2.x()


/// imp fucntions of this keywords -- call , apply , bind 

// used to share methods

const obj1 = {
    b : 20
}

//here I want x method

obj2.x.call(obj1) /// { b: 20 }

//pass parameters --- x.call(this, para1,para2)
