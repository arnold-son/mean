function runningLogger(){
    console.log("I am running!");
}
function multiplyByTen(num){
    return num*10;
}
function stringReturnOne(){
    return "hello world."
}
function stringReturnTwo(){
    return "hello world again."
}
function caller(couldbefunction){
    if(typeof(couldbefunction) == "function"){
        couldbefunction();
    }
}
function myDoubleConsoleLog(first,second){
    if(typeof(first) == "function" && typeof(second) == "function"){
        console.log(first(),second());
    }
}
function caller2(param){
    console.log("starting");
    setTimeout(function(){
        if(typeof(param) == "function"){
            param(stringReturnOne,stringReturnTwo);
        }
    },2000);
    console.log("ending?")
    // return "interesting";
}
console.log(multiplyByTen(5));
caller(runningLogger);
caller2(myDoubleConsoleLog);
