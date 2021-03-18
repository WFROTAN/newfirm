import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

import TextIcon from "../../images/product/text-outline.svg"
import PeopleIcon from "../../images/product/people-outline.svg"
import RocketIcon from "../../images/product/rocket-outline.svg"

const Quality = () => (
  <StyledSection id="quality">
    <StyledContainer>
      <SectionTitle>
        <span>QUALITY</span>&nbsp;OVER QUANTITY
      </SectionTitle>
      <SectionText>
        <p>
          We focus on the needs on each individual business and tailor content
          around what makes it unique. Our collaborative process is very hands
          on as we work closely with you to create a website you're 100% happy
          with and not something you just settle for.
        </p>
      </SectionText>
      <WhatGrid>
        <WhatItem>
          <WhatImage>
            <TextIcon />
          </WhatImage>
          <WhatTitle>No Pre-Written Content</WhatTitle>
          <WhatText>
            We write unique and engaging content around your company. Everyone
            is unique!
          </WhatText>
        </WhatItem>
        <WhatItem>
          <WhatImage>
            <PeopleIcon />
          </WhatImage>
          <WhatTitle>Unbeatable Customer Service</WhatTitle>
          <WhatText>
            No automated systems - When you need help the lead developer answers
            your call.
          </WhatText>
        </WhatItem>
        <WhatItem>
          <WhatImage>
            <RocketIcon />
          </WhatImage>
          <WhatTitle>No Limits On Design</WhatTitle>
          <WhatText>
            We can edit the design to cater to your tastes. Everything is
            customizable!
          </WhatText>
        </WhatItem>
      </WhatGrid>
    </StyledContainer>
  </StyledSection>
)

export default Quality

const StyledSection = styled(Section)`
  padding-top: 120px;
  padding-bottom: 100px;
`

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;

  span {
    color: #ff4432;
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

  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`

const WhatItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
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

  @media only screen and (max-width: 1198px) {
    text-align: center;
  }
`

const WhatText = styled.p`
  text-align: center;
  width: 80%;

  @media only screen and (max-width: 991px) {
    width: 400px;
  }
  @media only screen and (max-width: 461px) {
    width: 300px;
  }
`
