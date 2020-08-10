import { withKnobs } from '@storybook/addon-knobs'
import { simpleGridHtml, columnsWidthGridHtml, columnsStartGridHtml } from './grid.sample'

export default {
  title: 'Layouts/Grid',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Grid = () => simpleGridHtml

export const ColumnsWidth = () => columnsWidthGridHtml

export const ColumnsStart = () => columnsStartGridHtml
