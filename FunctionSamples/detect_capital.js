/**
 * @param {string} word
 * @return {boolean}
 */
//test
let test = "USA", test2 = "FlaG", test3 = "g";

var detectCapitalUse = function(word) {
    let result; 
//convert to all possible variations of use of capital
    //convert var to uppercase
    let allCaps = word.toUpperCase()    
    //convert to all lowercase
    let lowerCs =  word.toLowerCase()
    //convert first letter
    let firstStr = word.charAt(0).toUpperCase()
    let rest = word.slice(1).toLowerCase()
    firstStr = firstStr + rest

    //compare input to converted var
    word === allCaps || word === lowerCs || word ===firstStr  ?
        result = true : 
        result = false

    return result
};
//test
// detectCapitalUse (test3);