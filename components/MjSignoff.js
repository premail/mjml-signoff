import reverse from 'lodash/reverse'

import { BodyComponent } from 'mjml-core'

export default class MjSignoff extends BodyComponent {
  static endingTag = true

  static dependencies = {
    'mj-signoff': [],
    'mj-body': ['mj-signoff'],
    'mj-wrapper': ['mj-signoff'],
  }

  static allowedAttributes = {
    'closing': 'string',
    'name': 'string',
    'title': 'string',
    'title2': 'string',
    'title3': 'string',
    'section-padding': 'unit(px){4}',
    'section-align': 'enum(left,center,right)',
    'background-color': 'color',
    'image-position': 'enum(left,right)',
    'image-padding': 'unit(px){4}',
    'image-src': 'string',
    'image-width': 'unit(px,%)',
    'image-height': 'unit(px,%)',
    'image-alt': 'string',
    'text-column-padding': 'unit(px){4}',
  }

  static defaultAttributes = {
    'section-padding': '10px 0',
    'section-align': 'left',
    'image-position': 'left',
    'image-padding': '0',
    'text-column-padding': '0 10px',
  }

  renderImage() {
    return `
      <mj-column
        css-class="column signoff__image"
        ${this.htmlAttributes({
          width: this.getAttribute('image-width'),
          'background-color': this.getAttribute('background-color'),
        })}
      >
        <mj-image
          ${this.htmlAttributes({
            padding: this.getAttribute('image-padding'),
            src: this.getAttribute('image-src'),
            width: this.getAttribute('image-width'),
            height: this.getAttribute('image-height'),
            alt: this.getAttribute('image-alt'),
          })}
        >
        </mj-image>
    </mj-column>
    `
  }

  renderText() {
    let textContent = `
      <mj-column
        css-class="column signoff__text"
        ${this.htmlAttributes({
          'background-color': this.getAttribute('background-color'),
        })}
      >
        <mj-text
          ${this.htmlAttributes({
            padding: this.getAttribute('text-column-padding'),
          })}
        >
      `

    if (this.getAttribute('closing')) {
      textContent += `<p class="signoff__closing">${this.getAttribute('closing')}</p>`
    }

    if (this.getAttribute('name')) {
      textContent += `<p class="signoff__name">${this.getAttribute('name')}</p>`
    }

    if (this.getAttribute('title')) {
      textContent += `<p class="signoff__title">${this.getAttribute('title')}</p>`
    }

    if (this.getAttribute('title2')) {
      textContent += `<p class="signoff__title2">${this.getAttribute('title2')}</p>`
    }

    if (this.getAttribute('title3')) {
      textContent += `<p class="signoff__title3">${this.getAttribute('title3')}</p>`
    }

    textContent += `
        <div class="signoff__custom">
          ${this.getContent()}
        </div>
        </mj-text>
      </mj-column>
    `

    return textContent
  }

  render() {
    const content = [this.renderText(), this.renderImage()]
    const orderedContent = this.getAttribute('image-position') === 'right' ? content : reverse(content)

    return this.renderMJML(`
      <mj-section
        css-class="signoff"
        ${this.htmlAttributes({
          padding: this.getAttribute('section-padding'),
          'background-color': this.getAttribute('background-color'),
          'text-align': this.getAttribute('section-align'),
        })}
      >
        ${orderedContent}
      </mj-section>
    `)
  }
}
