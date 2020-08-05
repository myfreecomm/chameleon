import { withKnobs } from '@storybook/addon-knobs'
import { insertTemplateOnContainer } from '../../.storybook/helpers'

export default {
  title: 'Components/Table',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: ''
    }
  }
}

export const Simple = () => {
  const template = `
    <table class="ch-table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Signal name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Online</td>
          <td>Astrid: NE shered maneged-features</td>
        </tr>

        <tr>
          <td>Offline</td>
          <td>Cosmo: prod shered ares-maneged</td>
        </tr>

        <tr>
          <td>Online</td>
          <td>Phoenix: prod shered Lyra-maneged</td>
        </tr>
      </tbody>
  </table>
  `

  return insertTemplateOnContainer(template, 'Simple')
}

export const Complex = () => {
  const template = `
    <table class="ch-table">
      <thead>
        <tr>
          <th>Signal name</th>
          <th>Severity</th>
          <th>Stage</th>
          <th class="ch-table-cell--actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Astrid: NE shered maneged-features</td>
          <td class="ch-table-cell--compact">
            <span class="ch-tag ch-tag--warning">Medium</span>
          </td>
          <td>Triaged</td>
          <td class="ch-table-cell--actions">
            <button type="button" class="ch-button ch-button--icon ch-button--ghost">
              <i class="ch-icon fal fa-pen"></i>
            </button>

            <button type="button" class="ch-button ch-button--negative ch-button--icon ch-button--ghost">
              <i class="ch-icon fal fa-trash-alt"></i>
            </button>
          </td>
        </tr>

        <tr>
          <td>Cosmo: prod shered ares-maneged</td>
          <td class="ch-table-cell--compact">
            <span class="ch-tag ch-tag--negative">Huge</span>
          </td>
          <td>Triaged</td>
          <td class="ch-table-cell--actions">
            <button type="button" class="ch-button ch-button--icon ch-button--ghost">
              <i class="ch-icon fal fa-pen"></i>
            </button>

            <button type="button" class="ch-button ch-button--negative ch-button--icon ch-button--ghost">
              <i class="ch-icon fal fa-trash-alt"></i>
            </button>
          </td>
        </tr>

        <tr>
          <td>Phoenix: prod shered Lyra-maneged</td>
          <td class="ch-table-cell--compact">
            <span class="ch-tag ch-tag--info">Minor</span>
          </td>
          <td>Not triaged</td>
          <td class="ch-table-cell--actions">
            <button type="button" class="ch-button ch-button--icon ch-button--ghost">
              <i class="ch-icon fal fa-pen"></i>
            </button>

            <button type="button" class="ch-button ch-button--negative ch-button--icon ch-button--ghost">
              <i class="ch-icon fal fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
  </table>
  `

  return insertTemplateOnContainer(template, 'Complex')
}
