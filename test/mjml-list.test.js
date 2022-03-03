import fs from 'fs'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'

import MjSignoff from '../lib/index.js'

function toHtml (mjml) {
  const conversion = mjml2html(mjml)
  const errors = conversion.errors
  if (errors.length > 0) {
    return errors
  }
  return conversion.html
}

const data = fs.readFileSync('./docs/example.mjml', 'utf8')

describe('mjml-signoff', () => {
  beforeAll(() => {
    registerComponent(MjSignoff)
  })

  it('should include the closing', () => {
    expect(toHtml(data)).toContain(
      '<p class="signoff__closing" style="margin-top: 0;">Thank you,</p>'
    )
  })

  it('should include the name', () => {
    expect(toHtml(data)).toContain(
      '<p class="signoff__name" style="margin-bottom: 0;">John Q. Public</p>'
    )
  })

  it('should include the title', () => {
    expect(toHtml(data)).toContain(
      '<p class="signoff__title" style="margin-top: 0; margin-bottom: 0;">Your Friendly Neighbor</p>'
    )
  })

  it('should include the enclosed content', () => {
    expect(toHtml(data)).toContain(
      '<div class="signoff__custom">\n            <p style="margin-top: 0;"><a href="https://example.com" style="color: #800080; font-weight: bold;">Example, Inc.</a></p>\n          </div>'
    )
  })

  it('should include the image', () => {
    expect(toHtml(data)).toContain(
      '<img alt height="100" src="https://picsum.photos/75/100" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;font-size:16px;" width="75">'
    )
  })
})
