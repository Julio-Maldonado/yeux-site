/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Helmet } from 'react-helmet';
import { AnimatedBg, Transition } from 'scroll-background';
import styled from 'styled-components';
import EntranceAnimation from 'components/EntranceAnimation';
import { ScrollIntoView } from 'rrc';
import PropTypes from 'prop-types';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Strategy from './components/Strategy';
import Services from './components/Services';
import PastWork from './components/PastWork';
import Contact from './components/Contact';

const HomeBodyWrapper = styled.div`
  max-width: 100vw;
  background: 'white';
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

// const CardWrapper = styled.div`
//   flex: 1;
//   flex-direction: row;
//   // text-align: left;
//   // width: 90vw;
// `;

class HomeBody extends React.Component {
  state = {
    show: false,
  };

  componentWillMount() {
    this.setState({
      show: false,
      height: 0,
      width: 0,
    });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    // if mobile 1500, otherwise 500
    if (this.state.width < this.state.height / 2) {
      setTimeout(() => this.setState({ show: true }), 100);
    } else {
      setTimeout(() => this.setState({ show: true }), 100);
    }
    setTimeout(() => this.updateWindowDimensions(), 500);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    const { height, width } = this.state;
    let [maxHeight, maxWidth] = [height, width];
    let [cardWidth] = [height, width];
    // let [cardMarginLeft, cardMarginRight] = [height, width];
    let pastWorkWidth = width;
    // let pastWorkWidthLeftMargin = 0;
    // const flag = true;
    // large screens (full screen)
    if (width > 1200) {
      maxHeight -= 150;
      maxWidth -= 150;
      // cardWidth = width * 0.4;
      cardWidth = width * 1;
      // cardHeight = height * 0.2;
      // cardMarginLeft = width * 0.3;
      // cardMarginRight = width * 0.3;
      // cardMarginLeft = width * 0.0;
      // cardMarginRight = width * 0.0;
      pastWorkWidth = width * 0.5;
    } // medium screens
    else if (width > 992) {
      pastWorkWidth = width * 0.5;
    } // small screens
    else if (width > 700) {
      pastWorkWidth = width * 0.5;
    } // mobile
    else {
      maxHeight = height;
      maxWidth = width * 1.5;
      cardWidth = width * 1;
      // cardHeight = height * 0.2;
      // cardMarginLeft = width * 0.0;
      // cardMarginRight = width * 0.0;
      pastWorkWidth = width * 0.55;
    }
    return (
      <HomeBodyWrapper>
        <Helmet>
          <title>Yeux</title>
          <meta
            name="description"
            content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
          />
        </Helmet>
        <ScrollIntoView id={this.props.location.hash} />
        <SideMenu right pageWrapId="page-wrap" outerContainerId="App" />
        <EntranceAnimation
          startAnimation={this.state.show}
          height={height}
          width={width}
        >
          <Home
            id="home"
            key="home"
            height={height}
            width={width}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
          />
        </EntranceAnimation>
        <AnimatedBg key="0">
          &nbsp;
          <Transition
            key="1"
            height={height}
            from="#ffffff"
            to="#668B8B"
            position={1}
          >
            <AboutUs
              id="about"
              key="about"
              height={height}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
            />
          </Transition>
          <Transition
            key="2"
            height={height}
            from="#668B8B"
            to="#500000"
            position={1}
          >
            <Strategy
              id="strategy"
              key="strategy"
              height={height}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
            />
          </Transition>
          <Transition
            key="3"
            height={height}
            from="#500000"
            to="#708090"
            position={1}
          >
            <Services
              id="services"
              key="services"
              height={height}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
              cardWidth={cardWidth}
            />
          </Transition>
          <Transition
            key="4"
            height={height}
            from="#708090"
            to="#CFC29B"
            position={1}
          >
            <PastWork
              id="pastwork"
              key="pastwork"
              height={height}
              width={width}
              maxHeight={maxHeight}
              pastWorkWidth={pastWorkWidth}
            />
          </Transition>
          <Transition
            key="5"
            height={height}
            from="#CFC29B"
            to="#ffffff"
            position={1}
          >
            <Contact
              id="contact"
              key="contact"
              height={height}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
            />
          </Transition>
        </AnimatedBg>
      </HomeBodyWrapper>
    );
  }
}

HomeBody.propTypes = {
  location: PropTypes.object.isRequired,
};

// const colors = ['#ffffff', '#00171F', '#003459', '#007EA7', '#00A8E8'];

export default HomeBody;
