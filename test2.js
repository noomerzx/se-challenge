var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()
mocha.suite.emit('pre-require', this, 'solution', mocha)

/*

Program: Write a function to find the longest common prefix string amongst an array of strings. 
If there is no common prefix, return an empty string "". 
eg 1: Input: ["contradict", "contrast", "contrary", "controversy"] Output: "contr" 
eg 2: Input: ["disappear", "disagree", "disbar"] Output: "dis"
eg 3: Input: ["dog", "racecar", "car"] Output: ""

*/

function commonPrefix(input) {
    let result = ''
    let list = input.sort((a, b) => a.length - b.length)
    let keys = list[0]
    let prefixs = []
    for (let i = 0; i < keys.length; i ++) {
      prefixs.push(keys.substring(0, i + 1))
    }
    prefixs = prefixs.reverse()
    for (let i = 0;i < prefixs.length; i++) {
      let matched = true
      for(let j = 0; j < list.length; j++) {
          if (!list[j].startsWith(prefixs[i])) {
              matched = false
              break
          }
      }
      if (matched) {
          result = prefixs[i]
          break
      }
    }
    return result; 
}


describe('Test suite', function() {
  it('case 1', function() {
    var input = ["contradict", "contrast", "contrary", "controversy"];
    assert.equal(commonPrefix(input), "contr");
  })
  
  it('case 2', function() {
    var input = ["disappear", "disagree", "disbar"];
    assert.equal(commonPrefix(input), "dis");
  })
  
  it('case 3', function() {
    var input = ["dog", "racecar", "car"];
    assert.equal(commonPrefix(input), "");
  })
})

mocha.run()
