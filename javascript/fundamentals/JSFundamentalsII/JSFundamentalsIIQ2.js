//2) Rewrite these 3 as anonymous functions assigned to variables.
//   2-a) Create a simple for loop that sums all the integers between x and y
//   (inclusive). Have it console log the final sum.
var sumXtoY = function(x,y){
    var sum = 0;
    for(var i = x; i <= y; i++){
        sum+=i;
    }
    console.log(sum);
}
//   2-b) Write a loop that will go through an array, find the minimum value, and then
//   return it
var returnMin = function(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
//   2-c) Write a loop that will go through an array, find the average of all of the
//   values, and then return it
var returnAverage = function(arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length; i ++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

sumXtoY(1,10);
console.log(returnMin([1,2,3,4,5,6,7,8,9,10]));
console.log(returnAverage([1,1,1,1,1]));
