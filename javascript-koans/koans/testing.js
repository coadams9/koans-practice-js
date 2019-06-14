// Going through these functions I stopped along the way and entered them into a debugger to get a better idea of the ones that required it for me! This is where i setup and ran my tests
// Each new section and or problem is seperated by '-------------------'

function makeMysteryFunction(makerValue) {
    var newFunction = function doMysteriousThing(param) {
        return makerValue + param;
    };
    return newFunction;
}

var mysteryFunction3 = makeMysteryFunction(3);
var mysteryFunction5 = makeMysteryFunction(5);

// console.log(mysteryFunction3(10) + mysteryFunction5(5))

// console.log(makeMysteryFunction(10))

// ----------------------------------------------------------

function returnAllArgs() {
    var argsArray = [];
    for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
    }
    return argsArray.join(', ');
}

// console.log(typeof returnAllArgs("first", "second", "third"))

// ----------------------------------------------------------

var megalomaniac = {
    mastermind: "Brain",
    henchman: "Pinky",
    battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
            Array(noOfBrains + 1).join(" " + this.mastermind);
    }
};

var battleCry = megalomaniac.battleCry(4);
// console.log(battleCry)
// let x = Array(4 + 1)
// console.log(x)

let test = Array(4).fill('x')
let x = test.join(' ' + 'blah')
// console.log(x)

// ----------------------------------------------------------

var currentDate = new Date();
var currentYear = (currentDate.getFullYear());
// console.log(currentYear)
// console.log(currentDate)
// console.log(2019 - 1970)

// ----------------------------------------------------------

function Circle(radius) {
    this.radius = radius;
    // console.log(this)
}

Circle(10)
// console.log(radius)
// console.log(Circle.radius)

// ----------------------------------------------------------

function Person(firstname, lastname) {
    var fullName = firstname + " " + lastname;

    this.getFirstName = function () { return firstname; };
    this.getLastName = function () { return lastname; };
    this.getFullName = function () { return fullName; };
}
var aPerson = new Person("John", "Smith");

aPerson.firstname = "Penny";
aPerson.lastname = "Andrews";
aPerson.fullName = "Penny Andrews";

// expect(aPerson.getFirstName()).toBe('John');
// expect(aPerson.getLastName()).toBe('Smith');
// expect(aPerson.getFullName()).toBe('John Smith');

aPerson.getFullName = function () {
    return aPerson.lastname + ", " + aPerson.firstname;
};

// console.log(aPerson.firstname)

// ----------------------------------------------------------

var onlyEven = [2, 4, 6];
var mixedBag = [2, 4, 5, 6];

var isEven = function (x) { return x % 2 === 0 };

// console.log(onlyEven.every(isEven))
// console.log(mixedBag.every(isEven))

// ----------------------------------------------------------

