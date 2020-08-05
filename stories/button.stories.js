import { text, radios, boolean } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../.storybook/helpers'

export default {
  title: 'Components/Buttons',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Common = () => {
  const types = {
    default: '',
    primary: 'ch-button--primary',
    negative: 'ch-button--negative',
    brand: 'ch-button--brand'
  }

  const variations = {
    default: '',
    outline: 'ch-button--outline',
    ghost: 'ch-button--ghost'
  }

  const sizes = {
    default: '',
    small: 'ch-button--small',
  }

  const buttonText = text('Text', 'Submit')
  const buttonTypes = radios('Types', types, '')
  const buttonVariations = radios('Styles', variations, '')
  const buttonSizes = radios('Sizes', sizes, '')
  const buttonDisabled = boolean('Disabled', false)
  const buttonDisabledClass = buttonDisabled ? 'is-disabled' : ''

  const classes = `ch-button ${buttonTypes} ${buttonVariations} ${buttonSizes} ${buttonDisabledClass}`.trim()
  const template = `<button class="${classes}">${buttonText}</button>`
  const afterHTML = `
    <div class="ch-spaceStackGroup">
      <h3 class="ch-title ch-title--3">Examples</h3>
      <div class="ch-spaceInlineGroup">
        <button class="ch-button ch-button--primary">Action</button>
        <button class="ch-button ch-button--outline">Action</button>
        <button class="ch-button ch-button--icon ch-button--outline ch-button--negative">
          <i class="ch-icon fal fa-trash-alt"></i>
        </button>
        <button class="ch-button ch-button--ghost ch-button--primary">Action</button>
      </div>
    </div>
  `

  return insertTemplateOnContainer(template, 'Common', '', afterHTML)
}

export const WithIcons = () => {
  const hasLeadingIcon = boolean('Leading Icon', true)
  const hasTrailingIcon = boolean('Trailing Icon', false)
  const hasLeadingIconClass = hasLeadingIcon ? 'has-leadingIcon' : ''
  const hasTrailingIconClass = hasTrailingIcon ? 'has-trailingIcon' : ''
  const classes = `ch-button ${hasLeadingIconClass} ${hasTrailingIconClass}`.trim()

  const template = `
    <button class="${classes}">
      ${hasLeadingIcon ? '<i class="ch-icon fal fa-plus"></i>' : ''}
      Options
      ${hasTrailingIcon ? '<i class="ch-icon fal fa-chevron-down"></i>' : ''}
    </button>
  `
  return insertTemplateOnContainer(template, 'With Icons')
}
