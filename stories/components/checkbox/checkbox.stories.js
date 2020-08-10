import { withKnobs } from '@storybook/addon-knobs'
import html from './checkbox.sample'

export default {
  title: 'Components/Checkbox',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Checkbox = () => html
