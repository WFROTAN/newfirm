import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

import MobileIcon from "../../images/product/phone-portrait-outline.svg"
import DesktopIcon from "../../images/product/desktop-outline.svg"
import OptionsIcon from "../../images/product/options-outline.svg"

const WhatWeDo = () => (
  <StyledSection id="what-we-do">
    <StyledContainer>
      <SectionTitle>
        <span>WHAT</span>&nbsp;WE DO
      </SectionTitle>
      <SectionText>
        <p>
          We specialize in small business web design and development for clients
          anywhere in Canada. Every line of code is written by hand to ensure
          the best performance, which helps bring in more customers to your site
          and bring more revenue to your business.
        </p>
      </SectionText>
      <WhatGrid>
        <WhatItem>
          <WhatImage>
            <MobileIcon />
          </WhatImage>
          <WhatTitle>Mobile-First Design</WhatTitle>
          <WhatText>
            We start building your site for mobile devices first, then we add on
            to it to make tablet and desktop.
          </WhatText>
        </WhatItem>
        <WhatItem>
          <WhatImage>
            <DesktopIcon />
          </WhatImage>
          <WhatTitle>Fully Responsive</WhatTitle>
          <WhatText>
            Your website will fit all mobile screens sizes, tablets, and desktop
            sizes so new clients can access your site from anywhere.
          </WhatText>
        </WhatItem>
        <WhatItem>
          <WhatImage>
            <OptionsIcon />
          </WhatImage>
          <WhatTitle>Optimization</WhatTitle>
          <WhatText>
            60% of all internet traffic is on mobile devices, so we optimize
            your mobile to perform their best in search engines.
          </WhatText>
        </WhatItem>
      </WhatGrid>
    </StyledContainer>
  </StyledSection>
)

export default WhatWeDo

const StyledSection = styled(Section)`
  padding-top: 50px;
  padding-bottom: 80px;
`

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;

  span {
    color: #cca86e;
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

const WhatGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const WhatItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
`

const WhatImage = styled.div`
  width: 50px;
`

const WhatTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  margin-top: 25px;
`

const WhatText = styled.p`
  text-align: center;
  width: 80%;
`
