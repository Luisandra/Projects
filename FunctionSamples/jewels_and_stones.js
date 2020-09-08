/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//test variables
let J = "aA", S = "aAAbbbb"; //output 3
let J2 = "z", S2 = "ZZ" //output 0

var numJewelsInStones = function(J, S) {
    //create var to count matches
    let count = 0
    //loop through jewels
    for (ltrJ of J){
        //loop through stones
        for (ltrS of S){
            if (ltrJ === ltrS){
                count++
            }
        }
    }
    console.log(count)
    return count;
};
numJewelsInStones(J, S)
























/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//test variables
let J = "aA", S = "aAAbbbb"; //output 3 - a and A are jewels, you have 3 total
let J2 = "z", S2 = "ZZ" //output 0

var numJewelsInStones = function(J, S) {
    //create Match variable to catch match of j and s
    let match=[]
    //create variable to hold distinct values of s
    let distinct = ""
    for (let i =0; i< S.length; i++){
        if(distinct.indexOf(S.charAt(i))===-1){
            distinct+=S[i]
        }
    }
    //create count var and initialize to 0
    let count =0
    //loop through J
    for(ltrJ of J){
        //compare J to distinct var, if match, push into array

        for(ltrDist of distinct){

            if(ltrDist === ltrJ){
                match.push(ltrDist)                
            } 
        }
    }
    //loop through S
    for(ltrS of S){
            //loop through match
        //if match === S, count++
        for(ltrMatch of match){
            if(ltrS===ltrMatch){
                count++
            }
        }
    }
    return count
    //return count
};

// numJewelsInStones(J, S)

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//test variables
let J = "aA", S = "aAAbbbb"; //output 3
let J2 = "z", S2 = "ZZ" //output 0

var numJewelsInStones = function(J, S) {
    //create var to count matches
    let count = 0
    //loop through jewels
    for (ltrJ of J){
        //loop through stones
        for (ltrS of S){
            if (ltrJ === ltrS){
                count++
            }
        }
    }
    console.log(count)
    return count;
};
numJewelsInStones(J, S)