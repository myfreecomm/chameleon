import { withKnobs } from '@storybook/addon-knobs'
import { parseToCodeBlock } from '../.storybook/helpers'

export default {
  title: 'Components|Avatar',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Default = () => {
  const template = `
    <img class="ch-avatar" src="https://i.pravatar.cc/72" alt="Lorem Ipsum" title="Lorem Ipsum" />
  `

  return `
    <div style="padding: 2rem">
      <h1 class="ch-title ch-title--1">Avatar</h1>

      <br />

      ${template}

      <br /><br />

      ${parseToCodeBlock(template)}
    </div>
  `
}
