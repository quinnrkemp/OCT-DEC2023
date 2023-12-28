    // CHALLENGE NAME-  Regex count lowercase letters

    // DESCRIPTION:

    // Your task is simply to count the total number of lowercase 
    // letters in a string.

    // Examples
    // "abc" ===> 3
    
    // "abcABC123" ===> 3
    
    // "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
    
    // "" ===> 0;
    
    // "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
    
    // "abcdefghijklmnopqrstuvwxyz" ===> 26

    // // ***STARTER CODE***

    // function lowercaseCount(str){
    //     //How many?
    // }  
    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(lowercaseCount("abc"), 3);
    // Test.assertEquals(lowercaseCount("abcABC123"), 3);
    // Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
    // Test.assertEquals(lowercaseCount(""), 0)
    // Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
    // Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
    //   });
    // });
    
    // ******MY ANSWER********

    function lowercaseCount(str){
        var check = str.match(/[a-z]/g);
        return check ? check.length : 0
        
    }     