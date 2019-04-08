import { off } from '../../src/events/off'

describe('off', () => {
  it('returns first argument', () => {
    let obj       = {}
    let eventName = 'event'
    let callback  = () => {}

    expect(off(obj, eventName, callback)).toBe(obj)
  })

  it('removes callback from event', () => {
    let eventName       = 'event'
    let callback        = () => {}
    let anotherCallback = () => {}
    let obj             = {
      __events__: {
        event: [callback, anotherCallback]
      }
    }

    off(obj, eventName, callback)
    expect(obj.__events__).toMatchObject({ event: [anotherCallback] })
  })

  describe('when event has only one callback', () => {
    it('removes the event', () => {
      let eventName = 'event'
      let callback  = () => {}
      let obj       = { __events__: { event: [callback] } }

      off(obj, eventName, callback)
      expect(obj.__events__).toMatchObject({})
    })
  })

  describe('when callback is not present', () => {
    it('removes the event', () => {
      let eventName = 'event'
      let obj       = { __events__: { event: [() => {}] } }

      off(obj, eventName)
      expect(obj.__events__).toMatchObject({})
    })
  })

  describe('when event has a context', () => {
    it('removes the events belonging to the context', () => {
      let eventName       = '.context'
      let callback        = () => {}
      let anotherCallback = () => {}
      let obj             = {
        __events__: {
          'event':             [callback],
          'event.context':     [callback],
          'event.lib.context': [callback, anotherCallback]
        }
      }

      off(obj, eventName, callback)
      expect(obj.__events__).toMatchObject({
        'event':             [callback],
        'event.lib.context': [anotherCallback]
      })
    })
  })
})
