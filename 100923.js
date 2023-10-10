    // CHALLENGE NAME-  Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

    // DESCRIPTION:

    // Task
    // Coding in function firstToLast, function accept 2 parameters:str and c. 
    // str is a string. c is a char.
    
    // Please return the gap between the first position of c and the last position 
    // of c.
    
    // If there are a lot of c in the str, should return a positive integer; If 
    // there is only one c in str, should return 0; If there is no c in the str, 
    // should return -1. Retrieval should not ignored the case.
    
    // for example:
    
    // firstToLast("ababc","a") should return 2(2-0)
    // firstToLast("ababc","c") should return 0(4-4)
    // firstToLast("ababc","d") should return -1

    // // ***STARTER CODE***

    // function firstToLast(str,c){
    //     //coding here..
        
    //   }  

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(firstToLast("ababc","a") , 2);
    //       Test.assertSimilar(firstToLast("ababc","c") , 0);
    //       Test.assertSimilar(firstToLast("ababc","d") , -1);
    //     });
    //   });
      
    // ******MY ANSWER********

    function firstToLast(str,c){
        let last= str.lastIndexOf(c)
        let first= str.indexOf(c)
        if(str.search(c)===-1) {
          return -1
        }
          else {
        return last-first
          //coding here..
          }
        }