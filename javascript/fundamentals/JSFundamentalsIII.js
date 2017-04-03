// Create a function that takes in one parameter called “name” and returns an
// object that looks similar to the person object from JS Fundamentals Part II.
//
function personConstructor(name){
    this.name = name;
//2) distance_traveled - set this initially as zero
    this.distance_traveled = 0;
//
//Methods:
//
//1) say_name - should alert the object’s name property
    this.say_name = function(){
        alert(this.name);
        return this;
    }
//2) say_something - have it accept a parameter. This function should then say
//   for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an
//   argument to this method.
    this.say_something = function(str){
        console.log(this.name + " says " + str);
        return this;
    }
//3) walk - have it alert for example “{{your name}} is walking” and increase
//   distance_traveled by 3
    this.walk = function(){
        alert(this.name + " is walking");
        this.distance_traveled+=3;
        return this;
    }
//4) run - have it alert for example “{{your name}} is running” and increase
//   distance_traveled by 10
    this.run = function(){
        alert(this.name + " is running");
        this.distance_traveled+=10;
        return this;
    }
//5) crawl - have it alert for example “{{your name}} is crawling” and increase
//   distance_traveled by 1
    this.crawl = function(){
        alert(this.name + " is crawling");
        this.distance_traveled+=1;
        return this;
    }
}
var arnold = new personConstructor("Arnold");

// Change the function name to “personConstructor”
// We just created a blueprint for creating person objects!
//
// If you have prior exposure to OOP, think about how this “constructor”
// function is similar to “classes”.
//
// Now create a ninjaConstructor that can be used to create Ninjas that each has
// a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method
// that increases their belt-level (Have all ninjas start at a yellow-belt).

function ninjaConstructor(name,cohort){
    var ninja = {};
    var belts = ["yellow","red","black"];
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltLevel = 0;
    ninja.levelUp = function(){
        if(ninja.beltLevel < 2){
            ninja.beltLevel++;
            ninja.belt = belts[ninja.beltLevel];
        }
        return ninja;
    }
    ninja.belt = belts[ninja.beltLevel];
    return ninja;
}

ninjaConstructor("Arnold","Jan 23");

// If you're already familiar with JavaScript, you may know that most developers
// use a combination of the "this" and "new" keywords to create objects. Avoid
// those for this assignment -- we'll dig into them soon enough.
