import React from "react"
import styled from "styled-components"
import Service from "../components/Service"
import FeaturedProducts from "../components/FeaturedProducts"
import About from "./About"
import Contact from "./Contact"

const Home = () => {
  return (
    <Wrapper>
      <Service />
      <FeaturedProducts type="featured"/>
      <About />
      <Contact />
    </Wrapper>
  )
}


const Wrapper = styled.section`

`

export default Home