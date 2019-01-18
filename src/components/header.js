import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Button from './button';

const Wrapper = styled.div`
  width: 100%;
`

const Inner = styled.nav`
  width: 90%;
  padding: .5em;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
`

const Heading = styled.h1`
  font-size: 1.7em;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Inner>
          <Heading>
            <StyledLink to="/">
              {data.site.siteMetadata.title}
            </StyledLink>
          </Heading>
          <Button text="Sign In" small />
        </Inner>
      </Wrapper>
    )}
  />
)

export default Header