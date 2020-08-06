import { withKnobs, boolean, radios } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

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
  small: 'ch-input--small'
}

export const Textarea = () => {
  const disabled = boolean('Disabled', false)
  const readonly = boolean('Readonly', false)
  const sizeClass = radios('Sizes', sizes, '')
  const fluid = boolean('Fluid', false)
  const hasError = boolean('With Error', false)
  const errorClass = hasError ? 'ch-input--negative' : ''
  const fluidClass = fluid ? 'ch-input--fluid' : ''
  const props = `${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''}`.trim()
  const classes = `ch-textarea ${errorClass} ${sizeClass} ${fluidClass}`.trim()

  const template = `
    <textarea placeholder="Insert data" class="${classes}" ${props}></textarea>
  `

  return insertTemplateOnContainer(template, 'Textarea')
}
