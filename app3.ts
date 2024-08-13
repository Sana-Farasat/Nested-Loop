/*-----------------------------Factorial--------------------------------*/

function factorial(n) {
        // Check for edge case where n is 0 or 1
        if (n === 0 || n === 1) {
            return 1;
        }
    
        // Initialize result to 1
        let result = 1;
    
        // Loop through to calculate factorial
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
    
        return result;
    }
    
    /*------------------------- Example usage-----------------------------*/

    console.log(factorial(5)); // Output: 120 (which is 5!)

    console.log(factorial(0)); // Output: 1 (0! is defined as 1)

    console.log(factorial(1)); // Output: 1 (1! is defined as 1)

    console.log(factorial(6)); // Output: 720 (which is 6!)

    console.log(factorial(12));// Output: 479001600 (which is 12!)

    console.log(factorial(8));// Output: 40320 (which is 8!)
    
    
    