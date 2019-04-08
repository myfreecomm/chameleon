import { prepareEvents } from '../../src/events/prepareEvents'

describe('prepareEvents', () => {
  it('creates "__events__" property as a empty object', () => {
    let obj = {}

    prepareEvents(obj)
    expect(obj).toMatchObject({ __events__: {} })
  })

  it('creates "__events__" property as non-configurable and non-enumerable', () => {
    let obj = {}

    prepareEvents(obj)
    expect(Object.getOwnPropertyDescriptor(obj, '__events__')).toMatchObject({
      configurable: false,
      enumerable:   false
    })
  })

  describe('when "eventName" argument is present', () => {
    it('creates "eventName" in "__events__" as a empty array', () => {
      let obj       = {}
      let eventName = 'event'
    
      prepareEvents(obj, eventName)
      expect(obj.__events__).toMatchObject({ event: [] })    
    })
  })
})
