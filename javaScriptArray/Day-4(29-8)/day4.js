/*Day 4*/
//  ES5
function Human(name,age){//age=32
   this.name = name;
   this.age = age;//age || 32
   console.log("Object created..");
   this.getName = function(){
       return this.name;
   }
}
//Array.prototype.push=function(){alert("push")};//check out
Human.prototype.getAge = function(age){///here we given a new functionality(getAge) to human which returns age
    //age=(typeof age==='undefined')?32:age;
    //return age;
   //return "32";
}
//Human.prototype.color="Brown";//
//Human.prototype.findings=['Conputer','Calculator','Candy'];

//const turing=new Human("Turing",30);
//const arun=new Human("Arun");

//turing.color="red";

//console.log(turing.color);
//console.log(arun);


/*function SuperHuman(name,age,power)
{
  Human.call(this.name,this.age);
  this.power=power;
}*/


SuperHuman.prototype=Object.created(Human.prototype);
const ironman=new SuperHuman("IronMan",100,"Fly");
console.log(ironman);
console.log(ironman.getAge());




//ES6---sir
class Human{
   constructor(name,age){
       this.name = name;
       this.age = age;
   }
   getName(){
       return this.name;
   }
}
const turing = new Human("Turing",32);
console.log(turing);
class SuperHuman extends Human{
   constructor(name,age,power){
       super(name,age);
       this.power = power;
   }
}
