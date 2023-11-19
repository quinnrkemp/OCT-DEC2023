    // CHALLENGE NAME-  Is integer safe to use?

    // DESCRIPTION:

    // Not all integers can be represented by JavaScript/TypeScript. 
    // It has space to to represent 53bit signed integers. In this Kata, 
    // we've to determine if it is safe to use the integer or not. Make 
    // use of the latest ES6 features to find this.

    // SafeInteger(9007199254740990) //true
    // SafeInteger(-90) //true
    // SafeInteger(9007199254740992) //false

    // // ***STARTER CODE***

    // function SafeInteger(n) {

    // }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(SafeInteger(9007199254740992), false, 'Value returned should be false');
    // Test.assertEquals(SafeInteger(9007199254740990), true, 'Value returned should be true');
    
    //   });
    // });
    
    // ******MY ANSWER********

    function SafeInteger(n) {
        return Number.isSafeInteger(n);
      }