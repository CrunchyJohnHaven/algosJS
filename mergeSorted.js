function mergeSortedArray(a, b){
    var merged = [], // Define an empty array 
        aElm = a[0], // Define a variable as equal to the first parameter array at position 0 (2 in our example)
        bElm = b[0], // Define a second variable as equal to the second parameter array at position 0 (23 in our example)
        i = 1, // define a variable equal to 1
        j = 1; // define a variable equal to 1
    
    if(a.length ==0) // check if a is an empty 
      return b;
    if(b.length ==0)
      return a;
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example            
    */
    while(aElm || bElm){
      console.log('MERGED: ', merged, 'AELM: ', aElm, 'BELM: ', bElm, 'I: ', i, 'J: ', j);
     if((aElm && !bElm) || aElm < bElm){
       console.log('IF STATEMENT TRUE')
       merged.push(aElm);
       aElm = a[i++];
     }   
     else {
       merged.push(bElm);
       bElm = b[j++];
     }
    }
    return merged;
  }
  var a = [2,3,4,10,15];
  var b = [23, 45, 56, 61];
  console.log(mergeSortedArray(a, b));