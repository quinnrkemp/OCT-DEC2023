    // CHALLENGE NAME-  Implement Array.prototype.filter()

    // DESCRIPTION:

    // What we want to implement is Array.prototype.filter() function, 
    // just like the existing Array.prototype.filter(). Another similar 
    // function is _.filter() in underscore.js and lodash.js.

    // The usage will be quite simple, like:
    
    // [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
    // Of course, the existing Array.prototype.filter() function has 
    // been undefined for the purposes of this Kata.
    
    //     // ***STARTER CODE***

    //     Array.prototype.filter = function (func) {
    //         //nothing here, you will feel pretty awesome to write down by yourself
    //         //have fun :)
    //       }

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])
    
    //   });
    // });
 
    // ******MY ANSWER********

    Array.prototype.filter = function (fn) {
        return this.reduce((acc, x) => {
            if (fn(x)) acc.push(x)
            return acc
        }, [])
    }