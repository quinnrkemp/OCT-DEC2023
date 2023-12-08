// CHALLENGE NAME-  Calculate Price Excluding VAT (#2)

// DESCRIPTION:

// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price 
// (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

// // ***STARTER CODE***

// function excludingVatPrice(price){
//     // your code
//     return 0;
//   }

// //   ******TEST CASES*****

// describe('Fixed Tests', () => {
//     it("Test", () => {
//       Test.assertSimilar(excludingVatPrice(230), 200.00);
//       Test.assertSimilar(excludingVatPrice(123), 106.96);
//     });
//   }); 

// ******MY ANSWER********

function excludingVatPrice(price){
    let prod=price/1.15
    
     if (price== null) {
      return -1
    }
     else {
       return Number(prod.toFixed(2))
     }
   
   }