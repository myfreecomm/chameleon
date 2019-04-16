import { on        } from './on'
import { off       } from './off'
import { trigger   } from './trigger'
import { toMethod  } from '../utils/index'
import { Interface } from '../interface/index';

const events = new Interface({
  on:      toMethod(on),
  off:     toMethod(off),
  trigger: toMethod(trigger)
})

export { events }
