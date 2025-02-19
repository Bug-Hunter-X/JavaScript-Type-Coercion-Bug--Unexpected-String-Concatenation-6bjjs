# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion.  When performing operations involving numbers and strings, JavaScript's loose typing can lead to unexpected results due to automatic type conversion.

The `bug.js` file contains the buggy code, showing how adding a number and a string results in string concatenation instead of numerical addition. The `bugSolution.js` file provides a corrected version using explicit type checking or conversion to ensure the desired numerical behavior.