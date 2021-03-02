// TODO: Add a comment describing what kind of function this is
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}
// this function is a constructor function which outlines the template for new objects related to Character

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};
// allows you to alter function within existing object

// TODO: Add a comment describing the functionality of this method
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};
// this function is using an if statement to check against the value asigned to the object


// TODO: Add a comment describing the functionality of this method
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};
//runs the attack function of one characters strength being minused by the strength of char1 

// TODO: Add a comment describing the functionality of this method
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
rogue.printStats();
