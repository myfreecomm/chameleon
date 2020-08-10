import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../../.storybook/helpers'
import { simpleTableHtml, complexTableHtml } from './table.sample'

export default {
  title: 'Components/Table',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Simple = () => simpleTableHtml
export const Complex = () => complexTableHtml
