// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    // This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    // this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
    driver[key] = value;
    return driver;
};

function deleteFromDriverByKey(driver, key){
    // It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
    // Might be hard to write non-destructively- use Object.assign()
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;

};

function destructivelyDeleteFromDriverByKey(driver, key) {
    // his function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. 
    // Be sure to consider whether and how using dot notation vs. bracket notation might affect your solution.
    delete driver[key];
    return driver;
};
