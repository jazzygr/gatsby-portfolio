import React from "react"

import Layout from "../components/layout"
import Banner from "../components/Banner"
import AboutBlurb from "../components/AboutBlurb"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import styled from 'styled-components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Banner />
      <AboutBlurb />
      <Skills />
    </Container>
  </Layout>
)

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  border-left: 1px solid #707070;
  border-right: 1px solid #707070;
  background-color: white;
`


export default IndexPage
