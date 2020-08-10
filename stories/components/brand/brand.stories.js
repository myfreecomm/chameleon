import { withKnobs } from '@storybook/addon-knobs'
import html from './brand.sample'

export default {
  title: 'Components/Brand',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Brand = () => html
