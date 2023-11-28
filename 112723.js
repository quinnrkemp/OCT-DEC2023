    // CHALLENGE NAME-  Enumerable Magic #25 - Take the First N Elements

    // DESCRIPTION:

    // Create a function that accepts a list/array and a number n, and returns a 
    // list/array of the first n elements from the list/array.

    // If you need help, here's a reference:
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

    // // ***STARTER CODE***

    // function take(arr, n) {
    //     // Your code here
    //   }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Sample Tests", function(){
    //   it("should work for sample tests", function(){
    //     Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
    //   });
    // });

    // ******MY ANSWER********

    function take(arr, n) {
        return arr.slice(0, n);
      }