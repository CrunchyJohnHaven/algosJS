console.log( '***** MergeSorted2 *******')
// element = A part of a greater whole 
// variable = A named data structure that evaluates to some pre-defined value

// How do you merge two existing sorted arrays in JavaScript?

// I am going to loop through each array and push every element into a separate merged array, and each time I'm to check and see which element is smaller, 
// and push that element in first. To do this I'm going to 
// Step 1. Define a holding array, two variables holding the current index I'm on within each array, 
// Step 2. I'm going to use a for loop that will run until the index-holding-variables are both undefined.
function mergeSorted2(array1, array2) {
    // console.log(array1, array2);
    // First I will define my holding data structures
    // Step 1
    var mergedArray = [];
    var arrayOneIndex = array1[0];
    var arrayTwoIndex = array2[0];
    var aIndex = 1;
    var bIndex = 1;
    
    // For loop 3 parameters: 
        // parameter 1: Define a variable and it's value - 
        // parameter 2: Define a statement where the function will run as long as the statement evaluates to true 
        // parameter 3: Change the variable each time the statement runs

    // We want to run the loop for every variable within both arrays. 
    for(var i = 0; i<(array1.length+array2.length); ++i) { // 1
        console.log('This loop starts with i equal to 0, and it runs until i is equal to ', array1.length+array2.length-1);
        console.log('aIndex: ', aIndex, 'bIndex: ', bIndex)
        // If array 2 has run out push the next value of array1
        if (arrayOneIndex && !arrayTwoIndex) { // 10, 0
            mergedArray.push(arrayOneIndex)
            arrayOneIndex = array1[aIndex++];
            // console.log('A: ', mergedArray, 'arrayOneIndex:', arrayOneIndex, 'arrayTwoIndex: ', arrayTwoIndex);
        }
        else if (!arrayOneIndex && arrayTwoIndex) {
            // console.log('never runs');
            mergedArray.push(arrayTwoIndex);
            arrayTwoIndex = array2[bIndex++];
            // If array1
        } else if (arrayOneIndex >= arrayTwoIndex) {
            mergedArray.push(arrayTwoIndex);
            arrayTwoIndex = array2[bIndex++];
        } else {
            // console.log()
            mergedArray.push(arrayOneIndex);
            arrayOneIndex = array1[aIndex++]; // 10
            } 
        }
    return mergedArray;
}
// 10, 0 


var array1 = [0, 10, 20, 30, 40];
var array2 = [0];
console.log(mergeSorted2(array1, array2));
// What are our edge cases? 
// 1) If the values in both arrays at the same position have the same value 
// 2) If one or both of the arrays is empty
// 3) What if the value at the given position of the array is not a number? 
// 4) What if these arrays aren't sorted numeric arrays of increasing value?

// What data structures might we use to hold data to complete this function (string, number, array, dictionary, object, tuple)? 
// 1)  One variable of type array, 2 variables of type number - "I'm going to create an array to build my merged function, and two number variables to hold the 
// index of each of my respective arrays"
// What helper functions will we use to solve this problem (for loops, if/else statements, while loops, etc) 
// 1)  I'm 

// What other built-in JS functions might be useful here (.join, .substr, etc)?