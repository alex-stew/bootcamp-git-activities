const Algo = require("../algo");

describe("Algo", () => {
    describe("reverse", () => {
        // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
        it("should reverse the inputted string 'Hello World!", () => {
            const obj = new Algo().reverse("Hello World!");

            expect("!dlroW olleH").toEqual(obj);
        })
    });

    describe("isPalindrome", () => {
        // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
        it("will confirm inputted string 'racecar' to be true", () => {
            const str = "racecar";
            const result = new Algo().isPalindrome(str);
            expect(result).toEqual(true)
        })

        it("will confirm inputted string 'neon' to be false", () => {
            const str = "neon";
            const result = new Algo().isPalindrome(str);
            expect(result).toEqual(false)
        })
    });

    describe("capitalize", () => {
        // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    });
});