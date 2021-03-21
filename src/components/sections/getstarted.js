import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => (
  <StyledSection id="contact">
    <GetStartedContainer>
      <GetStartedTitle>
        <span>Drop</span>&nbsp;us a line
      </GetStartedTitle>
      <FormContainer>
        <div className="form-details">
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="contact-us" value="contact" />
            <div className="form-row">
              <label>
                First Name
                <input type="text" name="first-name" />
              </label>
              <label>
                Last Name
                <input type="text" name="last-name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email
                <input type="email" name="email" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="telephone" />
              </label>
            </div>
            <div className="userText">
              <h4>How can we help you with your website?</h4>
              <textarea rows="10"></textarea>
            </div>
            <TryItButton type="submit">Submit</TryItButton>
          </form>
        </div>
      </FormContainer>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
  text-transform: uppercase;

  span {
    color: #ff4432;
  }
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
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

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  & .form-details {
    width: 748px;

    .userText {
      width: 100%;
      text-align: left;
      background-color: white;
      padding: 0px 10px;
      padding-top: 5px;
      border-radius: 2px;
      margin-bottom: 20px;

      h4 {
        font-size: 12px;
        font-family: "HK Grotesk Normal";
        font-weight: normal;
        margin: 0;
      }

      textarea {
        outline-width: 0;
        width: 100% !important;
      }

      @media screen and (max-width: 772px) {
        padding: 15px;
      }

      @media screen and (max-width: 864px) {
        width: 604px;
      }

      @media screen and (max-width: 660px) {
        width: 90vw;
      }
    }

    h2 {
      margin-bottom: 50px;
      margin-top: 50px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      #button-form {
        margin-bottom: 12px;
      }

      .form-row {
        display: flex;
        justify-content: space-between;
        width: 748px;

        input {
          padding: 10px;
        }

        @media screen and (max-width: 864px) {
          width: 604px;
        }

        @media screen and (max-width: 660px) {
          flex-direction: column;
          align-items: center;

          label {
            width: 90vw;
            margin-bottom: 30px;
          }
        }
      }

      label {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        text-align: left;
        background-color: white;
        padding: 0px 10px;
        padding-top: 5px;
        border-radius: 2px;
        font-size: 12px;
        width: 48%;
      }

      input {
        border: 0px solid;
        border-radius: 5px;
        outline-width: 0;
        font-size: 20px;
        padding: 0px !important;
        margin: 0px !important;
        padding-bottom: 10px !important;
      }

      textarea {
        border: 0px solid;
        border-radius: 5px;
        padding: 5px;
        width: 100%;
        resize: none;
      }

      #submit {
        width: 100px;
      }
    }
  }
`
