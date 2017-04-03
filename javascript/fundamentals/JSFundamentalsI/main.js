/**
 * Created by arnold on 4/2/17.
 */
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (var i = 0; i < x.length; i++){
    console.log(x[i]);
}
x.push(100);
x+=["hello", "world", "JavaScript is Fun"];
console.log(x);
var sum = 0;
for (var i = 1; i <= 500; i++){
    sum+=i;
}
console.log(sum);
var min;
var arr = [1, 5, 90, 25, -3, 0];
for (var i = 0; i < arr.length; i++){
    if(min == undefined || min > arr[i]){
        min = arr[i];
    }
    sum+=arr[i];
}
console.log(min,sum/arr.length);
var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}
for (key in newNinja){
    console.log(key, newNinja[key]);
}