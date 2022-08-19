function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am an anonymous function")
    }
}