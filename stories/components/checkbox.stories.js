import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

export default {
  title: 'Components/Checkbox',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Checkbox = () => {
  const template = `
    <div class="ch-spaceInlineGroup">
      <div class="ch-checkbox">
        <input type="checkbox" id="option_1" />
        <label for="option_1">Option 1</label>
      </div>
      <div class="ch-checkbox">
        <input type="checkbox" id="option_2" />
        <label for="option_2">Option 2</label>
      </div>
      <div class="ch-checkbox">
        <input type="checkbox" id="option_3" disabled />
        <label for="option_3">Option 3</label>
      </div>
    </div>
  `

  return insertTemplateOnContainer(template, 'Checkbox')
}
