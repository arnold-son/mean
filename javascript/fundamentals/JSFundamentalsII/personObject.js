//Create a JavaScript object called person with the following properties/methods
//
function person(){
//Properties:
//
//1) name - set this as your own name
    this.name = "Arnold";
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
var arnold = new person();
arnold.say_name().say_something("hello world!").walk().run().crawl();
