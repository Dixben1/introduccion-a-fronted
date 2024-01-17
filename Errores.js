//Errores, Try/Catch/Trow
function addtwonums(a,b){
    try{
        if(typeof(a)!="number"){    
            throw new ReferenceError('the first argument is not a number')
        }else if(typeof(b)!="number"){
            throw new ReferenceError('the second argument is not a number')
        }else{
            console.log(a+b)
        }
    }catch(err){
        //Lanza el mensaje de error
        console.log("Error!",err)
    }
}

addtwonums(1,"1")
addtwonums(1,3)
console.log("It still works")