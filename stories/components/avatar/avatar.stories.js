import { withKnobs } from '@storybook/addon-knobs'
import html from './avatar.sample'

export default {
  title: 'Components/Avatar',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Avatar = () => html
