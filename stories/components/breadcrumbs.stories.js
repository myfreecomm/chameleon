import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

export default {
  title: 'Components/Breadcrumb',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Breadcrumb = () => {
  const template = `
    <nav class="ch-breadcrumbs">
      <a class="ch-breadcrumbs-item" href="#">Path 1</a>
      <a class="ch-breadcrumbs-item" href="#">Path 2</a>
      <span class="ch-breadcrumbs-item">Current path</span>
    </nav>
  `

  return insertTemplateOnContainer(template, 'Breadcrumb')
}
