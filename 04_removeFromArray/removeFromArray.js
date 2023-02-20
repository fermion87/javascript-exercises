const removeFromArray = function(array, ...theArgs) {
    //for each argument to be checked, iterate through the array
    for (const arg of theArgs) {
        for(let i = 0; i < array.length; i++) {    
            //if the array element is equal to (and the same type), remove element from array    
            if(array[i] === arg){
                    array.splice(i,1);
                }
        }   
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
