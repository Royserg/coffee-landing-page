import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'


const flexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  background-color: #F8F9FA;
  height: 1100px;
  padding: 50px 10px;
  ${flexCentered};
  flex-direction: column;
`

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 2em;
  font-weight: 900;
  font-size: 1.6em;
`

const Container = styled.div`
  width: 70%;
  ${flexCentered};
  flex-direction: column;
`

const TestimonialItem = styled.div`
  height: 307px;
  ${flexCentered}
  flex-direction: column;
  justify-content: flex-start;
`

const Awatar = styled(Img)`
  border-radius: 50%;
  margin-bottom: 1em;
  height: 192px;
  width: 192px;
  box-shadow: 2px 6px 10px rgba(0,0,0, .55);
`
const Name = styled.h5`
  font-weight: 900;
  margin-bottom: .5em;
  font-size: 1.1em;
  text-align: center;
`

const Caption = styled.p`
  text-align: center;
  font-size: .9em;
  font-weight: 100;
  margin-bottom: 1em;
`

const Testimonials = () => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "testimonial_1.jpg" }) {
          ...awatarImage
        }
        image2: file(relativePath: { eq: "testimonial_2.jpg" }) {
          ...awatarImage
        }
        image3: file(relativePath: { eq: "testimonial_3.jpg" }) {
          ...awatarImage
        }
      }
    `}
    render={data => (
        <Section>
          <Heading>What people are saying...</Heading>
          <Container>
            <TestimonialItem>
              <Awatar fluid={data.image1.childImageSharp.fluid}/>

              <Name>Stefan Z.</Name>
              <Caption>"That's amazing!!"</Caption>
            </TestimonialItem>

            <TestimonialItem>
              <Awatar fluid={data.image2.childImageSharp.fluid}/>
              <Name>Caroline M.</Name>
              <Caption>"I was finally able to build landing page for my business"</Caption>
            </TestimonialItem>

            <TestimonialItem>
              <Awatar fluid={data.image3.childImageSharp.fluid}/>
              <Name>Anna G.</Name>
              <Caption>"I love it!"</Caption>
            </TestimonialItem>
          </Container>
        </Section>
    )}
  />
)

export default Testimonials;