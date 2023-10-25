    // CHALLENGE NAME-  Did she say hallo?

    // DESCRIPTION:

    // You received a whatsup message from an unknown number. Could 
    // it be from that girl/boy with a foreign accent you met 
    // yesterday evening?

    // Write a simple function to check if the string contains the 
    // word hallo in different languages.
    
    // These are the languages of the possible people you met the 
    // night before:
    
    // hello - english
    // ciao - italian
    // salut - french
    // hallo - german
    // hola - spanish
    // ahoj - czech republic
    // czesc - polish
    // Notes
    
    // you can assume the input is a string.
    // to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
    // function should be case insensitive to pass the tests

    // // ***STARTER CODE***

    // function validateHello(greetings) {
    //     res =  //regex here/.test(greetings) 
    //     return res
    //   }  

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertEquals(validateHello('ahoj'), true);
      
    //   Test.assertEquals(validateHello('meh'), false);
    //     });
    //   });

    // ******MY ANSWER********

    function validateHello(greetings) {
        let hi= greetings.toLowerCase()
        if (hi.includes("hello")||hi.includes("ciao")||hi.includes("salut")||hi.includes("hallo")||hi.includes("hola")||hi.includes("ahoj")||hi.includes("czesc")){ 
        //   res =  //regex here/.test(greetings) 
          return true
        }
        else {
          return false
        }
        }