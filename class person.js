class Person {
    constructor(firstName, lastName, age, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.occupation = occupation;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getOccupation() {
      return this.occupation;
    }
  
    introduceSelf() {
      console.log(`Hi! My name is ${this.getFullName()}, I am ${this.age} years old, and I work as a ${this.occupation}.`);
    }
  }

  const person = new Person("karthikeyan", "Govindaraj", 25, "Software Engineer");
person.introduceSelf(); 
console.log(person.getFullName()); 
console.log(person.getAge()); 
console.log(person.getOccupation());