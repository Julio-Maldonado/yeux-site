import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import YeuxGroundUp from './images/yeux_ground_up_final.png';
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

const Strategy = ({ id, height, maxHeight, maxWidth }) => (
  <SectionWrapper id={id}>
    <CenteredSection height={height}>
      <H2 color="#F2F2F2">
        Yeux need to be confident our strategy will work for you.
      </H2>
      <H3 style={{ color: '#F2F2F2' }}>
        We&#39;ll guide the process from the very beginning to bring your
        website to life and that you&#39;re happy from start to end.
      </H3>
      <Img
        src={YeuxGroundUp}
        alt="Ground_Up_Yeux_v1"
        style={{
          maxHeight,
          maxWidth: maxWidth * 0.55,
          width: 'auto',
          height: 'auto',
        }}
      />
      <SectionBody>
        <h4 style={{ color: '#F2F2F2' }}>
          We love working with real people and once we have answered all of your
          questions, we&#39;ll ask ours to ensure complete understanding of your
          needs and that we deliver on them.
        </h4>
      </SectionBody>
    </CenteredSection>
  </SectionWrapper>
);

Strategy.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
};

export default Strategy;
