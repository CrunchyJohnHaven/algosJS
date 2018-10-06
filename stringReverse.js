// How would you reverse a string in JavaScript?

function reverse1(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
      rtnStr +=str[i];
    }
    return rtnStr;
  }
  
var str = "you are a nice lady";
console.log('reverse1: ', reverse1(str))

// ('you are a nice lady');
//     = "ydal ecin a era uoy"
          
// You know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there any different way, you can reverse a string?

function reverse2(str){
    var rtnStr = [];
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    for(var i = str.length-1; i>=0;i--){
      rtnStr.push(str[i]);
    }
    return rtnStr.join('');
  }

console.log('reverse2: ', reverse2(str));