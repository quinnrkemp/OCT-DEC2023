    // CHALLENGE NAME-  Training JS #12: loop statement --for..in and for..of

    // DESCRIPTION:

    // The function giveMeFive accepts 1 parameter, obj, which is an object.

    // Create an array (which you will eventually return). Then, traverse obj, 
    // checking each key and value. If the length of the key is equal to 5, 
    // then push the key to your array. Separately, if the length of the value 
    // is equal to 5, then push the value to your array.
    
    // At the end, return your array.
    
    // You should use for..in in your code, otherwise your solution may not pass 
    // this kata.

    // // ***STARTER CODE***

    // function giveMeFive(obj){
    //     //coding here
        
    //   }    

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
    //       Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
    //       Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
      
    //     });
    //   });
      
    // ******MY ANSWER********

    function giveMeFive(obj) {
        const fives = [];
        for (const k in obj) {
          const v = obj[k];
          if (k.length == 5) fives.push(k);
          if (v.length == 5) fives.push(v);
        }
        return fives;
      }