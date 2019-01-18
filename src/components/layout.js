import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,900');
    font-family: 'Lato', sans-serif;
  }
`

const Inner = styled.div`
  width: 100%;
  padding-top: 0;
  font-family: 'Lato', sans-serif;
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
