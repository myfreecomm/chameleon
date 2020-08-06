import { withKnobs, boolean, radios } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../.storybook/helpers'

export default {
  title: 'Components/Select',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: '',
    }
  }
}

const sizes = {
  default: '',
  small: 'ch-select--small'
}

export const Select = () => {
  const disabled = boolean('Disabled', false)
  const readonly = boolean('Readonly', false)
  const multiple = boolean('Multiple', false)
  const sizeClass = radios('Sizes', sizes, '')
  const hasError = boolean('With Error', false)
  const errorClass = hasError ? 'ch-select--negative' : ''

  const props = formatClassNames(`${disabled ? 'disabled' : ''} ${readonly ? 'readonly' : ''} ${multiple ? 'multiple' : '' }`)
  const classes = formatClassNames(`ch-select ${errorClass} ${sizeClass}`)

  const template = `
    <select class="${classes}" ${props}>
      <option value="1">Option 1</option>
      <option value="2" selected="">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  `

  return insertTemplateOnContainer(template, 'Select')
}
