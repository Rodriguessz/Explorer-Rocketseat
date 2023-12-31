 # JavaScript Constructors

## Introduction
In JavaScript, a constructor is a function that creates and initializes an object. It is used to create new instances of a class or object type. Constructors are typically named with the same name as the class they are creating, and they are invoked using the `new` keyword.

## Creating a Custom Constructor
To create a custom constructor, you can use the `function` keyword followed by the name of the constructor and the parameters it takes. Inside the constructor, you can use the `this` keyword to refer to the object being created and assign values to its properties.

For example, the following code defines a `Pessoa` constructor that creates objects representing people:

```javascript
function Pessoa(first, lastName, job, age, hobbie) {
  this.name = first;
  this.lastName = lastName;
  this.job = job;
  this.age = age;
  this.hobbie = hobbie;
}
```

To create a new instance of the `Pessoa` class, you can use the `new` keyword followed by the constructor name and the arguments you want to pass to the constructor. For example, the following code creates a new `Pessoa` object representing a person named "Enzo Rodrigues" who is 20 years old, works as an IT Intern, and enjoys playing video games:

```javascript
const person1 = new Pessoa("Enzo", "Rodrigues", "IT Intern", 20, "Play video Games");
console.log(person1);
```

## Using Native Constructors
JavaScript also provides a number of built-in constructors that can be used to create objects of different types. For example, the `Date` constructor can be used to create `Date` objects, and the `String` constructor can be used to create `String` objects.

To use a native constructor, you can simply use the `new` keyword followed by the constructor name and the arguments you want to pass to the constructor. For example, the following code creates a new `Date` object representing the date December 20, 2023:

```javascript
let date = new Date("2023-12-20");
console.log(date);
```

The following code creates a new `String` object representing the string "Say hello to my new string!":

```javascript
let myString = new String("Say hello to my

Generated by [BlackboxAI](https://www.blackbox.ai)