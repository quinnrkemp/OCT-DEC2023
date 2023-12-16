 // CHALLENGE NAME-  Find variable which breaks strict comparison! #2

    // DESCRIPTION:

    // In JavaScript, there is a special case where strict comparison 
    // of the same variable returns false! Try to find out what must 
    // be done to get such result!

    // var x = something;
    // x === x // returns false!
    // Write a function which will return value for which strict 
    // comparison will give false!

    // // ***STARTER CODE***

    // function findStrangeValue() {
    //     // your code!
    //   }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Test Case", function(){
    //     it ("Comparison: === should return false for the same value!", function() {
    //         var x = findStrangeValue();
    //         var testPassed;
    //         if ( !(x === x) ) {
    //           testPassed = true;        
    //         } else {
    //           testPassed = false;
    //         }
        
    //         Test.expect(testPassed, true)
    //     });
    // });

    // ******MY ANSWER********

    function findStrangeValue() {
        return NaN;
      }