import React from 'react'
import styled, { css } from 'styled-components'

const flexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledFooter = styled.footer`
  ${flexCentered}
  height: 55px;
  width: 100%;
  padding: 65px 0%;
`

const Container = styled.div`
  padding-left: 10%;
  width: 80%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const LinksContainer = styled.div`
  ${flexCentered}
`

const Credits = styled.p`
  font-size: .9em;
  color: grey;
`

const IconsContainer = styled.div`
  ${flexCentered}
  width: 80%;
  height: 100%;
  padding-right: 10%;
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <LinksContainer>
        Links
      </LinksContainer>
      <Credits>
        &copy; Coffee Landing Page 2019.
      </Credits>
    </Container>
    <IconsContainer>
      icons
    </IconsContainer>
  </StyledFooter>
)

export default Footer;