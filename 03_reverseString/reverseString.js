const reverseString = function(str) {
    
    // let str1 = str.toString();
    let auxiliar = [];
    let reversedstr = [];

    for(let i = 0; i < str.length; i++) {
        auxiliar[i] = str.slice(i, i + 1);
    }

    for(let i = 0; i < auxiliar.length; i++){
        reversedstr[i] = auxiliar[auxiliar.length - 1 - i];
    }

    return reversedstr.join("");
};

// Do not edit below this line
module.exports = reverseString;
