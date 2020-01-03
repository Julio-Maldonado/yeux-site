import React from 'react';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import HomeDesign from './images/home_design_final.png';
import YeuxLogo from './images/Yeux_50px_v2.png';
import CenteredSection from './CenteredSection';

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 5vh;
  background-color: white;
  height: 100vh;
  width: 98vw;
  margin: 0 auto;
`;

const SectionBody = styled.div`
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;

const Home = ({ id, width, height, maxHeight, maxWidth }) => (
  <SectionWrapper id={id}>
    <Helmet>
      <title>Yeux</title>
      <meta
        name="description"
        content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
      />
    </Helmet>
    <CenteredSection>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          className="no-margin"
          src={YeuxLogo}
          alt="Yeux"
          style={{
            maxHeight,
            maxWidth: maxWidth * 0.5,
            width: 'auto',
            height: '20px',
            margin: 0,
            marginRight: 4,
            padding: 0,
          }}
        />
        <H2 className="no-margin">have a vision.</H2>
      </div>
      <H3>We want to make it a reality.</H3>
      <Img
        src={HomeDesign}
        alt="Home_Design_Yeux_v1"
        style={{
          maxHeight,
          maxWidth: maxWidth * 0.55,
          width: 'auto',
          height: 'auto',
        }}
      />
      <SectionBody>
        <h4>
          We focus on supporting small minority-owned businesses because we
          believe having a fast, cost-effective, and beautiful website should be
          easy for <i>everybody</i>.
        </h4>
      </SectionBody>
    </CenteredSection>
  </SectionWrapper>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
};

export default Home;
