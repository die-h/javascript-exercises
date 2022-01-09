const sumAll = function(num1, num2) {

    let counter = 0;
    let sum = 0;
    let max = 0;

    //Checks which argument is lower to set min and max

    if (num1 < num2) {
        counter = num1;
        sum = num1;
        max = num2;
    }
    else {
        counter = num2;
        sum = num2;
        max = num1;
    }
    
    //Checks that starting point is higher than 0 and type of both values are numbers
    
    if (sum >= 0 && typeof sum === "number" && typeof max === "number") {
        while (counter < max) {
            sum = sum + (counter + 1);
            counter++;
        }
    }
    else {
        return "ERROR"
    }
    

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
