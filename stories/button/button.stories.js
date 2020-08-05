import { text, radios } from '@storybook/addon-knobs'
import { withKnobs } from '@storybook/addon-knobs'
import docs from './docs.mdx'
import copyCodeBlock from '@pickra/copy-code-block'

import hljs from 'highlight.js/lib/highlight'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', xml)

const options = {
  lang: 'html',
  colors: {
    background: '#222',
    textColor: '#fff',
    attr: '#fab',
    string: '#abe',
    tag: '#afa',
    name: '#ea8'
  },
  cssOverrides: `
    .container {
      position: relative;
      padding: 2em;
      align-items: center;
    }

    .container button {
      position: absolute;
      bottom: -1px;
      right: -1px;
      padding: 3px 5px;
      font-size: 12px;
      font-weight: bold;
      color: #999;
      background-color: #eee !important;
      border-radius: 4px 0 0 0;
      outline: 0;
    }

    .container button:hover {
      color: #666;
    }

    .container code {
      padding-bottom: 0;
    }
  `
}

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

  const buttonText = text('Texto', 'Submit')
  const buttonTypes = radios('Tipos', types, '')
  const buttonVariations = radios('Variações', variations, '')
  const buttonSizes = radios('Tamanhos', sizes, '')

  const classes = `ch-button ${buttonTypes} ${buttonVariations} ${buttonSizes}`.trim()

  return `
    <div style="padding: 2rem">
      <h1 class="ch-title ch-title--1">Buttons</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <br />

      <button class="${classes}">${buttonText}</button>

      <br /><br />

      ${copyCodeBlock(`<button class="${classes}">${buttonText}</button>`, options )}

      <div class="ch-spaceStackGroup">
        <h3 class="ch-title ch-title--3">Exemplos</h3>
        <div class="ch-spaceInlineGroup">
          <button class="ch-button ch-button--primary">Action</button>
          <button class="ch-button ch-button--outline">Action</button>
          <button class="ch-button ch-button--ghost ch-button--negative">Action</button>
        </div>
      </div>
    </div>
  `
}
