import {Link} from "gatsby"
import styled from "styled-components"
import React from "react"


const Header = () => {
  
  return(
    
    <Container>
    <Logo>
    <StyledLink to="/" logo='logo'>Jeff Graham<br></br> Web Development</StyledLink>
    </Logo>
    
    <Nav>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/work">Work</StyledLink>
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
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    align-items: center;
    padding: 10px 5%;
    height: 10vh;
    @media(min-width:550px){
      flex-flow: row;
      margin-top: 1rem;
    }
    
    `
    
    const Logo = styled.div`
    flex: 1
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    `
    const Nav = styled.nav`
    margin-top: .5rem;
    `
    
    const StyledLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: ${props => (props.logo ? '5px' : '2px')};
    padding: 5px;
    font-size: ${props => (props.logo ? '1rem' : '.85rem')};
    color: ${theme.primary};
    border: 1px solid ${props => (props.highlight ? theme.secondary : 'none')};
    border-radius: 30px;
    margin: 0 5px;
    transition: all 0.3s ease 0s;
    @media(min-width:550px){
      font-size: ${props => (props.logo ? '1.5rem' : '1.2rem')}
      
    }
      &:hover{
        color: ${props => (props.highlight ? `${theme.secondary}` : `${theme.secondary}`)};
        transition: all 0.3s ease 0s;
        background-color: ${props => (props.highlight ? `${theme.primary}` : 'none')};
      }
        `
        
        
        export default Header
        