    // CHALLENGE NAME-  Take an Arrow to the knee, Functionally

    // DESCRIPTION:

    // Arrow style Functions
    // Come here to practice the Arrow style functions Not much else to 
    // say good luck!
    // Details
    // You will be given an array of numbers which can be used using the 
    // String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to 
    // convert the number to a character. It is recommended to map over 
    // the array of numbers and convert each number to the corresponding 
    // ascii character.
    
    // Examples
    // These are example of how to convert a number to an ascii Character:
    // Javascript => String.fromCharCode(97) // a
    // C# => Tools.FromCharCode(97) // a

    // // ***STARTER CODE***

    // var ArrowFunc = function(arr) {
    //     return arr.map( => ).join(''); //Complete this function
    //   }   

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertEquals(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
    //   Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')
      
    //     });
    //   });
      
    // ******MY ANSWER********

    var ArrowFunc = function(arr) {
        return arr.map( x => String.fromCharCode(x) ).join(''); 
      }