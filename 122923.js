// CHALLENGE NAME-  Grasshopper - Terminal Game Turn Function  (#2)

    // DESCRIPTION:

//     You are creating a text-based terminal version of your favorite 
//     board game. In the board game, each turn has six steps that must 
//     happen in this order: roll the dice, move, combat, get coins, buy 
//     more health, and print status.

//     You are using a library (Game.Logic in C#) that already has the 
//     functions below. Create a function named doTurn/DoTurn/do_turn that 
//     calls the functions in the proper order as described in the paragraph 
//     above.

// - combat
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move

//     // ***STARTER CODE***

//     function doTurn () {
//         // Call functions here
//       }   

//     //   ******TEST CASES*****
    
//     const Test = require('@codewars/test-compat');

//     describe('one turn', function () {
//       doTurn()
//       it('should roll dice first', function () {
//         Test.assertEquals(log[0], 'rollDice')
//       })
//       it('should move second', function () {
//         Test.assertEquals(log[1], 'move')
//       })
//       it('should combat third', function () {
//         Test.assertEquals(log[2], 'combat')
//       })
//       it('should get coins fourth', function () {
//         Test.assertEquals(log[3], 'getCoins')
//       })
//       it('should buy health fifth', function () {
//         Test.assertEquals(log[4], 'buyHealth')
//       })
//       it('should print status sixth', function () {
//         Test.assertEquals(log[5], 'printStatus')
//       })
//     })

    // ******MY ANSWER********

    function doTurn () {
        rollDice()
         move()
         combat()
         getCoins()
         buyHealth()
         printStatus()
         // Call functions here
       }