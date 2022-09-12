/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
/* My thought process:
- create an empty array and store it in a result variable
- loop through the column array using the for-loop method
- create another emtpy array and store it in a newArr variable
- then loop through the row array using the for-loop method
- push the array at index of row and col into the newArr variable
- push the newArr into the result variable
- then return result
*/
function transpose(array) {
    let result = [];
    
    for(let col = 0; col < array[0].length; col++) {
        let newArr = [];
        for(let row = 0; row < array.length; row++) {
            newArr.push(array[row][col]);
        }
        result.push(newArr);
    }
        return result;
};


module.exports = transpose;
