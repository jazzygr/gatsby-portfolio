import React from 'react';      
import {Link, graphql, useStaticQuery} from "gatsby"

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
        <footer>
            <Link to="/">{data.site.siteMetadata.author}</Link>
        </footer>
    )
    
}

export default Footer