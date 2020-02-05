import React from 'react';      
import { graphql, useStaticQuery} from "gatsby"
import styled from "styled-components"

const Footer = () =>{
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            author
          }
        }
      }
  `)
    return(
        <FooterContainer>
            <p>{data.site.siteMetadata.author}</p>
        </FooterContainer>
    )
    

}

const FooterContainer = styled.footer`
  background: black;
  color: white;
  min-height: 5vh;
  width: 100%;
  

`

export default Footer