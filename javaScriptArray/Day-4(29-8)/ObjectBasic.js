
const person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');//this will return current object
  }
}
//console.log(person1.greeting);
//person1.greeting();

//1)without this keyword
function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    //console.log(`Hi! I am ${obj.name}`);
    //alert('Hi! I\'m ' + obj.name + '.');
    return (`Hi! I am ${obj.name}`);
  };
  return obj;
}


//2)with this keyword
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

//const arun=new Person("Arun");
//console.log(arun);//check console

//3)Object of constructor
const person3 = new Object();
person3.name='Chris';
person3['age']=38;
person3.greeting=function(){
  return ('Hi! I\'m ' + this.name + '.');
};

//console.log(person3);
//console.log(person3.greeting());

//3)Using the create() method



//4)Understanding prototype objects
function Person(first, last, age, gender, interests) {

  // property and method definitions
  this.first = first;
  this.last = last;
//...
}
Person.prototype.color="black";
//const person4 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
//console.log(person4.valueOf());

class Human{
   constructor(name,age){
       this.name = name;
       this.age = age;
   }
   getName(){
       return this.name;
   }
}
class Alien extends Human
{
    constructor(name,age,power){
       super(name,age);
       this.power = power;
  }
}

//const obj1=new Alien("alpha",1000,"fly");
//console.log(obj1);
const obj2=new Human("beta",1000,"think");
console.log(obj2);
