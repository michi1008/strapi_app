import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"
import styled from "styled-components"
import { Email } from "react-obfuscate-email"

const Contact = () => {

  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>Contact</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-form">
          <h4>Register your email address and will let you know when a new art is created!!</h4>
          <form action="https://formspree.io/f/mdoyqzkp" method="POST">
            <input type="email" className="form-input" placeholder=" Enter email" name="_replyto"/>
            <button type="submit"className="submit-btn">REGISTER</button>
          </form>
        </div>
        <div className="join">
          <h4>Contact Artist</h4>
          <div className="icons">
            <a href="https://www.facebook.com/coyotestealsfire"><FacebookIcon /></a>
            <a href="https://www.instagram.com/coyotestealsfire/?hl=en"><InstagramIcon /></a>
            <a href="https://twitter.com/kenlange"><TwitterIcon /></a>
             <GoogleIcon />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background: var(--clr-primary-2);
display:flex;
align-item: center;
justify-content: center;
padding: 3rem;
.underline {
  background-color: var(--clr-white)
}

h2, h4{
  text-transform: none;
  color: var(--clr-white)
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
}
.form-input,
.submit-btn {
  font-size: 1rem;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--clr-dark-red);
  color: var(--clr-white);
}
.form-input {
  border-right: none;
  color: var(--clr-primary-2);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
.form-input::placeholder {
  color: var(--clr-primary-1);
  text-transform: capitalize;
  font-family: "Nunito Sans", sans-serif;
}
.submit-btn {
  background: var(--clr-red-dark);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-white);
}
.submit-btn:hover {
  color: var(--clr-primary-2);
}
.join {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.icons {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  
}

@media (min-width: 1280px) {
  padding: 3rem 0;
}
`

export default Contact