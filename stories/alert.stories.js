import { text, radios, boolean } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import { parseToCodeBlock } from '../.storybook/helpers'

export default {
  title: 'Components|Alert',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

const variations = {
  default: '',
  info: 'ch-alert--info',
  warning: 'ch-alert--warning',
  negative: 'ch-alert--negative',
  positive: 'ch-alert--positive'
}

export const Default = () => {
  const alertVariations = radios('Variations', variations, '')
  const classes = `ch-alert ${alertVariations}`.trim()

  const template = `
    <div class="${classes}">
      <h6>Lorem ipsum dolor sit amet</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores.</p>
    </div>
  `

  return `
    <div style="padding: 2rem">
      <h1 class="ch-title ch-title--1">Alert</h1>

      <br />

      ${template}

      <br /><br />

      ${parseToCodeBlock(template)}
    </div>
  `
}
