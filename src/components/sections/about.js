import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSectionBox = styled.section`
  background-color: var(--about-background-colour);
  border-radius: 25px;
  margin-top: 10%;
  padding: 2% 0 10% 0;

  @media (max-width: 768px) {
    background-color: inherit;
    display: block;
  }
`;
const StyledAboutSection = styled.section`
  max-width: 900px;
  color: var(--about-text);

  h2 {
    color: var(--about-text);
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
        
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 50%;
    background-color: var(--green);
    color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: 50%;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      border: 3px solid black;
      border-radius: 50%;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      mix-blend-mode: screen;
    }
    
     
    
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'Gatsby.js', 'TypeScript', 'React', 'Flask', 'Php'];

  return (
    <StyledAboutSectionBox id="about" ref={revealContainer}>
      <StyledAboutSection>
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
          <StyledText>
            <div>
              <p>
                Hello! My name is Leela and I enjoy creating things that live on the internet. This
                is my place on the web that I've created to show the world. Along my way, I've picked up enough 
                related tech to handle frontend, backend, and even a touch of design.
              </p>

              <p>
                There's a whole world out there outside of tech, but coding is my favorite
                hobby. I am pretty much open-minded towards all things, you can talk to me about anything and everything. 
                I love cooking, playing and watching football and l love motorsports.
              </p>

              <p>
                I like strategy and indie video games. Science, science fiction, animation stuff, Pokemon's, 
                modern engineering technology interests me, and I love binge-watching web content.
              </p>

              <p>
                My current weapon of choice is Python, but I believe in using the best tool for the job. If you enjoy long 
                lists of keywords, here are a few that I've worked with most recently:</p>
            </div>

            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </StyledText>

          <StyledPic>
            <div className="wrapper">
                <StaticImage
                className="img"
                src="../../images/img-logo1.png"
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
                />
            </div>
            </StyledPic>
        </div>
      </StyledAboutSection>
    </StyledAboutSectionBox>
  );
};

export default About;