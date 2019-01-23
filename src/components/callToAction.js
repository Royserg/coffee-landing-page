import React from 'react';
import styled from 'styled-components';
import { device } from './device';

import Button from './button';

const Section = styled.section`
  height: ${props => props.small ? `400px` : `550px`};
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 100%;
  width: 95%;
  max-width: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;

    @media ${device.tablet} {
      font-size: 2.6em;
    }
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;

    button {
      width: 25%;
    }
  }

`

const Input = styled.input`
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  font-size: 1.3rem;
  border: none;
  padding-left: 15px;
  height: 40px;
  margin-bottom: .3em;

  @media ${device.tablet} {
    width: 72%;
    margin-bottom: 0;
  }

  &:focus {
    border: 1px solid blueviolet inset;
  }
`

const CallToAction = ({ text, small, image }) => (
  <Section small={small}
    style={{background: `url(${image.src}) no-repeat center 70% `}}
  >
    <Container>
      <h1>{ text }</h1>
      <Form>
        <Input type='email' placeholder='Enter your email...'/>
        <Button type='submit' text='Sign up!' />
      </Form>
    </Container>
  </Section>
)

export default CallToAction