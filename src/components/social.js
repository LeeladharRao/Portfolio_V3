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
  background-color: var(--sidebar-background);

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 70vh;
    margin: 0 auto;
    background-color: var(--sidebar-line);
  }

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--sidebar-line);
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
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
      }

      svg {
        width: 20px;
        height: 20px;
        color: var(--sidebar-icon);

        &:hover,
          &:focus {
          transform: translateY(-3px);
          color: var(--sidebar-icon-hover);
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
