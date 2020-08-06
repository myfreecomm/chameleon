import { withKnobs, boolean, radios } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../.storybook/helpers'

export default {
  title: 'Components/Input',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

const sizes = {
  default: '',
  small: 'ch-input--small'
}

export const Simple = () => {
  const disabled = boolean('Disabled', false)
  const readonly = boolean('Readonly', false)
  const sizeClass = radios('Sizes', sizes, '')
  const fluid = boolean('Fluid', false)
  const hasError = boolean('With Error', false)
  const errorClass = hasError ? 'ch-input--negative' : ''
  const fluidClass = fluid ? 'ch-input--fluid' : ''
  const props = `${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`.trim()
  const classes = formatClassNames(`ch-input ${errorClass} ${sizeClass} ${fluidClass}`)

  const template = `
    <input type="text" placeholder="Insert data" class="${classes}" ${props}>
  `

  return insertTemplateOnContainer(template, 'Simple')
}

export const WithIcons = () => {
  const template = `
    <span class="ch-input has-leadingIcon has-trailingIcon">
      <i class="ch-icon fal fa-search"></i>
      <input type="text" placeholder="Insert data" />
      <i class="ch-spinner"></i>
    </span>
  `

  return insertTemplateOnContainer(template, 'With Icons')
}
