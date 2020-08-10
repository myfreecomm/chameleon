import { withKnobs } from '@storybook/addon-knobs'
import html from './breadcrumb.sample'

export default {
  title: 'Components/Breadcrumb',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Breadcrumb = () => html
