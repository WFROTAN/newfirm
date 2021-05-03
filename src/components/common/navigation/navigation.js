import React, { Component } from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"

import LogoRocket from "../../../images/product/logo-rocket.svg"

import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style"

const NAV_ITEMS = ["Features", "About", "Pricing", "Contact"]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = (item) => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavLink = (item) => (
    <Link href={`/#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </Link>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map((item) => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
        <NavItem>
          <Link href="/portfolio">Portfolio</Link>
        </NavItem>
      </Scrollspy>
    </NavListWrapper>
  )

  getNavLinkList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map((item) => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem}>{this.getNavLink(navItem)}</NavItem>
        ))}
        <NavItem>
          <Link href="/portfolio">Portfolio</Link>
        </NavItem>
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state
    const url = typeof window !== "undefined" ? window.location.href : ""
    console.log(url)

    if (url !== "https://www.after-red.com/") {
      console.log("test")
      return (
        <Nav {...this.props} scrolled={this.state.hasScrolled}>
          <StyledContainer>
            <Brand>
              <Scrollspy offset={-64} item={["top"]} currentClassName="active">
                <Link href="/" onClick={this.closeMobileMenu}>
                  <div className="logo-container">
                    <LogoRocket />{" "}
                    <div className="logo-text">
                      <span>AFTER</span>&nbsp;RED
                    </div>
                  </div>
                </Link>
              </Scrollspy>
            </Brand>
            <Mobile>
              <button
                onClick={this.toggleMobileMenu}
                style={{ color: "black", background: "none" }}
              >
                {this.state.mobileMenuOpen ? (
                  <X size={24} alt="close menu" />
                ) : (
                  <Menu size={24} alt="open menu" />
                )}
              </button>
            </Mobile>

            <Mobile hide>{this.getNavLinkList({})}</Mobile>
            <ActionsContainer>(647) 271-2701</ActionsContainer>
          </StyledContainer>
          <Mobile>
            {mobileMenuOpen && (
              <MobileMenu>
                <Container>{this.getNavLinkList({ mobile: true })}</Container>
              </MobileMenu>
            )}
          </Mobile>
        </Nav>
      )
    } else {
      return (
        <Nav {...this.props} scrolled={this.state.hasScrolled}>
          <StyledContainer>
            <Brand>
              <Scrollspy offset={-64} item={["top"]} currentClassName="active">
                <AnchorLink href="#top" onClick={this.closeMobileMenu}>
                  <div className="logo-container">
                    <LogoRocket />{" "}
                    <div className="logo-text">
                      <span>AFTER</span>&nbsp;RED
                    </div>
                  </div>
                </AnchorLink>
              </Scrollspy>
            </Brand>
            <Mobile>
              <button
                onClick={this.toggleMobileMenu}
                style={{ color: "black", background: "none" }}
              >
                {this.state.mobileMenuOpen ? (
                  <X size={24} alt="close menu" />
                ) : (
                  <Menu size={24} alt="open menu" />
                )}
              </button>
            </Mobile>

            <Mobile hide>{this.getNavList({})}</Mobile>
            <ActionsContainer>(647) 271-2701</ActionsContainer>
          </StyledContainer>
          <Mobile>
            {mobileMenuOpen && (
              <MobileMenu>
                <Container>{this.getNavList({ mobile: true })}</Container>
              </MobileMenu>
            )}
          </Mobile>
        </Nav>
      )
    }
  }
}
//#${item.toLowerCase()}
