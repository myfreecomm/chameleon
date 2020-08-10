import { withKnobs, boolean, radios } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../../.storybook/helpers'
import html from './textarea.sample'

export default {
  title: 'Components/Textarea',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

const sizes = {
  default: '',
  small: 'ch-textarea--small'
}

export const Textarea = () => html


export const Playground = () => {
  const disabled = boolean('Disabled', false)
  const readonly = boolean('Readonly', false)
  const sizeClass = radios('Sizes', sizes, '')
  const fluid = boolean('Fluid', false)
  const hasError = boolean('With Error', false)
  const errorClass = hasError ? 'ch-textarea--negative' : ''
  const fluidClass = fluid ? 'ch-textarea--fluid' : ''
  const props = `${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`.trim()
  const classes = formatClassNames(`ch-textarea ${errorClass} ${sizeClass} ${fluidClass}`)

  const template = `
    <textarea placeholder="Insert data" class="${classes}" ${props}></textarea>
  `

  return insertTemplateOnContainer(template)
}
