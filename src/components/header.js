import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Button from './button';

const Wrapper = styled.div`
  /* background-color: darkslateblue; */
`

const Inner = styled.div`
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const Heading = styled.h1`
  font-size: 2em;
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