import styled from "styled-components"
import aboutImg from "../assets/artist-photo.jpg"

const About = () => {
  return <main>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="profile_picture" />
      <article>
        <div className="title">
          <h2>Artist</h2>
          <div className="underline"></div>
        </div>
        <p>Ken Lange is a digital artist, guitarist, poet, singer/songwriter. He has an Associate of Arts in Music, and Bachelor of Arts in Linguistics and follows a creative life charged with art, music, and the pursuit of any medium possible to convey his personal vision and live the principle that life itself is art.<br/><br/> He not only writes music and poetry, but also paints and does photography, graphic design and web design.Ken was born in San Diego, and has been creating art for as long as he can remember. In the 3rd grade, he had a fascination with drawing mazes. The theme of patterns and lines continued into his high school drawings, but became more complex during that time. This is also when he started painting with tempra and watercolors.In recent years, he has been making digital art collages, combining Facebook photos of friends, his own photos and paintings, and various Photoshop effects to create visually unique and stunning pieces.<br/><br/>Ken currently lives in the San Francisco Bay Area and works in the tech industry, and travels the world to find inspiration.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
    margin-top: 5rem;
    opacity: 0.65;
    box-shadow: var(--dark-shadow);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-primary-1);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 5px;
    background-color: var(--clr-black);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default About
