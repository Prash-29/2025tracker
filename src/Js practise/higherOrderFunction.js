var element = document.createElement('input')
document.body.append(element)
element.setAttribute('type','text')
element.classList.add('input-class')

var logger2 = function(fn){
    return function(...args){
        fn(...args)
    }
}


element.addEventListener('input',logger(debounce(function(e) {
    console.log(e.target.value);
},3000)));

function logger(fn){
    return function(...args){
        fn(...args)
    }
}

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

function throttle(fn,delay){
    let timer;
    return function(...args){
        if(!timer){
            timer =  setTimeout(()=>{
                fn(...args)
                timer=null
            },delay)
        }
    }
}

var element2 = document.createElement('input')
element2.setAttribute('type','text')
element2.addEventListener('input',logger2(throttle(function(e){
    console.log(e.target.value)
},2000)))
element2.setAttribute('placeholder','throttle')
document.body.append(element2)