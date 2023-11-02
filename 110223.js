    // CHALLENGE NAME-  Tip Calculator

    // // DESCRIPTION:

    // Complete the function, which calculates how much you 
    // need to tip based on the total amount of the bill 
    // and the service.

    // You need to consider the following ratings:
    
    // Terrible: tip 0%
    // Poor: tip 5%
    // Good: tip 10%
    // Great: tip 15%
    // Excellent: tip 20%
    // The rating is case insensitive (so "great" = "GREAT"). 
    // If an unrecognised rating is received, then you need 
    // to return:
    
    // "Rating not recognised" in Javascript, Python and Ruby...
    // ...or null in Java
    // ...or -1 in C#
    // Because you're a nice person, you always round up the tip, 
    // regardless of the service.

    // // ***STARTER CODE***

    // function calculateTip(amount, rating) {

    // }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(calculateTip(20, "Excellent"), 4);
    // Test.assertEquals(calculateTip(26.95, "good"), 3);
    
    //   });
    // });
    
    // ******MY ANSWER********

    function calculateTip(a, rating) {
        let r=rating.toLowerCase()
          if (r==="terrible" ) {
            return 0
          }
          else  if (r==="poor" ) {
            return Math.ceil(a*0.05)
          }
          else  if (r==="good" ) {
            return Math.ceil(a*0.1)
          }
          else if (r==="great" ) {
            return Math.ceil(a*0.15)
          }
          else  if (r==="excellent" ) {
            return Math.ceil(a*0.2)
          }
          else {
            return "Rating not recognised"
          }
        }