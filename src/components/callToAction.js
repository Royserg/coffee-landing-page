import React from 'react';
import styled from 'styled-components';

import Button from './button';

const Section = styled.section`
  padding: 0 100px;
  height: ${props => props.small ? `300px` : `600px`};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 80%;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 60%;
  border-radius: 5px;
  font-size: 1.5rem;
  border: none;
  padding-left: 15px;
  height: 45px;
  margin-right: 1rem;

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