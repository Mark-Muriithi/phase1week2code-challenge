function acceptor(arr) {
    // W    ithin this function we have another function whose sole purpose is to check whether the numbers in the array meet a certain requirement
    function isNum(num) {
        // the first requirement is to check whether the number is less than 2 because prime numbers are supposed to be 2 and above any 
        // number below 2 is not considered to be a primenumber.If number is greater than or equal to 2 then boolean returns a true which enables the other 
        // things to take place  
        if (num < 2) {
            return false;
        }
        // here we are checking whether the numbers are prime numbers by looping it through a series of commands 
        // the command is to check whether the number is divisible by 2 or a number between 2 and its squareroot 
        // If it is the boolean statement returns a false it means  that that number is not a primenumber 
        // The opposite is also true ,if the boolean statement returns True then the number is a pprimenumber hence those numbers or number then proceed to the filtering process

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    // here we have the filtering process .What happens is that the array method of filtering takes up the array then creates a copy of the original then applies 
    // the edits that you've enacted .In this situation it will create a new array containing only the filtered primenumbers 
    return arr.filter(isNum) ;
}


const austin = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(acceptor(austin));