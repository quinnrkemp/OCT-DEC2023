    // CHALLENGE NAME-  Training JS #5: Basic data types--Object

    // DESCRIPTION:

    // Task
    // Give you a function animal, accept 1 parameter:obj like this:
    
    // {name:"dog",legs:4,color:"white"}
    // and return a string like this:
    
    // "This white dog has 4 legs."
    // When you have finished the work, click "Run Tests" to see if 
    // your code is working properly.

    // // ***STARTER CODE***

    // function animal(obj){
    //     return ?
    //   }  

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
    //       Test.assertSimilar(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
    //       Test.assertSimilar(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");
    //     });
    //   });

    // ******MY ANSWER********

    function animal(obj){
        return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
      }
      