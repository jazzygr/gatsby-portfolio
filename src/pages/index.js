import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/Banner"
import AboutBlurb from "../components/AboutBlurb"
import SEO from "../components/seo"
import Cards from "../components/Cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Banner />
      <AboutBlurb />
      <Cards />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
