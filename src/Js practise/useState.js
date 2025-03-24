console.log('use state js entered');

function useState(initialValue){
    const obj = {
        value : initialValue,
        setValue : function(newValue){
            const context = this
            console.log('entered here',context)
            this.value = newValue
        }
    }
    return [()=>obj.value,obj.setValue.bind(obj)]
}

const [state,setState] = useState(0)
console.log(state,setState)
setState(5)
console.log(state())