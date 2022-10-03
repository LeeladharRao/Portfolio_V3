import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

svg {
  height: 80%;
  width: 80%;
  transform: scale(2);
  backface-visibility: hidden;
  @media screen and (min-width: 768px) {
    transform: scale(3);
  }
}

g {
  box-shadow: 0 0 10px black;
}

#fox-g {
  path,
  polygon {
    transform-origin: 5em center;
  }
}

#name-g {
  path {
    display: block;
    position: relative;
    transform-origin: 25% 75%;
    &:after {
      content: "";
      position: absolute;
      height: 3em;
      width: 100%;
      background: black;
      border-radius: 100%;
    }
  }
}

`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
      loop: false,
      endDelay: 500,
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.foxhead',
        scale: [0.75, 1],
        opacity: [0, 1],
      })
      .add({
        targets: '.foxpart',
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: 'easeInExpo',
      }, '-=2000')
      .add({
        targets: '#name-g path',
        translateX: ['-100%', 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        offset: 1000,
      }, '-=500')
      .add({
        targets: '#name-g path',
        fill: '#162c47',
        strokeDashoffset: [0, anime.setDashoffset],
        easing: 'easeInOutCubic',
        duration: 2000,
        begin: function (anim) {
          document.querySelector('path').setAttribute("stroke", "#162c47");
          document.querySelector('path').setAttribute("fill", "none");
        },
        complete: function (anim) {
          document.querySelector('path').setAttribute("fill", "#162c47");
        },
        delay: 100,
        opacity: [1, 0],
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="wrapper">
        <div className="svg-container">
          <IconLoader />
        </div>
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
