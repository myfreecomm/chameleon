import { withKnobs, text } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

export default {
  title: 'Layouts/Blankslate',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Blankslate = () => {
  const title = text('Title', 'Adicione filiais')
  const description = text('Description', 'Elas são indispensáveis para garantir que seus documentos fiscais sejam autorizados com sucesso.')
  const buttonText = text('Button label', 'Adicionar')

  const template = `
    <div class="ch-blankslate">
      <div class="ch-blankslate-content">
        <i class="ch-icon fal fa-empty-set ch-icon--xl"></i>

        <h2 class="ch-title ch-title--2">${title}</h2>

        <p>
          ${description}
        </p>

        <button type="button" class="ch-button ch-button--primary ch-button--outline">
          ${buttonText}
        </button>
      </div>
    </div>
  `

  return insertTemplateOnContainer(template, 'Blankslate')
}
