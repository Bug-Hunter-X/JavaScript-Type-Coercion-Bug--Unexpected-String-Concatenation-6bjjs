function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return Number(a) + Number(b); //Convert to numbers for addition
  }
}

console.log(foo(2, "2")); // Output: 4
console.log(foo(2, 2)); // Output: 4