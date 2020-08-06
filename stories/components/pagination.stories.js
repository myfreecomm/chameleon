import { withKnobs, radios } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../.storybook/helpers'

export default {
  title: 'Components/Pagination',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

const sizes = {
  default: '',
  small: 'ch-pagination--small'
}

export const Pagination = () => {
  const paginationSizes = radios('Sizes', sizes, '')
  const classes = formatClassNames(`ch-pagination ${paginationSizes}`)

  const template = `
    <nav class="${classes}">
      <a href="#" class="ch-pagination-item ch-pagination-item--previous">
        <i class="ch-icon"></i>
      </a>

      <a href="#" class="ch-pagination-item ch-pagination-item--first">
        1
      </a>

      <button type="button" class="ch-pagination-item ch-pagination-item--gap">
        <i class="ch-icon"></i>
      </button>

      <a href="#" class="ch-pagination-item" title="4">
        4
      </a>

      <a href="#" class="ch-pagination-item" title="5">
        5
      </a>

      <button type="button" class="ch-pagination-item ch-pagination-item--gap">
        <i class="ch-icon"></i>
      </button>

      <a href="#" class="ch-pagination-item ch-pagination-item--last">
        120
      </a>

      <a href="#" class="ch-pagination-item ch-pagination-item--next">
        <i class="ch-icon"></i>
      </a>
    </nav>
  `

  return insertTemplateOnContainer(template, 'Pagination')
}
