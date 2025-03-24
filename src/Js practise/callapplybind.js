let name1 ={
    fullName : 'prash',
    age:24,
    printfullname : function(val1){
        console.log(this.fullName + '-' +this.age + '-'+val1)
    }
}

name1.printfullname('val2')

let name2={
    fullName : 'old',
    age : 23,
}

name1.printfullname.call(name2,'val1')


//call , apply -- same , bind make function save and use later :


