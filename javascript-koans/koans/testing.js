// function makeMysteryFunction(makerValue) {
//     var newFunction = function doMysteriousThing(param) {
//         return makerValue + param;
//     };
//     return newFunction;
// }

// var mysteryFunction3 = makeMysteryFunction(3);
// var mysteryFunction5 = makeMysteryFunction(5);

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

console.log(typeof returnAllArgs("first", "second", "third"))
