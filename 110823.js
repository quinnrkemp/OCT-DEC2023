    // CHALLENGE NAME-  Grasshopper- Order of operations

    // DESCRIPTION:

    // You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get 
    // the answer 32 but instead the function keeps returning 10. Fix the 
    // function to make it return 32 without changing the number or the 
    // operators.

    // // ***STARTER CODE***

    // function orderOperations () {
    //     return 2 + 2 * 2 + 2 * 2
    //   } 

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // const func = orderOperations.toString()
    // describe('order of operations', () => {
    //   it('should not use any numbers other than 2', () => {
    //     let re = /([0,1,3,4,5,6,7,8,9])/gi
    //     let others = func.match(re)
    //     Test.assertEquals(others, null)
    //   })
    //   it('should have the plus and the multiplication in the same place', () => {
    //     let re = /[+,*]/gi
    //     let operators = func.match(re)
    //     Test.assertEquals(operators[0], '+')
    //     Test.assertEquals(operators[1], '*')
    //     Test.assertEquals(operators[2], '+')
    //     Test.assertEquals(operators[3], '*')
    //   })
    //   it('should get the correct number', () => {
    //     Test.assertEquals(orderOperations(), 32)
    //   })
    // })

    // ******MY ANSWER********

    function orderOperations () {
        return (2 + 2) * (2 + 2) * 2
      }