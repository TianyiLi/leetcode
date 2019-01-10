const { letterCombinations } = require('../case/017-letterCombinations.js')
const assert = require('assert')

describe('letterCombinations test', () => {
  it('23 should be["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
    assert.deepEqual(letterCombinations('23'), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })
  it('234 should be correct output', () => {
    assert.deepEqual(letterCombinations('234'), ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"])
  })
})