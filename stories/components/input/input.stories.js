import { withKnobs, boolean, radios } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../../.storybook/helpers'
import { html, htmlWithIcons } from './input.sample'

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

export const Input = () => html
export const WithIcons = () => htmlWithIcons

export const Playground = () => {
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

  return insertTemplateOnContainer(template)
}
