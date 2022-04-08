function receivesAFunction(x) {
    x();
}
function returnsANamedFunction () {
    function namedFunction () {
        console.log("named function");
    }
    return namedFunction;
}
function returnsAnAnonymousFunction () {
    return function(){
        console.log("named function");
    };
}