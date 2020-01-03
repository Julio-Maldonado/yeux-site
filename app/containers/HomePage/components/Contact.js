import React, { useReducer } from 'react';

import Modal from 'react-responsive-modal';
import Loader from 'react-loader-spinner';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import ContactDesign from './images/contact.png';
import CenteredSection from './CenteredSection';
import YeuxLogo from './images/Yeux_50px_v2.png';

const sendEmail = async ({ name, emailAddress, subject, message }) => {
  console.log({ name });
  console.log({ emailAddress });
  console.log({ subject });
  console.log({ message });
  try {
    const resp = await fetch(
      'https://blooming-beyond-72124.herokuapp.com/api/send_email',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({ name, emailAddress, subject, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return resp.json();
  } catch (e) {
    console.error(e);
    return { success: false };
  }
};

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 1vh;
`;

const Contact = ({ id, height, maxHeight, maxWidth }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      emailAddress: '',
      subject: 'General Question',
      message: '',
      modalFlag: false,
      loading: false,
      modalText: '',
    },
  );

  const handleChange = evt => {
    const { name } = evt.target;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setUserInput({ loading: true });
    sendEmail(userInput).then(({ success }) => {
      setUserInput({ loading: false });
      openModal();
      if (success) {
        setUserInput({ modalText: 'Email successfully sent!' });
      } else {
        setUserInput({
          modalText: 'Email was not sent out...try again later.',
        });
      }
    });
  };

  const openModal = () => {
    setUserInput({ modalFlag: true });
  };

  const closeModal = () => {
    setUserInput({ modalFlag: false });
  };

  return (
    <SectionWrapper id={id}>
      {/* <Helmet>
        <title>Yeux - Contact</title>
        <meta
          name="description"
          content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
        />
      </Helmet> */}
      <CenteredSection height={height}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            padding: 0,
          }}
        >
          <H2 className="no-margin">We can&#39;t wait to meet</H2>
          <Img
            src={YeuxLogo}
            alt="Yeux"
            style={{
              maxHeight,
              maxWidth: maxWidth * 0.5,
              width: 'auto',
              height: '20px',
              margin: 0,
              marginLeft: 4,
              padding: 0,
            }}
          />
          <H2 className="no-margin">.</H2>
        </div>
        <H3>Reach out to us and we&#39;ll respond promptly.</H3>
        <Img
          className="no-margin"
          src={ContactDesign}
          alt="Story_Design_Yeux_v1"
          style={{
            maxHeight,
            maxWidth: maxWidth * 0.5,
            width: 'auto',
            height: 'auto',
            margin: 0,
            padding: 0,
          }}
        />
        <form style={{ marginBottom: '1vh' }} onSubmit={e => onFormSubmit(e)}>
          <ul className="form-style-1">
            <li>
              <input
                type="text"
                name="firstName"
                className="field-divided"
                placeholder="First Name"
                value={userInput.firstName}
                onChange={handleChange}
                required
              />{' '}
              <input
                type="text"
                name="lastName"
                className="field-divided"
                placeholder="Last Name"
                value={userInput.lastName}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <input
                type="email"
                name="emailAddress"
                className="field-long"
                placeholder="Your Email Address"
                value={userInput.emailAddress}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <select
                name="subject"
                className="field-select"
                defaultValue="General Question"
                onChange={handleChange}
              >
                <option value="General Question">General Question</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </li>
            <li>
              <textarea
                name="message"
                id="message"
                className="field-long field-textarea"
                placeholder="Your Message"
                value={userInput.message}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
        <Modal open={userInput.modalFlag} onClose={closeModal} center>
          <br />
          <br />
          <center>
            <h2>{userInput.modalText}</h2>
          </center>
        </Modal>
        {userInput.loading ? (
          <div>
            <div
              style={{
                position: 'fixed',
                left: '0vw',
                top: '0vh',
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: '#FFFFFF',
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: 'fixed',
                translate: "translate('-50%', '-50%')",
                left: '45vw',
                top: '15vh',
                zIndex: 9999,
              }}
            >
              <Loader
                type="ThreeDots"
                color="black"
                height="10vh"
                width="10vw"
              />
            </div>
          </div>
        ) : null}
      </CenteredSection>
    </SectionWrapper>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
};

export default Contact;
