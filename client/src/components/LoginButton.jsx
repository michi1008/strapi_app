import React from 'react'
import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"
import LoginIcon from "@mui/icons-material/Login"

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <Wrapper>
        <button className="auth-btn"onClick={() => loginWithRedirect()}>Sign In<LoginIcon /></button> 
      </Wrapper> 
  )
)}

const Wrapper = styled.section`
  margin-right: 1rem;

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 0.9rem;
    cursor: pointer;
    svg {
      margin-left: 5px;
      font-size: 1rem;
    }
  } 
  
  @media screen and (min-width: 800px){
    .auth-btn {
      font-size: 1.5rem;
      svg {
        margin-left: 5px;
        font-size: 1.5rem;
      }
    }    
  }
`
export default LoginButton