/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
// import Home from 'containers/HomePage/components/Home';
// import Welcome from 'containers/HomePage/components/Welcome';
// import Strategy from 'containers/HomePage/components/Strategy';
// import Services from 'containers/HomePage/components/Services';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const NoMatch = () => (
  <div>
    {/* <img src={PageNotFound} style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} /> */}
    <center>
      <h1>404 Error: Page Not Found</h1>
      <h1>:o</h1>
      <h2>Oops, this page doesn&#39;t exist!</h2>
      <h3>
        Maybe we&#39;ll make it one day, but for now try{' '}
        <Link to="/">returning to our Home Page</Link>.
      </h3>
    </center>
  </div>
);

const AppWrapper = styled.div`
  max-width: 100vw;
  margin: 0 0;
  display: flex;
  min-height: 100%;
  padding: 0 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s" defaultTitle="Yeux">
        <meta
          name="description"
          content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
        />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
