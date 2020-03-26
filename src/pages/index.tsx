import { IonButton } from '@ionic/react'
import * as React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import Entry, { EntryProps } from '../sections/entry/Entry'

const entryI18n: EntryProps = {
  title: 'Kontaktlos einkaufen für Risikogruppen.',
  slug: 'sicher. bargeldlos. einfach.',
  body:
    'Du willst helfen? Ein paar Euro in der Krise dazu verdienen? Leben retten? Dann melde dich jetzt an und werde bringer oder lass bringen',
  btn: 'Beta-Tester werden',
  link: 'as',
  sponsorsTitle: 'Bekannt aus:',
  sponsors: [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tagesschau_Logo_2015.svg/120px-Tagesschau_Logo_2015.svg.png',
      alt: 'tagesschau',
      link: 'https://www.tagesschau.de/'
    },
    {
      src:
        'data:image/jpeg;base64,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',
      alt: 'tagesschau',
      link: 'https://www.tagesschau.de/'
    }
  ]
}
const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Entry {...entryI18n} />
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <IonButton color="secondary">Primary</IonButton>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
