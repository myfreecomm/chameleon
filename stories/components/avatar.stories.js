import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

export default {
  title: 'Components/Avatar',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Avatar = () => {
  const template = `
    <img class="ch-avatar" src="https://i.pravatar.cc/72" alt="Lorem Ipsum" title="Lorem Ipsum" />
  `

  return insertTemplateOnContainer(template, 'Avatar')
}
