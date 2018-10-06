function reverseWords2(str) {
    var array = [];
    var wordLen = 0;
    for (i = str.length-1; i>=0; i--) {
        if(i == 0 || str[i]==' ') {
            array.push(str.substr(i, wordLen+1));
            wordLen = 0;
        } else {
            wordLen++;
        }
    }
    return array.join(' ');
};
var str = 'This string must be reversed';
console.log(reverseWords2(str));