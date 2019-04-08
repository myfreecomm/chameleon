import { on } from '../../src/events/on'

describe('on', () => {
  it('returns a first argument', () => {
    let obj       = {}
    let eventName = 'event'
    let callback  = () => {}

    expect(on(obj, eventName, callback)).toBe(obj)
  })

  it('adds callbak in the events structure', () => {
    let obj       = {}
    let eventName = 'event'
    let callback  = () => {}

    on(obj, eventName, callback)
    expect(obj).toMatchObject({ __events__: { event: [callback] } })
  })

  describe('when there is an callback for the event', () => {
    it('add another callbak to the end', () => {
      let eventName       = 'event'
      let callback        = () => {}
      let anotherCallback = () => {}
      let obj             = { __events__: { event: [callback] } }

      on(obj, eventName, anotherCallback)
      expect(obj.__events__).toMatchObject({ event: [callback, anotherCallback] })
    })
  })

  describe('when there are already other events registered', () => {
    it('adds the callback to the respective event', () => {
      let callback  = () => {}
      let obj       = { __events__: { event: [callback] } }
      let eventName = 'anotherEvent'
      
      on(obj, eventName, callback)
      expect(obj.__events__).toMatchObject({
        event:        [callback],
        anotherEvent: [callback]
      })
    })
  })
})
