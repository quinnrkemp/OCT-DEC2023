    // CHALLENGE NAME-  Safen User Input Part I - htmlspecialchars

    // DESCRIPTION:

    // You are a(n) novice/average/experienced/professional/world-famous Web 
    // Developer (choose one) who owns a(n) simple/clean/slick/beautiful/
    // complicated/professional/business website (choose one or more) which 
    // contains form fields so visitors can send emails or leave a comment on 
    // your website with ease. However, with ease comes danger. Every now and 
    // then, a hacker visits your website and attempts to compromise it through 
    // the use of XSS (Cross Site Scripting). This is done by injecting script 
    // tags into the website through form fields which may contain malicious 
    // code (e.g. a redirection to a malicious website that steals personal 
    //     information).

    // Mission
    // Your mission is to implement a function that converts the following 
    // potentially harmful characters:
    
    // < --> &lt;
    // > --> &gt;
    // " --> &quot;
    // & --> &amp;
    // Good luck :D

    // // ***STARTER CODE***

    // function htmlspecialchars(formData) {
    //     // Insert your code here
    //   }  

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Simple tests", () => {
    //     assert.strictEqual(
    //       htmlspecialchars("<h2>Hello World</h2>"),
    //       "&lt;h2&gt;Hello World&lt;/h2&gt;"
    //     );
    //     assert.strictEqual(
    //       htmlspecialchars("Hello, how would you & I fare?"),
    //       "Hello, how would you &amp; I fare?"
    //     );
    //     assert.strictEqual(
    //       htmlspecialchars('How was "The Matrix"?  Did you like it?'),
    //       'How was &quot;The Matrix&quot;?  Did you like it?'
    //     );
    //     assert.strictEqual(
    //       htmlspecialchars("<script>alert('Website Hacked!');</script>"),
    //       "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
    //     );
    //   })
    // })

    // ******MY ANSWER********

    const htmlspecialchars = formData => {
        const arr = formData.split('')
        
        arr.map((char, i, a) => {
          if(char === '<') a[i] = '&lt;'
          if(char === '>') a[i] = '&gt;'
          if(char === '"') a[i] = '&quot;'
          if(char === '&') a[i] = '&amp;'
        })
        
        return arr.join('')
      } 