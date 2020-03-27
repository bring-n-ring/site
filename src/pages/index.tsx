import * as React from 'react'
import Page from '../components/Page'
import appDescriptionData from '../content/home/sections/app-description.yaml'
import entryData from '../content/home/sections/entry.yaml'
import instaData from '../content/home/sections/insta.yaml'
import ourMission from '../content/home/sections/our-mission.yaml'
import IndexLayout from '../layouts'
import { Entry, Insta, OurMission } from '../sections'
import AppDescription from '../sections/app-description/AppDescription'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Entry {...entryData} />
      <AppDescription {...appDescriptionData} />
      <Insta {...instaData} />
      <OurMission {...ourMission} />
    </Page>
  </IndexLayout>
)

export default IndexPage
