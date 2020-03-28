import * as React from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Entry, Insta, OurMission } from '../sections'
import Footer from '../components/footer/Footer'
import entryData from '../content/home/sections/entry.yaml'
import instaData from '../content/home/sections/insta.yaml'
import ourMission from '../content/home/sections/our-mission.yaml'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Entry {...entryData} />
      <Insta {...instaData} />
      <OurMission {...ourMission} />
      <Footer />
    </Page>
  </IndexLayout>
)

export default IndexPage
