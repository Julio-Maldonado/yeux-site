import React from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import WelcomeDesign from './images/yeux_story_final.png';
import CenteredSection from './CenteredSection';

const Welcome = ({ id, height, width, maxHeight, maxWidth }) => (
  <div
    id={id}
    style={{
      flexDirection: 'column',
      padding: 0,
      // paddingTop: '5vh',
      width: width * 0.5,
      maxWidth: '100vw',
      // margin: 0,
      width: '98vw',
      margin: '0 auto',
    }}
  >
    {/* <Helmet>
      <title>Yeux - Welcome</title>
      <meta
        name="description"
        content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
      />
    </Helmet> */}
    <CenteredSection height={height}>
      <H2>
        Yeux have a story to share, a service to provide, a product to sell, and
        a community to build.
      </H2>
      <H3>We make beautiful website that land you clients.</H3>
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
    </CenteredSection>
  </div>
);

Welcome.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
};

export default Welcome;
