import { withKnobs } from '@storybook/addon-knobs'
import html from './radio.sample'

export default {
  title: 'Components/Radio',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Radio = () => html
