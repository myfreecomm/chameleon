import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

export default {
  title: 'Components/Brand',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Brand = () => {
  const template = `
    <div class="ch-brand">
      <img src="https://user-images.githubusercontent.com/6816187/79229373-4c814f80-7e39-11ea-8b7a-248c4fa5f153.png" class="ch-brand-icon">
      <h1 class="ch-brand-name">Chameleon</h1>
    </div>
  `

  return insertTemplateOnContainer(template, 'Brand')
}
