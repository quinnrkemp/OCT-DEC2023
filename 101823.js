// CHALLENGE NAME- Freudian translator 

    // DESCRIPTION:

    // In this kata, the function will take a string 
    // as its argument, and return a string with every 
    // word replaced by the explanation to everything, 
    // according to Freud. (replace every word in a given 
    // string with the word "sex".) 
    
    // Note that an empty string, or no arguments, should 
    // return an empty string.

    // // ***STARTER CODE***

    // function toFreud(string) {
    //     return result;
    //     }

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertSimilar(toFreud(""), "");
    //   Test.assertSimilar(toFreud("test"), "sex");
    //   Test.assertSimilar(toFreud("This is a test"), "sex sex sex sex");
    //   Test.assertSimilar(toFreud("This is a longer test"), "sex sex sex sex sex");
    //   Test.assertSimilar(toFreud("You're becoming a true freudian expert"), "sex sex sex sex sex sex");
    //     });
    //   });

    // ******MY ANSWER********

    function toFreud(string) {
        if(string === ""){
          return string;
        }
        string = string.split(' ');
        for(var i = 0; i < string.length; i++){
          string[i] = 'sex';
        }
        string = string.join(' ');
        return string;
      }