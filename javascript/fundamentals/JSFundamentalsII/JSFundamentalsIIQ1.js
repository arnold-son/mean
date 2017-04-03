//1) Turn the following problems from JS Fundamentals Part I into functions that take variable inputs
//   1-a) Create a simple for loop that sums all the integers between x and y
//   (inclusive). Have it console log the final sum.
function sumXtoY(x,y){
    var sum = 0;
    for(var i = x; i <= y; i++){
        sum+=i;
    }
    console.log(sum);
}
//   1-b) Write a loop that will go through an array, find the minimum value, and then
//   return it
function returnMin(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
//   1-c) Write a loop that will go through an array, find the average of all of the
//   values, and then return it
function returnAverage(arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length; i ++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
