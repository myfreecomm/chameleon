import copyCodeBlock from '@pickra/copy-code-block'

import hljs from 'highlight.js/lib/highlight'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', xml)

const codeBlockOptions = {
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

    .container pre {
      max-width: 100%;
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

export const parseToCodeBlock = (block) => {
  return copyCodeBlock(block, codeBlockOptions)
}

export const insertTemplateOnContainer = (block, name, beforeHTML, afterHTML) => `
  <div style="padding: 2rem">
    <h1 class="ch-title ch-title--1">${name}</h1>

    ${ beforeHTML ? beforeHTML : ''}

    <br />

    ${block}

    <br /><br />

    ${parseToCodeBlock(block)}

    ${ afterHTML ? afterHTML : ''}
  </div>
`

export const formatClassNames = (str) => {
  return str.trim().replace(/ +(?= )/g,'');
}
