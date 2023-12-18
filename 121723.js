    // CHALLENGE NAME-  Sleigh Authentication

    // DESCRIPTION:

    // Christmas is coming and many people dreamed of having a ride with Santa's 
    // sleigh. But, of course, only Santa himself is allowed to use this wonderful 
    // transportation. And in order to make sure, that only he can board the sleigh, 
    // there's an authentication mechanism.

    // Your task is to implement the authenticate() method of the sleigh, which 
    // takes the name of the person, who wants to board the sleigh and a secret 
    // password. If, and only if, the name equals "Santa Claus" and the password 
    // is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and 
    //     lowercase letters and special characters :D), the return value must 
    //     be true. Otherwise it should return false.
    
    // Examples:
    
    // var sleigh = new Sleigh();
    // sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
    
    // sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
    // sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
    // sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)    

    // // ***STARTER CODE***

    // function Sleigh() {}

    // Sleigh.prototype.authenticate = function(name, password) {
    //   // TODO
    // };    

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Santa's Sleigh", function() {
    //   var sleigh = new Sleigh();
      
    //   var testCredentials = function(name, password, correct) {
    //     Test.assertEquals(sleigh.authenticate(name, password), correct, 'Tested name "'+name+'" and password "'+password+'"');
    //   };
      
    //   it('must authenticate with correct credentials', function() {
    //     testCredentials('Santa Claus', 'Ho Ho Ho!', true);
    //   });
      
    //   it('must not authenticate with incorrect credentials', function() {
    //     testCredentials('Santa', 'Ho Ho Ho!', false);
    //     testCredentials('Santa Claus', 'Ho Ho!', false);
    //     testCredentials('jhoffner', 'CodeWars', false);
    //   });
    // });

    // ******MY ANSWER********

    function Sleigh() {}

    Sleigh.prototype.authenticate = function(name, password) {
    if (name === 'Santa Claus' && password === 'Ho Ho Ho!') {
      return true
    }
      else {
        return false
      }
      // TODO
    };