console.log( '**** Reverse Words *****' );
// How would you reverse the words in a sentence
function reverseWords(str) {
    // I'm going to create an empty array and a variable to hold a number
    var rev = [],
    wordLen = 0;
    // substr extracts part of a string - first parameter = the position it starts at, second parameter equals # of characters
    // I'm going to create a for loop decrementing from 1 less than the length of the string until it reaches 0
    for (var i = str.length-1; i>=0; i--) {
        // I'm going to run an if statement if there's an empty space or if the string is only composed of an empty space
        if(str[i]==' ' || i==0){
            // console.log('i: ', i, 'wordLen: ', wordLen+1, 'str.substr(i, wordLen+1): ', str.substr(i, wordLen+1), 'REV: ', rev); 
            rev.push(str.substr(i, wordLen+1));
            wordLen = 0;
            console.log('REV: ', rev);
        }
        else 
        // WordLen counts the number of letters in each word
        wordLen++;
    }
    // This string is joined at each of the designated characters, the default is joining on ' , '
    return rev.join(' ');
}
var str = `123 456`;
console.log(reverseWords(str));
