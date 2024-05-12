1. //class-Movie

class Movie {

  constructor(title, studio, rating = "PG") {
  
  this.title = title;
  
  this.studio = studio;
  
  this.rating = rating;
  
  }
  
  static getPG(movies) {
  
  return movies.filter(movie => movie.rating === "PG");
  
  }
  
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  console.log("Title:", casinoRoyale.title);
  
  console.log("Studio:", casinoRoyale.studio);
  
  console.log("Rating:", casinoRoyale.rating);
  
  const moviesArray = [
  
  new Movie("Movie1", "Studio1", "PG"),
  
  new Movie("Movie2", "Studio2", "PG-13"),
  
  new Movie("Movie3", "Studio3", "R"),
  
  ];
  
  const pgMovies = Movie.getPG(moviesArray);
  
  console.log("PG Rated Movies:");
  
  pgMovies.forEach(movie => {
  
  console.log("Title:", movie.title, "| Studio:", movie.studio, "| Rating:", movie.rating);
  
  });
  
  class Person {
  
  constructor(name, age, occupation) {
  
  this.name = name;
  
  this.age = age;
  
  this.occupation = occupation;
  
  }
  
  }
  
  const person = new Person("John", 20, "Engineer");
  
  console.log("Name:", person.name);
  
  console.log("Age:", person.age);
  
  console.log("Occupation:", person.occupation);
  
  // 2.Circle-Class

  class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(userInput){
        this.radius = userInput
    }

    getColor(){
        return this.color;
    }

    setColor(userInput){
        this.color = userInput;
    }

    getArea(){
        return (3.14 * this.radius * this.radius);
    }

    getCircumference(){
        return (3.14 * 2 * this.radius);
    }
}


const blueCircle = Circle(4, "blue");
console.log(blueCircle);

//3.Person class to hold details

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}
const person1 = new Person('Francisca Rohan', 25, 'USA');
const person2 = new Person('Raimond Aruna', 30, 'India');
console.log('Person-1 Details:');
person1.displayDetails();
console.log('\nPerson-2 Details:');
person2.displayDetails();

//4. calculate uber price
const uber = {
  set kiloMeter(km){    
     this.price = `${km} km = Rs.${km * 50}` ;
  },
  get kiloMeter(){
     return this.price;
  }
}

uber.kiloMeter = 2;

console.log(uber.kiloMeter)

