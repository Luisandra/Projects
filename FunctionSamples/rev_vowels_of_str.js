/**
 * @param {string} s
 * @return {string}
 */
//test var
// let test = "holle", test2 = "leotcede";
var reverseVowels = function(s) {
    //convert to arr
    s = s.split("")
    //to hold vowels
    let vowels = []   
    //loop through arr
    for(let i=0; i<s.length; i++){

        //check for vowel
        if(s[i]==="A" || s[i]==="a" || s[i]==="E" || s[i]==="e" || s[i]==="I" || s[i]==="i" || s[i]==="O" || s[i]==="o" || s[i]==="U" || s[i]==="u") {
            //if vowel add to front of new arr(to reverse) and replace in original arr
            vowels.unshift(s[i])
            s[i] = "vowel"           
        }

    }

    //loop through and replace var w/ reversed vowels
    for (let j=0; j<s.length; j++){              
        if(s[j]==="vowel") {                                  
            s[j] = vowels[0]
            vowels.shift()
        }
    }
    //join arr to string
    return s.join("")
};
// reverseVowels(test);
// reverseVowels(test2);