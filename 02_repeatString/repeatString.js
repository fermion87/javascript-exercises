const repeatString = function(string, num) {
    //start with empty string
    let result = "";

    //check for negative number of words
    if(num<0){
        result = "ERROR";
        return result;

    //concatenate string num times   
    } else {
        for (let i = 0; i < num; i++) {
            result = result+string
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
