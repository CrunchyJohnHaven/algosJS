// Remove duplicate values from an array 
function duplicateArray(arr) {
    var exists ={},
    outArr = [], 
    elm;

for(var i =0; i<arr.length; i++){
  console.log('ELM: ', elm, 'EXISTS: ', exists, 'OUTARR: ', outArr, 'ARR: ', arr);
  elm = arr[i];
  if(!exists[elm]){
    outArr.push(elm);
    exists[elm] = true;
 }
}
return outArr;
}
var array = [1,2,2,3,5,5]
console.log(duplicateArray(array));

{"a" : {"aa": {"aaron": true}}}