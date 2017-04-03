//3) Rewrite these as methods of an object
function JSFunII(){
//   3-a) Create a simple for loop that sums all the integers between x and y
//   (inclusive). Have it console log the final sum.
    this.sumXtoY = function(x,y){
        var sum = 0;
        for(var i = x; i <= y; i++){
            sum+=i;
        }
        console.log(sum);
    }
//   3-b) Write a loop that will go through an array, find the minimum value, and then
//   return it
    this.returnMin = function(arr){
        var min = arr[0];
        for(var i = 1; i < arr.length; i++){
            if(min > arr[i]){
                min = arr[i];
            }
        }
        return min;
    }
//   3-c) Write a loop that will go through an array, find the average of all of the
//   values, and then return it
    this.returnAverage = function(arr){
        var sum = arr[0];
        for(var i = 1; i < arr.length; i ++){
            sum+=arr[i];
        }
        return sum/arr.length;
    }

}
var jsfunobj = new JSFunII();
jsfunobj.sumXtoY(1,10);
console.log(jsfunobj.returnMin([1,2,3,4,5,6,7,8,9,10]));
console.log(jsfunobj.returnAverage([1,1,1,1,1]));
