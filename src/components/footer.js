import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby';

import { Facebook } from 'styled-icons/fa-brands/Facebook'
import { TwitterSquare } from 'styled-icons/fa-brands/TwitterSquare'
import { Instagram } from 'styled-icons/fa-brands/Instagram'

const flexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledFooter = styled.footer`
  ${flexCentered};
  flex-direction: column;
  height: 250px;
  width: 100%;
  padding: 40px 0;
`

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LinksContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: .9em;
  margin-bottom: 1em;
`

const Credits = styled.p`
  font-size: .9em;
  color: grey;
`

const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 1em;
  text-decoration: none;

  :hover {
    color: #AF5A76;
    text-decoration: underline;
  }
`

const LinkSeparator = styled.li`
  font-size: 1.2em;
  margin: 0 8px;
  color: palevioletred;
`

const IconsContainer = styled.div`
  ${flexCentered}
  /* justify-content: center; */
  width: 80%;
  height: 100%;
  /* padding-right: 10%; */
`

/* icon styles mixin */
const icon = css`
  color: palevioletred;
  width: 60px;
  height: 40px;
  transition: all .5s;
  margin: 0 5px;

  :hover {
    color: #AF5A76;
    transform: scale(1.1);
    cursor: pointer;
  }
`


const StyledFacebookIcon = styled(Facebook)`
  ${icon}
`
const StyledTwitterIcon = styled(TwitterSquare)`
  ${icon}
`
const StyledInstaIcon = styled(Instagram)`
  ${icon}
`


const Footer = () => (
  <StyledFooter>
    <Container>
      <LinksContainer>
        <li>
          <StyledLink to='/'>About</StyledLink>
        </li>
        <LinkSeparator>&sdot;</LinkSeparator>
        <li>
          <StyledLink to='/'>Contact</StyledLink>
        </li>
        <LinkSeparator>&sdot;</LinkSeparator>
        <li>
          <StyledLink to='/'>Terms of Use</StyledLink>
        </li>
        <LinkSeparator>&sdot;</LinkSeparator>
        <li>
          <StyledLink to='/'>Privacy Policy</StyledLink>
        </li>
      </LinksContainer>
      <Credits>
        &copy; Coffee Landing Page 2019.
      </Credits>
    </Container>
    <IconsContainer>
      <StyledFacebookIcon />
      <StyledTwitterIcon />
      <StyledInstaIcon />
    </IconsContainer>
  </StyledFooter>
)

export default Footer;