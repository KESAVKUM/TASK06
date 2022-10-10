1.//Write a “person” class to hold all the details.


function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";

console.log(person1.getFullName());

var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";

console.log(person1.getFullName());

//2.write a class to calculate the uber price.

let baseFee = .44;
let cities = ["Providence", "Boston", "New York", ];
let uberRates = [5, 10, 15];

let customerName = "Wendy" ;
let customerCity = "Providence" ;

console.log("Hello", customerName+ ", welcome to the Uber Rate Program");

function getRate(customerCity) {
  
  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * baseFee;
    return finalRate;
  }
  
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)));
}

getRate(customerCity)



