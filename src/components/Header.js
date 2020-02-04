import {Link} from "gatsby"
import styled from "styled-components"
import React from "react"


const Header = () => {
  
  return(
    
    <Container>
    <Logo>
    <StyledLink to="/" logo='logo'>Jeff Graham</StyledLink>
    </Logo>
    
    <Nav>
    <StyledLink to="/about">About</StyledLink>
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
    background-color: ${theme.black};
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
    z-index: 10;
    @media(max-width:650px){
      display: grid;
      
    }
    nav:nth-child(2){
      
    }

    `
    const Logo = styled.div`
    display: grid;
    align-items: center;
    padding-left: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    
    `
    const Nav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    align-items: center; 
    padding-right: 2rem;
    
    
    
    `
    
    const StyledLink = styled(Link)`
    display: grid;
    justify-self: ${props => (props.highlight ? 'end' : 'start')};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: ${props => (props.logo ? '5px' : '2px')};
    font-size: ${props => (props.logo ? '1rem' : '0.8rem')};
    color: ${theme.white};
    transition: all 0.3s ease 0s;
    
    @media(max-width:650px){
      font-size: ${props => (props.logo ? '0.8rem' : '0.6rem')};
      
    }
      &:hover{
        color: ${props => (props.highlight ? `${theme.secondary}` : `${theme.secondary}`)};
        transition: all 0.3s ease 0s;
        background-color: ${props => (props.highlight ? `${theme.primary}` : 'none')};
      }
        `
        
        
        export default Header
        