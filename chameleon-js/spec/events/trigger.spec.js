import { trigger } from '../../src/events/trigger'

describe('trigger', () => {
  it('returns first argument', () => {
    let obj       = {}
    let eventName = 'event'

    expect(trigger(obj, eventName)).toBe(obj)
  })

  it('performs the callbacks for the event', () => {
    let callback           = jest.fn(() => {})
    let anotherCallback    = jest.fn(() => {})
    let yetAnotherCallback = jest.fn(() => {})
    let eventName          = 'event'
    let obj                = {
      __events__: {
        'event':        [callback, anotherCallback],
        'anotherEvent': [yetAnotherCallback]
      }
    }

    trigger(obj, eventName)
    expect(callback.mock.calls.length).toBe(1)
    expect(anotherCallback.mock.calls.length).toBe(1)
    expect(yetAnotherCallback.mock.calls.length).toBe(0)
  })

  it('by default assigns "this" of callback the object itself', () => {
    let callback           = jest.fn(function () { return this })
    let eventName          = 'event'
    let obj                = {
      __events__: { 'event': [callback] }
    }

    trigger(obj, eventName)
    expect(callback.mock.results[0].value).toBe(obj)
  })

  describe('when event has a context', () => {
    it('performs the callbacks for the event regardless of context', () => {
      let callback           = jest.fn(() => {})
      let anotherCallback    = jest.fn(() => {})
      let yetAnotherCallback = jest.fn(() => {})
      let eventName          = 'event'
      let obj                = {
        __events__: {
          'event.lib.context': [callback, anotherCallback],
          'event.lib':         [anotherCallback],
          'anotherEvent':      [yetAnotherCallback]
        }
      }

      trigger(obj, eventName)
      expect(callback.mock.calls.length).toBe(1)
      expect(anotherCallback.mock.calls.length).toBe(2)
      expect(yetAnotherCallback.mock.calls.length).toBe(0)
    })
  })

  describe('when there is "data" argument', () => {
    it('pass the "data" as callback argument', () => {
      let data               = {}
      let callback           = jest.fn(data => data)
      let eventName          = 'event'
      let obj                = {
        __events__: { 'event': [callback] }
      }
  
      trigger(obj, eventName, data)
      expect(callback.mock.calls[0][0]).toBe(data)
    })
  })

  describe('when there is "thisObject" argument', () => {
    it('assigns "this" from callback to "thisObject"', () => {
      let thisObject         = {}
      let callback           = jest.fn(function () { return this })
      let eventName          = 'event'
      let obj                = {
        __events__: { 'event': [callback] }
      }
  
      trigger(obj, eventName, undefined, thisObject)
      expect(callback.mock.results[0].value).toBe(thisObject)
    })
  })
})
