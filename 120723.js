    // CHALLENGE NAME-  Are there any arrows left?

    // DESCRIPTION:

    // You have a quiver of arrows, but some have been damaged. The quiver 
    // contains arrows with an optional range information (different types 
    //     of targets are positioned at different ranges), so each item is 
    //     an arrow.
    // You need to verify that you have some good ones left, in order to 
    // prepare for battle:
    
    // anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
    // If an arrow in the quiver does not have a damaged status, it means it's 
    // new.
    
    // The expected result is a boolean, indicating whether you have any good 
    // arrows left.

    // // ***STARTER CODE***

    // function anyArrows(arrows){
    //     // arrow it
    //     return arrows.some( => );
    //   }   

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertEquals(anyArrows([]), false, "Should handle empty quiver");
    //   Test.assertEquals(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
    //   Test.assertEquals(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");
    //     });
    //   });
      
    // ******MY ANSWER********

    function anyArrows(arrows){
        return arrows.some(arrow => !arrow.damaged);
      }