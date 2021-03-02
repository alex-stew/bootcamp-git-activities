// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
    };
};

// TODO: Create a new object using the 'Developer' constructor
const dev1 = new Developer("Jeff", "HTML5");
// TODO: Call the 'introduction()' method on the new object
dev1.introduction();