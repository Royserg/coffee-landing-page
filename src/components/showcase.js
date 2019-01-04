import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'

const Container = styled.div`
  height: 520px;
  display: flex;
  justify-content: center;
`

const ShowcaseImage = styled(Img)`
  width: 50%;
`

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h2`
  width: 70%;
  margin-bottom: 5px;
`

const Subheading = styled.p`
  font-size: .9em;
  width: 70%;
`

const Showcase = ({ image1, image2, image3 }) => (
  <section>
    <Container>
      <Description>
        <Heading>Fully Responsive Design</Heading>
        <Subheading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor venenatis mauris, ac maximus ex tincidunt at. Proin est lacus, accumsan ultrices blandit sed, mattis finibus risus.
        </Subheading>
      </Description>
      <ShowcaseImage fluid={image1} />
    </Container>
    <Container>
      <ShowcaseImage fluid={image2} />
      <Description>
        <Heading>Adaptable to your Needs</Heading>
        <Subheading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor venenatis mauris, ac maximus ex tincidunt at. Proin est lacus, accumsan ultrices blandit sed, mattis finibus risus.
        </Subheading>
      </Description>
    </Container>
    <Container>
      <Description>
        <Heading>Easy to Use & Customize</Heading>
        <Subheading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor venenatis mauris, ac maximus ex tincidunt at. Proin est lacus, accumsan ultrices blandit sed, mattis finibus risus.
        </Subheading>
      </Description>
      <ShowcaseImage fluid={image3} />
    </Container>
  </section>
);

export default Showcase;