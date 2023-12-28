    // CHALLENGE NAME-  Wilson Primes

    // DESCRIPTION:

    // Wilson primes satisfy the following condition. Let P represent a 
    // prime number.

    // Then,
    
    // ((P-1)! + 1) / (P * P)
    // should give a whole number.
    
    // Your task is to create a function that returns true if the given 
    // number is a Wilson prime.

    // // ***STARTER CODE***

    // function amIWilson(p) {
    //     // check if prime is Wilson
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    
    // describe("Tests", function() {
    //   it("Fixed tests", function() {
    //      assert.strictEqual(amIWilson(5), true)
    //      assert.strictEqual(amIWilson(9), false)
    //      assert.strictEqual(amIWilson(6), false)
    //   });
    // });
    
    // ******MY ANSWER********

    function amIWilson(p) {
        if (p===5 || p===13 || p===563) {
          return true
        }
          else { 
            return false
               }
          // check if prime is Wilson
        }