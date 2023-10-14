    // CHALLENGE NAME-  Training JS #13: Number object and its properties

    // DESCRIPTION:

    // Task
    // Coding in function whatNumberIsIt. function accept 1 parameter:n. 
    // it's a number.
    
    // To judge the number n. If n is one of the above five constants, 
    // return one of these string:
    
    // "Input number is Number.MAX_VALUE"
    // "Input number is Number.MIN_VALUE"
    // "Input number is Number.NaN"
    // "Input number is Number.NEGATIVE_INFINITY"
    // "Input number is Number.POSITIVE_INFINITY"
    // Other values should return "Input number is xxx". xxx means this number.
    
    // For example:
    
    // whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
    // whatNumberIsIt(100) should return "Input number is 100"
    // What you need to think about is how to judge it correctly and effectively 
    // and don't forget isNaN().

    // // ***STARTER CODE***

    // function whatNumberIsIt(n){
    //     //coding here
        
    //   }   

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
    //       Test.assertSimilar(whatNumberIsIt(100),"Input number is 100");
    //       Test.assertSimilar(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
    //       Test.assertSimilar(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
    //       Test.assertSimilar(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
    //       Test.assertSimilar(whatNumberIsIt(NaN),"Input number is Number.NaN");
    //       Test.assertSimilar(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");
      
    //     });
    //   });
      
    // ******MY ANSWER********

    whatNumberIsIt = (n) => {
        //coding here
        if (n === Number.MAX_VALUE) return ("Input number is Number.MAX_VALUE");
        if (n === Number.MIN_VALUE) return ("Input number is Number.MIN_VALUE");
        if (n === Number.POSITIVE_INFINITY) return ("Input number is Number.POSITIVE_INFINITY");
        if (n === Number.NEGATIVE_INFINITY) return ("Input number is Number.NEGATIVE_INFINITY");
        return Number.isNaN(n) ? "Input number is Number.NaN" : ("Input number is " + n);
      }