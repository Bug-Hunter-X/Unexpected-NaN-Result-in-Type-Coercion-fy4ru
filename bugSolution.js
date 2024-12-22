function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    return 1;
  } else if (isNaN(x)) {
    return 2;
  } else if (typeof x === 'string' && isNaN(Number(x))){
    return 3; // Handle non-numeric strings
  } else {
    return x + 1; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(NaN)); // Output: 2
console.log(foo(5)); // Output: 6
console.log(foo('abc')); // Output: 3
console.log(foo('123')); //Output: 124