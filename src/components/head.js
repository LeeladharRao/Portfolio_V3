import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = () => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            defaultImage: image
          }
        }
      }
    `,
  );

  const {
    defaultTitle,
  } = site.siteMetadata;

  return (
    <>
      <Helmet title={defaultTitle} defaultTitle="Default">
        <html lang="en" />
      </Helmet>
    </>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
