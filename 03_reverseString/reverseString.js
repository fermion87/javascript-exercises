const reverseString = function(string) {
    let reversedString = "";
    for (let i = 0; i < string.length+1; i++) {
        reversedString += string.charAt(string.length-i);
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
