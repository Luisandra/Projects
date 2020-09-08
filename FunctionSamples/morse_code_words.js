/**
 * @param {string[]} words
 * @return {number}
 */

let test = ["gin", "zen", "gig", "msg"]
var uniqueMorseRepresentations = function(words) {
    let morseKey = {"a": ".-", "b" : "-...", "c" : "-.-.", "d" : "-..", "e" : ".", "f" : "..-.", "g" : "--.", "h" : "....", "i" : "..", "j" : ".---", "k" : "-.-", "l" : ".-..", "m" : "--", "n" : "-.", "o" : "---", "p" : ".--.", "q" : "--.-", "r" : ".-.", "s" : "...", "t" : "-", "u" : "..-", "v" : "...-", "w" : ".--", "x" : "-..-", "y" : "-.--", "z" : "--.."} 
 
    //loop through array
    for(let i=0; i<words.length; i++){
        //create variable for converted words Inside loop to reset value
        let converted = "" 
        //loop through letters
        for(ltr of words[i]) {
            //concat morse code into var
            converted += morseKey[ltr]
        }
        //outside of second loop replace word w/ morse code
        words[i] = converted
    }
        // use Set to create a new set object. Each value must be unique, thus removing duplicates, then you determine the size to count
        return new Set(words).size
   
};
uniqueMorseRepresentations(test)