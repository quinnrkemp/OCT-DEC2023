    // CHALLENGE NAME-  Training JS #16: Methods of String object--slice(), substring() and substr()

    // DESCRIPTION:

    // Task
    // Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
    
    // The first mission: Traversing arr, find the shortest string length.
    
    // The second mission: Traversing arr again, intercept all strings to the shortest 
    // string length(Start from index0). you can use one of slice() substring() or 
    // substr() do it. return the result after finished the work.
    
    // for example:
    
    // cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
    // cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
    // cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

    // // ***STARTER CODE***

    // function cutIt(arr){
    //     //coding here...
        
    //   }   

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
    //       Test.assertSimilar(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
    //       Test.assertSimilar(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);
      
    //     });
    //   });

    // ******MY ANSWER********

    function cutIt(arr){
        const minLength = Math.min(...arr.map(x => x.length));
        return arr.map(x => x.slice(0, minLength));
      }