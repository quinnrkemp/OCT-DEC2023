    // CHALLENGE NAME-  Find the Slope

    // DESCRIPTION:

    // Given an array of 4 integers
    // [a,b,c,d] representing two points (a, b) and (c, d), 
    // return a string representation of the slope of the 
    // line joining these two points.
    
    // For an undefined slope (division by 0), return undefined. 
    // Note that the "undefined" is case-sensitive.
    
    //    a:x1
    //    b:y1
    //    c:x2
    //    d:y2
    // Assume that [a,b,c,d] and the answer are all integers 
    // (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

    // // ***STARTER CODE***

    // function slope(points) {
    //     //..
    //     }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals( slope([19,3,20,3]), "0" );
    // Test.assertEquals( slope([2,7,4,-7]), "-7" );
    // Test.assertEquals( slope([10,50,30,150]), "5" );
    // Test.assertEquals( slope([15,45,12,60]), "-5" );
    // Test.assertEquals( slope([10,20,20,80]), "6" );
    // Test.assertEquals( slope([-10,6,-10,3]), "undefined" );
    
    //   });
    // });
    
    // ******MY ANSWER********

    function slope(pt) {
        let rise= pt[3]-pt[1]
        let run=  pt[2]-pt[0] 
        let result= rise/run
        if (run==0) {
          return "undefined"
        }
          else {
            return result.toString()
          }
        }