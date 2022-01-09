//First checks if the array includes the argument, if true proceeds to remove it.

const removeFromArray = function(arr, ...args) {

    for (i = 0; i < args.length; i++){

        if(arr.includes(args[i])){
            arr.splice(arr.indexOf(args[i]), 1);
        }
    }

    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
