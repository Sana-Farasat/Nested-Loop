/*----------------------------Exponent-----------------------------------*/

function exponent(base, power) {
    // Check for edge case where exponent is 0
    if (power === 0) {
        return 1;
    }

    // Initialize result to base
    let result = base;

    // Loop through to calculate exponentiation
    for (let i = 1; i < power; i++) {
        result *= base;
    }

    return result;
}

/*--------------------------- Example usage------------------------------*/

console.log(exponent(2, 3)); // Output: 8 (which is 2^3)

console.log(exponent(5, 4)); // Output: 625 (which is 5^4)

console.log(exponent(3, 0)); // Output: 1 (anything to the power of 0 is 1)
