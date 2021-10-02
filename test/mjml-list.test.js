import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'

import MjSignoff from '../lib/MjSignoff.js'

function toHtml (mjml) {
  const conversion = mjml2html(mjml)
  const errors = conversion.errors
  if (errors.length > 0) {
    return errors
  }
  return conversion.html
}

describe('mjml-signoff', () => {
  beforeAll(() => {
    registerComponent(MjSignoff)
  })

  it('should include the closing', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-signoff
          closing="Thank you,"
          name="John Q. Public"
          title="Wild and Crazy Guy"
          title2="Acme Corp."
          title3="(202) 555-1212"
          image-src="https://picsum.photos/75/100"
          image-width="75px"
          image-height="100px"
          image-alt=""
        >
          <p><a href="https://example.com">Example, Inc.</a></p>
        </mj-signoff>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `)
    ).toContain('Thank you,')
  })

  it('should include the name', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-signoff
          closing="Thank you,"
          name="John Q. Public"
          title="Wild and Crazy Guy"
          title2="Acme Corp."
          title3="(202) 555-1212"
          image-src="https://picsum.photos/75/100"
          image-width="75px"
          image-height="100px"
          image-alt=""
        >
          <p><a href="https://example.com">Example, Inc.</a></p>
        </mj-signoff>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `)
    ).toContain('John Q. Public')
  })

  it('should include the title', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-signoff
          closing="Thank you,"
          name="John Q. Public"
          title="Wild and Crazy Guy"
          title2="Acme Corp."
          title3="(202) 555-1212"
          image-src="https://picsum.photos/75/100"
          image-width="75px"
          image-height="100px"
          image-alt=""
        >
          <p><a href="https://example.com">Example, Inc.</a></p>
        </mj-signoff>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `)
    ).toContain('Wild and Crazy Guy')
  })

  it('should include the title2', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-signoff
          closing="Thank you,"
          name="John Q. Public"
          title="Wild and Crazy Guy"
          title2="Acme Corp."
          title3="(202) 555-1212"
          image-src="https://picsum.photos/75/100"
          image-width="75px"
          image-height="100px"
          image-alt=""
        >
          <p><a href="https://example.com">Example, Inc.</a></p>
        </mj-signoff>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `)
    ).toContain('Acme Corp.')
  })

  it('should include the title3', () => {
    expect(
      toHtml(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-signoff
          closing="Thank you,"
          name="John Q. Public"
          title="Wild and Crazy Guy"
          title2="Acme Corp."
          title3="(202) 555-1212"
          image-src="https://picsum.photos/75/100"
          image-width="75px"
          image-height="100px"
          image-alt=""
        >
          <p><a href="https://example.com">Example, Inc.</a></p>
        </mj-signoff>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
    `)
    ).toContain('(202) 555-1212')
  })

  //   it('should include the enclosed content', () => {
  //     expect(
  //       toHtml(`
  // <mjml>
  //   <mj-body>
  //     <mj-section>
  //       <mj-column>
  //         <mj-signoff
  //           closing="Thank you,"
  //           name="John Q. Public"
  //           title="Wild and Crazy Guy"
  //           title2="Acme Corp."
  //           title3="(202) 555-1212"
  //           image-src="https://picsum.photos/75/100"
  //           image-width="75px"
  //           image-height="100px"
  //           image-alt=""
  //         >
  //           <p><a href="https://example.com">Example, Inc.</a></p>
  //         </mj-signoff>
  //       </mj-column>
  //     </mj-section>
  //   </mj-body>
  // </mjml>
  //     `)
  //     ).toContain('<p><a href="https://example.com">Example, Inc.</a></p>')
  //   })

  //   it('should include the image', () => {
  //     expect(
  //       toHtml(`
  // <mjml>
  //   <mj-body>
  //     <mj-section>
  //       <mj-column>
  //         <mj-signoff
  //           closing="Thank you,"
  //           name="John Q. Public"
  //           title="Wild and Crazy Guy"
  //           title2="Acme Corp."
  //           title3="(202) 555-1212"
  //           image-src="https://picsum.photos/75/100"
  //           image-width="75px"
  //           image-height="100px"
  //           image-alt=""
  //         >
  //           <p><a href="https://example.com">Example, Inc.</a></p>
  //         </mj-signoff>
  //       </mj-column>
  //     </mj-section>
  //   </mj-body>
  // </mjml>
  //     `)
  //     ).toContain('<img alt="" height="100" src="https://picsum.photos/75/100" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;font-size:16px;" width="75" />')
  //   })
})
