import React from "react"
import styled from "styled-components"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

import { Section } from "../components/global"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <div className="portfolio">
      <StyledSection>
        <PortfolioText>
          <TextContent>
            <h2>Our Portfolio</h2>
            <p>
              Curious what we did with others? See some of our (not under NDA)
              works.
            </p>
          </TextContent>
        </PortfolioText>
        <PortfolioContainer>
          <PortfolioItems>
            <PortfolioRow>
              <PortfolioItem href="https://flatworld.co/">
                <h4>Flat World</h4>
                <p>Going JAMstack with Hassle-free WordPress and Gatsby.</p>
              </PortfolioItem>
              <PortfolioItem href="https://autoloadit.com/">
                <h4>AutoloadIT</h4>
                <p>Blazing Fast, SEO friendly eCommerce for Anime fans.</p>
              </PortfolioItem>
              <PortfolioItem href="https://lbifinancial.com/">
                <h4>LBI Financial</h4>
                <p>The fastest insurance business website in NYC.</p>
              </PortfolioItem>
            </PortfolioRow>
          </PortfolioItems>
        </PortfolioContainer>
      </StyledSection>
    </div>
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage

const StyledSection = styled(Section)`
  margin-top: 100px;
`

const PortfolioText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

const TextContent = styled.div`
  text-align: center;
`

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const PortfolioItems = styled.div`
  width: 1000px;
`

const PortfolioRow = styled.div`
  display: flex;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #222;
  }

  a:hover {
    background-color: #ff4432;
  }
`

const PortfolioItem = styled.a`
  width: calc(33.333333% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #222;
  padding: 0 30px;
  padding-bottom: 25px;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const PortfolioButton = styled.button`
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: #ff4432;
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
