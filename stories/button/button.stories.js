import { text, radios } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import docs from './docs.mdx'

export default {
  title: 'Components|Buttons',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: docs,
    }
  }
}


export const Common = () => {
  const types = {
    default: '',
    primary: 'ch-button--primary',
    negative: 'ch-button--negative',
    brand: 'ch-button--brand'
  }

  const variations = {
    default: '',
    outline: 'ch-button--outline',
    ghost: 'ch-button--ghost'
  }

  const sizes = {
    default: '',
    small: 'ch-button--small',
  }

  const buttonText = text('Texto', 'Button')
  const buttonTypes = radios('Tipos', types, '')
  const buttonVariations = radios('Variações', variations, '')
  const buttonSizes = radios('Tamanhos', sizes, '')

  const classes = `ch-button ${buttonTypes} ${buttonVariations} ${buttonSizes}`.trim()

  return `
    <div style="padding: 2rem">
      <h1 class="ch-title ch-title--1">Buttons</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button class="${classes}">${buttonText}</button>
      <pre>
        <code class="hljs html">
          ${`<button class="${classes}">Text</button>`.replace(/</g, '&lt;')}
        </code>
      </pre>
      <h3 class="ch-title ch-title--3">Exemplos</h3>
      <div class="ch-spaceInlineGroup">
        <button class="ch-button ch-button--primary">Action</button>
        <button class="ch-button ch-button--outline">Action</button>
        <button class="ch-button ch-button--ghost ch-button--negative">Action</button>
      </div>
    </div>
  `
}
