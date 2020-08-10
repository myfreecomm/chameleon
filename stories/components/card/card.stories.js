import { withKnobs, boolean } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../../.storybook/helpers'
import html from './card.sample'

export default {
  title: 'Components/Card',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Simple = () => html

export const Paddingless = () => {
  const template = `
    <div class="ch-card ch-paddingless">
      <header class="ch-card-header">
        <h4>Lorem ipsum dolor sit amet</h4>
      </header>

      <nav class="ch-menu">
        <a href="#" class="ch-menu-item">First option</a>
        <a href="#" class="ch-menu-item">Second option</a>
        <a href="#" class="ch-menu-item">Third option</a>
      </nav>

      <footer class="ch-card-footer">
        <button type="button" class="ch-button ch-button--primary">Primary</button>
        <button type="button" class="ch-button ch-button--secondary">Secondary</button>
      </footer>
    </div>
  `
  return template
}

export const Playground = () => {
  const butonActive = boolean('Active', false)
  const isActive = butonActive ? 'is-active' :  ''

  const template = `
    <div class="ch-card ch-card--interactive ${isActive}">
      <h4>
        Lorem ipsum dolor sit amet
        <span class="ch-title-sub">Consectetur adipisicing elit</span>
      </h4>
    </div>
  `
  return insertTemplateOnContainer(template)
}
