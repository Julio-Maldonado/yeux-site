import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import Img from 'components/Img';
import SEOIcon from './images/digital_marketing_and_seo_final.png';
import AnalyticsIcon from './images/real_time_analytics_v2.png';
import CrossPlatformIcon from './images/cross_platform_friendly_v2.png';
import RelevantDesignsIcons from './images/relevant_designs_v3.png';

const ServiceWrapper = styled.div`
  display: flex;
  height: ${props => props.height / 3};
  // flex-direction: row;
  // justify-content: space-around;
  // align-content: center;
  // justify-content: center;
  align-items: center;
`;

// const ServiceImageWrapper = styled.div`
//   align-items: center;
//   width: ${props => props.cardWidth} * 0.5;
//   align-content: center;
//   text-align: center;
//   justify-content: center;
// `;

// const ServiceTextWrapper = styled.div`
//   align-items: flex-start;
//   width: ${props => props.cardWidth} * 0.5;
//   justify-content: center;
// `;

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 5vh;
`;

const Services = ({ id, height, maxHeight, maxWidth, cardWidth }) => (
  <SectionWrapper id={id}>
    <div style={{ textAlign: 'center' }}>
      <H2 color="#F2F2F2">Some of our Services</H2>
    </div>
    <div
      style={{
        display: 'flex',
        height: height / 5,
        // flex-direction: row,
        // justify-content: space-around,
        // align-content: center,
        // justify-content: center,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          width: cardWidth * 0.5,
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          src={SEOIcon}
          alt="SEO Icon"
          style={{
            maxHeight,
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
      <div
        style={{
          alignItems: 'flex-start',
          width: cardWidth * 0.5,
          justifyContent: 'center',
        }}
      >
        <h3 style={{ color: '#F2F2F2' }}>Digital Marketing and SEO</h3>
        <h4 style={{ color: '#F2F2F2' }}>
          Attract leads that actually <i>matter</i>.
        </h4>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        height: height / 5,
        // flex-direction: row,
        // justify-content: space-around,
        // align-content: center,
        // justify-content: center,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          width: cardWidth * 0.5,
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          src={AnalyticsIcon}
          alt="Analytis Icon"
          style={{
            maxHeight,
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
      <div
        style={{
          alignItems: 'flex-start',
          width: cardWidth * 0.5,
          justifyContent: 'center',
        }}
      >
        <h3 style={{ color: '#F2F2F2' }}>Real Time Analytics</h3>
        <h4 style={{ color: '#F2F2F2' }}>
          Discover who&#39;s visiting your site and <i>why</i>.
        </h4>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        height: height / 5,
        // flex-direction: row,
        // justify-content: space-around,
        // align-content: center,
        // justify-content: center,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          width: cardWidth * 0.5,
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          src={CrossPlatformIcon}
          alt="Cross Platform Icon"
          style={{
            maxHeight,
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
      <div
        style={{
          alignItems: 'flex-start',
          width: cardWidth * 0.5,
          justifyContent: 'center',
        }}
      >
        <h3 style={{ color: '#F2F2F2' }}>Cross Platform Friendly</h3>
        <h4 style={{ color: '#F2F2F2' }}>
          We&#39;ll ensure a <i>seamless</i> mobile and desktop experience.
        </h4>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        height: height / 5,
        // flex-direction: row,
        // justify-content: space-around,
        // align-content: center,
        // justify-content: center,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          width: cardWidth * 0.5,
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Img
          src={RelevantDesignsIcons}
          alt="Relevant Designs Icon"
          style={{
            maxHeight,
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
      <div
        style={{
          alignItems: 'flex-start',
          width: cardWidth * 0.5,
          justifyContent: 'center',
        }}
      >
        <h3 style={{ color: '#F2F2F2' }}>Relevant Designs</h3>
        <h4 style={{ color: '#F2F2F2' }}>
          Using <i>your</i> preferences, we&#39;ll deliver a modern and
          beautifully designed site.
        </h4>
      </div>
    </div>
  </SectionWrapper>
);

Services.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  maxWidth: PropTypes.number,
  cardWidth: PropTypes.number.isRequired,
};

export default Services;
