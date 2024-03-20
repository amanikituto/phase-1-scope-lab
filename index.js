// Declare customerName to be bob in global scope
var customerName = 'bob';

// Write a function that accesses the global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    // Declaring a variable in global scope without the 'var', 'let', or 'const' keyword will make it global.
    bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope, by writing a new function that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Now declare a constant in global scope called leastFavoriteCustomer; be sure to assign it some initial value.
const leastFavoriteCustomer = 'John';

// Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
function changeLeastFavoriteCustomer() {
    // Attempting to change a constant will result in an error in JavaScript.
    // Here, we're trying to reassign the constant, which should fail.
    leastFavoriteCustomer = 'Jane';
}

// Exporting functions for testing
module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer
};
