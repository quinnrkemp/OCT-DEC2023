    // CHALLENGE NAME- Regexp Basics - is it a digit? 

    // DESCRIPTION:

    // Implement String#digit? (in Java StringUtils.isDigit(String)), 
    // which should return true if given object is a digit (0-9), false 
    // otherwise.

    // // ***STARTER CODE***

    // String.prototype.digit = function() {
    //     return false;
    //   };    

    // //   ******TEST CASES*****
    
    // describe('hex number', () => {
    //     it('Basic tests', () => {
    //       Test.assertEquals(''.digit(), false);
    //       Test.assertEquals('7'.digit(), true);
    //       Test.assertEquals(' '.digit(), false);
    //       Test.assertEquals('a'.digit(), false);
    //       Test.assertEquals('a5'.digit(), false);
    //       Test.assertEquals('14'.digit(), false);
    //     });
    //   });

    // ******MY ANSWER********

    String.prototype.digit = function() {
        return /^[0-9]$/.test(this);
      };