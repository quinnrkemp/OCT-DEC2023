    // CHALLENGE NAME-  Are arrow functions odd?

    // DESCRIPTION:

    // Time to test your basic knowledge in functions! Return the 
    // odds from a list:

    // [1, 2, 3, 4, 5]  -->  [1, 3, 5]
    // [2, 4, 6]        -->  []

    // // ***STARTER CODE***

    // function odds(values){
    //     // arrow it
    //     return values.filter( => );
    //   } 

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertSimilar(odds([]), [], "Should handle empty array");
    //   Test.assertSimilar(odds([2, 4, 6]), [], "Should handle array with even numbers only");
    //   Test.assertSimilar(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only");
    //   Test.assertSimilar(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array");
    //     });
    //   });
      
    // ******MY ANSWER********

    function odds(values){
        // arrow it
        return values.filter( value => value%2 );
      }