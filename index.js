
'use strict';

var async = require('async');

function waterfall(listOfFunction, callback) {
    var decoratedFunctions = decoratorFunction(listOfFunction)
    async.waterfall(decoratedFunctions, callback);
}

function decoratorFunction(listOfFunctions) {
    var newFuncList = [];

    for (var index = 0; index < listOfFunctions.length; index++) {
        let aFunctionInWaterfall = listOfFunctions[index];

        var printer = function() {
            console.log("\n*** Function " + aFunctionInWaterfall.name + " is executing ***\n ");


            var callbackParameter = arguments.length - 1;
            var listOFCallbacks = arguments[callbackParameter];


            var callbackPrinter = function() {
                console.log("\t---> Callback for " + aFunctionInWaterfall.name + " is called <---\n");
                listOFCallbacks.apply(this, arguments);
            }
            arguments[callbackParameter] = callbackPrinter;
            aFunctionInWaterfall.apply(this, arguments);
        };
        newFuncList.push(printer);


    }
    return newFuncList;
}

module.exports = {
    waterfall: waterfall
};