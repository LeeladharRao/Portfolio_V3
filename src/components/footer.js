import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
  color: var(--footer-text);
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCredit tabindex="-1">
        <a href="https://github.com/LeeladharRao">
          <div>Designed &amp; Built with Love ❤️, Leeladhar Rao</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
