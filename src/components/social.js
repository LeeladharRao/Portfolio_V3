import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 70vh;
    margin: 0 auto;
    background-color: var(--sidebar-line-white);
  }

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--sidebar-line-white);
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--sidebar-line-white);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: red;
      }

      svg {
        width: 20px;
        height: 20px;
        color: var(--sidebar-icon-white);

        &:hover,
          &:focus {
          transform: translateY(-3px);
          color: var(--sidebar-hover-icon-green);
        }
      }
    }
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
