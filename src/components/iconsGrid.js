import React from 'react';
import styled, { css } from 'styled-components';

/* == icons == */
import { Monitor } from 'styled-icons/feather/Monitor';
import { Coffee } from 'styled-icons/feather/Coffee';
import { CheckCircle } from 'styled-icons/feather/CheckCircle';

/* flex center mixin */
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

/* icon styles mixin */
const icon = css`
  color: palevioletred;
  width: 100px;
  height: 50px;
  transition: all .5s;

  &:hover {
    transform: scale(1.3);
  }
`


const Section = styled.section`
  padding: 40px 20px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 90%;
  padding: 50px 0;
  height: 300px;
  ${flexCenter}
`

const IconContainer = styled.div`
  padding: 15px;
  ${flexCenter}
  flex-direction: column;
`

const MonitorIcon = styled(Monitor)`
  ${icon}
`

const CoffeIcon = styled(Coffee)`
  ${icon}
`

const CheckIcon = styled(CheckCircle)`
  ${icon}
`

const Heading = styled.h3`
  text-align: center;
  margin-bottom: 5px;
`

const Subheading = styled.p`
  font-size: .9em;
  text-align: center;
`

const IconsGrid = () => (
  <Section>
    <Container>
      <IconContainer>
        <MonitorIcon />
        <Heading>Fully Responsive</Heading>
        <Subheading>Your page will look great on any<br/>device, no matter the size!</Subheading>
      </IconContainer>
      <IconContainer>
        <CoffeIcon />
        <Heading>Adaptable</Heading>
        <Subheading>Choose from many themes that will fit your coffee atmosphere!</Subheading>
      </IconContainer>
      <IconContainer>
        <CheckIcon />
        <Heading>Easy to Use</Heading>
        <Subheading>Ready to customize with your own content!</Subheading>
      </IconContainer>
    </Container>
  </Section>
)

export default IconsGrid;