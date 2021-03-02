function Algo() {}

Algo.prototype.reverse = function(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

Algo.prototype.isPalindrome = function(str) {
    const alphanumericOnly = str
        // 1) Lowercase the input
        .toLowerCase()
        // 2) Strip out non-alphanumeric characters
        .match(/[a-z0-9]/g);

    // 3) return string === reversedString
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}

Algo.prototype.capitalize = function(str) {
    const str = "freeCodeCamp is an awesome resource";
    const words = str.split(" ");

    words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
};

module.exports = Algo;