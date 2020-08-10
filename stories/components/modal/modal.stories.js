import { withKnobs, boolean } from '@storybook/addon-knobs'
import { insertTemplateOnContainer, formatClassNames } from '../../../.storybook/helpers'
import html from './modal.sample'

export default {
  title: 'Components/Modal',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Modal = () => html

export const Playground = () => {
  const visibility = boolean('Visibility', true)
  const isAside = boolean('Aside', false)
  const visibleClass = visibility ? 'is-visible' : ''
  const asideClass = isAside ? 'ch-modal--aside': ''
  const openClass = visibility ? 'is-open' : ''

  const overlayClasses = formatClassNames(`ch-overlay ${visibleClass}`)
  const modalClasses = formatClassNames(`ch-modal ${openClass} ${asideClass}`)

  const template = `
    <div class="${overlayClasses}">
      <div class="ch-overlay-content">
        <div class="${modalClasses}">
          <header class="ch-modal-header">
            <h4 class="ch-modal-header-content">Lorem ipsum dolor sit amet</h4>
            <button type="button" class="ch-modal-header-actions ch-button ch-button-icon ch-button--ghost ch-paddingless" role="close">
              <i class="ch-icon fal fa-times"></i>
            </button>
          </header>

          <main class="ch-modal-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores.</p>
          </main>

          <footer class="ch-modal-footer">
            <button type="button" class="ch-button ch-button--primary">Primary</button>
            <button type="button" class="ch-button ch-button--ghost">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  `

  return insertTemplateOnContainer(template)
}
