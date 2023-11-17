    // CHALLENGE NAME-  get character from ASCII Value

    // DESCRIPTION:

    // Write a function which takes a number and returns the 
    // corresponding ASCII char for that value.

    // Example:
    
    // 65 --> 'A'
    // 97 --> 'a'
    // 48 --> '0

    // // ***STARTER CODE***

    // function getChar(c){
    //     // ...
    //   } 

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertEquals(getChar(55),'7')
    //   Test.assertEquals(getChar(56),'8')
    //   Test.assertEquals(getChar(57),'9')
    //   Test.assertEquals(getChar(58),':')
    //   Test.assertEquals(getChar(59),';')
    //   Test.assertEquals(getChar(60),'<')
    //   Test.assertEquals(getChar(61),'=')
    //   Test.assertEquals(getChar(62),'>')
    //   Test.assertEquals(getChar(63),'?')
    //   Test.assertEquals(getChar(64),'@')
    //   Test.assertEquals(getChar(65),'A')
    //     });
    //   });
      
    // ******MY ANSWER********

    function getChar(c) {
        return String.fromCharCode(c)
      }