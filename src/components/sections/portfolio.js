import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Portfolio = () => (
  <StyledSection id="portfolio">
    <SectionTitle>
      <span>OUR</span>&nbsp;PORTFOLIO
    </SectionTitle>
    <SectionText>
      <p>
        Curious what we did with others? See some of our (not under NDA) works.
      </p>
    </SectionText>
    <PortfolioContainer>
      <PortfolioItems>
        <PortfolioRow>
          <PortfolioItem href="https://flatworld.co/">
            <h4>Flat World</h4>
            <p>Going JAMstack with Hassle-free WordPress and Gatsby.</p>
          </PortfolioItem>
          <PortfolioItem href="https://www.outside-the-lines.co.uk/">
            <h4>Outside the Lines</h4>
            <p>ECommerce website for a clothing brand.</p>
          </PortfolioItem>
          <PortfolioItem href="https://foxcrestmedia.com/">
            <h4>Fox Crest Media</h4>
            <p>Blazing Fast & SEO Friendly site for a copy write agency.</p>
          </PortfolioItem>
        </PortfolioRow>
      </PortfolioItems>
    </PortfolioContainer>
  </StyledSection>
)

export default Portfolio

const StyledSection = styled(Section)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;

  span {
    color: #ff4432;
  }

  @media screen and (max-width: 435px) {
    display: flex;
    flex-direction: column;
  }
`

const SectionText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;

  p {
    width: 660px;
    text-align: center;
  }
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
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 932px) {
    flex-direction: column;
    align-items: center;
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

  @media screen and (max-width: 932px) {
    width: 70%;
    margin-bottom: 20px;
  }
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
