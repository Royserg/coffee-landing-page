import React from 'react';
import styled, { css } from 'styled-components';
import { device } from './device';

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
  width: 90px;
  height: 90px;
  margin-bottom: .7em;
  transition: all .5s;

  &:hover {
    transform: scale(1.3);
  }
`


const Section = styled.section`
  padding: 60px 20px 30px 20px;
  height: 1000px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    height: 500px;
  }
`

const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width: 1100px;
  ${flexCenter}
  flex-direction: column;
  font-size: 1.4em;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const IconContainer = styled.div`
  padding: 15px;
  ${flexCenter}
  flex-direction: column;
  justify-content: flex-start;
  height: 70%;
  width: 100%;

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
  margin-bottom: .6em;
  font-weight: 900;
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