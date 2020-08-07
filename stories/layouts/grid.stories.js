import { withKnobs, text } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

export default {
  title: 'Layouts/Grid',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Grid = () => {
  const template = `
    <div class="ch-grid">
      <div class="ch-grid-column">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
    </div>
  `

  return insertTemplateOnContainer(template, 'Grid')
}

export const ColumnsWidth = () => {
  const template = `
    <div class="ch-grid">
      <div class="ch-grid-column">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--3 ch-grid-column--7Tablet ch-grid-column--11Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--2 ch-grid-column--2Tablet ch-grid-column--2Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--2 ch-grid-column--6Tablet ch-grid-column--10Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--3Tablet ch-grid-column--3Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--5Tablet ch-grid-column--9Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--4Tablet ch-grid-column--4Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--4Tablet ch-grid-column--8Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
    </div>
  `

  return insertTemplateOnContainer(template, 'Columns Width')
}

export const ColumnsStart = () => {
  const template = `
    <div class="ch-grid">
      <div class="ch-grid-column ch-grid-column--2">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
      <div class="ch-grid-column ch-grid-column--8Desktop ch-grid-column--start5Desktop">
        <div style="height: 2.5em; background-color: rgba(86, 61, 124, .1);"></div>
      </div>
    </div>
  `
  return insertTemplateOnContainer(template, 'Columns Start')
}
