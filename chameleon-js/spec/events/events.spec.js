import { events } from '../../src/events/events'

describe('events', () => {
  it('has the properties "on", "off" and "trigger"', () => {
    expect(events).toHaveProperty('on')
    expect(events).toHaveProperty('off')
    expect(events).toHaveProperty('trigger')
  })

  it('is freeze', () => {
    expect(Object.isFrozen(events)).toBe(true)
  })
})
