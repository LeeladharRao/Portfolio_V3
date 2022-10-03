import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Contact, Projects } from '@components';

// import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <StyledMainContainer className="fillHeight">  
    <Layout location={location}>
    
      <Hero />
      <About />
      {/* <Jobs />
      <Featured /> */}
      <Projects />
      <Contact />
    </Layout>
  </StyledMainContainer>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;