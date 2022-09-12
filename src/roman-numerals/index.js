/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
/*My thought process:
- Initialize sum to zero
- loop through using the for loop method
- create a currentVal variable to store the roman parameter at each index (i)
- create a nextVal variable to store roman parameter at each index(i) adding one to it
- check for the conditional, if the cuurentVal is less than the nextVal, 
- minus the nextVal from the currentVal, then move to the next roman letter
- otherwise add the cuurentVal to the sum variable
- then return sum.
*/

function romanToDecimal(roman) {
    let sum = 0;

    const romanNumerals = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
       }
    for(let i = 0; i < roman.length; i++) {
        let currentVal= roman[i];
        let nextVal = roman[i + 1];
        if(romanNumerals[currentVal] < romanNumerals[nextVal]) {
            sum += romanNumerals[nextVal] - romanNumerals[currentVal]
            i++;
        } else {
            sum += romanNumerals[currentVal];
        }
    }
    return sum;
};
module.exports = romanToDecimal;