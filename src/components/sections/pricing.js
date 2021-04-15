import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Section, Container } from "../global"

import CheckIcon from "../../images/product/checkmark-outline.svg"

const Pricing = () => (
  <StyledSection id="pricing">
    <StyledContainer>
      <PricingGrid>
        <PricingItem>
          <PricingTitle>
            <h4>Basic</h4>
          </PricingTitle>
          <PricingText>
            <h3>Starting at</h3>
            <h2>
              $50<span>/mo</span>
            </h2>
            <PricingList>
              <ul>
                <li>
                  <CheckIcon />
                  Wordpress CMS
                </li>
                <li>
                  <CheckIcon />
                  Mobile Friendly
                </li>
                <li>
                  <CheckIcon />
                  Includes Hosting
                </li>
                <li>
                  <CheckIcon />
                  24/7 Customer Service
                </li>
                <li>
                  <CheckIcon />
                  Unlimited Updates
                </li>
              </ul>
            </PricingList>
          </PricingText>
          <AnchorLink href="#contact">
            <PricingButton>Contact Us</PricingButton>
          </AnchorLink>
        </PricingItem>
        <PricingItem id="popular-option">
          <PricingTitle>
            <h4>Advanced</h4>
          </PricingTitle>
          <PricingText>
            <h3>5 Pages</h3>
            <h2>
              $150<span>/mo</span>
            </h2>
            <PricingList>
              <ul>
                <li>
                  <CheckIcon />
                  No Wordpress
                </li>
                <li>
                  <CheckIcon />
                  Handwritten from Scratch
                </li>
                <li>
                  <CheckIcon />
                  High SEO & Performance
                </li>
                <li>
                  <CheckIcon />
                  Mobile Friendly
                </li>
                <li>
                  <CheckIcon />
                  Includes Hosting
                </li>
                <li>
                  <CheckIcon />
                  24/7 Customer Service
                </li>
                <li>
                  <CheckIcon />
                  Unlimited Updates
                </li>
              </ul>
            </PricingList>
          </PricingText>
          <AnchorLink href="#contact">
            <PricingButton>Contact Us</PricingButton>
          </AnchorLink>
        </PricingItem>
        <PricingItem>
          <PricingTitle>
            <h4>One Time Payment</h4>
          </PricingTitle>
          <PricingText>
            <h3>Starting At</h3>
            <h2>$1,000+</h2>
            <PricingList>
              <ul>
                <li>
                  <CheckIcon />
                  Wordpress or Static
                </li>
                <li>
                  <CheckIcon /> 3 Rounds of Revisions
                </li>
                <li>
                  <CheckIcon />
                  No Monthly Payments
                </li>
                <li>
                  <CheckIcon /> Contact for Details!
                </li>
              </ul>
            </PricingList>
          </PricingText>
          <AnchorLink href="#contact">
            <PricingButton>Contact Us</PricingButton>
          </AnchorLink>
        </PricingItem>
      </PricingGrid>
    </StyledContainer>
  </StyledSection>
)

export default Pricing

const StyledSection = styled(Section)`
  padding-top: 50px;
  padding-bottom: 80px;
  margin-top: 30px;
`

const StyledContainer = styled(Container)``

const PricingGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  #popular-option {
    height: 100%;

    h4 {
      background: #a7ffa4;
    }

    ul {
      height: 100%;
    }
  }

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`

const PricingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 300px;
  height: 600px;
  margin: 0;
  border: 2px solid #e6f2ff;
  border-radius: 6px;
  max-width: 400px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
    width: 500px;

    &:not(:last-child) {
      margin-right: 0px;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 350px;
  }

  a {
    text-decoration: none;
  }
`

const PricingTitle = styled.h4`
  background: #f1f8ff;
  border-bottom: 2px solid #e6f2ff;
  width: 100%;
  margin: 0;
  padding: 0;

  h4 {
    color: ${(props) => props.theme.color.primary};
    letter-spacing: 0px;
    text-transform: uppercase;
    font-size: 20px;
    text-align: center;
  }
`

const PricingList = styled.div`
  display: flex;
  justify-content: space-around;

  ul {
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
    height: 178px;

    li {
      display: flex;
      align-items: center;
    }

    li:not(:last-child) {
      margin-bottom: 15px;
    }

    svg {
      width: 20px;
      margin-right: 5px;
    }
  }
`

const PricingText = styled.p`
  text-align: center;
  width: 80%;
  margin: 0;
  padding: 0;

  h2 {
    margin-bottom: 40px;
    margin-top: 0px;
    font-size: 60px;
    color: #ff4432;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: normal;
    font-family: "HK Grotesk Normal";
    margin-top: 30px;
  }

  span {
    font-size: 25px;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 767px) {
    h2 {
      margin-top: 15px;
    }
  }
`
const PricingButton = styled.button`
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
  background: linear-gradient(90deg, #ff4432 0, white 200%);
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
