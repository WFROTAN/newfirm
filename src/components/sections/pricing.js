import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

import CheckIcon from "../../images/product/checkmark-outline.svg"

const Pricing = () => (
  <StyledSection id="pricing">
    <StyledContainer>
      <PricingGrid>
        <PricingItem>
          <PricingTitle>
            <h4>Standard + Blogging</h4>
          </PricingTitle>
          <PricingText>
            <h2>$300</h2>
            <PricingList>
              <ul>
                <li>
                  <CheckIcon />
                  1000+ Word Post
                </li>
                <li>
                  <CheckIcon />
                  Written By an SEO Specialist
                </li>
                <li>
                  <CheckIcon />1 Post Per Month
                </li>
                <li>
                  <CheckIcon />
                  $150 Per Extra Post
                </li>
              </ul>
            </PricingList>
          </PricingText>
          <PricingButton>Contact Us</PricingButton>
        </PricingItem>
        <PricingItem id="popular-option">
          <PricingTitle>
            <h4>Standard</h4>
          </PricingTitle>
          <PricingText>
            <h2>$150</h2>
            <PricingList>
              <ul>
                <li>
                  <CheckIcon />
                  Unlimited Edits
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
                  Lifetime Updates
                </li>
              </ul>
            </PricingList>
          </PricingText>
          <PricingButton>Contact Us</PricingButton>
        </PricingItem>
        <PricingItem>
          <PricingTitle>
            <h4>Logos & Graphic Design</h4>
          </PricingTitle>
          <PricingText>
            <h2>$0</h2>
            <PricingList>
              <ul>
                <li>
                  <CheckIcon />2 Revisions
                </li>
                <li>
                  <CheckIcon />
                  All File Formats
                </li>
                <li>
                  <CheckIcon />
                  Ready to use
                </li>
                <li>
                  <CheckIcon />
                  FREE w/ Subscription
                </li>
              </ul>
            </PricingList>
          </PricingText>
          <PricingButton>Contact Us</PricingButton>
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
  align-items: center;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }

  #popular-option {
    width: 300px;
    height: 500px;
    h4 {
      background: #a7ffa4;
    }
  }
`

const PricingItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 300px;
  height: 500px;
  margin: 0;
  border: 2px solid #e6f2ff;
  border-radius: 6px;
  max-width: 400px;

  &:not(:last-child) {
    margin-right: 15px;
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
    margin-top: 30px;
    font-size: 60px;
    color: #43b7ff;
  }
`
const PricingButton = styled.button`
  margin-top: 40px;
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: linear-gradient(90deg, #43b7ff 0, #00ddf6 100%);
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
