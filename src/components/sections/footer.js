import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Container } from "../global"

import LogoRocket from "../../images/product/logo-rocket.svg"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>
            <AnchorLink href="#features">Features</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">About Us</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#pricing">Pricing</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Phone</span>
        <ul>
          <li>(647) 271-2701</li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>
        <LogoRocket />
        &nbsp;<span>AFTER</span>&nbsp;RED
      </Logo>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${(props) => props.theme.font.extrabold};
  ${(props) => props.theme.font_size.regular};
  color: ${(props) => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;

  span {
    color: #ff4432;
  }

  svg {
    width: 100px;
    height: 100%;
  }
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${(props) => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${(props) => props.theme.font.normal};
      font-size: 15px;

      a:link,
      a:visited {
        text-decoration: none;
        color: black;
      }
    }
  }
`

export default Footer
