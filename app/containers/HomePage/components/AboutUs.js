import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import WelcomeDesign from './images/yeux_story_final.png';
import CenteredSection from './CenteredSection';

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 5vh;
`;

const SectionBody = styled.div`
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;

const AboutUs = ({ id, height, maxHeight, maxWidth }) => (
  <SectionWrapper id={id}>
    <CenteredSection height={height}>
      <H2 color="#F2F2F2">
        Yeux have a story to share, a service to provide, a product to sell, and
        a community to build.
      </H2>
      <H3 style={{ color: '#F2F2F2' }}>
        We make beautiful website that land you clients.
      </H3>
      <Img
        src={WelcomeDesign}
        alt="Story_Design_Yeux_v1"
        style={{
          maxHeight,
          maxWidth: maxWidth * 0.55,
          width: 'auto',
          height: 'auto',
        }}
      />
      <SectionBody>
        <h4 style={{ color: '#F2F2F2' }}>
          We have expertise in web development and design, logo making, SEO,
          entrepreneurship, small businesses, startups, community building, and
          marketing that we want to use to support you and your goals.
        </h4>
      </SectionBody>
    </CenteredSection>
  </SectionWrapper>
);

AboutUs.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  // width: PropTypes.number,
  maxHeight: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
};

export default AboutUs;
