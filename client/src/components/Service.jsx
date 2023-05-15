import React from "react"
import styled from "styled-components"
import img from "../assets/service.png"

const Service = () => {
          
  return (
    <Wrapper>
      <div className="container">
        <img src= "http://localhost:1337/uploads/Halong_Bay_Reinvisioned_4a3086db65.jpg" alt="" />
        <div className="title">
          <h2>Services</h2>
          <div className="underline"></div>
        </div>
      </div>
      <div className="service">
        <img src={img} className="icon"/>
        <h4>Print out the digital art in your favorite size and get it delivered to your home!!</h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height: calc(100vh-5rem);
    width: 100%;
    margin: 3rem, 2rem

    .container {
        width: 300vw;
        height: 100%;
        display: flex;
        transition: all 1s ease;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem;
    }

    .underline {
      background-color: var(--clr-black);
    }

    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
        width: 100vw;
        height: 100%;
        object-fit: cover;
    }

    .icon {
      width: 5rem;
      height: 100%;
    }

    h4 {
      margin: 2rem;
    }
    
`

export default Service
