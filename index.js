function receivesAFunction(callbackFunction){
    return callbackFunction()
}

function returnsANamedFunction(){
   return function aName(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}