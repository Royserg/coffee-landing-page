import { graphql } from 'gatsby'

export const SectionImage = graphql`
  fragment sectionImage on File {
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const ShowCaseImage = graphql`
  fragment showCaseImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const AwatarImage = graphql`
  fragment awatarImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`