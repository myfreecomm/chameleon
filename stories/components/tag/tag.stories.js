import { text, radios } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../../.storybook/helpers'
import html from './tags.sample'

export default {
  title: 'Components/Tag',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  },
}

export const Tag = () => html

export const Playground = () => {
  const variations = {
    default: '',
    info: 'ch-tag--info',
    warning: 'ch-tag--warning',
    negative: 'ch-tag--negative',
    positive: 'ch-tag--positive'
  }

  const tagText = text('Text', 'Tag')
  const tagVariations = radios('Variations', variations, '')
  const classes = formatClassNames(`ch-tag ${tagVariations}`)

  const template = `<span class="${classes}">${tagText}</span>`

  return insertTemplateOnContainer(template)
}
