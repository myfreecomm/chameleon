import { text, radios, boolean } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import { formatClassNames } from '../../../.storybook/helpers'
import html from './button.sample'

export default {
  title: 'Components/Buttons',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Button = () => html

export const Playground = () => {
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
  const hasLeadingIcon = boolean('Leading Icon', true)
  const hasTrailingIcon = boolean('Trailing Icon', false)
  const hasLeadingIconClass = hasLeadingIcon ? 'has-leadingIcon' : ''
  const hasTrailingIconClass = hasTrailingIcon ? 'has-trailingIcon' : ''
  const buttonDisabledClass = buttonDisabled ? 'is-disabled' : ''

  const classes = formatClassNames(`ch-button ${buttonTypes} ${buttonVariations} ${buttonSizes} ${buttonDisabledClass} ${hasLeadingIconClass} ${hasTrailingIconClass}`)

  const template = `
    <button class="${classes}">
      ${hasLeadingIcon ? '<i class="ch-icon fal fa-plus"></i>' : ''}
      ${buttonText}
      ${hasTrailingIcon ? '<i class="ch-icon fal fa-chevron-down"></i>' : ''}
    </button>
  `

  return template
}
