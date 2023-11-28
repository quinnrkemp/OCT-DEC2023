    // CHALLENGE NAME-  Enumerable Magic #4 - True for None?

    // DESCRIPTION:

    // Create a method none? (JS none) that accepts an array and a block 
    // (JS: a function), and returns true if the block (/function) returns
    //  true for none of the items in the array. An empty list should return 
    //  true.

    // // ***STARTER CODE***

    // function none(arr, fun){
    //     // ...
    //   }  

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //   Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 5 }), true)
    //   Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 4 }), false)
      
    //     });
    //   });

    // ******MY ANSWER********

    function none(array, func){
        if (!array.length)return true
        for (let arr of array){
          if (func(arr) == true)
            return false
        }
        return true
      }