import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // if using react-router
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentWrapper>
        <Outlet /> {/* or your routes or main content */}
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

export default App;
