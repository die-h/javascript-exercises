const repeatString = function(chain, cant) {
    
    let afterloop = "";
    
    if (cant < 0) {
        return "ERROR";
    }
    else {
        for (i = 0; i < cant; i++) {
            afterloop = afterloop + chain; 
        }
    }
    return afterloop;
};

// Do not edit below this line
module.exports = repeatString;
