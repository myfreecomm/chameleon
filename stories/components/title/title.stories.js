import { select, text } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../../.storybook/helpers'
import { titleHTML } from './title.sample'

export default {
  title: 'Components/Title',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  },
}

const sizes = {
  h1: 'ch-title--1',
  h2: 'ch-title--2',
  h3: 'ch-title--3',
  h4: 'ch-title--4',
  h5: 'ch-title--5',
  h6: 'ch-title--6',
}

export const Title = () => titleHTML

export const Playground = () => {
  const headingText = text('Title', 'This is a title example')
  const subHeadingText = text('Subtitle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores.')
  const headingVariation = select('Sizes', sizes, 'ch-title--1')

  const tag = Object.keys(sizes).find(key => sizes[key] === headingVariation)

  const template = `
    <${tag}>
      ${headingText}
      <div class="ch-title-sub">${subHeadingText}</div>
    </${tag}>
  `

  return insertTemplateOnContainer(template)
}
