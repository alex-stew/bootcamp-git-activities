// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    // Method that will simulate method overloading in JavaScript
    this.displayGrade = function(grade) {
        const input = grade;
        if (!input) {
            throw new Error('no grade provided');
        }
        let response;
        // Return a letter grade if a number grade was passed
        // Ex. 95 => 'A'
        if (typeof input === 'number') {
            if (inRange(grade, 70, 84) == true) {
                response = "you recieved a B!";
            } else if (inRange(grade, 85, 100) == true) {
                response = "you recieved an A!";
            } else if (inRange(grade, 55, 69) == true) {
                response = "you recieved a C!";
            }
            return response;
        }
        // Return a range if a letter grade was passed
        // Ex. 'A' => '90 - 100'
        if (typeof input === 'string') {
            // TODO: Add logic here to return range as a string
            switch (grade) {
                case 0:

            }
            return response;
        }
    };


    const John = new Student('John', 'Appleseed', '30');
    console.log('John.displayGrade():', John.displayGrade(95));
    console.log('John.displayGrade():', John.displayGrade('B'));