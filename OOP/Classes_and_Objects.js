// a js object is an entity having state and behavior (propertise and method)
// js objects have a special property called prototype
// __proto__

// class is a program code template for creating obj
// those obj will have some state var and some behav fun inside it

// class Myclass{
//     cons(){}
//     myMethod(){}
// }

// let myObj = new Myclass();

// construtor
// class ToyotaCar {
//   constructor(brand, milage) {
//     console.log("hello world this is toyota");
//     this.brand = brand;
//     this.milage = milage;
//   }

//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// let lexus = new ToyotaCar("lexus", 12);

// inheritance in js
// is passing down proporties and methods from parent class to child class
// class Parent{

// }
// class Child extends Parent{

// }
let data = "secret";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(data);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name.email);
  }
  editData() {
    data = "some new bal";
  }
}

let std1 = new User("mayaz", "abrarmayaz758@12");
let std2 = new User("mahdia", "ahfldefjhal@ahfa");

let admin = new Admin("ammu", "ammugamil");
