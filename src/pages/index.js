import React from "react"

import Layout from "../components/layout"
import Banner from "../components/Banner"
import AboutMe from "../components/AboutMe"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import styled from 'styled-components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Banner />
      <AboutMe />
      <Skills />
      <Contact />
    </Container>
  </Layout>
)

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  border-left: 1px solid #707070;
  border-right: 1px solid #707070;
  background-color: white;
  overflow-x: hidden;
  @media(max-width: 960px) {
    width: 100%;
    border: none;
  }
`


export default IndexPage
