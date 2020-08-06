import { radios } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../.storybook/helpers'

export default {
  title: 'Components/Alert',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  },
}

const variations = {
  default: '',
  info: 'ch-alert--info',
  warning: 'ch-alert--warning',
  negative: 'ch-alert--negative',
  positive: 'ch-alert--positive'
}

export const Alert = () => {
  const alertVariations = radios('Variations', variations, '')
  const classes = formatClassNames(`ch-alert ${alertVariations}`)

  const template = `
    <div class="${classes}">
      <h6>Lorem ipsum dolor sit amet</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores.</p>
    </div>
  `

  return insertTemplateOnContainer(template, 'Alert')
}
