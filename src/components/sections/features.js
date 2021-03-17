import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "../global"

import CheckIcon from "../../images/product/checkmark-circle-outline.svg"

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "save-money" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="features">
      <ImageWrapper>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
        <br />
      </ImageWrapper>
      <StyledContainer>
        <SectionTitle>
          <h3>
            <span>$0</span>&nbsp;Down,&nbsp;<span>$150</span>&nbsp;Per Month,
            <br />
            No Minimum Contract{" "}
          </h3>
        </SectionTitle>
        <SectionText>
          <p>
            $0 down for a standard 5 page small business website. If you need
            more than that then we have to do custom pricing based on the scope
            of work, number of additional pages, and time involved.
            <br />
            <br />
            You own yourdomain, content, listing, and profiles. Cancel anytime
            with no fees or hassle.
          </p>
        </SectionText>
        <FeaturesGrid>
          <FeatureItem>
            <FeatureImage>
              <CheckIcon />
            </FeatureImage>
            <FeatureMain>
              <FeatureTitle>Hosting Fees Included</FeatureTitle>
              <FeatureText>
                Hosting fees are built right into the monthly payment.
              </FeatureText>
            </FeatureMain>
          </FeatureItem>
          <FeatureItem>
            <FeatureImage>
              <CheckIcon />
            </FeatureImage>
            <FeatureMain>
              <FeatureTitle>Unlimited Edits</FeatureTitle>
              <FeatureText>
                Change anything you want at anytime and it will be done that
                day.
              </FeatureText>
            </FeatureMain>
          </FeatureItem>
          <FeatureItem>
            <FeatureImage>
              <CheckIcon />
            </FeatureImage>
            <FeatureMain>
              <FeatureTitle>24/7 Customer Service</FeatureTitle>
              <FeatureText>
                Call direct anytime day or night, no phone trees or automated
                responses.
              </FeatureText>
            </FeatureMain>
          </FeatureItem>
          <FeatureItem>
            <FeatureImage>
              <CheckIcon />
            </FeatureImage>
            <FeatureMain>
              <FeatureTitle>Web Design & Development</FeatureTitle>
              <FeatureText>
                Includes over 40 hours of design, development, and testing.
              </FeatureText>
            </FeatureMain>
          </FeatureItem>
          <FeatureItem>
            <FeatureImage>
              <CheckIcon />
            </FeatureImage>
            <FeatureMain>
              <FeatureTitle>Citations and Listings</FeatureTitle>
              <FeatureText>
                Its important to have your website linked from other websites,
                like directories.
              </FeatureText>
            </FeatureMain>
          </FeatureItem>
          <FeatureItem>
            <FeatureImage>
              <CheckIcon />
            </FeatureImage>
            <FeatureMain>
              <FeatureTitle>Google Analytics</FeatureTitle>
              <FeatureText>
                We install Analytics for free to monitor traffic and where it
                comes from.
              </FeatureText>
            </FeatureMain>
          </FeatureItem>
        </FeaturesGrid>
      </StyledContainer>
    </StyledSection>
  )
}

export default Features

const StyledSection = styled(Section)`
  display: flex;
  justify-content: space-around;
`

const StyledContainer = styled(Container)``

const ImageWrapper = styled.div`
  align-self: center;
  margin-left: 30px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 600px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 0px;
  text-align: center;

  span {
    color: #cca86e;
    maring: 0;
    padding: 0;
  }
`

const SectionText = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    width: 660px;
    text-align: left;
  }
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
`

const FeatureImage = styled.div`
  width: 30px;
  height: 30px;
  flex: 1;
  margin-top: 2px;

  svg {
    width: 100%;
    height: 100%;
  }
`

const FeatureMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  flex: 8;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: left;
  width: 100%;
  margin-top: 0px;
`

const FeatureText = styled.p`
  text-align: left;
`
