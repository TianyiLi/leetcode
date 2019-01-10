const { fourSum } = require('../case/018-fourSum')
const { deepEqual } = require('assert')
Array.prototype.sorting = function(){
  return this.sort((a, b) => a[0] - b[0])
}
describe('fourSum test', () => {
  before(() => {
    console.time('test')
  })
  after(() => {
    console.timeEnd('test')
  })
  it('should correct', () => {
    let a = [
      [-1, 0, 0, 1],
      [-2, -1, 1, 2],
      [-2, 0, 0, 2]
    ]
    deepEqual(fourSum([1, 0, -1, 0, -2, 2], 0).sorting(), a.sorting())
  })
  it('should correct', () => {
    let a = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
    deepEqual(fourSum([1, 0, -1, 0, -2, 2], 0).sorting(), a.sorting())
  })
  it('should correct', () => {
    let a = [[-3, -2, 2, 3], [-3, -1, 1, 3], [-3, 0, 0, 3], [-3, 0, 1, 2], [-2, -1, 0, 3], [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
    deepEqual(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0).sorting(), a.sorting())
  })
})