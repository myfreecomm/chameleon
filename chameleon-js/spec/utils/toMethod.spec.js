import { toMethod } from '../../src/utils/toMethod'

describe('toMethod', () => {
  it('returns object-oriented function', () => {
    let fn  = (obj, add) => obj.attr + add
    let obj = { attr: 1, fn: toMethod(fn) }

    expect(obj.fn(2)).toBe(3)
  })
})
