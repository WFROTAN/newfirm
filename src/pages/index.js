import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import WhatWeDo from "../components/sections/whatwedo"
import Features from "../components/sections/features"
import Quality from "../components/sections/quality"
import Portfolio from "../components/sections/portfolio"
import Pricing from "../components/sections/pricing"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <WhatWeDo />
    <Features />
    <Quality />
    <Portfolio />
    <Pricing />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
