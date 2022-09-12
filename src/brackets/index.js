/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
/* My thought process:
- create an array and store in an arr variable
- loop through the str
- create a char variable and store the length of the arr in reversed order
- create a conditional statement, checking if the str is equal to the oppen brackets individually
- then push into the the ampty arr
- else, check if the char is equal to each open brackets individually and at the same time, if the str is equal to each close brackets 
- if it is, pop out of the arr, otherwise return invalid
- now, check if the arr is all matched, if it is equal to 0, then it is matched and return valid
- otherwise, return invalid
*/
function isValid(str) {
    let arr = [];
    
    for(let i = 0; i < str.length; i++) {
        let char = arr[arr.length - 1];

        if(str[i] == "(" || str[i] == "[" || str[i] == "{") {
            arr.push(str[i]);
         
        } 
        else if((char == "(" && str[i]== ")") || (char == "[" && str[i] == "]") || (char == "{" && str[i] == "}")) {
            arr.pop();
        }else {
            return "invalid"
        }
    }
    if(arr.length == 0) {
        return "valid";
    } else {
        return "invalid";
    }
};
module.exports = isValid;
