import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CallToAction from '../components/callToAction';
import IconsGrid from '../components/iconsGrid';
import Showcase from '../components/showcase';
import Testimonials from '../components/testimonials';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header>
      <CallToAction
        text="Build a Landing page for your Coffee Place!"
        image={data.sectionImg.childImageSharp.fluid}
      />
    </header>
    <IconsGrid />
    <Showcase
        image1={data.showcase1.childImageSharp.fluid}
        image2={data.showcase2.childImageSharp.fluid}
        image3={data.showcase3.childImageSharp.fluid}
    />
    <Testimonials />
    <CallToAction
      text="Ready to get started? Sign up now!"
      small
      image={data.sectionImg.childImageSharp.fluid}
    />
  </Layout>
)

export const query = graphql`
  query {
    showcase1: file(relativePath: { eq: "showcase_1.jpg" }) {
      ...showCaseImage
    }
    showcase2: file(relativePath: { eq: "showcase_2.jpg" }) {
      ...showCaseImage
    }
    showcase3: file(relativePath: { eq: "showcase_3.jpg" }) {
      ...showCaseImage
    }
    sectionImg: file(relativePath: { eq: "call_to_action_bg.jpg" }) {
      ...sectionImage
    }
  }
`

export default IndexPage
