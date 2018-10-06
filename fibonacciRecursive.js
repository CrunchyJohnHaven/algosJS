// Question: Return the nth number in the fibonnaci sequence
//  1,1,2,3,4,8,13,21,34,55,89

function fib(n) {
    console.log('N is: ', n);
    if(n < 2) {
        // n is less than 2
        console.log('n is less than 2, n is: ', n);
        return n;
    }
    console.log('n is not less than 2, return fib(', n-1, ') and fib(', n-2, ')');
    return fib(n-1) + fib(n-2);
}
console.log(fib(1000));


fib(7) = fib(6) + fib(5)

fib(7) = fib(5) + fib(4) + fib(4) + fib(3)

fib(7) = fib(4) + fib(3) + fib(3) + fib(2) + fib(3) + fib(2) + fib(2) + fib(1)

fib(7) = fib(3) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + fib(1) + fib(0) + fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + fib(1)

fib(7) = fib(2) + fib(1) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + fib(1) + fib(0) + fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + fib(1)