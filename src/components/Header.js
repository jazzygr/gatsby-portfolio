import {Link} from "gatsby"
import styled from "styled-components"
import React from "react"


const Header = () => {
  
  return(
    
    <Container>
    <Logo>
    <StyledLink to="/" logo='logo'>Jeff Graham<br></br>Web Development</StyledLink>
    </Logo>
    
    <Nav>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/work">Work</StyledLink>
    <StyledLink to="/portfolio">Portfolio</StyledLink>
    <StyledLink to="/contact" highlight="highlight">Contact</StyledLink>
    </Nav>
    
    </Container>
    )}
    
    
    
    //Styles
    
    const theme = {
      white: "#fff",
      black: "#000",
      gray: "#818181",
      primary: "#0088a9",
      secondary: "#59FFA0"
    }
    
    const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    z-index: 999;
    border: 1px solid red;
    height: 10vh;
    @media(max-width:650px){
      display: grid;
      
    }
    nav:nth-child(2){
      background-color: red;
    }

    `
    const Logo = styled.div`
    text-transform: uppercase;
    cursor: pointer;
    
    `
    const Nav = styled.nav`
    border: 1px solid black;
    height: 100%;
    
    `
    
    const StyledLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: ${props => (props.logo ? '5px' : '2px')};
    padding: 5px;
    font-size: ${props => (props.logo ? '.85rem' : '.6rem')};
    color: ${theme.primary};
    border-bottom: 1px solid ${props => (props.highlight ? theme.gray : 'none')};
    transition: all 0.3s ease 0s;
    
    @media(min-width:650px){
      font-size: ${props => (props.logo ? '1.3rem' : '1rem')};
      
    }
      &:hover{
        color: ${props => (props.highlight ? `${theme.secondary}` : `${theme.secondary}`)};
        transition: all 0.3s ease 0s;
        background-color: ${props => (props.highlight ? `${theme.primary}` : 'none')};
      }
        `
        
        
        export default Header
        