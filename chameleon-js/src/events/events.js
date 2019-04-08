import { on       } from './on'
import { off      } from './off'
import { trigger  } from './trigger'
import { toMethod } from '../utils/index'

const events = {
  on:      toMethod(on),
  off:     toMethod(off),
  trigger: toMethod(trigger)
}

Object.freeze(events)

export { events }
