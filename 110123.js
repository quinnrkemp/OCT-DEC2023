    // CHALLENGE NAME-  Surface Area and Volume of a Box

    // DESCRIPTION:

    // Write a function that returns the total surface area and 
    // volume of a box as an array: [area, volume]

    // // ***STARTER CODE***

    // function getSize(width, height, depth)
  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.deepEqual(getSize(4, 2, 6), [88, 48]);   
    //     assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
    //     assert.deepEqual(getSize(4, 2, 6)[0], 88);
    //     assert.deepEqual(getSize(4, 2, 6)[1], 48);
    //   })
    // });
 
    // ******MY ANSWER********

    function getSize(width, height, length) {
        let l= length
        let w= width
        let h= height
        let area= (2*l*h)+(2*l*w)+(2*w*h)
        let volume= l*w*h
        return [area,volume]
        }