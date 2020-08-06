import { text, radios } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../.storybook/helpers'

export default {
  title: 'Components/Tag',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  },
}

export const Tag = () => {
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

  const afterHTML = `
    <div class="ch-spaceStackGroup">
      <h3 class="ch-title ch-title--3">Examples</h3>
      <div class="ch-spaceInlineGroup">
        <span class="ch-tag ch-tag--info">info</span>
        <span class="ch-tag ch-tag--warning">warning</span>
        <span class="ch-tag ch-tag--negative">negative</span>
        <span class="ch-tag ch-tag--positive">positive</span>
        <span class="ch-tag ch-tag--positive">
          <i class="ch-icon ch-icon--xs fal fa-check-circle"></i>
          ok
        </span>
        <span class="ch-tag ch-tag--negative">
          Close
          <i class="ch-icon ch-icon--xs fal fa-times"></i>
        </span>
      </div>
    </div>
  `

  const template = `
    <span class="${classes}">${tagText}</span>
  `

  return insertTemplateOnContainer(template, 'Tag', '', afterHTML)
}
