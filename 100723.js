    // CHALLENGE NAME-  Training JS #21: Methods of String object--trim() and the string template

    // DESCRIPTION:

    // Task
    // Coding in function fiveLine, function accept 1 parameter:s. s is a string.
    
    // Please return a string of 5 lines(newline symbol is \n). The first line 
    // has one s; Second line have two s; and so on..Fifth line have five s;
    
    // Note1: The two sides of the parameter s may contain some whitespace, please 
    // clear them before using s.
    
    // Note2: Using a string template can make your job easier.
    
    // Example:
    
    // fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
    // a
    // aa
    // aaa
    // aaaa
    // aaaaa       <---The effect when you console.log it
    // fiveLine("  xy ") 
    // should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
    // xy
    // xyxy
    // xyxyxy
    // xyxyxyxy
    // xyxyxyxyxy  <---The effect when you console.log it

    // // ***STARTER CODE***

    // function fiveLine(s){
    //     //coding here...
        
    //   } 

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
    //       Test.assertSimilar(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
    //       Test.assertSimilar(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
      
    //     });
    //   });
      
    // ******MY ANSWER********

    function fiveLine(s){
        //coding here...
        const x = s.trim()
        const y = `${x}\n${x}${x}\n${x}${x}${x}\n${x}${x}${x}${x}\n${x}${x}${x}${x}${x}`
        return y
        
      }