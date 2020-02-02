import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import Img from 'components/Img';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import YeuxSite from './images/yeux_site.png';
import YeuxSiteMobile from './images/yeux_site_mobile.png';
import LoveYoursSite from './images/love_yours_site.png';
import LoveYoursSiteMobile from './images/love_yours_site_mobile.png';
import JulioMaldonadoSite from './images/julio_maldonado_site.png';
import JulioMaldonadoSiteMobile from './images/julio_maldonado_site_mobile.png';
import FiestasPhotoboothSite from './images/fiestas_photobooth_site.png';
import FiestasPhotoboothSiteMobile from './images/fiestas_photobooth_site_mobile.png';

import './removeMargins.css';

const PASTWORKS = [
  {
    image: JulioMaldonadoSite,
    mobileImage: JulioMaldonadoSiteMobile,
    title: 'Julio Maldonado',
    subtitle: 'Portfolio Website',
    description:
      'Bootstrapped portfolio website to showcase personal and academic accomplishments',
    logo: '',
    startDate: 'July 20, 2019',
    projectLength: '2 weeks',
    engineersNeeded: '1',
    url: 'https://juliomaldonado.com/',
  },
  {
    image: FiestasPhotoboothSite,
    mobileImage: FiestasPhotoboothSiteMobile,
    title: "Fiesta's Photobooth",
    subtitle: 'Company Website',
    description:
      'Designed and delivered complete website to showcase services and attract clients',
    logo: '',
    startDate: 'August 7, 2019',
    projectLength: '4 weeks',
    engineersNeeded: '3',
    url: 'https://www.fiestasphotobooth.com/',
  },
  {
    image: LoveYoursSite,
    mobileImage: LoveYoursSiteMobile,
    title: 'Love Yours',
    subtitle: 'Ecommerce Website',
    description:
      'Completed website redesign and updates to highlight and sell products',
    logo: '',
    startDate: 'November 18, 2019',
    projectLength: '1 week',
    engineersNeeded: '2',
    url: 'https://loveyoursjewelry.com/',
  },
  {
    image: YeuxSite,
    mobileImage: YeuxSiteMobile,
    title: 'Yeux',
    subtitle: 'Software Website',
    description:
      'Fully designed and developed this site to showcase our work and attract clients',
    logo: '',
    startDate: 'December 13, 2019',
    projectLength: '3 weeks',
    engineersNeeded: '2',
    url: 'http://yeux.tech/',
  },
];

const MenuItem = ({ pastWork, newWidth, pastWorkWidth }) => (
  <div
    style={{
      border: 'solid 1px',
      width: pastWorkWidth,
      margin: 0,
      marginRight: '5vw',
      marginLeft: '5vw',
      padding: 0,
    }}
  >
    <div style={{ marginLeft: '1vw' }}>
      <H2 className="no-margin" style={{ marginBottom: '1vh' }}>
        {pastWork.title}
      </H2>
      <h4 className="no-margin" style={{ marginBottom: '1vh' }}>
        {pastWork.startDate}
      </h4>
      <h6 className="no-margin" style={{ marginBottom: '1vh' }}>
        Project length: {pastWork.projectLength}
      </h6>
    </div>
    <div className="zoom">
      <Img
        src={newWidth < 700 ? pastWork.mobileImage : pastWork.image}
        alt="Website image"
        style={{
          maxWidth: pastWorkWidth,
          width: 'auto',
          height: 'auto',
          marginBottom: '1vh',
        }}
      />
    </div>
    <div style={{ marginLeft: '1vw' }}>
      <h4 className="no-margin" style={{ marginBottom: '1vh' }}>
        {pastWork.subtitle}
      </h4>
      <div
        style={{
          width: '50vw',
          wordWrap: 'break-word',
          // overflow: 'auto',
          wordBreak: 'break-all',
        }}
      >
        <i className="no-margin">{pastWork.description}</i>
      </div>
      <br />
      <a href={pastWork.url} target="_blank" className="no-margin">
        Visit site
      </a>
    </div>
  </div>
);

MenuItem.propTypes = {
  pastWorkWidth: PropTypes.number,
  pastWork: PropTypes.object,
  // selected: PropTypes.string,
  newWidth: PropTypes.number,
};

export const Menu = (list, selected, width, pastWorkWidth) =>
  list.map(el => {
    const { title } = el;
    return (
      <MenuItem
        pastWork={el}
        key={title}
        selected={selected}
        newWidth={width}
        pastWorkWidth={pastWorkWidth}
      />
    );
  });

// const Arrow = ({ text, className }) => <div className={className}>{text}</div>;
// const Arrow = ({ text }) => (
//   <div style={{ fontWeight: 'bold', fontSize: 30 }}>{text}</div>
// );

// const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
// const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = PASTWORKS[0].title;

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 5vh;
`;

class PastWork extends React.Component {
  state = { selected };

  translateCounter = 1;

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const {
      id,
      // height,
      width,
      // maxHeight,
      // maxWidth,
      // cardWidth,
      pastWorkWidth,
    } = this.props;
    // console.log({ pastWorkWidth });
    // console.log("width * 0.5 =", width * 0.5);
    const {selected} = this.state;
    const menuItems = Menu(
      PASTWORKS,
      selected,
      width,
      pastWorkWidth,
    );
    const menu = menuItems;

    return (
      <SectionWrapper id={id}>
        <div style={{ textAlign: 'center' }}>
          <H2>Our Past Work</H2>
        </div>
        <ScrollMenu
          data={menu}
          hideSingleArrow
          selected={selected}
          onSelect={this.onSelect}
          scrollToSelected
          alignCenter
          dragging={false}
          clickWhenDrag={false}
          wheel={false}
        />
      </SectionWrapper>
    );
  }
}

/* <CenteredSection>
  <H2>Our Past work</H2>
  <iframe
    width={width - 200}
    height="300"
    src="https://www.fiestasphotobooth.com"
  />
</CenteredSection> */

PastWork.propTypes = {
  id: PropTypes.string.isRequired,
  // height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  // maxHeight: PropTypes.number.isRequired,
  // maxWidth: PropTypes.number.isRequired,
  // cardWidth: PropTypes.number,
  pastWorkWidth: PropTypes.number,
};

export default PastWork;
