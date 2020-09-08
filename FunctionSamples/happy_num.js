/**
 * @param {number} n
 * @return {boolean}
 */
let test = 19
var isHappy = function(n) {
    //create var to hold T/F
    let result = false
    //create counter to stop infinite loop
    let count = 25;
    //create function to perform math
    let formula = function (num) {
        //split //square
        let split = num.toString().split('').map(num=>(num*num))
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        //sum
        let sum = split.reduce(reducer) 
        //return the sum
        return sum    
    }
    //call function once to create total
    let total = formula(n)
    //use while loop accounting for number of iterations 
    while(count >=0 && result === false) {
        if(total !==1){
            //if total != 1 then run function and reduce counter
            total=formula(total)
            count--
        } else {
            //if total === 1 change var to true
            result = true
        }
    }
    //either all iterations of loop will be completed and leaving result as true or loop stops and result is false. Return boolean
    return result    
};
isHappy(test)