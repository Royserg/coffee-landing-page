import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const Inner = styled.div`
  width: 100%;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
      <Header />
      <Inner>
        {children}
        <Footer />
      </Inner>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
