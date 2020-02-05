import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return(
    <div>
        <LineContainer>
                <div></div>
                <h2>Get in touch</h2>
                <div></div>
        </LineContainer>
        <Container>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label htmlFor="name">Name: 
            <input type="text" name="name" id="name"></input>
            </label>
          </p>
          <p>
            <label htmlFor="company">Company: 
            <input type="text" name="company" id="company"></input>
            </label>
          </p>
          <p>
            <label htmlFor="email">Email Address: 
            <input type="email" name="email" id="email"></input>
            </label>
          </p>
          <p>
            <label htmlFor="phone">Phone Number: 
            <input type="text" name="phone" id="phone"></input>
            </label>
          </p>
          <p className="full">
            <label htmlFor="message">Message: </label>
            <textarea name="message" rows="5" id="message"></textarea>
            
          </p>
          <p className="full">
            <button>Submit</button>
          </p>
        </form>
    </Container>
    </div>
)}

const Container = styled.div`
    line-height: 1.6;
    font-family: 'Merriweather Sans', sans-serif;
    padding: 1rem;
    max-width: 90%;
    margin: 0 auto;
        form{
            padding: 1rem;
            display: block;
            
            @media(min-width: 960px) {
                display: grid;
                gap: 20px;
            }

            label{
                
                padding-bottom: .5rem;
            }
            input{
                border: 1px solid grey;
                display: block;
            }
            .full{
                grid-column: 1 / 3;
            }
            button, textarea, input{
                width: 100%;
                padding: 1rem;
                border: 1px solid #c9e6ff;
            }
            button{
                background: #c9e6ff;
                border: none;
                font-size: 1.3rem;
                text-transform: uppercase;
                :hover, :focus{
                    background: #92bde7;
                    color: white;
                    transition: background-color 1s ease-out;
                }
            }

        }
`
const LineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40% 1fr;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  margin-top: 3rem;
 
    div {
      background-color: black;
      height: 2px;
    }
    h2{
        padding: 0 1rem;
    }
    @media(max-width: 960px){
        font-size: 1rem;
        }
        
  
`

export default Contact